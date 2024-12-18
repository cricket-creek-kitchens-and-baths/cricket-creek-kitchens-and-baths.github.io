export const location = 'Coastal, Delaware' as const;
export const phone = '+1-800-868-1148' as const;
export const email = 'bill@cckb.net' as const;
export const tagline = 'Renovations Designed to Improve Your Life' as const;
export const companyName = ['Cricket Creek', 'kitchens & baths'] as const;
export const companyNameDisplayString =
  `${companyName[0]} ${companyName[1]}` as const;

export const registeredWith =
  'the Maryland Home Improvement Commission' as const;
export const epaCertificationNumber = '#R-I-18343-10-02579' as const;

const youtubeEmbedId = 'AQzH94OGG24' as const;
export const embedSrc = `https://www.youtube.com/embed/${youtubeEmbedId}?rel=0` as const;

export const footer =
  `© Copyright - ${companyNameDisplayString} | All Rights Reserved.` as const;

export const aboutPageContent = [
  `Founded in 2001, ${companyName[0]} is the premier choice for fabulous kitchens, beautiful baths, and great basements in ${location}. ${companyName[0]} is the manifestation of Bill Ripple’s dream of owning his own business. His father was a master carpenter and taught him the intricacies of building. Upon graduating college, he decided to combine his background in carpentry with his degree in sales and marketing.`,

  `Bill is on site for every project and handles all project management needs. His background in sales and marketing helps ensure that you receive the highest quality materials at the best possible price, and his background in carpentry means you will not be disappointed in the finished product. ${companyName[0]} is a zero-debt company, which allows even more savings to be passed on to you.`,

  `${companyName[0]} is EPA Certified, fully licensed and insured, and registered with ${registeredWith}. Recycled and eco-friendly materials are used as often as possible. The professional contractors at ${companyName[0]} design and renovate the kitchen, bath, or basement based on the needs of each individual homeowner.`,
] as const;

export const contactPageContent =
  'Thank you for taking the time to visit our site. If you have questions, I want to make sure we answer them for you. If you are ready to discuss your project in detail, let’s sit down and come up with a realistic plan that makes sense to your family and your budget.' as const;
