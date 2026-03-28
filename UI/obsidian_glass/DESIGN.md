# Design System Document: The Ethereal Marketplace

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Concierge"**
This design system moves away from the cluttered, transactional nature of traditional e-commerce. It is built on the philosophy of **Atmospheric Luxury**. Rather than a static grid of products, the UI should feel like a high-end boutique at night—quiet, illuminated only by the products themselves, and defined by layers of frosted glass and light.

To break the "template" look, we utilize **Intentional Asymmetry**. Large `display-lg` typography should often overlap glass containers, and product imagery should break the bounds of its cards (using `z-index` and subtle `secondary` glows) to create a sense of three-dimensional space. We prioritize breathing room over information density.

---

## 2. Colors & Tonal Depth
The palette is rooted in deep obsidian tones, punctuated by refractive light.

### Surface Hierarchy & Nesting
We do not use borders to define space. We use **Tonal Layering**.
*   **Base Layer:** `surface` (#131315) or `background` (#131315).
*   **Mid Layer (Sections):** `surface-container-low` (#1b1b1d) for large content areas.
*   **Top Layer (Interactive):** `surface-container-high` (#2a2a2c) for interactive elements.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts or the transition from a matte surface to a glass surface.

### The Glass & Gradient Rule
Glassmorphism is our primary vehicle for premium feel. 
*   **Glass Specs:** Use `on-surface` at 10-15% opacity with `backdrop-blur-xl`.
*   **Glows:** Use `secondary` (#c2c1ff) and `tertiary` (#e9b3ff) as low-opacity radial gradients (10-20% opacity) behind hero products to simulate a "soft boutique spotlight."

---

## 3. Typography: The Editorial Voice
Typography is the scaffolding of our luxury. We use **Inter** for its neutral, high-end Swiss aesthetic.

*   **Display (lg/md):** Reserved for hero headlines and price points. Use `primary-fixed` (#e4e1e7) for maximum contrast against the dark background. Letter spacing should be set to `-0.02em` for a tighter, "machined" look.
*   **Headlines:** Used for product names and section titles. Ensure generous vertical `spacing-16` between headlines to maintain the minimalist "editorial" feel.
*   **Body & Labels:** Use `on-surface-variant` (#c8c5cb) for descriptions to reduce visual noise. Only use `on-surface` (#e4e2e4) for active, critical information.

---

## 4. Elevation & Depth
Depth in this system is atmospheric, not structural.

*   **The Layering Principle:** Stack `surface-container-lowest` (#0e0e10) cards onto a `surface-container-low` (#1b1b1d) section to create a "recessed" look, or vice versa for a "raised" look.
*   **Ambient Shadows:** For floating glass elements, use a shadow with a blur radius of `40px-80px` at 6% opacity. The shadow color must be a tint of the `secondary` or `tertiary` accent colors, never pure black, to simulate light passing through glass.
*   **The Ghost Border Fallback:** If accessibility requires a stroke, use `outline-variant` (#47464b) at 15% opacity. It should feel like a "whisper" of a line.

---

## 5. Components

### Glass Cards (The Signature Component)
*   **Base:** Glass effect (15% white, `backdrop-blur-xl`).
*   **Corners:** `xl` (3rem) for large hero cards; `lg` (2rem) for product grid cards.
*   **Interaction:** On hover, the card should scale to 1.02% with a `secondary` inner glow transition.

### Buttons (The "Jewel" States)
*   **Primary:** Background of `primary` (#c8c5cb) with `on-primary` (#303034) text. No border. High-gloss finish.
*   **Secondary (Glass):** Glass effect with a `Ghost Border`.
*   **Hover State:** Apply a `secondary-container` soft glow behind the button and scale smoothly.

### Floating Navigation
*   **Structure:** A pill-shaped `xl` rounded bar using the `surface-container-highest` at 80% opacity with `backdrop-blur-md`. 
*   **Placement:** Fixed at the bottom of the viewport (`spacing-8` from bottom) to mimic iOS 26 "reachability" patterns.

### Inputs & Fields
*   **Style:** Avoid boxes. Use a `surface-container-highest` bottom-only thick bar or a fully glass-filled container with `md` (1.5rem) rounding.
*   **Error State:** Use `error` (#ffb4ab) only for the label and a subtle `error_container` glow; never a harsh red border.

---

## 6. Do's and Don'ts

### Do:
*   **Use White Space as a Tool:** Use `spacing-20` or `spacing-24` between major sections. If it feels "too empty," you are doing it right.
*   **Overlap Elements:** Let a high-resolution iPhone image partially "break out" of its glass container.
*   **Soft Gradients:** Use gradients like `secondary` to `tertiary` for subtle text highlights or button backgrounds.

### Don't:
*   **Don't Use Dividers:** Never use a horizontal line to separate list items. Use `spacing-4` and a slight shift to `surface-container-low`.
*   **Don't Over-Saturate:** Accents should be "soft." Avoid 100% opacity neons; keep them muted and sophisticated.
*   **Don't Use Sharp Corners:** Every interactive element must use at least `DEFAULT` (1rem) rounding to maintain the "organic" iOS feel.