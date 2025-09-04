const staticPaths = new Set(["/404.html/","/_headers","/favicon.svg","/images/a2.webp","/images/a3.jpg","/images/bowls.jpeg","/images/diane.webp","/images/flag.webp","/images/g1.jpeg","/images/g2.jpeg","/images/g3.jpeg","/images/g4.jpeg","/images/g5.jpeg","/images/g55.jpeg","/images/g6.jpeg","/images/g7.jpeg","/images/g8.jpg","/images/g9.jpeg","/images/ginger.webp","/images/hero.webp","/images/hp2.png","/images/image.png","/images/jojo.webp","/images/kandis.webp","/images/labyrinth.jpeg","/images/lamma.jpg","/images/land.jpeg","/images/land.png","/images/lantern.jpeg","/images/logo.svg","/images/logo2-cropped.svg","/images/logo2.svg","/images/logo22.svg","/images/maria2.jpg","/images/mary.webp","/images/michelle.webp","/images/mug.jpg","/images/natalie.webp","/images/orc.png","/images/parkdale.png","/images/pleo.png","/images/somerset.webp","/images/soulspace.png","/images/space.jpeg","/images/summer.jpg","/images/turtle.jpeg","/images/welcome.jpeg","/images/welcome.png","/images/wellington.jpeg","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml"]);
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