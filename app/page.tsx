import { ContactForm } from "@/components/ContactForm"
import { HeroBanner } from "@/components/HeroBanner"

export default function Home() {
  return (
    <>
      <HeroBanner className="mb-10" />

      <h2 className="text-4xl font-bold tracking-tight font-mono text-center mb-10">
        Contact Me
      </h2>

      <ContactForm className="max-w-lg" />
    </>
  )
}
