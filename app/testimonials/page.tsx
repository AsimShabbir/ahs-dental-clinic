import type { Metadata } from "next";
import { Stars } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { reviews } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Patient stories from AHS Dental Clinic in Lahore.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / Reviews
          </>
        }
        kicker="Patients"
        title="What people say when the numb wears off."
        lede="A handful of composite stories in the tone of real visits. Replace these with your verified reviews before going live."
      />
      <section>
        <div className="container blog-grid">
          {reviews.map((review) => (
            <blockquote key={review.name} className="quote">
              <div className="stars">
                <Stars />
              </div>
              <p>{review.quote}</p>
              <div className="quote-who">
                <img src={review.image} alt={review.name} />
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.meta}</span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
