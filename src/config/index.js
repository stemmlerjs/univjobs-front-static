

let config = {
  title: 'Univjobs - Simplifying hiring post-secondary students',
  logo: '/img/u.png',
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

  if (process.env.CURRENT_ENV === "production") {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '336246053615452');
    fbq('track', 'PageView');
  }
}

