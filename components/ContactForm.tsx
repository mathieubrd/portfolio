"use client"

import { submitContactForm } from "@/app/actions"
import { EnvelopeIcon, HeartIcon } from "@heroicons/react/24/solid"
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
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
          <Input
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="Walter"
            label="First name"
            isRequired
            isDisabled={state?.success}
            errorMessage={state?.errors?.firstName?._errors}
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
            />
          </div>

          <div className="sm:col-span-2">
            <Input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="walter.sobchak@overtheline.com"
              label="email"
              size="lg"
              isRequired
              isDisabled={state?.success}
              errorMessage={state?.errors?.email?._errors}
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

        <div className="mt-6 flex justify-end">
          {state?.success ? (
            <Button
              color="success"
              variant="bordered"
              disableRipple
              disableAnimation
              endContent={<HeartIcon className="w-6" />}
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
    <Button type="submit" color="primary" size="lg" isDisabled isLoading>
      Sending
    </Button>
  ) : (
    <Button
      type="submit"
      color="primary"
      size="lg"
      startContent={<EnvelopeIcon className="w-6" />}
    >
      Send
    </Button>
  )
}
