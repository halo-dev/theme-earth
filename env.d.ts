/// <reference types="vite/client" />
import type { Alpine } from "alpinejs";

export {};

declare global {
  interface Window {
    Alpine: Alpine;
    SearchWidget: any;
    i18nResources: Record<string, string>;
  }
}
