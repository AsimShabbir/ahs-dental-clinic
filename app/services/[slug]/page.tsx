import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { getService, services, site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.excerpt };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / <Link href="/services">Services</Link> / {service.title}
          </>
        }
        kicker={service.title}
        title={service.title}
        lede={service.intro}
      />
      <section>
        <div className="container split">
          <div className="prose">
            <img className="cover-img" src={service.image} alt={service.title} />
            <p>{service.body}</p>
            <h2>Included in this care</h2>
            <ul>
              {service.also.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>Not sure this is the right starting point? Book a consult. We will say so if another service fits better.</p>
            <Link className="btn btn-terracotta" href="/booking">
              Request this care <Icon name="arrow" />
            </Link>
          </div>
          <aside>
            <div className="form-card">
              <h3>Other services</h3>
              <ul>
                {services.map((svc) => (
                  <li key={svc.slug} style={{ marginBottom: ".55rem" }}>
                    <Link className="link-more" href={svc.href}>
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="form-card" style={{ marginTop: "1rem" }}>
              <h3>Talk to the desk</h3>
              <p>
                {site.phone}
                <br />
                {site.email}
              </p>
              <Link className="btn btn-outline" href="/contact">
                Contact
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
