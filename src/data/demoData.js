const cairoImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_panorama.jpg';
const gizaImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/All_pyramids_of_Giza_panorama_2.jpg';
const luxorImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Luxor_Temple_R04.jpg';
const aswanImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/AswanHighDam_Egypt.jpg';
const alexandriaImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Corniche_of_Alexandria.jpg';
const abuSimbelImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Abu_Simbel_Temple_May_30_2007.jpg';
const profile1 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_panorama.jpg';

export const initialServices = [
  {
    id: 1,
    title: 'Giza Pyramids Tour',
    description: 'Explore the ancient pyramids with a dedicated local guide.',
    price: 220,
    duration: '6 hours',
    image: gizaImage,
    category_id: 1,
  },
  {
    id: 2,
    title: 'Cairo City Tour',
    description: 'Join a small group and discover Cairo highlights.',
    price: 79,
    duration: '4 hours',
    image: cairoImage,
    category_id: 2,
  },
  {
    id: 3,
    title: 'Luxor Temples Adventure',
    description: 'Visit the magnificent temples of ancient Thebes.',
    price: 210,
    duration: '8 hours',
    image: luxorImage,
    category_id: 3,
  },
  {
    id: 4,
    title: 'Aswan High Dam',
    description: 'Engineering marvel with Nile views and history.',
    price: 95,
    duration: '3 hours',
    image: aswanImage,
    category_id: 2,
  },
  {
    id: 5,
    title: 'Alexandria Heritage Walk',
    description: 'Mediterranean charm and coastal ancient wonders.',
    price: 120,
    duration: '5 hours',
    image: alexandriaImage,
    category_id: 1,
  },
  {
    id: 6,
    title: 'Abu Simbel Custom Trip',
    description: 'Build your itinerary to the colossal temples.',
    price: 0,
    duration: 'Flexible',
    image: abuSimbelImage,
    category_id: 3,
  },
];

export const initialGalleries = [
  {
    id: 1,
    title: 'Giza Pyramids Tour',
    title_ar: 'جولة الأهرامات',
    description: 'A calm sunrise moment over the monuments.',
    description_ar: 'لحظة شروق هادئة فوق المعالم.',
    image: gizaImage,
    images: [gizaImage, cairoImage, alexandriaImage],
  },
  {
    id: 2,
    title: 'Luxor Nile Cruise',
    title_ar: 'رحلة نيلية',
    description: 'Sailing with warm sunset tones.',
    description_ar: 'إبحار مع ألوان الغروب.',
    image: luxorImage,
    images: [luxorImage, aswanImage, abuSimbelImage],
  },
  {
    id: 3,
    title: 'Aswan High Dam',
    title_ar: 'سفاري الصحراء',
    description: 'Engineering marvel and serene landscapes.',
    description_ar: 'كثبان ذهبية ومناظر هادئة.',
    image: aswanImage,
    images: [aswanImage, luxorImage, cairoImage],
  },
  {
    id: 4,
    title: 'Abu Simbel Temples',
    title_ar: 'جولة المعابد',
    description: 'Ancient architecture with soft light.',
    description_ar: 'عمارة قديمة مع ضوء ناعم.',
    image: abuSimbelImage,
    images: [abuSimbelImage, gizaImage, luxorImage],
  },
  {
    id: 5,
    title: 'Alexandria Corniche',
    title_ar: 'تجربة السوق',
    description: 'Mediterranean breeze and coastal charm.',
    description_ar: 'ممرات سوق ملونة للزوار.',
    image: alexandriaImage,
    images: [alexandriaImage, cairoImage, gizaImage],
  },
  {
    id: 6,
    title: 'Cairo City Walk',
    title_ar: 'جولة المدينة',
    description: 'Walkthrough of historic Cairo streets.',
    description_ar: 'جولة في الشوارع المميزة.',
    image: cairoImage,
    images: [cairoImage, alexandriaImage, gizaImage],
  },
];

export const demoProfileImage = profile1;
