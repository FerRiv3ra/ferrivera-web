export type socialMediaType =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'email'
  | 'resume';

export const useContact = (socialType: socialMediaType) => {
  const socialMedia = {
    github: {
      url: 'https://github.com/FerRiv3ra',
      urlImg:
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/github_xtn3ym.png',
      title: 'GitHub',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/ferriv3ra/',
      urlImg:
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685556979/FerRivera%20Web/Logos/linkedInRound_zsofrj.png',
      title: 'LinkedIn',
    },
    twitter: {
      url: 'https://twitter.com/FerRiv3ra',
      urlImg:
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685556979/FerRivera%20Web/Logos/twitterRound_c93qce.png',
      title: 'Twitter',
    },
    email: {
      url: 'mailto:fer_r25@me.com',
      urlImg:
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685557206/FerRivera%20Web/Logos/email_wzt66b.png',
      title: 'Email',
    },
    resume: {
      url: 'https://drive.google.com/file/d/1vcENegEcgJp5ys6HIyZxj3YtY5qwa0H6/view?usp=drive_link',
      urlImg:
        'https://res.cloudinary.com/fercloudinary/image/upload/v1687992185/FerRivera%20Web/Logos/resume1_gp2o8q.png',
      title: 'CV',
    },
  };

  return socialMedia[socialType];
};
