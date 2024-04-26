// @ts-check

export default {
  '*.{js,jsx,ts,tsx}': 'eslint --max-warnings=0 --no-warn-ignored',
  '*': 'prettier --write --ignore-unknown',
  '*.{ts,tsx}': 'tsc-files --noEmit',
};
