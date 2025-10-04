import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";

import "@/app/index.css";
import App from "@/app/App.tsx";
import { router } from "./router.ts";

createRoot(document.getElementById("flow")!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
);
