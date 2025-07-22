import { Resend } from "resend";
import { render } from "@react-email/render";
import DemoRequestEmail from "@/emails/demo-request";
import { DemoFormData } from "./types";
import { siteConfig } from "./constants";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function sendDemoRequestEmail(data: DemoFormData): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }

  const to = process.env.DEMO_REQUEST_EMAIL_TO || siteConfig.links.email;
  const from = process.env.DEMO_REQUEST_EMAIL_FROM || siteConfig.links.email;

  const html = render(<DemoRequestEmail {...data} />);

  await resend.emails.send({
    from,
    to,
    subject: "New Demo Request - ZENPULSAR",
    html,
  });
}
