// Every on-site link to the shop goes through /go/<slug>, so the affiliate
// link can be swapped here in one place once the shop sends it.
export const links = {
  shop: "https://www.limitless3dlabs.com",
  halloween: "https://www.limitless3dlabs.com/pages/limitless-halloween",
  // AI request form. Switch to /pages/christmas-zone after Oct 15, or /pages/custom if the shop creates one.
  custom:
    "https://www.limitless3dlabs.com/pages/limitless-halloween#shopify-section-template--27388756459809__custom_liquid_Pr87Ej",
  reviews: "https://www.etsy.com/shop/Limitless3DLabs#reviews",
  etsy: "https://www.etsy.com/shop/Limitless3DLabs",
  sonic: "https://www.limitless3dlabs.com/products/doctor-who-sonic-screwdrivers-cosplay",
  crown: "https://www.limitless3dlabs.com/products/baratheon-crown-game-of-thrones-3d-print",
  hammer: "https://www.limitless3dlabs.com/products/medieval-skull-hammer-costume-weapon",
  batcat: "https://www.limitless3dlabs.com/products/batcat-wearable-helmet",
  raygun: "https://www.limitless3dlabs.com/products/futurama-ray-gun-3d-print",
  sword: "https://www.limitless3dlabs.com/products/minecraft-sword-life-size",
  bust: "https://www.limitless3dlabs.com/products/customized-3d-bust-statue",
  tardis: "https://www.limitless3dlabs.com/products/tardis-3d-print",
} as const satisfies Record<string, string>;

export type LinkSlug = keyof typeof links;

export function isLinkSlug(slug: string): slug is LinkSlug {
  return Object.hasOwn(links, slug);
}

export function go(slug: LinkSlug) {
  return `/go/${slug}`;
}
