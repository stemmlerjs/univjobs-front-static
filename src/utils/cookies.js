import queryString from 'query-string'

if (typeof window !== 'undefined') {
  window.setCookie = function setCookie (name, value, domain) {
    const isLocalDomain = domain.indexOf('app.localhost') !== -1;

    const prodDomain = `;domain=.${domain}`;
    const localHostDomain = ";.app.localhost";
    domain = isLocalDomain ? localHostDomain : prodDomain;
    console.log(name + "=" + (value || "") + domain)
    document.cookie = name + "=" + (value || "") + domain;
  }
  
  
  window.getCookie = function getCookie (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  
  window.eraseCookie = function eraseCookie (name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
  }

  /**
   * @function saveReferralTokenIfExists
   * @desc This function looks for the referral token and then
   * saves it to the cookies if it does in fact exist.
   * If we're a localhost, it should use app.localhost as the domain
   * in order to allow us to get this to work between domains.
   * @see https://stackoverflow.com/a/22070413/3627442
   */

  const saveReferralTokenIfExists = () => {
    try {
      const referralCodeCookieName = 'referral_code';
      const values = queryString.parse(window.location.search)
      if (values.referral_code) {
        const code = values.referral_code;
        console.log('[Referrals]: Referral code found. Saving to cookies', code);
        const domain = window.config.domain;
        window.setCookie(referralCodeCookieName, code, domain);
      }
    } catch (err) {
      console.log(err);
      setTimeout(saveReferralTokenIfExists, 200);
    }
  }
  
  setTimeout(saveReferralTokenIfExists, 0);
}



