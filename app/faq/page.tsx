import type { Metadata } from "next";
import { FaqList } from "@/components/faq-list";
import { CrumbHome, PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about visits, fees, insurance, and anxiety care at AHS Dental Clinic.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / FAQ
          </>
        }
        kicker="Questions"
        title="The things people actually ask."
        lede="If your question is not here, the desk would rather hear it than guess."
      />
      <section>
        <FaqList />
      </section>
    </>
  );
}
