const constants = {
  email: 'nevos12@gmail.com',
  github: {
    text: 'github.com/Nevoss',
    url: 'https://github.com/Nevoss',
  },
  jobTitle: 'Full Stack Web Developer',
  image: '/me.jpeg',
}

module.exports = {
  languages: ['en', 'heb'],
  intros: [
    {
      id: 'en',
      direction: 'ltr',
      name: 'Nevo Golan',
      jobTitle: constants.jobTitle,
      email: constants.email,
      github: constants.github,
      image: constants.image,
      openingSentence:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac enim consequat, dignissim elit sed, rutrum magna. Praesent viverra mollis neque non dictum. Sed sagittis urna et purus rhoncus ornare. Cras vitae pellentesque enim. Cras at felis sit amet nibh tincidunt tempor ut et augue. Suspendisse justo ligula.',
    },
    {
      id: 'heb',
      direction: 'rtl',
      name: 'נבו גולן',
      jobTitle: constants.jobTitle,
      email: constants.email,
      github: constants.github,
      image: constants.image,
      openingSentence:
        'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.',
    },
  ],
  experience: [
    {
      id: 'en',
      data: [
        {
          title: 'Hakaveret CRM',
          jobTitle: 'Full Stack Web Developer',
          workPeriod: {
            start: '2017-11',
            end: '2019-10',
          },
          descriptionPoints: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          ],
        },
        {
          title: 'WiseGroup',
          jobTitle: 'Full Stack Web Developer',
          workPeriod: {
            start: '2016-10',
            end: '2017-10',
          },
          descriptionPoints: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          ],
        },
      ],
    },
    {
      id: 'heb',
    },
  ],
  education: [
    {
      id: 'en',
      data: [
        {
          title: 'PHP Web Develop Course',
          institution: 'John Brice',
          period: '2015 - 2016',
        },
      ],
    },
    {
      id: 'heb',
    },
  ],
}
