/* compile with https://caiorss.github.io/bookmarklet-maker/ */

/* Instagram and Facebook */
if (typeof labelImages !== 'undefined') {
  let labelImages;
}
labelImages = document.querySelectorAll('img');
labelImages.forEach(img => {
  if (img.clientWidth > 100) {
  let alt = img.getAttribute('alt');
  let vis = document.createElement('div');
  vis.style.setProperty('padding', '10px');
  vis.style.setProperty('margin-top', '10px;');
  vis.style.setProperty('border', '1px solid');
  vis.style.setProperty('border-left', '0');
  vis.style.setProperty('box-shadow', '3px 3px 3px #000');
  vis.style.setProperty('position', 'absolute');
  vis.style.setProperty('z-index', '1000');
  vis.style.setProperty('color', '#fff');
  vis.style.setProperty('top', '10px');
  vis.style.setProperty('line-height', '1.4');
  if (alt.length > 0) {
    vis.style.setProperty('background', 'purple');
    vis.textContent = 'alt text: ' + alt;
  } else {
    vis.style.setProperty('background', 'darkred');
    vis.textContent = 'no alt text';
  }
  img.insertAdjacentElement('beforebegin', vis);
  }
})
