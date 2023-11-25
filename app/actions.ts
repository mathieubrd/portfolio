"use server"

import { Resend } from "resend"
import { ZodFormattedError, z } from "zod"

const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "You must provide your first name",
  }),
  lastName: z.string().trim().min(1, {
    message: "You must provide your last name",
  }),
  email: z.string().email({
    message: "You must provide an email address",
  }),
  message: z.string().trim().min(10, {
    message: "You must provide a message",
  }),
  company: z.string().optional(),
})

type ContactForm = z.infer<typeof contactFormSchema>

type SubmitContactFormResult = {
  success: boolean
  errors?: ZodFormattedError<ContactForm>
}

export const submitContactForm = async (
  prevState: any,
  formData: FormData,
): Promise<SubmitContactFormResult> => {
  const parsed = contactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
    company: formData.get("company"),
  })

  if (!parsed.success) {
    const formatted = parsed.error.format()

    return {
      success: false,
      errors: formatted,
    }
  }

  const {
    data: { email, firstName, lastName, message, company },
  } = parsed

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to:
      process.env.VERCEL_ENV === "production"
        ? "mathieu.brochard@outlook.com"
        : "delivered@resend.dev",
    subject: "Message from mathieubrochard.com",
    html: `
      <p>You have a message from:</p>
      
      <ul>
        <li>${firstName} ${lastName}</li>
        <li>${email}</li>
        <li>${company || "No company given"}</li>
      </ul>

      <p>${message}</p>
    `,
  })

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
  }
}
