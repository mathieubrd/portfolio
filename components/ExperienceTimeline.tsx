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

        <div className="mb-4 text-sm leading-none">{jobName}</div>

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
        <ul className="text-gray-400 space-y-4">
          <li>
            <b>Airbus</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>

          <li>
            <b>Alstom</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>
        </ul>
      </Experience>

      <Experience
        companyName="Sopra Steria"
        icon={sopraSteriaLogo}
        jobName="Cybersecurity Engineer"
        date="2018 - 2020"
      >
        <ul className="text-gray-400 space-y-4">
          <li>
            <b>Airbus</b>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </li>
        </ul>
      </Experience>
    </ol>
  )
}
