let wpRequire;

let startingTime = new Date().getTime();

function waitForWebpackChunkstudystream() {
    if (window.webpackChunkstudystream) {

        window.webpackChunkstudystream.push([[Math.random()], {}, (req) => {
            wpRequire = req;
        }]);

        for (const key of Object.keys(wpRequire.m)) {
            let fun = wpRequire.n(wpRequire(key))();

            if (!fun || typeof fun !== "object")
                continue;

            for (const mod of Object.values(fun)) {
                if (typeof mod === "function" && mod.hasOwnProperty('prototype') && mod.prototype.hasOwnProperty('adsDisabled')) {
                    mod.prototype.adsDisabled = () => true;
                    console.log("[Bypass Pin] Now you can pin up to the maximum of 20 users!");
                }
            }
        }
    } else {
        if (new Date().getTime() - startingTime > 30000) {
            console.log("[Bypass Pin] Timeout! Please refresh the page and try again.");
            return;
        }

        console.log("[Bypass Pin] Waiting for webpackChunkstudystream to load...");
        setTimeout(waitForWebpackChunkstudystream, 500); // Check again after 100 milliseconds
    }
}

waitForWebpackChunkstudystream();