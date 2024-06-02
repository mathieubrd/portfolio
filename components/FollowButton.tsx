import { Chip, Link, LinkProps } from "@nextui-org/react"
import { ReactNode } from "react"

type FollowButtonProps = {
	icon: ReactNode
	link: string
	text: string
} & LinkProps

export const FollowButton: React.FC<FollowButtonProps> = ({
	icon,
	link,
	text,
	...props
}) => (
	<Link href={link} isExternal {...props}>
		<Chip avatar={icon} className="px-2 py-4" color="primary">
			{text}
		</Chip>
	</Link>
)
