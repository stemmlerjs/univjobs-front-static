let config = {
  title: 'Univjobs - Jobs for Students and Recent Grads',
  description:
    'A place for students and recent grads to find jobs to earn cash and launch their careers.',
  twitter: '@univjobsapp',
  fbAppID: '1897052653882765',
  url: process.env.GATSBY_STATIC_URL
    ? process.env.GATSBY_STATIC_URL
    : 'https://01-staging.univjobs.ca/',
  appUrl: process.env.GATSBY_APP_URL
    ? process.env.GATSBY_APP_URL
    : 'https://app.01-staging.univjobs.ca/',
  staticUrl: process.env.GATSBY_STATIC_URL
    ? process.env.GATSBY_STATIC_URL
    : 'https://01-staging.univjobs.ca/',
  apiUrl: process.env.UNIVJOBS_DATASOURCE_URL
    ? process.env.UNIVJOBS_DATASOURCE_URL
    : 'https://api.01-staging.univjobs.ca/',
  assets: {
    image: {
      logo:
        'https://s3.amazonaws.com/assets.univjobs/images/icons/unicorn-social.jpg',
      cirularLogo:
        'https://s3.amazonaws.com/assets.univjobs/images/front/unicorn-social.png',
      grayLogo:
        'https://s3.amazonaws.com/assets.univjobs/images/icons/unicorn-grey.jpg',
      univjobsLogo:
        'https://s3.amazonaws.com/assets.univjobs/svg/univjobs_full.svg',
    },
  },
}

export default config

console.log(process.env.BRANCH)

if (typeof window !== 'undefined') {
  window.config = config
}
