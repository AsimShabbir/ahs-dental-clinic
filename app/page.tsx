import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentForm } from "@/components/appointment-form";
import { GalleryMosaic } from "@/components/gallery-mosaic";
import { Icon, Stars } from "@/components/icons";
import { dentists, posts, services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "AHS Dental Clinic | Family dental care in Lahore",
  description:
    "AHS Dental Clinic is a Lahore clinic for unhurried exams, cosmetic dentistry, orthodontics, pediatric care, and restorative work.",
};

const chips = [
  "Exams & hygiene",
  "Invisalign-style aligners",
  "Porcelain veneers",
  "Implants",
  "Kids studio",
  "Night guards",
  "Whitening",
  "Crowns & bridges",
];

const homeGallery = [
  ["/img/gallery-1.jpg", "Treatment suite"],
  ["/img/gallery-2.jpg", "Patient smile"],
  ["/img/gallery-3.jpg", "Clinic interior"],
  ["/img/gallery-5.jpg", "Consultation"],
  ["/img/gallery-6.jpg", "Front desk"],
  ["/img/cta.jpg", "Happy patient"],
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" role="img" aria-label="Dentist examining a smiling young patient" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="hero-kicker">Family Dental Care</p>
          <h1>Elevating Smiles with Expert Care and a Gentle Touch</h1>
          <Link className="btn btn-ghost" href="/booking">
            Book Appointment
          </Link>
          <p className="hero-rating">
            <span>
              Google Rating <strong>5.0</strong>
            </span>
            <span className="stars gold" aria-label="5 stars">
              <Stars />
            </span>
            <span>Based on 23k Reviews</span>
          </p>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...chips, ...chips].map((chip, i) => (
            <span key={`${chip}-${i}`}>· {chip}</span>
          ))}
        </div>
      </div>

      <section>
        <div className="container about-grid">
          <div className="about-photos">
            <img src="/img/about.jpg" alt="Dentist speaking with a patient" />
            <img src="/img/clinic.jpg" alt="Reception and waiting lounge" />
            <img src="/img/consult.jpg" alt="Consultation in a quiet office" />
          </div>
          <div>
            <p className="eyebrow">The clinic</p>
            <h2>A slower practice in a city that rarely slows down.</h2>
            <p className="lede">
              We opened AHS to give Lahore a room that feels closer to a studio than a corridor of operatories.
              Appointments run long enough to answer the second question.
            </p>
            <ul className="checklist">
              <li>
                <Icon name="check" /> Digital scans instead of messy impressions whenever we can
              </li>
              <li>
                <Icon name="check" /> Written treatment plans with clear fees before work begins
              </li>
              <li>
                <Icon name="check" /> Nitrous and paced visits for dental anxiety
              </li>
              <li>
                <Icon name="check" /> Sterile protocols you can actually see
              </li>
            </ul>
            <Link className="btn btn-outline" href="/about">
              Our story <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Care</p>
              <h2>Six ways we look after a smile.</h2>
            </div>
            <Link className="btn btn-outline" href="/services">
              All services
            </Link>
          </div>
          <div className="service-bento">
            {services.map((svc, i) => (
              <Link key={svc.slug} className={`service-card${i === 0 ? " wide" : ""}`} href={svc.href}>
                <img src={svc.image} alt={svc.title} />
                <div className="service-card-body">
                  <div className="service-index">0{i + 1}</div>
                  <h3>{svc.title}</h3>
                  <p>{svc.excerpt}</p>
                  <span className="link-more">
                    Learn more <Icon name="arrow" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container why-grid">
          <div>
            <p className="eyebrow light">Why AHS</p>
            <h2>Precision without the cold clinic feeling.</h2>
            <div className="feature-list" style={{ marginTop: "1.6rem" }}>
              <div className="feature">
                <div className="feature-icon">
                  <Icon name="shield" />
                </div>
                <div>
                  <h3>Prevention first</h3>
                  <p>We would rather polish and coach than rebuild. Recall visits are tailored to your gums, not a calendar default.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Icon name="sparkle" />
                </div>
                <div>
                  <h3>Aesthetics with restraint</h3>
                  <p>Cosmetic work is designed against your face, bite, and how you actually live — not a shade tab from a catalog.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <Icon name="child" />
                </div>
                <div>
                  <h3>Whole-family hours</h3>
                  <p>Pediatric mornings, after-work hygiene, and Saturday consults so care does not compete with school pickup.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="stat-grid">
            <div className="stat">
              <strong>12k+</strong> visits completed with the current team
            </div>
            <div className="stat">
              <strong>96%</strong> patients who return within 18 months
            </div>
            <div className="stat">
              <strong>40 min</strong> typical new-patient exam, never rushed
            </div>
            <div className="stat">
              <strong>0</strong> surprise invoices — fees in writing first
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">People</p>
              <h2>Dentists who stay in the room.</h2>
            </div>
            <Link className="btn btn-outline" href="/dentists">
              Meet the team
            </Link>
          </div>
          <div className="team-grid">
            {dentists.map((doc) => (
              <article key={doc.name} className="team-card">
                <img src={doc.image} alt={doc.name} />
                <div className="team-card-body">
                  <h3>{doc.name}</h3>
                  <p className="role">{doc.role}</p>
                  <p>{doc.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Visit rhythm</p>
              <h2>From first call to walking out lighter.</h2>
            </div>
          </div>
          <div className="process">
            <div className="process-item">
              <h3>Tell us what hurts — or what you hope for</h3>
              <p>Book online or call. Share anxiety, a cracked tooth, or a smile you have been putting off.</p>
            </div>
            <div className="process-item">
              <h3>Unhurried exam &amp; images</h3>
              <p>We look, listen, and scan. You see the same pictures we do, in language that is not coded.</p>
            </div>
            <div className="process-item">
              <h3>A plan with real numbers</h3>
              <p>Options, sequence, and fees on paper. Nothing starts until you choose.</p>
            </div>
            <div className="process-item">
              <h3>Care, then a recall that fits</h3>
              <p>Treatment when needed. Hygiene on a cadence that matches your gums, not our software default.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band" style={{ padding: "4.5rem 0" }}>
        <div className="container quote-grid">
          <blockquote className="quote featured">
            <div>
              <div className="stars">
                <Stars />
              </div>
              <h3>“They treated my fear as part of the diagnosis, not an inconvenience.”</h3>
            </div>
            <div className="quote-who">
              <img src="/img/patient-1.jpg" alt="Elena M." />
              <div>
                <strong>Elena M.</strong>
                <span>Invisalign · 14 months</span>
              </div>
            </div>
          </blockquote>
          <div style={{ display: "grid", gap: "1.1rem" }}>
            <blockquote className="quote">
              <div className="stars">
                <Stars />
              </div>
              <p>Our six-year-old asked to come back. That has never happened at a dental office.</p>
              <div className="quote-who">
                <img src="/img/patient-2.jpg" alt="Marcus T." />
                <div>
                  <strong>Marcus T.</strong>
                  <span>Parent · pediatric care</span>
                </div>
              </div>
            </blockquote>
            <blockquote className="quote">
              <div className="stars">
                <Stars />
              </div>
              <p>Crown in one visit, bill exactly as quoted. Quiet rooms. Excellent coffee. I am not easy to impress.</p>
              <div className="quote-who">
                <img src="/img/patient-3.jpg" alt="Sofia R." />
                <div>
                  <strong>Sofia R.</strong>
                  <span>Restorative patient</span>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
        <div className="container" style={{ marginTop: "1.4rem" }}>
          <Link className="btn btn-cream" href="/testimonials">
            Read more stories
          </Link>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Rooms</p>
              <h2>The studio, not a waiting maze.</h2>
            </div>
            <Link className="btn btn-outline" href="/gallery">
              Full gallery
            </Link>
          </div>
          <GalleryMosaic shots={homeGallery} />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Journal</p>
              <h2>Notes from the operatory.</h2>
            </div>
            <Link className="btn btn-outline" href="/blog">
              All articles
            </Link>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.slug} className="blog-card">
                <Link href={post.href}>
                  <img src={post.image} alt="" />
                </Link>
                <div className="blog-card-body">
                  <p className="meta">
                    {post.date} · {post.author}
                  </p>
                  <h3>
                    <Link href={post.href}>{post.title}</Link>
                  </h3>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container split">
          <div>
            <p className="eyebrow">Appointments</p>
            <h2>Request a time. We will confirm it.</h2>
            <p className="lede">
              New patients: please allow 40 minutes. Emergency pain: call the desk and we will hold a same-day slot when we
              can.
            </p>
            <div className="info-stack">
              <div className="info-tile">
                <Icon name="phone" />
                <div>
                  <strong>Front desk</strong>
                  <p style={{ margin: 0 }}>{site.phone}</p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="clock" />
                <div>
                  <strong>Hours</strong>
                  <p style={{ margin: 0 }}>{site.hours}</p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="pin" />
                <div>
                  <strong>Studio</strong>
                  <p style={{ margin: 0 }}>
                    {site.address}, {site.city}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AppointmentForm variant="home" />
        </div>
      </section>
    </>
  );
}
