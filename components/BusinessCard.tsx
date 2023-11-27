import { MapPinIcon } from "@heroicons/react/24/solid"
import {
  Card,
  CardHeader,
  Avatar,
  CardBody,
  CardFooter,
  Chip,
  Link,
} from "@nextui-org/react"
import { GitHubIcon } from "./GitHubIcon"
import clsx from "clsx"

export const BusinessCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <Card className={clsx(className, "p-1")}>
      <CardHeader>
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
            <span>Fougères, France</span>
          </div>
        </div>
      </CardHeader>

      <CardBody>
        <p className="text-default-500 text-justify">
          Experienced AWS Solutions Architect and software engineer at
          Capgemini, specializing in innovative serverless architectures.
        </p>
      </CardBody>

      <CardFooter>
        <Link href="https://github.com/mathieubrd" isExternal>
          <Chip avatar={<GitHubIcon />} color="primary">
            @mathieubrd
          </Chip>
        </Link>
      </CardFooter>
    </Card>
  )
}
