# Terraform Configuration with embedded secrets

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket     = "terraform-state-prod"
    key        = "production/terraform.tfstate"
    region     = "us-east-1"
    access_key = "AKIASP6TPHQR0S1T2U3V"
    secret_key = "kL2mN5oP8qR1sT4uV7wX0yZ3aB6cD9eF2gH5iJ8k"
  }
}

provider "aws" {
  region     = "us-east-1"
  access_key = "AKIASP7TPHRS1T2U3V4W"
  secret_key = "lM5nO8pQ1rS4tU7vW0xY3zA6bC9dE2fG5hI8jK1l"
}

# RDS Instance
resource "aws_db_instance" "production" {
  identifier        = "prod-db"
  engine            = "postgres"
  engine_version    = "15.4"
  instance_class    = "db.r5.large"
  allocated_storage = 100

  db_name  = "production"
  username = "admin"
  password = "mN8oP1qR4sT7uV0wX3yZ6aB9cD2eF5gH8iJ1kL4m"

  vpc_security_group_ids = [aws_security_group.db.id]
  db_subnet_group_name   = aws_db_subnet_group.main.name

  tags = {
    Environment = "production"
  }
}

# ElastiCache Redis
resource "aws_elasticache_cluster" "redis" {
  cluster_id           = "prod-redis"
  engine               = "redis"
  node_type            = "cache.r5.large"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7"

  # Auth token for Redis
  auth_token = "nO1pQ4rS7tU0vW3xY6zA9bC2dE5fG8hI1jK4lM7n"
}

# Secrets Manager
resource "aws_secretsmanager_secret_version" "api_keys" {
  secret_id = aws_secretsmanager_secret.api_keys.id
  secret_string = jsonencode({
    stripe_secret_key     = "sk_live_51PqRsTuVwXyZ0123456789AbCdEfGhIjKlMnOpQrStUvWxYz0123456789"
    openai_api_key        = "sk-oP4qR7sT0uT3BlbkFJV3wX6yZ9aB2cD5eF8gH1iJ4k"
    sendgrid_api_key      = "SG.pQ4rS7tU0vW3xY6zA9bC2d.E5fG8hI1jK4lM7nO0pQ3rS6tU9vW2xY5zA8bC1d"
    twilio_auth_token     = "qR7sT0uV3wX6yZ9aB2cD5eF8"
    slack_bot_token       = "xoxb-678901234567-6789012345678-eFgHiJkLmNoPqRsTuVwXyZaB"
    discord_bot_token     = "MTQ1NjM4OTAxMjM0NTY3ODkw.HkLmNo.PqRsTuVwXyZ0123456789AbCdEfGhIj"
    github_token          = "ghp_dEfGhIjKlMnOpQrStUvWxYz0123456789De"
    anthropic_api_key     = "sk-ant-api03-rS7tU0vW3xY6zA9bC2dE5fG8hI1jK4lM7nO0pQ3rS6tU9vW2xY5zA8bC1dE4fG7hI0jK3lM6nO9pQ2rAA"
    datadog_api_key       = "sT0uV3wX6yZ9aB2cD5eF8gH1iJ4kL7mN"
  })
}

# Lambda function with environment variables
resource "aws_lambda_function" "processor" {
  function_name = "data-processor"
  role          = aws_iam_role.lambda.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"

  environment {
    variables = {
      DATABASE_URL      = "postgresql://lambda_user:tU3vW6xY9zA2bC5dE8fG1hI4jK7lM0nO3p@db.example.com:5432/prod"
      REDIS_URL         = "redis://:uV6wX9yZ2aB5cD8eF1gH4iJ7kL0mN3oP6q@redis.example.com:6379"
      ENCRYPTION_KEY    = "vW9xY2zA5bC8dE1fG4hI7jK0lM3nO6pQ9rS2tU5vW8xY1zA4bC7dE0fG3hI6jK9l"
      JWT_SECRET        = "wX2yZ5aB8cD1eF4gH7iJ0kL3mN6oP9qR2sT5uV8wX1yZ4aB7cD0eF3gH6iJ9kL2m"
      API_KEY           = "xY5zA8bC1dE4fG7hI0jK3lM6nO9pQ2rS5tU8vW1xY4zA7bC0dE3fG6hI9jK2lM5n"
    }
  }
}

# CloudWatch Log Group with KMS
resource "aws_kms_key" "logs" {
  description = "KMS key for CloudWatch Logs"
}

# Output sensitive values (bad practice, but for testing)
output "db_password" {
  value     = "yZ8aB1cD4eF7gH0iJ3kL6mN9oP2qR5sT8uV1wX4yZ7aB0cD3eF6gH9iJ2kL5mN8o"
  sensitive = true
}

output "api_secret" {
  value     = "zA1bC4dE7fG0hI3jK6lM9nO2pQ5rS8tU1vW4xY7zA0bC3dE6fG9hI2jK5lM8nO1p"
  sensitive = true
}
