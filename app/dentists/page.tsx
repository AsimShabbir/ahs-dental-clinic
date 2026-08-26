import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { dentists } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dentists",
  description: "Meet the AHS Dental Clinic clinicians in Lahore: general, orthodontic, pediatric, and restorative specialists.",
};

export default function DentistsPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / Dentists
          </>
        }
        kicker="The team"
        title="Clinicians who stay for the whole conversation."
        lede="You will not be handed off mid-sentence. Each dentist owns their cases and introduces a specialist only when it genuinely helps."
      />
      <section>
        <div className="container" style={{ display: "grid", gap: "1.4rem" }}>
          {dentists.map((doc, i) => (
            <article
              key={doc.name}
              className="split"
              style={{
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: 24,
                overflow: "hidden",
                padding: 0,
                alignItems: "stretch",
              }}
            >
              <img
                src={doc.image}
                alt={doc.name}
                style={{ height: "100%", minHeight: 280, objectFit: "cover", order: i % 2 ? 2 : undefined }}
              />
              <div style={{ padding: "1.8rem" }}>
                <p className="eyebrow">{doc.role}</p>
                <h2>{doc.name}</h2>
                <p>{doc.bio}</p>
                <p>
                  <strong>Focus:</strong> {doc.focus}
                  <br />
                  <strong>Education:</strong> {doc.education}
                </p>
                <Link className="btn btn-terracotta" href="/booking">
                  Book with this dentist <Icon name="arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
