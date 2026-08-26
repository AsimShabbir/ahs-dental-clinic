"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { nav, pageNavIds, services, site } from "@/lib/site";

function isActive(pathname: string, id: string) {
  if (id === "home") return pathname === "/";
  if (id === "services") return pathname.startsWith("/services");
  if (id === "dentists") return pathname === "/dentists";
  if (id === "pages") return pageNavIds.some((page) => pathname === `/${page}`);
  if (id === "blog") return pathname.startsWith("/blog");
  if (id === "contact") return pathname === "/contact";
  return false;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setPanelOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("panel-open", panelOpen);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("panel-open");
      document.removeEventListener("keydown", onKey);
    };
  }, [panelOpen]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`} data-header>
        <div className="nav-bar">
          <div className="container nav-inner">
            <Link className="logo" href="/" aria-label={`${site.name} home`}>
              <img src="/img/logo.png" alt={site.name} />
            </Link>
            <nav className="nav" aria-label="Primary">
              {nav.map((item) => (
                <div key={item.id} className={`nav-item${item.children ? " has-sub" : ""}`}>
                  <Link className={isActive(pathname, item.id) ? "is-active" : ""} href={item.href}>
                    {item.label}
                    {item.children ? <Icon name="chevron" className="icon icon-caret" /> : null}
                  </Link>
                  {item.children ? (
                    <div className="subnav">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </nav>
            <div className="nav-actions">
              <Link className="btn btn-accent" href="/booking">
                Book Appointment
              </Link>
              <button
                className="menu-toggle"
                type="button"
                aria-label="Open menu"
                aria-expanded={panelOpen}
                aria-controls="extra-panel"
                onClick={() => setPanelOpen(true)}
              >
                <Icon name="menu" className="icon icon-menu" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`extra-backdrop${panelOpen ? " is-open" : ""}`}
        hidden={!panelOpen}
        onClick={() => setPanelOpen(false)}
      />
      <aside
        className={`extra-panel${panelOpen ? " is-open" : ""}`}
        id="extra-panel"
        aria-hidden={!panelOpen}
      >
        <div className="extra-panel-head">
          <Link className="logo" href="/" aria-label={`${site.name} home`}>
            <img src="/img/logo.png" alt={site.name} />
          </Link>
          <button className="extra-panel-close" type="button" aria-label="Close menu" onClick={() => setPanelOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <div className="extra-panel-body">
          <nav className="extra-panel-nav" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.id} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <section className="extra-block">
            <h3>Our Services</h3>
            <ul className="extra-services">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link href={svc.href}>
                    <Icon name="check" />
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="extra-block">
            <h3>Contact Us</h3>
            <ul className="extra-contact">
              <li>
                <Icon name="clock" /> Monday - Friday 08.00 - 18.00
              </li>
              <li>
                <Icon name="pin" /> {site.address}, {site.city}
              </li>
              <li>
                <Icon name="mail" /> <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="phone" /> <a href={site.phoneHref}>{site.phone}</a>
              </li>
            </ul>
          </section>
          <section className="extra-block">
            <h3>About Us</h3>
            <p>AHS Dental Clinic provides unhurried exams, considered cosmetic work, and family care in Lahore.</p>
            <Link className="extra-more" href="/about">
              Learn more <Icon name="arrow" />
            </Link>
          </section>
        </div>
        <button
          className="to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => {
            setPanelOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Icon name="chevron-up" />
        </button>
      </aside>
    </>
  );
}
