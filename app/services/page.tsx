import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "General, cosmetic, orthodontic, pediatric, preventive, and restorative dentistry in Lahore.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / Services
          </>
        }
        kicker="Care menu"
        title="Choose the work your mouth actually needs."
        lede="Six disciplines under one roof, so you are not bounced between offices for a cleaning, a veneer consult, and a child’s first visit."
      />
      <section>
        <div className="container service-bento">
          {services.map((svc, i) => (
            <Link key={svc.slug} className={`service-card${i < 2 ? " wide" : ""}`} href={svc.href}>
              <img src={svc.image} alt={svc.title} />
              <div className="service-card-body">
                <div className="service-index">0{i + 1}</div>
                <h3>{svc.title}</h3>
                <p>{svc.excerpt}</p>
                <span className="link-more">
                  View details <Icon name="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
