pipeline {
    agent any

    environment {
        IMAGE_NAME = "arunjadhav16/templatz"
        TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Arunjadhav0101/templatz.git'
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
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $IMAGE_NAME:$TAG'
                sh 'docker tag $IMAGE_NAME:$TAG $IMAGE_NAME:latest'
                sh 'docker push $IMAGE_NAME:latest'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop templatz || true
                docker rm templatz || true

                docker run -d \
                --name templatz \
                -p 80:3000 \
                $IMAGE_NAME:latest
                '''
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
