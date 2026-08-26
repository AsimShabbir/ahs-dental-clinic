import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { getPost, posts } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getPost(slug);
  if (!article) return { title: "Article" };
  return { title: article.title, description: article.body[0] };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getPost(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / <Link href="/blog">Journal</Link> / Article
          </>
        }
        kicker={`${article.date} · ${article.author}`}
        title={article.title}
      />
      <section>
        <div className="container prose">
          <img className="cover-img" src={article.image} alt="" />
          {article.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            <Link className="btn btn-outline" href="/blog">
              Back to journal
            </Link>{" "}
            <Link className="btn btn-terracotta" href="/booking">
              Book a visit
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
