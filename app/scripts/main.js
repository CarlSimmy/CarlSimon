'use strict';

function createTrianglePatterns(element, colorX, colorY) {

  let pattern = Trianglify({
    width: element.offsetWidth,
    height: element.offsetHeight,
    cell_size: 110,
    variance: 1,
    x_colors: colorX,
    y_colors: colorY
  });

  let clsName = '';
  if ( element.className.includes(' ') ) {
    clsName = '.' + element.className.split(' ')[1]; // Second classname with a dot before
  } else {
    clsName = '.' + element.className;
  }

  document.querySelector(clsName).appendChild(pattern.svg()); // Appending svgs as childs

  let shineDiv = document.createElement('div');
  shineDiv.className = 'shineDiv';
  document.querySelector(clsName).appendChild(shineDiv);
}


/* ---------------------- HEADER TRIANGLES START -----------------------------*/

/* Finding all the triangle divs in the header and pusing them into an array */
function findHeaderTriangles() {
  let triangleArray = [];

  for ( let i = 1; i <= document.getElementsByClassName('diamond').length; i++ ) {
    let elementClass = `diamond-${i}`;
    triangleArray.push(document.getElementsByClassName(elementClass)[0]);
  }

  return triangleArray;
}

/* Calling createTrianglePatterns with all the header triangles */
function createHeaderTriangles() {
  findHeaderTriangles().forEach((triangle) => {
    createTrianglePatterns(triangle, 'BuPu', 'Spectral');
  });
}

/* Deleting all svgs appended to the header triangle divs (used when re-rendering) */
function deleteHeaderTriangles() {
  // Checking if a div actually contains svgs before looping to remove.
  if ( document.getElementsByClassName('diamond-1')[0].children.length ) {
    findHeaderTriangles().forEach((triangle) => {
      while (triangle.hasChildNodes())
        triangle.removeChild(triangle.firstChild);
    });
  }

  return;
}

/* Excecutes functions to re-render the triangle header on resize */
function reRenderHeaderTriangles() {
  deleteHeaderTriangles();
  createHeaderTriangles();
}

/* ----------------------- HEADER TRIANGLES END ------------------------------*/

/* To create the menu triangles */
function createMenuTriangles() {
  let elementClass = 'menu-about';
  createTrianglePatterns(document.getElementsByClassName(elementClass)[0], 'RdYlGn', 'BuPu');
}

/* To render all triangles, even ones that don't need to scale on resize */
function initializeTriangles() {
  reRenderHeaderTriangles();
  createMenuTriangles();
}

window.onload = initializeTriangles();
window.addEventListener('resize', reRenderHeaderTriangles, true);
