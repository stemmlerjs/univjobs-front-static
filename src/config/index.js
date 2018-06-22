
const STATIC_URL = process.env.STATIC_URL 
  ? process.env.STATIC_URL 
  : 'https://01-staging.univjobs.ca/'

const APP_URL = process.env.APP_URL 
  ? process.APP_URL 
  : 'https://app.01-staging.univjobs.ca/';

export default {
  title: 'Univjobs - Simplifying hiring post-secondary students',
  logo: '/img/u.png',
  url: STATIC_URL,
  twitter: 'https://twitter.com/univjobsapp',
  fbAppID: '1897052653882765',
}

if (typeof window !== "undefined") {
  window.APP_URL = APP_URL;
  window.STATIC_URL = STATIC_URL;
}