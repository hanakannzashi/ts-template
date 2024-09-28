export function doYouLikeTypeScript(): 'Yes' | 'No' {
  return 'Yes';
}

function main() {
  console.log(`Do you like TypeScript? ${doYouLikeTypeScript()}.`);
}

main();
