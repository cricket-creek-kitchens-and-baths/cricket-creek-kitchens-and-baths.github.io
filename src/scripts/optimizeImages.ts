import fs from 'fs';

import sharp from 'sharp';

const getImageData = () => {
  const directoryPath = 'public/images';
  const files = fs.readdirSync(directoryPath);

  const promises: Promise<{
    src: string;
    height?: number;
    width?: number;
  }>[] = [];
  files.map((file) => {
    const src = `public/images/${file}`;
    promises.push(
      new Promise((resolve) => {
        sharp(src)
          .metadata()
          .then((metadata) => {
            resolve({
              src: file,
              height: metadata.height,
              width: metadata.width,
            });
          });
      }),
    );
  });

  Promise.all(promises).then((results) => {
    const draft = [...results];
    const sorted = draft.sort(({ src: a }, { src: b }) =>
      a < b ? -1 : a > b ? 1 : 0,
    );

    console.log('export const imageData = [');
    sorted.map((image) => {
      if (image.height && image.width) {
        console.log(
          `  { src: '${image.src}', height: ${image.height}, width: ${image.width} },`,
        );
      }
    });
    console.log('];');
  });
};

getImageData();
