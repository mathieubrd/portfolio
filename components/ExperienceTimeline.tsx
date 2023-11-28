import capgeminiLogo from "@/public/capgemini.png"
import sopraSteriaLogo from "@/public/sopra-steria.png"
import Image, { StaticImageData } from "next/image"

type ExperienceProps = {
  icon: StaticImageData
  companyName: string
  jobName: string
  date: string
} & React.HTMLAttributes<HTMLDivElement>

const Experience: React.FC<ExperienceProps> = ({
  icon,
  companyName,
  jobName,
  date,
  children,
}) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 bg-white">
        <Image alt="Company Logo" src={icon} width={20} height={20} />
      </span>

      <div className="ml-2">
        <div className="flex items-center mb-1">
          <span className="text-lg font-semibold text-white">
            {companyName}
          </span>

          <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300 ms-3">
            {date}
          </span>
        </div>

        <div className="mb-2 text-sm leading-none">AWS Architect</div>

        {children}
      </div>
    </li>
  )
}

export const ExperienceTimeline = () => {
  return (
    <ol className="relative border-s border-gray-700">
      <Experience
        companyName="Capgemini"
        icon={capgeminiLogo}
        jobName="AWS Architect"
        date="2020 - now"
      >
        <p className="mb-4 text-base font-normal text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
      </Experience>

      <Experience
        companyName="Sopra Steria"
        icon={sopraSteriaLogo}
        jobName="Cybersecurity Engineer"
        date="2018 - 2020"
      >
        <p className="mb-4 text-base font-normal text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts,
          kanban board, calendar, and pre-order E-commerce & Marketing pages.
        </p>
      </Experience>
    </ol>
  )
}
