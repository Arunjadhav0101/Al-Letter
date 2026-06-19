variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "cluster_name" {
  description = "Name of the EKS cluster"
  type        = string
  default     = "al-letter-cluster"
}

variable "domain_name" {
  description = "Domain name for the application"
  type        = string
  default     = "arun.run.place"
}

variable "route53_zone_id" {
  description = "Route53 Hosted Zone ID for ExternalDNS (if known, otherwise ExternalDNS will find it)"
  type        = string
  default     = ""
}
