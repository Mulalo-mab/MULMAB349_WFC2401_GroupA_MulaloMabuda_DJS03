/**
 * @module Theme
 */

/**
 * Applies the selected theme to the document by setting CSS variables.
 *
 * @param {string} theme - The selected theme. It can be either 'night' or 'day'.
 */
export const applyTheme = (theme) => {
  /**
   * CSS variable for the dark theme
   * @type {string}
   * @prop {string} colorDark - The CSS variable value for the dark color in dark mode
   * @prop {string} colorLight- The CSS variable value for the light color in dark mode
   */
  const colorDark = theme === "night" ? "255, 255, 255" : "10, 10, 20";

  /**
   * CSS variable for the light theme
   * @type {string}
   * @prop {string} colorDark - The CSS variable value for the dark color in light mode
   * @prop {string} colorLight - The CSS variable value for the light color in light mode
   */
  const colorLight = theme === "night" ? "10, 10, 20" : "255, 255, 255";

  /**
   *Set the CSS variables for dark and light colors
   * */
  document.documentElement.style.setProperty("--color-dark", colorDark);
  document.documentElement.style.setProperty("--color-light", colorLight);
};
