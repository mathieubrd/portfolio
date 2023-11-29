import { MapPinIcon } from "@heroicons/react/24/solid"
import {
  Card,
  CardHeader,
  Avatar,
  CardBody,
  CardFooter,
  Chip,
  Link,
  Divider,
} from "@nextui-org/react"
import { GitHubIcon } from "./GitHubIcon"

export const Me: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div className="flex mb-4">
        <Avatar
          showFallback
          src="https://avatars.githubusercontent.com/u/10001635?v=4"
          className="mr-4"
          isBordered
        />

        <div className="flex flex-col">
          <p className="font-semibold">Mathieu Brochard</p>

          <div className="text-small text-default-500 flex items-center">
            <MapPinIcon className="w-4 mr-1" />
            <span>Toulouse, France</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-default-500 text-justify">
          Hello 👋 I'm Mathieu, AWS Architect and Software Engineer,
          specializing in serverless technologies. Passionate about designing
          scalable and efficient cloud solutions, I combine my knowledge of AWS
          with a DevOps approach to drive innovation in serverless computing.
        </p>
      </div>

      <Link href="https://github.com/mathieubrd" isExternal>
        <Chip avatar={<GitHubIcon />} color="primary">
          Follow me on GitHub!
        </Chip>
      </Link>
    </div>
  )
}
