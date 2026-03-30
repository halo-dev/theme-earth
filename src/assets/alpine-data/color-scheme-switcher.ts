import { ColorSchemeType, currentColorScheme, setColorScheme } from "../utils/color-scheme";

export default () => ({
  colorSchemes: [
    {
      label: window.i18nResources["jsModule.colorSchemeSwitcher.dark"],
      value: "dark",
      icon: "i-gg-moon",
    },
    {
      label: window.i18nResources["jsModule.colorSchemeSwitcher.light"],
      value: "light",
      icon: "i-gg-sun",
    },
    {
      label: window.i18nResources["jsModule.colorSchemeSwitcher.auto"],
      value: "system",
      icon: "i-gg-dark-mode",
    },
  ],
  currentValue: currentColorScheme,
  get colorScheme() {
    return this.colorSchemes.find((x) => x.value === this.currentValue);
  },
  setColorScheme(colorScheme: ColorSchemeType, store: boolean) {
    setColorScheme(colorScheme, store);
    this.currentValue = colorScheme;
  },
});
