import { triggerEvent } from "@/utils/gtm"

export const phoneNumberClickEvent = (position: string) => {
  triggerEvent('phone_number_click', {
    position
  })
}
export const quoteFormSubmit = () => {
  triggerEvent('quote_form_submit', {
    form_name: 'quote_form'
  })
}