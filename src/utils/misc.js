export function scrollToY(scrollTargetY, speed, easing, baseElement) {
  // scrollTargetY: the target scrollY property of the window
  // speed: time in pixels per second
  // easing: easing equation to use
  // baseElement: (optional), if provided, scrolls to the top of this element instead.

  var scrollY = window.scrollY || document.documentElement.scrollTop,
    scrollTargetY = scrollTargetY || 0,
    speed = speed || 2000,
    easing = easing || 'easeOutSine',
    currentTime = 0

  // min time .1, max time .8 seconds
  var time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  )

  // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  var easingEquations = {
    easeOutSine: function(pos) {
      return Math.sin(pos * (Math.PI / 2))
    },
    easeInOutSine: function(pos) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1)
    },
    easeInOutQuint: function(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5)
      }
      return 0.5 * (Math.pow(pos - 2, 5) + 2)
    },
  }

  // add animation loop
  function tick() {
    currentTime += 1 / 60

    var p = currentTime / time
    var t = easingEquations[easing](p)

    if (p < 1) {
      requestAnimFrame(tick)

      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
    } else {
      window.scrollTo(0, scrollTargetY)
    }
  }

  // call it once to get started
  tick()
}

typeof window !== 'undefined' &&
  (window.requestAnimFrame = (function() {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60)
      }
    )
  })())

export function doesLogoExist(logoUrl) {
  if (
    logoUrl == false ||
    logoUrl == '' ||
    logoUrl == 'null' ||
    logoUrl == null
  ) {
    return false
  }
  return true
}

export function doesImageExistOnServer(logoUrl) {
  var image = new Image()
  image.src = logoUrl

  return new Promise((resolve, reject) => {
    image.onload = function() {
      return resolve(true)
    }
    image.onerror = function() {
      return resolve(false)
    }
  })
}
