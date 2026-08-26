import { triggerEvent } from "@/utils/gtm"

export const phoneNumberClickEvent = (position: string) => {
  triggerEvent('phone_number_click', {
    position
  })
}