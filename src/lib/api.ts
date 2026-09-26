import type { ContactFormData } from '@/types'

/**
 * Submission layer for the contact form. Currently simulates a network call so the UI can be
 * fully built and tested end-to-end. Swap the implementation for a real call to a Power Automate
 * HTTP trigger, an Azure Function, or the Microsoft Graph API once a backend is available —
 * the ContactForm component and its validation are already decoupled from this detail.
 */
export async function submitContactForm(data: ContactFormData): Promise<{ success: true }> {
  await new Promise((resolve) => setTimeout(resolve, 900))
  console.info('Contact form submission (mock):', data)
  return { success: true }
}
