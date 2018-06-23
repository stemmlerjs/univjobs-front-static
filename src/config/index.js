

let config = {
  title: 'Univjobs - Simplifying hiring post-secondary students',
  logo: '/img/u.png',
  twitter: 'https://twitter.com/univjobsapp',
  fbAppID: '1897052653882765',
  url: process.env.STATIC_URL ? process.env.STATIC_URL : 'https://01-staging.univjobs.ca/',
  appUrl: process.env.APP_URL ? process.env.APP_URL : 'https://app.01-staging.univjobs.ca/',
  staticUrl: process.env.STATIC_URL ? process.env.STATIC_URL : 'https://01-staging.univjobs.ca/',
}

export default config;

console.log(process.env.BRANCH)

if (typeof window !== "undefined") {
  window.config = config;
}