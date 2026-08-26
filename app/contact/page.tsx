import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AHS Dental Clinic on Lucky Street in Lahore.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / Contact
          </>
        }
        kicker="Front desk"
        title="Write, call, or walk in from Lucky Street."
        lede="The phone is answered by people who work here. Messages left after hours are returned the next morning we are open."
      />
      <section>
        <div className="container split">
          <div>
            <div className="info-stack">
              <div className="info-tile">
                <Icon name="pin" />
                <div>
                  <strong>Address</strong>
                  <p style={{ margin: 0 }}>
                    {site.address}
                    <br />
                    {site.city}
                  </p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="phone" />
                <div>
                  <strong>Phone</strong>
                  <p style={{ margin: 0 }}>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="mail" />
                <div>
                  <strong>Email</strong>
                  <p style={{ margin: 0 }}>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="clock" />
                <div>
                  <strong>Hours</strong>
                  <p style={{ margin: 0 }}>{site.hours}</p>
                </div>
              </div>
            </div>
            <div className="map-wrap" style={{ marginTop: "1.2rem" }}>
              <iframe title="Map of Lahore clinic area" src={site.mapEmbed} loading="lazy" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
