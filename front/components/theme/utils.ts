import {
  LOCALSTORAGE_KEY,
  LIGHT_DISPLAY_MODE,
  DEFAULT_DISPLAY_MODE,
  DOM_KEY_DISPLAY_MODE,
} from './constante';

export const setDocumentDarkMode = (mode) => {
  if (mode) {
    document.documentElement.setAttribute(DOM_KEY_DISPLAY_MODE, DEFAULT_DISPLAY_MODE);
    localStorage.setItem(LOCALSTORAGE_KEY, DEFAULT_DISPLAY_MODE);
  }
  else {
    document.documentElement.setAttribute(DOM_KEY_DISPLAY_MODE, LIGHT_DISPLAY_MODE);
    localStorage.setItem(LOCALSTORAGE_KEY, LIGHT_DISPLAY_MODE);
  }
};

export default setDocumentDarkMode;
