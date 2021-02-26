## Microservices base on monorepo

* Two basic services with a common logger lib, as separate deployments.

### CI-CD
* Pipeline on [**GitHub Actions**](https://github.com/features/actions)
* Registry docker image on [**GitHub Container Registry**](https://docs.github.com/en/packages/guides/about-github-container-registry)
* Deploy with k8s (basic helm chart) on [**EKS (Amazon k8s cluster)**](https://aws.amazon.com/eks/)
