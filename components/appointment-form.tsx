"use client";

import { FormEvent, useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { dentists, services } from "@/lib/site";

type Status = { ok: boolean; message: string } | null;

type AppointmentFormProps = {
  variant?: "home" | "booking";
};

export function AppointmentForm({ variant = "booking" }: AppointmentFormProps) {
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);
  const prefix = variant === "home" ? "h-" : "";

  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>(`input[type="date"][name="date"]`);
    if (input) input.min = new Date().toISOString().split("T")[0];
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setStatus(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch("/api/appointment", {
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
            <label htmlFor={`${prefix}name`}>Full name</label>
            <input id={`${prefix}name`} name="name" required />
          </div>
          <div className="field">
            <label htmlFor={`${prefix}phone`}>Phone</label>
            <input id={`${prefix}phone`} name="phone" required />
          </div>
          <div className="field">
            <label htmlFor={`${prefix}email`}>Email</label>
            <input id={`${prefix}email`} name="email" type="email" required />
          </div>
          {variant === "booking" ? (
            <div className="field">
              <label htmlFor="dentist">Preferred dentist</label>
              <select id="dentist" name="dentist">
                <option>No preference</option>
                {dentists.map((doc) => (
                  <option key={doc.name}>{doc.name}</option>
                ))}
              </select>
            </div>
          ) : null}
          <div className="field">
            <label htmlFor={`${prefix}service`}>Care needed</label>
            <select id={`${prefix}service`} name="service" required>
              <option value="">Select…</option>
              {services.map((svc) => (
                <option key={svc.slug}>{svc.title}</option>
              ))}
              <option>Emergency / pain</option>
              {variant === "booking" ? <option>Second opinion</option> : null}
            </select>
          </div>
          <div className="field">
            <label htmlFor={`${prefix}date`}>Preferred date</label>
            <input id={`${prefix}date`} name="date" type="date" required />
          </div>
          <div className="field">
            <label htmlFor={`${prefix}time`}>Preferred time</label>
            <select id={`${prefix}time`} name="time">
              <option>Morning</option>
              <option>Afternoon</option>
              {variant === "home" ? <option>Evening (Thu)</option> : <option>First available</option>}
            </select>
          </div>
          <div className="field full">
            <label htmlFor={`${prefix}notes`}>
              {variant === "home" ? "Anything we should know?" : "Notes (anxiety, insurance, pregnancy, etc.)"}
            </label>
            <textarea id={`${prefix}notes`} name="notes" />
          </div>
        </div>
        <button className="btn btn-terracotta" type="submit" style={{ marginTop: "1rem" }} disabled={pending}>
          {variant === "home" ? "Send request" : "Request appointment"} <Icon name="arrow" />
        </button>
        <p className="form-note">
          {variant === "home"
            ? "This demo stores requests locally as JSON. Wire SMTP in production."
            : "Demo mode saves a JSON file in forms/submissions. Connect mail or an API for live clinics."}
        </p>
      </form>
    </div>
  );
}
