/* ============================================================
   Team Member Data

   - Names verified against credits.txt
   - "portraits" array: 3 images for cast, 2 for everyone else
   - Replace bio1/bio2 lorem ipsum with real text later
   ============================================================ */

const TEAM = {
  Raluca: {
    name: 'Raluca Grigoras',
    role: 'LEAD ACTOR',
    portraits: ['Raluca1.JPG', 'Raluca2.JPG', 'Raluca3.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  Shanan: {
    name: 'Shanan Liu',
    role: 'UNDERSTUDY',
    portraits: ['Shanan1.JPG', 'Shanan2.JPG', 'Shanan3.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  Caitlin: {
    name: 'Caitlin Neall-Johnston',
    role: 'DIRECTOR, ASSISTANT PRODUCER',
    portraits: ['Caitlin1.JPG', 'Caitlin2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  Almira: {
    name: 'Almira Halkina',
    role: 'STAGE MANAGER',
    portraits: ['Almira1.JPG', 'Almira2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  Noyuri: {
    name: 'Noyuri Tsuji',
    role: 'SOUND ENGINEER',
    portraits: ['Noyuri1.JPG', 'Noyuri2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  Haya: {
    name: 'Haya Elmizwhgi',
    role: 'CREATIVE MARKETER',
    portraits: ['Haya1.JPG', 'Haya2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  Nokutenda: {
    name: 'Nokutenda Chimbetete',
    role: 'LIGHTING ENGINEER',
    portraits: ['Nokutenda1.JPG', 'Nokutenda2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  Vantrease: {
    name: 'Vantrease Wilson',
    role: 'FRONT OF HOUSE MANAGER',
    portraits: ['Vantrease1.JPG', 'Vantrease2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  Divya: {
    name: 'Divya Tarak-Balaji',
    role: 'HEAD USHER',
    portraits: ['Divya1.JPG', 'Divya2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  Xuanting: {
    name: 'Xuanting Zhao',
    role: 'PRODUCER',
    portraits: ['Xuanting1.JPG', 'Xuanting2.JPG'],
    bio1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    bio2: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
};


/* ============================================================
   Carousel Photos

   All images from Images/CarouselPhotos/.
   Displayed in groups of 3: two small stacked + one large.
   ============================================================ */

const CAROUSEL_PHOTOS = [
  'DSC06202.JPG', 'DSC06204.JPG', 'DSC06211.JPG',
  'DSC06231.JPG', 'DSC06233.JPG', 'DSC06235.JPG',
  'DSC06239.JPG', 'DSC06247.JPG', 'DSC06286.JPG',
  'DSC06288.JPG', 'DSC06293.JPG', 'DSC06298.JPG',
  'DSC06320.JPG', 'DSC06326.JPG', 'DSC06327.JPG',
  'DSC06330.JPG', 'DSC06346.JPG', 'Gaja0.JPG',
  'DSC06380.JPG', 'DSC06391.JPG', 'DSC06393.JPG',
  'DSC06401.JPG', 'DSC06405.JPG', 'DSC06407.JPG',
  'DSC06410.JPG',
];
