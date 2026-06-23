pipeline {
    agent any

    environment {
        IMAGE_NAME = "arunjadhav16/templatz"
        TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git(
                    branch: 'main',
                    url: 'https://github.com/Arunjadhav0101/Al-Letter.git'
                )
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$TAG .'
            }
        }

        stage('Login DockerHub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub',
                        usernameVariable: 'DOCKER_USER',
                        passwordVariable: 'DOCKER_PASS'
                    )
                ]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                    docker push $IMAGE_NAME:$TAG
                    docker tag $IMAGE_NAME:$TAG $IMAGE_NAME:latest
                    docker push $IMAGE_NAME:latest
                '''
            }
        }

        stage('Deploy to EKS') {
            steps {
                // Assuming 'kubeconfig' is configured in Jenkins Credentials
                withKubeConfig([credentialsId: 'kubeconfig', serverUrl: '']) {
                    sh '''
                        kubectl apply -f k8s/namespace.yaml
                        # Apply all manifests in k8s directory
                        kubectl apply -f k8s/

                        # Force deployment to update to the newly pushed image tag
                        kubectl set image deployment/templatz templatz=$IMAGE_NAME:$TAG -n templatz-prod
                        
                        # Wait for rollout to complete
                        kubectl rollout status deployment/templatz -n templatz-prod
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}
