import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description: "The story of AHS Dental Clinic, a Lahore clinic built for unhurried, specialist-led care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / About
          </>
        }
        kicker="Our story"
        title="A studio for teeth, not a corridor of chairs."
        lede="AHS began when Dr. Maya Ellison left hospital dentistry to build a practice that could still hear a second question. The rooms are quieter. The visits are longer. The plans are written down."
      />
      <section>
        <div className="container about-grid">
          <div className="about-photos">
            <img src="/img/consult.jpg" alt="Quiet consultation room" />
            <img src="/img/hero.jpg" alt="Treatment suite" />
            <img src="/img/clinic.jpg" alt="Clinic lounge" />
          </div>
          <div className="prose">
            <h2>What we believe</h2>
            <p>
              Dentistry gets a reputation for rushing because many clinics are built around throughput. We staff and
              schedule the other way: fewer chairs, more time, specialists who stay in the conversation instead of handing
              you to a coordinator with a clipboard.
            </p>
            <p>
              You will still find digital scanners, same-day crowns when they are appropriate, and a sterilization bay you
              can actually see. Technology is here to shorten discomfort, not to upsell a tray of aligners you do not need.
            </p>
            <ul className="checklist">
              <li>
                <Icon name="check" /> Independent practice — no private-equity quota on production
              </li>
              <li>
                <Icon name="check" /> Fees in writing before any elective work
              </li>
              <li>
                <Icon name="check" /> Referrals when another clinician is kinder to your case
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Along the way</p>
              <h2>A short timeline.</h2>
            </div>
          </div>
          <div className="process">
            <div className="process-item">
              <h3>2014</h3>
              <p>Maya completes a hospital residency and keeps a running list of what she would change about “efficient” clinics.</p>
            </div>
            <div className="process-item">
              <h3>2019</h3>
              <p>Harbor Lane studio opens with two chairs, one hygienist, and Saturday mornings for families.</p>
            </div>
            <div className="process-item">
              <h3>2022</h3>
              <p>Jonah and Priya join. Orthodontics and a true kids’ studio mean we stop sending those patients across town.</p>
            </div>
            <div className="process-item">
              <h3>Today</h3>
              <p>Four clinicians, a sterilization lead, and a front desk that still answers the phone like a person.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band">
        <div className="container why-grid">
          <div>
            <p className="eyebrow light">The rooms</p>
            <h2>Designed to lower shoulders before the exam starts.</h2>
            <p>Natural light in the lounge, wool instead of vinyl where we can, and operatories that do not face each other. It is not spa theater. It is acoustics and privacy.</p>
          </div>
          <img src="/img/clinic.jpg" alt="AHS lounge" style={{ borderRadius: 24, height: 320, width: "100%", objectFit: "cover" }} />
        </div>
      </section>
    </>
  );
}
