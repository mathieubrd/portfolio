import { ContactForm } from "@/components/ContactForm"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { HeroBanner } from "@/components/HeroBanner"
import { Me } from "@/components/Me"
import { Skills } from "@/components/Skills"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10 items-center">
      <HeroBanner />

      <Me className="sm:max-w-lg" />

      <Skills />

      <div className="sm:max-w-lg">
        <ExperienceTimeline className="pl-3" />

        <ContactForm />
      </div>
    </div>
  )
}
