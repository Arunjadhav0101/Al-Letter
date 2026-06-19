# Complete DevOps Infrastructure Setup Guide 🚀

This guide provides step-by-step instructions on how to set up the complete DevOps infrastructure (AWS EKS, Terraform, Kubernetes, Jenkins, Prometheus, and Grafana) for the `Al-Letter` application.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
1. **[AWS CLI](https://aws.amazon.com/cli/)**: Configured with `aws configure` (Ensure the user has AdministratorAccess or necessary permissions to create EKS clusters, VPCs, and IAM Roles).
2. **[Terraform](https://developer.hashicorp.com/terraform/downloads)**: Version 1.0 or higher.
3. **[kubectl](https://kubernetes.io/docs/tasks/tools/)**: To interact with your Kubernetes cluster.

---

## Step 1: Provision Infrastructure with Terraform

The `terraform/` directory contains all the code to provision a VPC, an EKS cluster, and install the necessary Helm charts (Prometheus, Grafana, NGINX Ingress, Cert-Manager, and ExternalDNS).

1. Open a terminal and navigate to the Terraform directory:
   ```bash
   cd terraform/
   ```

2. Initialize Terraform (downloads providers and modules):
   ```bash
   terraform init
   ```

3. Review the infrastructure plan (optional but recommended):
   ```bash
   terraform plan
   ```

4. Apply the configuration to create the infrastructure:
   ```bash
   terraform apply -auto-approve
   ```
   *Note: Creating an EKS cluster usually takes about 15-20 minutes.*

---

## Step 2: Configure `kubectl` Access

Once Terraform successfully finishes, you need to configure your local machine to talk to the new Kubernetes cluster.

1. Run the following AWS CLI command to update your local kubeconfig:
   ```bash
   aws eks update-kubeconfig --region us-east-1 --name al-letter-cluster
   ```

2. Verify you can connect to the cluster:
   ```bash
   kubectl get nodes
   ```
   You should see the worker nodes listed in a `Ready` state.

---

## Step 3: Configure Jenkins for Deployment

To allow your Jenkins pipeline (defined in the `Jenkinsfile`) to deploy to the EKS cluster, you need to provide Jenkins with the `kubeconfig` you just generated.

1. Ensure your Jenkins server has the **Kubernetes CLI Plugin** installed. (Manage Jenkins -> Manage Plugins -> Available -> Search for "Kubernetes CLI").
2. Go to **Manage Jenkins** -> **Manage Credentials** -> **System** -> **Global credentials**.
3. Click **Add Credentials**.
4. Set the **Kind** to **Secret file**.
5. Under **File**, click `Choose File` and upload your local `~/.kube/config` file (which was updated in Step 2).
   * Note: On Windows, this is usually at `C:\Users\<YourUser>\.kube\config`.
   * Note: On Mac/Linux, this is at `~/.kube/config`.
6. Set the **ID** exactly to `kubeconfig`.
7. Click **Create**.

Your Jenkins pipeline will now use these credentials to securely run `kubectl apply` and `kubectl set image`.

---

## Step 4: Accessing the Application and Monitoring

Once your Jenkins pipeline has run successfully at least once, your application and monitoring tools will be accessible.

### 1. The Application
The application is automatically exposed using an AWS Load Balancer and mapped to your Route 53 domain via ExternalDNS.
* **URL**: [https://arun.run.place](https://arun.run.place)
* *Note: It may take up to 5-10 minutes for the Let's Encrypt SSL certificate to be provisioned and DNS to propagate the first time.*

### 2. Grafana Dashboard
To access the Grafana dashboard to monitor your cluster and application:
1. Port-forward the Grafana service to your local machine:
   ```bash
   kubectl port-forward svc/kube-prometheus-stack-grafana 8080:80 -n monitoring
   ```
2. Open your browser and go to [http://localhost:8080](http://localhost:8080)
3. **Login Details**:
   * Username: `admin`
   * Password: `admin` (You can change this default password in `terraform/monitoring.tf`).

### 3. Prometheus
To access the raw Prometheus metrics:
1. Port-forward the Prometheus service:
   ```bash
   kubectl port-forward svc/kube-prometheus-stack-prometheus 9090:9090 -n monitoring
   ```
2. Open your browser and go to [http://localhost:9090](http://localhost:9090)

---

## Cleanup (Optional)
If you ever want to destroy all the resources created by this guide to stop incurring AWS charges:
```bash
cd terraform/
terraform destroy -auto-approve
```
