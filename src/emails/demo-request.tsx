import * as React from "react";
import { DemoFormData } from "@/lib/types";

export default function DemoRequestEmail({ firstName, lastName, email, company, message }: DemoFormData) {
  return (
    <div>
      <h1>New Demo Request</h1>
      <p><strong>Name:</strong> {firstName} {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Company:</strong> {company}</p>
      {message && <p><strong>Message:</strong> {message}</p>}
    </div>
  );
}
