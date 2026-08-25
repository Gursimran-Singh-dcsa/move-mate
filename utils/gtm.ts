export const triggerEvent = (eventName: string, data = {}) => {
  if (typeof window === "undefined") return;

  (window as any).dataLayer = (window as any).dataLayer || [];

  (window as any).dataLayer.push({
    event: eventName,
    ...data,
  });
};
