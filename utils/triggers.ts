import { triggerEvent } from "@/utils/gtm";

export const phoneNumberClickEvent = (position: string) => {
  triggerEvent("phone_number_click", {
    position,
  });
};
export const quoteFormSubmit = () => {
  triggerEvent("quote_form_submit", {
    form_name: "quote_form",
  });
};

export const getACallbackFormSubmit = () => {
  triggerEvent("callback_form_submit", {
    form_name: "get_a_callback_form",
  });
};

export const socialMediaClickEvent = (platform: string) => {
  triggerEvent("social_media_click", {
    "Social Media Platform": platform,
  });
};
