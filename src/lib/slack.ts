import { WebClient } from '@slack/web-api';
import { DemoFormData, SlackMessage } from "./types";

// Initialize Slack Web API client
const slack = new WebClient(process.env.SLACK_BOT_TOKEN);

export async function sendToSlack(message: SlackMessage): Promise<void> {
  const channelId = process.env.SLACK_CHANNEL_ID;
  
  if (!process.env.SLACK_BOT_TOKEN) {
    throw new Error("SLACK_BOT_TOKEN environment variable is not set");
  }

  if (!channelId) {
    throw new Error("SLACK_CHANNEL_ID environment variable is not set");
  }

  try {
    const result = await slack.chat.postMessage({
      channel: channelId,
      text: message.text,
      blocks: message.blocks,
    });

    if (!result.ok) {
      throw new Error(`Failed to send to Slack: ${result.error}`);
    }
  } catch (error) {
    console.error('Slack API error:', error);
    throw new Error(`Failed to send to Slack: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export function createDemoRequestMessage(data: DemoFormData): SlackMessage {
  const fullName = `${data.firstName} ${data.lastName}`;
  
  return {
    text: `📋 New Demo Request from ${fullName}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "📋 New Demo Request - ZENPULSAR",
        },
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Name:* ${fullName}`,
          },
          {
            type: "mrkdwn",
            text: `*Email:* ${data.email}`,
          },
          {
            type: "mrkdwn",
            text: `*Company:* ${data.company}`,
          },
          {
            type: "mrkdwn",
            text: `*Message:* ${data.message || "No message provided"}`,
          },
        ],
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Submitted on ${new Date().toLocaleString()}`,
          },
        ],
      },
    ],
  };
}

