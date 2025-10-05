import { StrictMode } from "react";
import { RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider.tsx";
import { Provider as StoreProvider } from "react-redux";

import "@/app/index.css";
import App from "@/app/App.tsx";
import { router } from "./router.ts";
import { store } from "@/shared/stores";

createRoot(document.getElementById("flow")!).render(
  <StrictMode>
      <StoreProvider store={store}>
          <Provider>
              <RouterProvider router={router}>
                  <App />
              </RouterProvider>
          </Provider>
      </StoreProvider>
  </StrictMode>,
);
