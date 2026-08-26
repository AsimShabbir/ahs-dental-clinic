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

export async function POST(request: Request) {
  const body = (await request.json()) as Payload;
  const name = field(body, "name");
  const email = field(body, "email");
  const subject = field(body, "subject");
  const message = field(body, "message");

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, message: "Please complete name, email, and message." }, { status: 400 });
  }
  if (!validEmail(email)) {
    return NextResponse.json({ ok: false, message: "Please enter a valid email address." }, { status: 400 });
  }

  const dir = join(process.cwd(), "forms", "submissions");
  await mkdir(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15);
  const nonce = Math.random().toString(16).slice(2, 8);
  await writeFile(
    join(dir, `contact-${stamp}-${nonce}.json`),
    JSON.stringify(
      {
        type: "contact",
        created_at: new Date().toISOString(),
        fields: { name, email, subject, message },
      },
      null,
      2,
    ),
  );

  return NextResponse.json({ ok: true, message: "Message received. A coordinator will reply shortly." });
}
