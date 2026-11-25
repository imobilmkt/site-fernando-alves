export const SITE = {
  name: "Fernando Alves",
  role: "BROKER · MIAMI · COMPASS",
  whatsappNumber: "13057267561",
  email: "miamicondoplus@gmail.com",
  phoneDisplay: "+1 (305) 726-7561",
};

export function whatsappHref(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(subject: string) {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
}
