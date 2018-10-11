

let config = {
  title: 'Univjobs - Simplifying hiring post-secondary students',
  logo: '/img/u.png',
  image: '/img/u.png',
  twitter: 'https://twitter.com/univjobsapp',
  fbAppID: '1897052653882765',
  url: process.env.GATSBY_STATIC_URL ? process.env.GATSBY_STATIC_URL : 'https://01-staging.univjobs.ca/',
  appUrl: process.env.GATSBY_APP_URL ? process.env.GATSBY_APP_URL : 'https://app.01-staging.univjobs.ca/',
  staticUrl: process.env.GATSBY_STATIC_URL ? process.env.GATSBY_STATIC_URL : 'https://01-staging.univjobs.ca/',
  apiUrl: process.env.UNIVJOBS_DATASOURCE_URL ? process.env.UNIVJOBS_DATASOURCE_URL : 'https://api.01-staging.univjobs.ca/'
}

export default config;

console.log(process.env.BRANCH)

if (typeof window !== "undefined") {
  window.config = config;
}