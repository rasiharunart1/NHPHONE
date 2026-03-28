import type { Product } from "@/lib/data";

export interface ExtendedProduct extends Product {
  badge?: string;
  badgeVariant?: "secondary" | "tertiary" | "error" | "ghost";
  description?: string;
  category?: string;
  features?: string[];
  inStock?: number;
}

export const extendedProducts: ExtendedProduct[] = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: 999,
    health: 98,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfFrSFp9XOU4aYMn_fbtCOP6jqfmmzn1veY3hYh_6OhZ5hg64VrLA3uzMW8ZqoIOBRcByCSEBFqgOutMXzTHLLirEVSgOkebs_e0Uhho-NkCYz_BkVFGskvjDiZV-i9LrbkbrQJxNTnz82LkI_hVe1I2hNZgxdmUM07GETYwrg980CMnnbPfzNPuP851yETQxe5S1WMVh_kdqWXJdP_8I4wL0yoJ-O8CxzTqkt5VzmmnXVlqZR1LolSEDpX3UXPfpkOknu9BI8KCo",
    condition: "Like New",
    storage: "256GB",
    color: "Natural Titanium",
    badge: "Best Deal",
    badgeVariant: "secondary",
    description: "The pinnacle of iPhone engineering. A2-grade titanium frame, 48MP ProRAW camera system, USB-C with USB3 speeds. Sourced from first owner, barely used.",
    features: ["48MP ProRAW Camera", "USB-C USB3 Transfer", "A17 Pro Chip", "All Day Battery"],
    inStock: 42,
  },
  {
    id: "iphone-13-pink",
    name: "iPhone 13",
    price: 449,
    health: 91,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByvf_iR33lxMJH-sDTumxLuHaRWO_LIPSCnyhZdd1r3VrF7UO_VsCwTSKIg71ZTjIfwc8yQJUlVgD7pDyufnwO7oqovc2yYqdPa4rjlI3oOKZt3iCy3qgUqGvLNgyTNbvfABZKIQF7xD9kFSufGoIh8t5culPdVBQZgrN-0FTiPb5pcCvbzWPtHYdMxO8ADzGc2bwIP9jB-MBpqZiPSyPF4qG4ZMTAtPxLgtPGjtmk8fzAmH9ZZ1gUn5qZ7kEePgg-hZ9fey3Vt6Y",
    condition: "Refurbished",
    storage: "128GB",
    color: "Sakura Pink",
    badge: "Rare Color",
    badgeVariant: "tertiary",
    description: "Limited Sakura Pink edition. Professionally refurbished with fresh battery and screen protector. A rare find in this condition.",
    features: ["Dual 12MP Camera", "Super Retina XDR", "A15 Bionic Chip", "Ceramic Shield"],
    inStock: 5,
  },
  {
    id: "iphone-12-black",
    name: "iPhone 12",
    price: 329,
    health: 100,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcGF6pXs-8AFZGu07xYNTzVrMHM0ZbWAgqkX1rJpjcEsk6o7HoTEtCA-fsQtJ-upYD88rs8kl16mVywx8aePw1AQpzp7E7F_YmkdBPv9mcbxewuTjsIk1izgEWfOdRCf2-dQTOZ77szOUQJodXRO6KqNFTLOlnP0lHrc9GjgcdWKk3cFkwr7pzfND0T_cofTaeIFPZaFLvHu7x8RYapkvKWbbTwr44SYpUUIfiQQw7Pa5az47z8uCGo0ynaSakegyabe5v-_dF2hM",
    condition: "Good",
    storage: "64GB",
    color: "Midnight",
    badge: "Value Pick",
    badgeVariant: "ghost",
    description: "Excellent value. 100% battery health means this unit was barely used. Comes with original box and accessories.",
    features: ["New Battery 100%", "Ceramic Shield", "5G Ready", "MagSafe"],
    inStock: 12,
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    price: 799,
    health: 96,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu9QFDuzs0ef95yZ4pgXQPQveP0LeoLqXu2KtD_RSPT2ajj986Y6cIczFGD5-alJxOWBKBoQMH3s1zFcDztw2ygb3FJpvX_sd09U1mLt0xBIjAa84jDDjDdylpalQEtt4Ho2gZbtB3wxwUUHOGLFkXdEoBaBhpWOE7d66wwkaeqV3XlGGCm9WT3Rb84GwzNETBuFFyzeWQGYOvaE66UZG_KIVM3Z-LUjhgFvIZuOhcO0-qW0orkhXrH7FE3Jk9ymeap_Lc9WrDzlk",
    condition: "Excellent",
    storage: "512GB",
    color: "Deep Purple",
    badge: "Elite Grade",
    badgeVariant: "secondary",
    description: "Deep Purple in Pristine condition. 48MP ProRAW, Dynamic Island, Always-On display. The perfect upgrade.",
    features: ["Dynamic Island", "48MP ProRAW", "Always-On Display", "A16 Bionic"],
    inStock: 8,
  },
  {
    id: "iphone-13-pro-green",
    name: "iPhone 13 Pro",
    price: 629,
    health: 93,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADE2lkjquHG35y8xzYMgtLx-rY820vYiWV-1dhh2l_5Z-ZOdfEImZai1Tn-xyJ46sGhyEMjuaLnZ9YADgPt4vWuLuRPoggeZI4J98acuqt97Tdg96THvEmHB3JaaaKsV2qxr7DT3z7pxI-41o2oG4Kw77CF9BqZTz5nz_kybykg0eMPrxF_bPCiuMt5V8oC7geEMSqlIfXg6_BrD8humV3MAFUQ_w55e23d0HP-3Caj0ybmE3rYM-W2BqfBPIGhfJzEwtQUgQF_aQ",
    condition: "Like New",
    storage: "256GB",
    color: "Alpine Green",
    description: "Stunning Alpine Green, an exclusive Pro color. ProMotion display and 3x optical zoom make this a photographer's dream.",
    features: ["ProMotion 120Hz", "3x Optical Zoom", "ProRAW Support", "A15 Bionic"],
    inStock: 3,
  },
  {
    id: "iphone-11-silver",
    name: "iPhone 11",
    price: 249,
    health: 84,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOkwBNkKlO6u8QYZW83SN4Qs98MVxC6N-MoOhj7PlnYjoaw6P8-ufMY15LZZvwUmlozN9AB_SZVmMTXzDDaCXpufOL_SU5cF5kCqsJcguYc0fPq7DuuWCLmZbrevp5F3YwBtDbmoKMKlN7xWenELi3iTGtLNd1B_abA2I2O8Bod4svjBCHtdkvmfvBecBCfY2UY3Rc26cVY5HZePA3RobuEWa125TwAIWyDJVbf3Jowdu9sGv7KMfRQ8CuOf4hBebfaq_QV0IDtgA",
    condition: "Good",
    storage: "64GB",
    color: "Silver",
    badge: "Last One",
    badgeVariant: "error",
    description: "The last Silver 64GB in our inventory. Perfect entry-level iPhone with proven reliability. Good cosmetic condition.",
    features: ["Dual 12MP Camera", "Night Mode", "4K Video", "Water Resistant"],
    inStock: 1,
  },
  {
    id: "iphone-15-pro-2",
    name: "iPhone 15 Pro Max",
    price: 1099,
    health: 100,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHmlwc01gBo2xioyVphIulTpPeev6RDCNC78hdpE2szN1HlOIbWIloDhYUULzALBHYgrE_RSQ2goG-IsN9Iw19A4jd8bpc6svJnMpBx2Kof2gJdk9lGEOQUHfHm5Lsrbi6swNCN2ilPtWiEFso2T8z-tcL5IrUXKkvMXdiDBkTYwgnIIkyJcvjoxvAbS1qx8QsU1m3YCiPrhpPLWxWJFB-zdtlzH-5IISxbc6tI02MFQtOhjGu9qeG8IwKPiLyVLWw_tymuHiSaKY",
    condition: "Like New",
    storage: "512GB",
    color: "Black Titanium",
    badge: "New Arrival",
    badgeVariant: "secondary",
    description: "Barely used Pro Max with 100% battery health. The most premium iPhone experience ever. Comes with full accessories.",
    features: ["5x Optical Zoom", "Titanium Frame", "USB-C USB3", "Super Retina XDR 6.7\""],
    inStock: 7,
  },
  {
    id: "iphone-14-plus",
    name: "iPhone 14 Plus",
    price: 620,
    health: 100,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH_sHdiS9qOLGFJEGUIMUOJhe9lTbmCTMDJfzLPXhSgjhPHZJLovP4V3mT3cilzNaT7K2vnGsHxkp9BDCpgTzfTf156UWGJE8e2Dw2qmYweWCsAR83UiqXJcE6IbJMQyXhKslh9ljmV2s_2aUScPi0bKl73Lns6B5lUG2xHhjNbqcZJRBOO49fXTg89MfT1ZTWiEDrwxEREDdwQq-rV53iIZFHa1-ZOOraKzugZYHL7XpQGUXiGZm6PW11GHCofT1GhI-2PjFDgks",
    condition: "Excellent",
    storage: "256GB",
    color: "Product RED",
    description: "Limited Product RED edition with large 6.7\" display and incredible all-day battery. 100% battery health. Perfect for media lovers.",
    features: ["6.7\" Super Retina XDR", "All-Day Battery", "Emergency SOS", "12MP TrueDepth Camera"],
    inStock: 4,
  },
];

export async function getExtendedProducts(): Promise<ExtendedProduct[]> {
  return new Promise((resolve) => setTimeout(() => resolve(extendedProducts), 100));
}

export async function getExtendedProductById(id: string): Promise<ExtendedProduct | undefined> {
  return new Promise((resolve) => setTimeout(() => resolve(extendedProducts.find(p => p.id === id)), 100));
}
