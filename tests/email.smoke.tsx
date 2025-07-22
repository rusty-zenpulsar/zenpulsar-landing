import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import DemoRequestEmail from "../src/emails/demo-request";

async function main() {
  const html = renderToStaticMarkup(
    <DemoRequestEmail
      firstName="Test"
      lastName="User"
      email="test@example.com"
      company="ACME"
      message="Hello"
    />
  );

  if (!html.includes("Test User")) {
    console.error("Email template render failed");
    process.exit(1);
  }
  console.log("Email smoke test passed");
}

main();
