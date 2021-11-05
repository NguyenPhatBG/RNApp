const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/assets/images')
    .filter(file => {
      if (typeof file === 'string' && !file.includes('@')) {
        return file.endsWith('.webp');
      }
    })
    .map(file => file.replace('.webp', ''));

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = imageFileNames()
    .map(name => {
      return `get ${name}() {
            return require('./images/${name}.webp');
        }`;
    })
    .join(',\n  ');

  const string = `export const Assets = {
  ${properties}
}
`;

  fs.writeFileSync('src/assets/index.ts', string, 'utf8');
};

generate();
