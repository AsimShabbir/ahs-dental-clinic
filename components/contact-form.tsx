"use client";

import { FormEvent, useState } from "react";
import { Icon } from "@/components/icons";

type Status = { ok: boolean; message: string } | null;

export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setStatus(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = (await res.json()) as Status;
    setStatus(json);
    setPending(false);
    if (json?.ok) form.reset();
  }

  return (
    <div className="form-card">
      {status ? <div className={`alert${status.ok ? "" : " error"}`}>{status.message}</div> : null}
      <form onSubmit={onSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="field full">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" placeholder="Records, insurance, feedback…" />
          </div>
          <div className="field full">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
        </div>
        <button className="btn btn-terracotta" type="submit" style={{ marginTop: "1rem" }} disabled={pending}>
          Send message <Icon name="arrow" />
        </button>
      </form>
    </div>
  );
}
