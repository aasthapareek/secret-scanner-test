# Secret Scanner Test Repository

This repository contains intentionally planted secrets for testing secret scanning tools.

**WARNING: All secrets in this repository are FAKE and generated for testing purposes only.**

## Contents

- `.env.production` - Environment variables with various API keys
- `config/database.yml` - Database configuration with connection strings
- `config/credentials.json` - JSON format credentials
- `src/config.py` - Python configuration file
- `src/webhooks.js` - Webhook URLs and integration tokens
- `docker-compose.yml` - Docker configuration with secrets
- `.github/workflows/deploy.yml` - CI/CD workflow with embedded secrets
- `k8s/secrets.yaml` - Kubernetes secrets
- `keys/private_key.pem` - RSA private key
- `terraform/main.tf` - Terraform configuration with secrets

## Secret Types Included

- AWS Access Keys (AKIA...)
- Stripe API Keys (sk_live_...)
- GitHub Tokens (ghp_..., github_pat_...)
- GitLab Tokens (glpat-...)
- OpenAI API Keys (sk-...T3BlbkFJ...)
- Anthropic API Keys (sk-ant-api03-...)
- Slack Tokens (xoxb-..., xoxp-...)
- Discord Tokens and Webhooks
- Twilio Credentials (AC...)
- SendGrid API Keys (SG....)
- Database Connection Strings
- JWT Secrets
- Private Keys (RSA, EC)
- And many more...

## Purpose

This repository is designed to test:
1. Detection accuracy of secret scanning tools
2. Pattern matching for various secret formats
3. False positive filtering
4. Edge case handling
