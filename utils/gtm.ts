export const triggerEvent = (eventName: string, data: {[key:string]: string} = {}) => {
  if (typeof window === "undefined") return;
  data.device = data.device
    ? data.device
    : window.innerWidth < 768
      ? "mobile"
      : "desktop";
  (window as any).dataLayer = (window as any).dataLayer || [];

  (window as any).dataLayer.push({
    event: eventName,
    ...data,
  });
};
