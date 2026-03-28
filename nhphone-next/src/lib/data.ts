export interface Product {
  id: string;
  name: string;
  price: number;
  health: number;
  image: string;
  condition: string;
  storage: string;
  color: string;
}

export const products: Product[] = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    price: 899,
    health: 98,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzAXqxHqHH-gxpHbwAhrAXyI4hL9efADIC27ZQQ9rPGJ5DyjmIBZo_hlubI_SZ8Aw_j_kEpTdEROWxCai3uWwxcLxtvsEIQUr_TECmriAC0lJeTqVzv2aTtLKOHvw6bLyLso7jie8ufcSgNUvBY0GFg55QSDCkqU16sisjsS2t-mkVcrbn6l8nyCcW59pqXv2cXeEXFVi6O4W5RaH2P-YkSOElLI6Ap3VJ6dla8bM_ksKeOmuKXS5_2ivSZlw5hYNPfOoiAr6Qoc0",
    condition: "Like New",
    storage: "256GB",
    color: "Natural Titanium"
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    price: 450,
    health: 92,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9ow3ADuxgQjuqtPqfXfXwQPM9T5RWrnutY806-k-e9B677L3jwhtxSDE5j6ZQCNB25lb2u7E8P6QYnjO0h9qDuKo_SNTXkg_MAQ0mDPNz4FzjszXnGch7EQieDtm_U1GWpCk5Zi8EwyvVUzdrlzL4zj6ZoiAd13m_Jgbz44W4tkQct5T8nUe2BAnGOv-DmG4tn3LAWuytfBgxYHDFZXN3A5jH75vDPOBsRc7Vq4guRUCCw4pmzXovxrRjJ_Q9COkMdt0cToN5yQU",
    condition: "Good",
    storage: "128GB",
    color: "Midnight Blue"
  },
  {
    id: "iphone-14-plus",
    name: "iPhone 14 Plus",
    price: 620,
    health: 100,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH_sHdiS9qOLGFJEGUIMUOJhe9lTbmCTMDJfzLPXhSgjhPHZJLovP4V3mT3cilzNaT7K2vnGsHxkp9BDCpgTzfTf156UWGJE8e2Dw2qmYweWCsAR83UiqXJcE6IbJMQyXhKslh9ljmV2s_2aUScPi0bKl73Lns6B5lUG2xHhjNbqcZJRBOO49fXTg89MfT1ZTWiEDrwxEREDdwQq-rV53iIZFHa1-ZOOraKzugZYHL7XpQGUXiGZm6PW11GHCofT1GhI-2PjFDgks",
    condition: "Excellent",
    storage: "256GB",
    color: "Stunning Red"
  }
];

export async function getProducts(): Promise<Product[]> {
  // Simulate network delay
  return new Promise((resolve) => setTimeout(() => resolve(products), 500));
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return new Promise((resolve) => setTimeout(() => resolve(products.find(p => p.id === id)), 500));
}
