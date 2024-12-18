// import { useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';

import { BackdropImage } from '@/components/BackdropImage';

export function HomePage() {
  const kitchenImageSrc = 'home-page-kitchen.jpeg';
  // const bathroomImageSrc = 'home-page-bathroom.jpeg';

  // const navigate = useNavigate();
  // const goTo = useCallback(
  //   (path: string) => () => {
  //     navigate(path);
  //   },
  //   [],
  // );

  // display="flex"
  // flexDirection="column"
  // justifyContent="center"
  // marginBottom="60px"
  // position="relative"

  return (
    <>
      <BackdropImage imageSrc={kitchenImageSrc} />
      <article className="page" data-name={HomePage.name}></article>
    </>
  );
}
