import type { Metadata } from "next";
import { AppointmentForm } from "@/components/appointment-form";
import { Icon } from "@/components/icons";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a visit",
  description: "Request an appointment at AHS Dental Clinic in Lahore.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / Booking
          </>
        }
        kicker="Appointments"
        title="Tell us when, and what you need."
        lede="This is a request, not a locked calendar. The desk will confirm by email or phone within one business day."
      />
      <section>
        <div className="container split">
          <AppointmentForm variant="booking" />
          <div>
            <div className="info-stack">
              <div className="info-tile">
                <Icon name="clock" />
                <div>
                  <strong>Hours</strong>
                  <p style={{ margin: 0 }}>{site.hours}</p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="phone" />
                <div>
                  <strong>Prefer to call?</strong>
                  <p style={{ margin: 0 }}>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                </div>
              </div>
              <div className="info-tile">
                <Icon name="pin" />
                <div>
                  <strong>Studio</strong>
                  <p style={{ margin: 0 }}>
                    {site.address}
                    <br />
                    {site.city}
                  </p>
                </div>
              </div>
            </div>
            <table className="hours-table" style={{ marginTop: "1.6rem" }}>
              <tbody>
                <tr>
                  <td>Monday – Thursday</td>
                  <td>8:00 – 6:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>8:00 – 4:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>9:00 – 2:00</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
