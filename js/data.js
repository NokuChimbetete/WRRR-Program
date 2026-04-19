/* ============================================================
   Team Member Data

   - Names verified against credits.txt
   - "portraits" array: 3 images for cast, 2 for everyone else
   ============================================================ */

const TEAM = {
  Raluca: {
    name: 'Raluca Grigoras',
    role: 'LEAD ACTOR',
    portraits: ['Raluca1.webp', 'Raluca2.webp', 'Raluca3.webp'],
    bio1: 'Discovering new interests everywhere she goes, yet two things always stay the same: her love for Brazil(ians:) and the satisfaction in a completely random, aimless walk.',
    bio2: "Raluca has steadily progressed in theatre in college: from being a hippie teacher in Heathers and a Space Age Bachelor Man (don't ask) in Ride the Cyclone, to directing Agora's biggest production, Wicked. Now, she's embarking in the even more playful world of improv, which is becoming her favorite form of self expression.",
  },
  Shanan: {
    name: 'Shanan Liu',
    role: 'UNDERSTUDY',
    portraits: ['Shanan1.webp', 'Shanan2.webp', 'Shanan3.webp'],
    bio1: 'Not quite Chinese and definitely not American, Shanan traverses the world using theater to say "I love you."',
    bio2: 'Shanan has been making theater for a long time, doing everything from writing to choreographing, directing, acting, designing, and producing. She had never done improv and had never expected this much fun being involved in every rehearsal for WRRR!',
  },
  Caitlin: {
    name: 'Caitlin Neall-Johnston',
    role: 'DIRECTOR, ASSISTANT PRODUCER',
    portraits: ['Caitlin1.webp', 'Caitlin2.webp'],
    bio1: 'When not on stage or in the rehearsal room, you can find Caitlin climbing trees, examining rocks, or coworking on assigments for university. ',
    bio2: 'Caitlin has experience acting in theatre productions at a high-school and university level, and has recently found so much joy in leading rehearsals and organising productions as director for HOWL theatre group.',
  },
  Almira: {
    name: 'Almira Halkina',
    role: 'STAGE MANAGER',
    portraits: ['Almira1.webp', 'Almira2.webp'],
    bio1: 'Almira loves big ideas, spontaneous conversations, and getting involved in anything from performing and community projects to editing art and creating spaces for it.',
    bio2: 'Excited to see the magic unfold on the stage, Almira is passionate about making sure everything behind the scenes runs smoothly and with just the right amount of chaos.',
  },
  Noyuri: {
    name: 'Noyuri Tsuji',
    role: 'SOUND ENGINEER',
    portraits: ['Noyuri1.webp', 'Noyuri2.webp'],
    bio1: 'Born and raised in a port city in Japan, Noyuri is on a quest to find peace at the beach everywhere around the world — otherwise her mental health is hugely undermined.',
    bio2: "Noyuri has been part of the sound engineering team for two years across various musical productions, and she is continuing her position in White Rabbit Red Rabbit! She is keen to deliver the actor's amazing performance to every single person in the audience so they can get lost in the magical world (in a good way!).",
  },
  Haya: {
    name: 'Haya Elmizwhgi',
    role: 'CREATIVE MARKETER',
    portraits: ['Haya1.webp', 'Haya2.webp'],
    bio1: "When she's not busy getting lost (definitely intentionally) in a new rotation city, or trying to enter yet another country without a valid visa, she can be found in the corner of any common space, sewing a Quinquatria dress or writing yet another smutty poem :)",
    bio2: "If you couldn't tell from the funky name, Haya believes that WRRR is going to be such an interesting and exhilarating experience — this is the first proper production she has been a part of, aside from the semesterly flashmobs and Hamilton singalongs of course, and so she is excited to see how this unfolds. You should too, wrrr.",
  },
  Nokutenda: {
    name: 'Nokutenda Chimbetete',
    role: 'LIGHTING ENGINEER',
    portraits: ['Nokutenda1.webp', 'Nokutenda2.webp'],
    bio1: 'Noku loves videogames. He was briefly the best Tekken player in Zimbabwe.',
    bio2: 'Noku has apprenticed under one of the best lighting designers and operators (he knows). He is very excited to operate the lights in improvised fashion for this momentous production.',
  },
  Vantrease: {
    name: 'Vantrease Wilson',
    role: 'FINANCE DIRECTOR',
    portraits: ['Vantrease1.webp', 'Vantrease2.webp'],
    bio1: 'Hailing from NYC, Van is always excited to explore new cities and nature!',
    bio2: 'Although Van has participated in a variety of shows from In The Heights to Legally Blonde, in White Rabbit Red Rabbit, Van has taken the lead on finance operations, securing funding to bring the show to life. Beyond finance, from logistics to creative marketing plans and leading front of house, Van has enjoyed it all these past few months!',
  },
  Divya: {
    name: 'Divya Tarak-Balaji',
    role: 'HEAD USHER',
    portraits: ['Divya1.webp', 'Divya2.webp'],
    bio1: 'Divya loves writing, spreading silly movements, dancing and creating art.',
    bio2: 'Divya is new to the world of theatre and only started doing improv in the fall, learning the basics of theatre from her incredible teacher, Caitlin. She is excited to help with WRRR in any way she can after having seen how much effort the organising team has put into this production over the semester.',
  },
  Xuanting: {
    name: 'Xuanting Zhao',
    role: 'PRODUCER',
    portraits: ['Xuanting1.webp', 'Xuanting2.webp'],
    bio1: "Xuanting's last interaction with a rabbit was when her brother's rabbit hopped away into the beautiful greenery of nature.",
    bio2: 'Xuanting has been an avid musical fan since Hamilton (she has seen this three times live), and got involved in organising theatre performances in her first year of university. In her capacity as producer, Xuanting is responsible for managing communication with the production company, ensuring the practical aspects of a production are on track, and sending many calendar invites.',
  },
};


/* ============================================================
   Carousel Photos

   All images from Images/CarouselPhotos/.
   Displayed in groups of 3: two small stacked + one large.
   ============================================================ */

const CAROUSEL_PHOTOS = [
  'DSC06202.webp', 'DSC06204.webp', 'DSC06211.webp',
  'DSC06231.webp', 'DSC06233.webp', 'DSC06235.webp',
  'DSC06239.webp', 'DSC06247.webp', 'DSC06286.webp',
  'DSC06288.webp', 'DSC06293.webp', 'DSC06298.webp',
  'DSC06320.webp', 'DSC06326.webp', 'DSC06327.webp',
  'DSC06330.webp', 'DSC06346.webp', 'Gaja0.webp',
  'DSC06380.webp', 'DSC06391.webp', 'DSC06393.webp',
  'DSC06401.webp', 'DSC06405.webp', 'DSC06407.webp',
  'DSC06410.webp',
];
