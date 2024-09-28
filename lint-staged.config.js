module.exports = {
  '*.(ts|js)': () => ['pnpm lint', 'pnpm prettier', 'pnpm check'],
};
