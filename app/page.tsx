import { ContactForm } from "@/components/ContactForm"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { HeroBanner } from "@/components/HeroBanner"
import { Me } from "@/components/Me"
import { Skills } from "@/components/Skills"
import { Divider } from "@nextui-org/react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-lg mb-10 flex flex-col gap-y-10">
        <HeroBanner />

        <Me />
      </div>

      <Skills className="mb-10" />

      <div className="max-w-lg">
        <ExperienceTimeline />

        <ContactForm />
      </div>
    </div>
  )
}
