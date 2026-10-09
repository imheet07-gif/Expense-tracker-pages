// Anonymous visit and Copy-button counts for these pages. Uses GoatCounter: no cookies, no personal details.
// To turn it on, put your GoatCounter site code (the part before .goatcounter.com) in SITE below.
// While SITE is empty, nothing is loaded and nothing is sent. Browsers that send "Do Not Track" are never counted.
(function () {
  var SITE = ""
  window.track = function (name, title) {
    var send = function () { try { window.goatcounter.count({ path: name, title: title || name, event: true }); return true } catch (e) { return false } }
    if (!SITE || !window.goatcounter || !window.goatcounter.count || !send()) setTimeout(function () { if (SITE) send() }, 1500)
  }
  if (!SITE || navigator.doNotTrack === "1" || window.doNotTrack === "1") return
  var s = document.createElement("script")
  s.async = true
  s.src = "https://gc.zgo.at/count.js"
  s.setAttribute("data-goatcounter", "https://" + SITE + ".goatcounter.com/count")
  document.head.appendChild(s)
  document.addEventListener("DOMContentLoaded", function () {
    var p = document.createElement("p")
    p.className = "small"
    p.style.cssText = "margin:24px 0 0;opacity:.8"
    p.textContent = "This page counts visits and Copy-button taps anonymously: no cookies and no personal details."
    ;(document.querySelector("main") || document.body).appendChild(p)
  })
})()
