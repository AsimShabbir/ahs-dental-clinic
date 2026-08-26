import { mkdir, writeFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

type Payload = Record<string, string>;

function field(body: Payload, key: string) {
  return String(body[key] ?? "").trim();
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function saveSubmission(type: string, fields: Payload) {
  const dir = join(process.cwd(), "forms", "submissions");
  await mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15);
  const nonce = Math.random().toString(16).slice(2, 8);
  const file = join(dir, `${type}-${stamp}-${nonce}.json`);
  await writeFile(
    file,
    JSON.stringify(
      {
        type,
        created_at: new Date().toISOString(),
        fields,
      },
      null,
      2,
    ),
  );
}

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const name = field(body, "name");
  const email = field(body, "email");
  const phone = field(body, "phone");
  const dentist = field(body, "dentist");
  const service = field(body, "service");
  const date = field(body, "date");
  const time = field(body, "time");
  const notes = field(body, "notes");

  if (!name || !email || !phone || !service || !date) {
    return NextResponse.json(
      { ok: false, message: "Please complete name, email, phone, service, and preferred date." },
      { status: 400 },
    );
  }
  if (!validEmail(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  await saveSubmission("appointment", { name, email, phone, dentist, service, date, time, notes });
  return NextResponse.json({
    ok: true,
    message: `Thank you, ${name}. We received your request and will confirm by email or phone within one business day.`,
  });
}
