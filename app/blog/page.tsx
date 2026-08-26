import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { posts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Journal",
  description: "Practical notes on dental visits, whitening, and children’s first appointments.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / Journal
          </>
        }
        kicker="Journal"
        title="Notes from the operatory, not ads in disguise."
        lede="Short essays from the team. We would rather change a habit than sell a tray."
      />
      <section>
        <div className="container blog-grid">
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
                <Link className="link-more" href={post.href}>
                  Read <Icon name="arrow" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
