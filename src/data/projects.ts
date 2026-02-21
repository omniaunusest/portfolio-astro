import type { Project } from "../types/types";

export const softwareDev:Project[] = [
  {
    projectTitle: "NetoIdontCare",
    desc: [
      "Built an infrastructure for a telemedicine startup focusing on remote patient monitoring",
      "Created Azure environment from scratch using Terraform as a IaC tool",
      "Developed a comprehensive CI/CD pipeline for mobile app deployment",
    ],
    tech: ["Terraform", "Azure", "Docker", "Nginx", "GitLab CI/CD"]
  },
  {
    projectTitle: "DataMesh",
    desc: [
      "Built an infrastructure for a data analytics platform",
      "Configured VMs and deployed a multi-node Kubernetes cluster on AWS",
      "Designed to handle a high volume of ~5 million data points per day",
      "Integrated Grafana and Prometheus for monitoring",
    ],
    tech: ["Docker", "Kubernetes", "AWS", "Node.js", "RabbitMQ"]
  },
  {
    projectTitle: "CloudEase",
    desc: [
      "Migrated a cloud-based CRM system from one provider to another",
      "Built the new GCP infrastructure using Terraform as a IaC tool",
      "Deployed logging and monitoring tools in GKE cluster",
    ],
    tech: ["GCP", "Terraform", "Kubernetes", "GitLab"]
  }
];