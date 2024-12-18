export const shortLocation = 'Delaware' as const;
export const location = `Coastal, ${shortLocation}` as const;
export const phone = '+1-800-868-1148' as const;
export const email = 'bill@cckb.net' as const;
export const tagline = 'Renovations Designed to Improve Your Life' as const;

export const shortCompanyName = 'Cricket Creek' as const;
export const companyNameParts = [shortCompanyName, 'kitchens & baths'] as const;
export const companyName =
  `${shortCompanyName} ${companyNameParts[1]}` as const;

export const registeredWith =
  'the Maryland Home Improvement Commission' as const;
export const epaCertificationNumber = '#R-I-18343-10-02579' as const;

const youtubeEmbedId = 'AQzH94OGG24' as const;
export const embedSrc =
  `https://www.youtube.com/embed/${youtubeEmbedId}?rel=0` as const;

export const footer =
  `© Copyright - ${companyName} | All Rights Reserved.` as const;

export const aboutPageContent = [
  `Founded in 2001, ${shortCompanyName} is the premier choice for fabulous kitchens, beautiful baths, and great basements in ${location}. ${shortCompanyName} is the manifestation of Bill Ripple’s dream of owning his own business. His father was a master carpenter and taught him the intricacies of building. Upon graduating college, he decided to combine his background in carpentry with his degree in sales and marketing.`,
  `Bill is on site for every project and handles all project management needs. His background in sales and marketing helps ensure that you receive the highest quality materials at the best possible price, and his background in carpentry means you will not be disappointed in the finished product. ${shortCompanyName} is a zero-debt company, which allows even more savings to be passed on to you.`,
  `${shortCompanyName} is EPA Certified, fully licensed and insured, and registered with ${registeredWith}. Recycled and eco-friendly materials are used as often as possible. The professional contractors at ${shortCompanyName} design and renovate the kitchen, bath, or basement based on the needs of each individual homeowner.`,
] as const;

export const basementsPageContent = {
  title: 'Basement Remodeling',
  listTitle: 'Great Basement Ideas',
  items: [
    `Man Cave / Lady's Lair. Everyone needs one.`,
    `Home Theater`,
    `Wet Bar`,
    `Adult Entertainment`,
    `Recreation Room`,
    `Children’s Play Room`,
    `Family Room`,
    `Organized Storage`,
    `…Whatever you want`,
  ],
  paragraphs: [
    'Great basements are a rarity. Most people who are looking to add living space to their home don’t consider renovating the basement. They often choose to add a room or two to the upper levels of the home instead. If you’re looking to add square footage to your home, consider renovating your basement instead of adding more rooms.',
    'The basement is often the most neglected area of the home. Often unfinished and used as mass storage, this diamond in the rough could transform into anything you wish. The professional designers and contractors at Cricket Creek can help with design ideas that you may not know are possible. We will help you realize the true greatness of your finished or unfinished basement.',
    'The design and renovate process begins with a one-on-one consultation at your home. We’ll discuss options and create a draft based on the design you have in mind. When you’re happy with the design, and we’re sure we understand what you want, we’ll help pick out materials that work well together. We’ll help get you the best prices possible on all materials and finishing products.',
  ],
} as const;

export const bathroomsPageContent = {
  title: 'Bathroom Remodeling',
  listTitle: 'How the Bathroom Remodeling Process Works',
  items: [
    `Tell us your ideas. We’ll help design your beautiful bathroom based
    on your ideas, not ours. We will present options and help spark
    ideas during the design process.`,
    `Choose the materials and hardware. We’ll help pick out materials and
    hardware that work well together to provide the look you desire. We’ll
    help get the best price possible.`,
    `Deconstruction begins. We’ll schedule a date to begin the
    deconstruction of your existing bathroom. We will be very mindful of
    the disruption and mess, cleaning as often as needed to protect your
    home.`,
    `Bathroom remodeling begins. You will, of course, be able to watch the
    process if you wish. It’s very interesting to watch as your Listd
    bathroom becomes a new, beautiful bathroom.`,
    `The project is finished. Your old bathroom has been transformed into a
    work of beauty.`,
  ],
  paragraphs: [
    'Bathroom remodeling projects are often some of the most challenging. Special consideration must be taken to ensure proper supports are in place for large tubs, and everything must fit together just right for the finished product to be perfect. The professional contractors here at Cricket Creek understand this concept, and will work diligently to ensure that you get the beautiful bath you want.',
    'Each individual homeowner is unique. The needs of the previous owner were very different from your needs. Our goal is to create the beautiful bath you have in mind within the budget you set.',
  ],
} as const;

export const contactPageContent =
  'Thank you for taking the time to visit our site. If you have questions, I want to make sure we answer them for you. If you are ready to discuss your project in detail, let’s sit down and come up with a realistic plan that makes sense to your family and your budget.' as const;

export const faqPageContent = [
  {
    question: `Is ${shortCompanyName} a licensed company?`,
    answer: `Yes we are licensed in ${shortLocation}. In fact, since the company’s start we
    have had zero complaints of any kind filed against us for anything.
    That means you can expect to have a problem free, fun renovation
    experience.`,
  },
  {
    question: `Is ${shortCompanyName} an Eco-friendly company?`,
    answer: `Yes. It starts with the design phase of your renovation. We start with
    energy efficient products like appliances, lights and insulation.
    Whenever possible we locally or regionally source these products.
    Next, these products are installed using the best practices and
    procedures to maximize efficiencies. Finally, the items that are
    removed during the renovation are recycled and denoted to places like
    Restore where they are reused.`,
  },
  {
    question: `Is ${shortCompanyName} certified by the EPA concerning lead paint?`,
    answer: `Yes, we are an EPA Certified (${epaCertificationNumber}) Renovation
    Company. We are properly trained so we can correctly detect and remove
    lead contaminated paint from your home during your renovation to
    protect you and your family from lead paint poisoning.`,
  },
  {
    question: `Is ${shortCompanyName} insured?`,
    answer: `Yes, ${shortCompanyName} is Bonded and Insured to the levels required to
    protect you in the case of any unforeseen, unplanned incidents.
    Detailed policy information is available upon request.`,
  },
  {
    question: `Where did the name ${shortCompanyName} come from?`,
    answer: ` ${shortCompanyName} is an actual Creek very near to where the office started
    in Maryland. It is a beautiful, winding Creek with large creek stones
    and large overhanging trees that turns into the Middle Patuxent River,
    that turns into the Patuxent River that flows into the Chesapeake Bay.`,
  },
  {
    question: `What cabinets do you sell?`,
    answer: `We are an Independent, Objective, Referral based company that does not
    push a particular product. Instead, we focus on the needs and wants of
    the homeowner and help them find the right product that is the best
    fit for them.`,
  },
  {
    question: `Does ${shortCompanyName} use subcontractors?`,
    answer: `Bill, the owner of ${shortCompanyName} is onsite for every renovation to
    either supervise or perform the renovations for you. In addition, the
    company uses various subcontractors for different parts of your
    renovation. Each of these subcontractors has been utilized by Cricket
    Creek for over ten years. They represent the best available craftsman
    in their respective fields. This provides the homeowner with the best
    possible quality renovation that will provide years of improvement and
    joy in their lives.`,
  },
];

export const kitchensPageContent = {
  title: 'Kitchen Remodeling',
  listTitle: 'How the Kitchen Remodeling Process Works',
  items: [
    'Tell us your ideas. We’ll help design your beautiful bathroom based on your ideas, not ours. We will present options and help spark ideas during the design process.',
    'Choose the materials and hardware. We’ll help pick out materials and hardware that work well together to provide the look you desire. We’ll help get the best price possible.',
    'Deconstruction begins. We’ll schedule a date to begin the deconstruction of your existing bathroom. We will be very mindful of the disruption and mess, cleaning as often as needed to protect your home.',
    'Bathroom remodeling begins. You will, of course, be able to watch the process if you wish. It’s very interesting to watch as your Listd bathroom becomes a new, beautiful bathroom.',
    'The project is finished. Your old bathroom has been transformed into a work of beauty.',
  ],
  paragraphs: [
    'Kitchen remodeling projects are often pushed off to the last possible minute because of the disruption it creates in daily life. The professional contractors at Cricket Creek work hard to minimize the disruption, as well as the mess. Renovation is messy business, but we do what we can to maintain a clean workspace and respect your family’s schedule.',
    'We understand that the kitchen is often the focal point of the home. Many events from dinner to family game night, to cooking and enjoying time with friends, make the kitchen the central gathering spot. Each family is different and has different needs regarding the design and layout of the kitchen. Whether you need more storage space, or an entirely new design, we will help you create the fabulous kitchen your family deserves.',
  ],
} as const;

export const testimonialsPageContent = [
  {
    name: 'D.R.',
    location: 'Clarksville, MD.',
    message:
      'I had my kitchen, powder room and basement renovated. The guy did a fantastic job! He was easy to work with, the design of the spaces was very thoughtful and they turned out beautiful. His company is Cricket Creek kitchens and baths.',
  },
  {
    name: 'B.C.',
    location: 'Washington, D.C.',
    message:
      'Cricket Creek did a complete top to bottom remodel of our Glover Park kitchen-taking down the wall between kitchen and dining room, new cabinets, flooring, electric, appliances, the works. Did a fantastic job at a competitive price and gave us a beautiful and functional kitchen that fits the character of the rest of our house. Got the job done in a timely fashion: good communicator who showed up when he said he would; neat, organized, and easy to work with. Highly recommended.',
  },
  {
    name: 'M.K.',
    location: 'Chevy Chase, MD.',
    message:
      'We wanted to express our appreciation for your work on our basement. We are very happy with it and our family was very impressed over the holidays. You did an excellent job and were easy to work with. You made home renovation a painless experience.',
  },
  {
    name: 'C.L.',
    location: 'Baltimore, MD.',
    message:
      'We can’t say thank you enough for the great job you did with our home! We are very happy.',
  },
  {
    name: 'D.M.',
    location: 'Clarksville, MD',
    message:
      'We so appreciate the great work you did and are really enjoying the new kitchen!',
  },
  {
    name: 'M.S.',
    location: 'Columbia, MD',
    message:
      'Thank you so much for a job well done! I love my beautiful new kitchen. You are so patient and your work is impeccable. Although your work speaks for itself, I will recommend you highly to family and friends.',
  },
] as const;
