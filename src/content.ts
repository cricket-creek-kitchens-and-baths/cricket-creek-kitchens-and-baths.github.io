export const location = 'Coastal, Delaware' as const;
export const phone = '+1-800-868-1148' as const;
export const email = 'bill@cckb.net' as const;
export const companyName = ['Cricket Creek', 'kitchens & baths'] as const;

export const companyNameDisplayString =
  `${companyName[0]} ${companyName[1]}` as const;
export const footer =
  `© Copyright - ${companyNameDisplayString} | All Rights Reserved.` as const;

export const contactPageContent =
  'Thank you for taking the time to visit our site. If you have questions, I want to make sure we answer them for you. If you are ready to discuss your project in detail, let’s sit down and come up with a realistic plan that makes sense to your family and your budget.' as const;
