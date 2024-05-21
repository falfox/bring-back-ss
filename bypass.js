let wpRequire;
window.webpackChunkstudystream.push([[Math.random()], {}, (r) => { wpRequire = r; }]);

for (const [k, m] of Object.entries(wpRequire.m)) {
  let f = wpRequire.n(wpRequire(k))();
  if (!f || typeof f !== "object") continue;
  for (const mod of Object.values(f)) {
    if (typeof mod === "function" && mod.hasOwnProperty('prototype') && mod.prototype.hasOwnProperty('adsDisabled')) {
      Object.defineProperty(mod.prototype, 'adsDisabled', {
        get: function() { return true; },
        configurable: true
      });
      console.log("[Bypass Pin] Now you can pin up to the maximum of 20 users!");
    }
  }
}
