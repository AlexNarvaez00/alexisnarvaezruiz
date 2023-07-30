export const isActiveDarkMode = () => {
  return 'theme' in localStorage && localStorage.theme == 'dark';
};

