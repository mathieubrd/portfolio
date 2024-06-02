"use client"

import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { Button, ButtonProps } from "@nextui-org/react"
import clsx from "clsx"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const ContactMeFloatingButton: React.FC<ButtonProps> = ({
	className,
	...props
}) => {
	const [shouldShow, setShouldShow] = useState(true)

	useEffect(() => {
		window.addEventListener("scroll", computeShouldShow)

		return () => {
			window.removeEventListener("scroll", computeShouldShow)
		}
	}, [])

	const onClick = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: "smooth",
		})
	}

	const computeShouldShow = () => {
		setShouldShow(
			window.scrollY + window.innerHeight <= document.body.scrollHeight - 100,
		)
	}

	return (
		<motion.div
			animate={{ y: [0, 10, 0] }}
			transition={{ y: { duration: 2, repeat: Infinity } }}
			className={clsx(
				shouldShow ? "opacity-100" : "opacity-0",
				"transition-opacity",
				className,
			)}
		>
			<Button
				onClick={onClick}
				size="lg"
				radius="full"
				startContent={<EnvelopeIcon className="w-6" />}
				endContent={<ChevronDoubleDownIcon className="w-6" />}
				className="bg-gradient-to-tr from-pink-500 to-yellow-500"
				{...props}
			>
				Contact Me
			</Button>
		</motion.div>
	)
}
