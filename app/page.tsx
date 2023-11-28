import { BusinessCard } from "@/components/BusinessCard"
import { ContactForm } from "@/components/ContactForm"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { HeroBanner } from "@/components/HeroBanner"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-lg mb-10 flex flex-col gap-y-10">
        <HeroBanner />

        <BusinessCard />

        <ExperienceTimeline />
      </div>

      <ContactForm />
    </div>
  )
}
