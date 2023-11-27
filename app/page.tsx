import { BusinessCard } from "@/components/BusinessCard"
import { ContactForm } from "@/components/ContactForm"
import { GitHubIcon } from "@/components/GitHubIcon"
import { HeroBanner } from "@/components/HeroBanner"
import { MapPinIcon } from "@heroicons/react/20/solid"
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from "@nextui-org/react"

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10">
      <HeroBanner />

      <BusinessCard />

      <ContactForm />
    </div>
  )
}
