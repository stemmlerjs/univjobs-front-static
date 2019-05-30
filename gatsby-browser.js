
require('./src/styles/rodal.css')

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

/**
      __                 _                 _       _       
  / /  ___   __ _  __| |  ___  ___ _ __(_)_ __ | |_ ___ 
 / /  / _ \ / _` |/ _` | / __|/ __| '__| | '_ \| __/ __|
/ /__| (_) | (_| | (_| | \__ \ (__| |  | | |_) | |_\__ \
\____/\___/ \__,_|\__,_| |___/\___|_|  |_| .__/ \__|___/
                                         |_|            
 */

/**
 * Load all the scripts that we need to globally import, here.
 */

;(function(e, t) {
  var n = e.amplitude || { _q: [], _iq: {} }
  var r = t.createElement('script')
  r.type = 'text/javascript'
  r.async = true
  r.src = 'https://cdn.amplitude.com/libs/amplitude-4.4.0-min.gz.js'
  r.onload = function() {
    if (e.amplitude.runQueuedFunctions) {
      e.amplitude.runQueuedFunctions()
    } else {
      console.log('[Amplitude] Error: could not load SDK')
    }
  }
  var i = t.getElementsByTagName('script')[0]
  i.parentNode.insertBefore(r, i)
  function s(e, t) {
    e.prototype[t] = function() {
      this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
      return this
    }
  }
  var o = function() {
    this._q = []
    return this
  }
  var a = ['add', 'append', 'clearAll', 'prepend', 'set', 'setOnce', 'unset']
  for (var u = 0; u < a.length; u++) {
    s(o, a[u])
  }
  n.Identify = o
  var c = function() {
    this._q = []
    return this
  }
  var l = [
    'setProductId',
    'setQuantity',
    'setPrice',
    'setRevenueType',
    'setEventProperties',
  ]
  for (var p = 0; p < l.length; p++) {
    s(c, l[p])
  }
  n.Revenue = c
  var d = [
    'init',
    'logEvent',
    'logRevenue',
    'setUserId',
    'setUserProperties',
    'setOptOut',
    'setVersionName',
    'setDomain',
    'setDeviceId',
    'setGlobalUserProperties',
    'identify',
    'clearUserProperties',
    'setGroup',
    'logRevenueV2',
    'regenerateDeviceId',
    'logEventWithTimestamp',
    'logEventWithGroups',
    'setSessionId',
    'resetSessionId',
  ]
  function v(e) {
    function t(t) {
      e[t] = function() {
        e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)))
      }
    }
    for (var n = 0; n < d.length; n++) {
      t(d[n])
    }
  }
  v(n)
  n.getInstance = function(e) {
    e = (!e || e.length === 0 ? '$default_instance' : e).toLowerCase()
    if (!n._iq.hasOwnProperty(e)) {
      n._iq[e] = { _q: [] }
      v(n._iq[e])
    }
    return n._iq[e]
  }
  e.amplitude = n
})(window, document)

// ===========================================
// ===========================================
// ... now that that's done and over with, here's the browser code.

const currentEnv = process.env.CURRENT_ENV
const amplitudeAPIKey = process.env.AMPLITUDE_API_KEY
const isProd = currentEnv === 'production'
let amplitudeLoaded = false;

/**
 * @func setUserInfo
 * @desc We can set additional user information using this method.
 *
 * @param {Object} info the details we want to set
 */

async function setUserInfo(info) {
  let identify = new amplitude.Identify()
  Object.keys(info).forEach(key => {
    identify = identify.set(key, info[key])
  })
  const instance = await getInstance();
  instance.identify(identify);
}

/**
 * @func AnalyticsEvent
 * @desc Create a new event to dispatch the action
 * to the analytics service.
 */

async function AnalyticsEvent(action, properties = {}) {
  const amplitude = await getInstance()
  console.log(`[Amplitude Analytics]: Dispatching event ${action}`)
  // if (!~actions.indexOf(action))
  //   throw new Error("Amplitude action not in action list");
  amplitude.logEvent(action, properties)
}

/**
 * @func IdentifyUser
 * @desc Identify the current user in order to ensure that
 * we can know who did what.
 */

async function IdentifyUser(email, props) {
  const amplitude = await getInstance()
  amplitude.setUserId(email)
  if (props) amplitude.setUserProperties(props)
}

function getInstance() {
  return new Promise((resolve, reject) => {
    wait(() => {
      resolve(window.amplitude.getInstance())
    })
  })
}

function wait (promiseToResolve) {
  if (amplitudeLoaded === true) {
    promiseToResolve()
  }
  else {
    setTimeout(wait.bind(null, promiseToResolve), 250);
  }
}


const initializeAnalytics = () => {
  function afterAmplitudeLoaded () {
    window.amplitude.getInstance()
    .init(
      amplitudeAPIKey,
      null,
      {
        // optional configuration options
        saveEvents: true,
        includeUtm: true,
        includeReferrer: true,
      },
      instance => {
        //Contains core info. Can be reinitialized if needed.
        window.AmplitudeInstance = instance
        amplitudeLoaded = true;
      }
    )
  }

  Object.defineProperty(window, 'amplitude', {
    configurable: true,
    enumerable: true,
    get: function() {
      return this._amplitude;
    },
    set: function(amplitude) {
      this._amplitude = amplitude;
      afterAmplitudeLoaded();
    }
  });
}

initializeAnalytics()
window.AnalyticsEvent = AnalyticsEvent
window.IdentifyUser = IdentifyUser
window.SetUserInfo = setUserInfo

exports.onClientEntry = () => {
  console.log(`[Univjobs]: Hello! ${currentEnv}`)

  /**
   * Initialized Amplitudes new anonymous user identity
   *
   * Check if user is found in amplitude through device id
   * Yes, establish that this is a known user
   * No, establish a new user
   */

  window.AnalyticsEvent('Landing_page_view')

  if (isProd && typeof window !== undefined) {
    require('./gatsby-prod-scripts')
  }
}

window.onmessage = function(e) {
  if (e.origin !== "https://app.univjobs.ca") {
    return;
  }
  var payload = JSON.parse(e.data);
  localStorage.setItem(payload.key, JSON.stringify(payload.data));
};