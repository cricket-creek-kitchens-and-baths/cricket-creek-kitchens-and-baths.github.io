import fs from 'fs';

import sharp from 'sharp';

const getImageData = () => {
  const directoryPath = 'public/images';
  const files = fs.readdirSync(directoryPath);

  files.map((file) => {
    const src = `public/images/${file}`;
    sharp(src)
      .metadata()
      .then((data) => {
        console.log({
          src: file,
          height: data.height,
          width: data.width,
        });
        console.log(',');
      });
  });
};

getImageData();
