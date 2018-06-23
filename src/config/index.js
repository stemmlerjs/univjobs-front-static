
const STATIC_URL = process.env.STATIC_URL 
  ? process.env.STATIC_URL 
  : 'https://01-staging.univjobs.ca/'

const APP_URL = process.env.APP_URL 
  ? process.env.APP_URL 
  : 'https://app.01-staging.univjobs.ca/';

export default {
  title: 'Univjobs - Simplifying hiring post-secondary students',
  logo: '/img/u.png',
  url: STATIC_URL,
  twitter: 'https://twitter.com/univjobsapp',
  fbAppID: '1897052653882765',
  staticUrl: STATIC_URL,
  appUrl: APP_URL
}

if (typeof window !== "undefined") {
  window.APP_URL = APP_URL;
  window.STATIC_URL = STATIC_URL;
}

console.log('Node env', process.env.NODE_ENV)
console.log('active env', process.env.ACTIVE_ENV)