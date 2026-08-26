import Link from "next/link";
import { Icon } from "@/components/icons";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <p className="eyebrow light">Ready when you are</p>
            <h2>Reserve a quieter hour in the chair.</h2>
          </div>
          <Link className="btn btn-accent" href="/booking">
            Book Appointment
            <Icon name="arrow" />
          </Link>
        </div>
      </div>
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link className="logo light" href="/" aria-label={`${site.name} home`}>
              <img src="/img/logo.png" alt={site.name} />
            </Link>
            <p>A Lahore clinic for unhurried exams, considered cosmetic work, and dentistry that still feels human.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                IG
              </a>
              <a href="#" aria-label="Facebook">
                FB
              </a>
              <a href="#" aria-label="Google">
                G
              </a>
            </div>
          </div>
          <div>
            <h3>Visit</h3>
            <p>
              {site.address}
              <br />
              {site.city}
            </p>
            <p>{site.hours}</p>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div>
            <h3>Care</h3>
            <ul>
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link href={svc.href}>{svc.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Clinic</h3>
            <ul>
              <li>
                <Link href="/about">Our story</Link>
              </li>
              <li>
                <Link href="/dentists">Dentists</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/testimonials">Reviews</Link>
              </li>
              <li>
                <Link href="/blog">Journal</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <div className="container footer-base-inner">
          <p>&copy; {new Date().getFullYear()} AHS Dental Clinic. All rights reserved.</p>
          <p></p>
        </div>
      </div>
    </footer>
  );
}
