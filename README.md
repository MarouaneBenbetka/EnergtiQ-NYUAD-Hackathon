# Quantum Battery Placement & Heat Design Optimization

This project is a **Next.js** web application focused on:

-   **Quantum battery placement optimization**
-   **Battery design for heat dissipation and thermal management**

It integrates advanced simulations and visualization tools to assist in creating more efficient energy storage systems.

---

## Live Demo

👉 [**View the Live Demo Here**](https://energti-q-nyuad.vercel.app)

---

## Technologies Used

-   **Next.js** (App Router structure)
-   **Shadcn/UI** (for beautiful, customizable UI components)
-   **React Query** (for API integration and caching)

---

## Folder Structure

```
src/
└── app/
    ├── (routes)/
    │   └── (home)/
    │       ├── layout.jsx
    │       ├── page.jsx
    │       └── products/
    │           ├── ai/
    │           ├── dashboard/
    │           ├── quantum/
    │           ├── layout.jsx
    │           └── page.jsx
    ├── dashboard/
    ├── favicon.ico
    ├── globals.css
    └── components/
```

### Key Points:

-   **(home)**: Main homepage route with its own `layout.jsx` and `page.jsx`.
-   **products/**: Dedicated sections for AI tools, Dashboard analytics, and Quantum simulations.
-   **dashboard/**: General dashboard features.
-   **components/**: Reusable UI elements for consistent styling.

---

## Environment Variables

This project requires a public API key for data fetching.  
You must configure your environment variables using the `.env.example` file:

```bash
NEXT_PUBLIC_GEMINI_API_KEY=
```

**Steps:**

-   Copy `.env.example`
-   Insert your valid Gemini API key.

---

## Setup Instructions

1. Install dependencies:
    ```bash
    npm install
    ```
2. Run the development server:
    ```bash
    npm run dev
    ```

---

## Notes

-   **Shadcn/UI** ensures consistent, professional design components.
-   **React Query** handles all API communications and caching.
-   Built on **Next.js App Router** for a scalable and modular structure.
