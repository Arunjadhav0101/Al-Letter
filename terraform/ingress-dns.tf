resource "kubernetes_namespace" "ingress_nginx" {
  metadata {
    name = "ingress-nginx"
  }
  depends_on = [module.eks]
}

resource "helm_release" "ingress_nginx" {
  name       = "ingress-nginx"
  repository = "https://kubernetes.github.io/ingress-nginx"
  chart      = "ingress-nginx"
  namespace  = kubernetes_namespace.ingress_nginx.metadata[0].name
  version    = "4.9.1"

  set {
    name  = "controller.service.type"
    value = "LoadBalancer"
  }
  depends_on = [kubernetes_namespace.ingress_nginx]
}

resource "helm_release" "cert_manager" {
  name             = "cert-manager"
  repository       = "https://charts.jetstack.io"
  chart            = "cert-manager"
  namespace        = "cert-manager"
  create_namespace = true
  version          = "v1.14.3"

  set {
    name  = "installCRDs"
    value = "true"
  }
  depends_on = [module.eks]
}

resource "helm_release" "external_dns" {
  name       = "external-dns"
  repository = "https://kubernetes-sigs.github.io/external-dns/"
  chart      = "external-dns"
  namespace  = "kube-system"
  version    = "1.14.3"

  set {
    name  = "provider"
    value = "aws"
  }

  set {
    name  = "aws.region"
    value = var.aws_region
  }

  set {
    name  = "policy"
    value = "sync" # Use 'sync' to create and delete records
  }

  set {
    name  = "txtOwnerId"
    value = var.cluster_name
  }

  # If you want to restrict external-dns to a specific zone ID:
  # set {
  #   name  = "domainFilters[0]"
  #   value = var.domain_name
  # }
  depends_on = [module.eks]
}

# Note: External DNS requires IAM permissions to update Route53.
# We attach it to the EKS node group role for simplicity here.
resource "aws_iam_role_policy_attachment" "external_dns_policy" {
  role       = module.eks.eks_managed_node_groups["initial"].iam_role_name
  policy_arn = "arn:aws:iam::aws:policy/AmazonRoute53FullAccess" # In prod, use a restricted policy!
}
