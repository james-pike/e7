const staticPaths = new Set(["/404.html/","/_headers","/favicon.svg","/images/Palette.svg","/images/a1.webp","/images/a2.webp","/images/contact.jpg","/images/diane.webp","/images/ginger.webp","/images/hb1.svg","/images/hero.jpg","/images/hero.svg","/images/hero1.png","/images/jojo.webp","/images/kandis.webp","/images/mary.webp","/images/michelle.webp","/images/natalie.webp","/images/placeholder.png","/images/steps.webp","/images/vessel.svg","/images/webdev-ca-text.svg","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };