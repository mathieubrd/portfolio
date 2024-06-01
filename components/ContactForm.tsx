"use client"

import { submitContactForm } from "@/app/actions"
import { EnvelopeIcon, RocketLaunchIcon } from "@heroicons/react/24/solid"
import { Button, Input, Textarea } from "@nextui-org/react"
import clsx from "clsx"
import { useFormState, useFormStatus } from "react-dom"

type ContactFormProps = {} & React.HTMLAttributes<HTMLDivElement>

export const ContactForm: React.FC<ContactFormProps> = ({
	className,
	...props
}) => {
	const [state, formAction] = useFormState(submitContactForm, null)

	return (
		<div className={clsx(className, "w-full")} {...props}>
			<form action={formAction} className="mx-auto">
				<div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
					<Input
						type="text"
						name="firstName"
						autoComplete="given-name"
						placeholder="Walter"
						label="First name"
						isRequired
						isDisabled={state?.success}
						errorMessage={state?.errors?.firstName?._errors}
						size="sm"
					/>

					<Input
						type="text"
						name="lastName"
						autoComplete="family-name"
						placeholder="Sobchack"
						label="Last name"
						isRequired
						isDisabled={state?.success}
						errorMessage={state?.errors?.lastName?._errors}
						size="sm"
					/>

					<div className="sm:col-span-2">
						<Input
							type="text"
							name="company"
							autoComplete="organization"
							label="Company"
							placeholder="Hollywood Star Lanes"
							isDisabled={state?.success}
							errorMessage={state?.errors?.company?._errors}
							size="sm"
						/>
					</div>

					<div className="sm:col-span-2">
						<Input
							type="email"
							name="email"
							autoComplete="email"
							placeholder="walter.sobchak@overtheline.com"
							label="email"
							isRequired
							isDisabled={state?.success}
							errorMessage={state?.errors?.email?._errors}
							size="sm"
						/>
					</div>

					<div className="sm:col-span-2">
						<Textarea
							label="Your message"
							name="message"
							placeholder="This is not 'nam. This is bowling. There are rules."
							isRequired
							isDisabled={state?.success}
							errorMessage={state?.errors?.message?._errors}
						/>
					</div>
				</div>

				<div className="mt-4 flex justify-end">
					{state?.success ? (
						<Button
							color="success"
							variant="bordered"
							disableRipple
							disableAnimation
							endContent={<RocketLaunchIcon className="w-6" />}
							size="sm"
						>
							Thanks for your message!
						</Button>
					) : (
						<SubmitButton />
					)}
				</div>
			</form>
		</div>
	)
}

const SubmitButton: React.FC = () => {
	const { pending } = useFormStatus()

	return pending ? (
		<Button type="submit" color="primary" size="md" isDisabled isLoading>
			Sending
		</Button>
	) : (
		<Button
			type="submit"
			color="primary"
			size="md"
			startContent={<EnvelopeIcon className="w-6" />}
		>
			Send
		</Button>
	)
}
