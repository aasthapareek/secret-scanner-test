/**
 * Webhook Configuration
 * Contains various webhook URLs and integration tokens
 */

// Slack Webhooks
const SLACK_WEBHOOKS = {
  alerts: 'https://hooks.slack.com/services/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x',
  deploys: 'https://hooks.slack.com/services/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y',
  errors: 'https://hooks.slack.com/services/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z',
  monitoring: 'https://hooks.slack.com/services/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a'
};

// Slack Workflow Webhooks
const SLACK_WORKFLOWS = {
  incident: 'https://hooks.slack.com/workflows/T1A2B3C4D/A5E6F7G8H/123456789012345678/lM3nO6pQ9rS2tU5vW8xY1z',
  onboarding: 'https://hooks.slack.com/workflows/T2A3B4C5D/A6E7F8G9H/234567890123456789/mN6oP9qR2sT5uV8wX1yZ4a'
};

// Discord Webhooks
const DISCORD_WEBHOOKS = {
  notifications: 'https://discord.com/api/webhooks/345678901234567890/nO9pQ2rS5tU8vW1xY4zA7bC0dE3fG6hI9jK2lM5nO8pQ1rS4tU7vW0xY3zA6bC9dE2f',
  alerts: 'https://discord.com/api/webhooks/456789012345678901/oP2qR5sT8uV1wX4yZ7aB0cD3eF6gH9iJ2kL5mN8oP1qR4sT7uV0wX3yZ6aB9cD2eF5g',
  logs: 'https://discord.com/api/webhooks/567890123456789012/pQ5rS8tU1vW4xY7zA0bC3dE6fG9hI2jK5lM8nO1pQ4rS7tU0vW3xY6zA9bC2dE5fG8h'
};

// Microsoft Teams Webhooks
const TEAMS_WEBHOOKS = {
  channel1: 'https://outlook.office.com/webhook/qR8sT1uV4wX7yZ0aB3cD6eF9gH2iJ5kL8mN1oP4qR7sT0uV3wX6yZ9aB2cD5eF8gH1iJ4kL7mN0o',
  channel2: 'https://outlook.office.com/webhook/rS1tU4vW7xY0zA3bC6dE9fG2hI5jK8lM1nO4pQ7rS0tU3vW6xY9zA2bC5dE8fG1hI4jK7lM0nO3p'
};

// Telegram Bot Tokens
const TELEGRAM_BOTS = {
  alerts: '2345678901:ABCdEfGhIjKlMnOpQrStUvWxYz1234567890',
  notifications: '3456789012:BCdEfGhIjKlMnOpQrStUvWxYz12345678901',
  monitoring: '4567890123:CdEfGhIjKlMnOpQrStUvWxYz123456789012'
};

// PagerDuty Integration Keys
const PAGERDUTY_KEYS = {
  critical: 'sT4uV7wX0yZ3aB6cD9eF2gH5',
  warning: 'tU7vW0xY3zA6bC9dE2fG5hI8j',
  info: 'uV0wX3yZ6aB9cD2eF5gH8iJ1k'
};

// Opsgenie API Keys
const OPSGENIE_KEYS = {
  alerts: 'vW3xY6zA9bC2dE5fG8hI1jK4lM7nO0pQ3rS6',
  heartbeat: 'wX6yZ9aB2cD5eF8gH1iJ4kL7mN0oP3qR6sT9'
};

// Datadog Webhooks
const DATADOG_CONFIG = {
  apiKey: 'xY9zA2bC5dE8fG1hI4jK7lM0nO3pQ6rS',
  appKey: 'yZ2aB5cD8eF1gH4iJ7kL0mN3oP6qR9sT2uV5wX8yZ1a',
  webhookUrl: 'https://app.datadoghq.com/intake/webhook/zAB5cD8eF1gH4iJ7kL0mN3oP6qR9sT2uV5wX'
};

// Sentry DSN Configuration
const SENTRY_CONFIG = {
  backend: 'https://aB5cD8eF1gH4iJ7k@o456789.ingest.sentry.io/4567890',
  frontend: 'https://bC8dE1fG4hI7jK0l@o567890.ingest.sentry.io/5678901',
  worker: 'https://cD1eF4gH7iJ0kL3m@o678901.ingest.sentry.io/6789012'
};

// New Relic Configuration
const NEWRELIC_CONFIG = {
  licenseKey: 'dE4fG7hI0jK3lM6nO9pQ2rS5tU8vW1xY4zA7bC0dE3fG',
  apiKey: 'NRAK-eF7gH0iJ3kL6mN9oP2qR5sT8uV1w',
  insightsKey: 'NRII-fG0hI3jK6lM9nO2pQ5rS8tU1vW4xY7z'
};

// Mixpanel Token
const MIXPANEL_TOKEN = 'gH3iJ6kL9mN2oP5qR8sT1uV4wX7yZ0aB3c';

// Amplitude API Key
const AMPLITUDE_KEY = 'hI6jK9lM2nO5pQ8rS1tU4vW7xY0zA3bC6dE';

// Segment Write Key
const SEGMENT_KEY = 'iJ9kL2mN5oP8qR1sT4uV7wX0yZ3aB6cD9eF2gH5i';

// LaunchDarkly SDK Key
const LAUNCHDARKLY_SDK_KEY = 'sdk-jK2lM5nO8pQ1rS4-tU7vW0xY3zA6bC9d';

// Intercom Access Token
const INTERCOM_TOKEN = 'dG9rOmtMMm1ONW9QOHFSM3NUNHVWN3dYMHlaMmFCNmNEOWVGMmdINWlKOA==';

// HubSpot API Key
const HUBSPOT_KEY = 'lM5nO8pQ1rS4tU7v-W0xY3zA6bC9dE2f-G5hI8jK1lM4nO7';

// Zendesk API Token
const ZENDESK_TOKEN = 'mN8oP1qR4sT7uV0wX3yZ6aB9cD2eF5gH8iJ1kL4mN7oP0q';

// Freshdesk API Key
const FRESHDESK_KEY = 'nO1pQ4rS7tU0vW3xY6zA9bC2dE5fG8hI1j';

// Export all configurations
module.exports = {
  SLACK_WEBHOOKS,
  SLACK_WORKFLOWS,
  DISCORD_WEBHOOKS,
  TEAMS_WEBHOOKS,
  TELEGRAM_BOTS,
  PAGERDUTY_KEYS,
  OPSGENIE_KEYS,
  DATADOG_CONFIG,
  SENTRY_CONFIG,
  NEWRELIC_CONFIG,
  MIXPANEL_TOKEN,
  AMPLITUDE_KEY,
  SEGMENT_KEY,
  LAUNCHDARKLY_SDK_KEY,
  INTERCOM_TOKEN,
  HUBSPOT_KEY,
  ZENDESK_TOKEN,
  FRESHDESK_KEY
};
