import type { Metadata } from "next";
import { GalleryMosaic } from "@/components/gallery-mosaic";
import { CrumbHome, PageHero } from "@/components/page-hero";
import { galleryShots } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photographs of the AHS Dental Clinic studio in Lahore.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumbs={
          <>
            <CrumbHome /> / Gallery
          </>
        }
        kicker="Rooms"
        title="Look around before you sit down."
        lede="Click any photograph to open it larger. Photos are from open libraries and stand in for a real clinic shoot."
      />
      <section>
        <div className="container">
          <GalleryMosaic shots={galleryShots} />
        </div>
      </section>
    </>
  );
}
