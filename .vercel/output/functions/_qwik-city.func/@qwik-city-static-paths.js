const staticPaths = new Set(["/404.html/","/_headers","/favicon.svg","/images/a2.webp","/images/a3.jpg","/images/diane.webp","/images/g1.jpeg","/images/g2.jpeg","/images/g3.jpeg","/images/g4.jpeg","/images/g5.jpeg","/images/ginger.webp","/images/hero.webp","/images/hp2.png","/images/jojo.webp","/images/kandis.webp","/images/labyrinth.jpeg","/images/lamma.jpg","/images/logo.svg","/images/logo2.svg","/images/maria2.jpg","/images/mary.webp","/images/michelle.webp","/images/natalie.webp","/images/orc.png","/images/parkdale.png","/images/pleo.png","/images/somerset.webp","/images/soulspace.png","/images/space.jpeg","/images/summer.jpg","/images/wellington.jpeg","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml"]);
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