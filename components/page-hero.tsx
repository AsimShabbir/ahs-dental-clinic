import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  crumbs?: ReactNode;
  kicker?: string;
  title: string;
  lede?: string;
};

export function PageHero({ crumbs, kicker, title, lede }: PageHeroProps) {
  return (
    <section className="hero inner-hero">
      <div className="hero-media" role="img" aria-hidden="true" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        {crumbs ? <p className="crumbs">{crumbs}</p> : null}
        {kicker ? <p className="hero-kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        {lede ? <p className="hero-lede">{lede}</p> : null}
        <Link className="btn btn-ghost" href="/booking">
          Book Appointment
        </Link>
      </div>
    </section>
  );
}

export function CrumbHome() {
  return <Link href="/">Home</Link>;
}
