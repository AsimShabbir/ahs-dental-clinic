"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { faqs } from "@/lib/site";

export function FaqList() {
  const [open, setOpen] = useState(0);

  return (
    <div className="container faq-list">
      {faqs.map((faq, i) => (
        <div key={faq.q} className={`faq-item${open === i ? " is-open" : ""}`}>
          <button
            type="button"
            onClick={() => setOpen((current) => (current === i ? -1 : i))}
          >
            {faq.q} <Icon name="chevron" />
          </button>
          <div className="faq-body">{faq.a}</div>
        </div>
      ))}
      <p style={{ marginTop: "1.5rem" }}>
        <Link className="btn btn-terracotta" href="/contact">
          Ask something else <Icon name="arrow" />
        </Link>
      </p>
    </div>
  );
}
