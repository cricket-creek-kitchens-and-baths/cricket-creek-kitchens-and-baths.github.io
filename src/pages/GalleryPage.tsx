import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useLightbox } from '@/hooks/useLightbox';

const kitchens = [
  'gallery-kitchens-1.jpeg',
  // 'gallery-kitchens-2.jpeg',
  // 'gallery-kitchens-3.jpeg',
  // 'gallery-kitchens-4.jpeg',
  // 'gallery-kitchens-5.jpeg',
  // 'gallery-kitchens-6.jpeg',
  // 'gallery-kitchens-7.jpeg',
  // 'gallery-kitchens-8.jpeg',
  // 'gallery-kitchens-9.jpeg',
  // 'gallery-kitchens-10.jpeg',
  // 'gallery-kitchens-11.jpeg',
  // 'gallery-kitchens-12.jpeg',
  // 'gallery-kitchens-13.jpeg',
  // 'gallery-kitchens-14.jpeg',
  // 'gallery-kitchens-15.jpeg',
  // 'gallery-kitchens-16.jpeg',
  // 'gallery-kitchens-17.jpeg',
  // 'gallery-kitchens-18.jpeg',
  // 'gallery-kitchens-19.jpeg',
  // 'gallery-kitchens-20.jpeg',
  // 'gallery-kitchens-21.jpeg',
  // 'gallery-kitchens-22.jpeg',
  // 'gallery-kitchens-23.jpeg',
  // 'gallery-kitchens-24.jpeg',
  // 'gallery-kitchens-25.jpeg',
];

const bathrooms = [
  'gallery-bathrooms-1.jpeg',
  // 'gallery-bathrooms-2.jpeg',
  // 'gallery-bathrooms-3.jpeg',
  // 'gallery-bathrooms-4.jpeg',
  // 'gallery-bathrooms-5.jpeg',
  // 'gallery-bathrooms-6.jpeg',
  // 'gallery-bathrooms-7.jpeg',
  // 'gallery-bathrooms-8.jpeg',
  // 'gallery-bathrooms-9.jpeg',
  // 'gallery-bathrooms-10.jpeg',
  // 'gallery-bathrooms-11.jpeg',
  // 'gallery-bathrooms-12.jpeg',
  // 'gallery-bathrooms-13.jpeg',
  // 'gallery-bathrooms-14.jpeg',
  // 'gallery-bathrooms-15.jpeg',
  // 'gallery-bathrooms-16.jpeg',
  // 'gallery-bathrooms-17.jpeg',
  // 'gallery-bathrooms-18.jpeg',
  // 'gallery-bathrooms-19.jpeg',
  // 'gallery-bathrooms-20.jpeg',
  // 'gallery-bathrooms-21.jpeg',
  // 'gallery-bathrooms-22.jpeg',
  // 'gallery-bathrooms-23.jpeg',
  // 'gallery-bathrooms-24.jpeg',
  // 'gallery-bathrooms-25.jpeg',
  // 'gallery-bathrooms-26.jpeg',
  // 'gallery-bathrooms-27.jpeg',
  // 'gallery-bathrooms-28.jpeg',
  // 'gallery-bathrooms-29.jpeg',
  // 'gallery-bathrooms-30.jpeg',
  // 'gallery-bathrooms-31.jpeg',
  // 'gallery-bathrooms-32.jpeg',
  // 'gallery-bathrooms-33.jpeg',
  // 'gallery-bathrooms-34.jpeg',
  // 'gallery-bathrooms-35.jpeg',
  // 'gallery-bathrooms-36.jpeg',
  // 'gallery-bathrooms-37.jpeg',
  // 'gallery-bathrooms-38.jpeg',
  // 'gallery-bathrooms-39.jpeg',
];

const basements = [
  'gallery-basements-1.jpeg',
  // 'gallery-basements-2.jpeg',
  // 'gallery-basements-3.jpeg',
  // 'gallery-basements-4.jpeg',
  // 'gallery-basements-5.jpeg',
];

const galleries = [
  {
    id: 'kitchens-gallery',
    title: 'Fabulous Kitchens',
    items: kitchens,
  },
  {
    id: 'bathrooms-gallery',
    title: 'Beautiful Bathrooms',
    items: bathrooms,
  },
  {
    id: 'basements-gallery',
    title: 'Great Basements',
    items: basements,
  },
] as const;

// type GalleryTitle = valueof<typeof galleries>['title'];
// const wordWrap = (title: GalleryTitle) => {
//   const words = title.split(' ');
//   if (words.length !== 2) {
//     throw Error('no.');
//   }
//   return (
//     <>
//       {words[0]}
//       <br />
//       {words[1]}
//     </>
//   );
// };

export function GalleryPage() {
  let gallery: valueof<typeof galleries>;
  for (gallery of Object.values(galleries)) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLightbox(gallery.id);
  }

  return (
    <article className="page" data-name={GalleryPage.name}>
      {/* <div className="gallery-buttons">
        {Object.values(galleries).map(({ title }) => (
          <div className="gallery-title" key={title}>
            {wordWrap(title)}
          </div>
        ))}
      </div> */}

      {Object.values(galleries).map((gallery) => {
        return (
          <section key={gallery.id}>
            <div className="page-title">{gallery.title}</div>
            <ImageList cols={3} gap={8} id="kitchens-gallery" variant="masonry">
              {gallery.items.map((src) => {
                const path = `/images/${src}`;

                return (
                  <ImageListItem
                    component="a"
                    data-pswp-height="500"
                    data-pswp-width="800"
                    href={path}
                    key={src}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img alt="title" loading="lazy" src={path} />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </section>
        );
      })}
    </article>
  );
}
