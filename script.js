/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function chartingMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".chartClickLayer")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};


//Charts the tooth as missing
function missing() {
  document.getElementById("tooth").innerHTML = `
  <svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
   <g>
   <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
   <rect id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#000000" fill="#fff"/>
   <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
   <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
   <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
   <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
   <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
   <line stroke-width="3" id="svg_6" y2="2.07181" x2="2.35366" y1="54.59214" x1="56.3374" stroke="#ff0000" fill="none"/>
   <line stroke-width="3" id="svg_7" y2="54.75474" x2="2.02846" y1="2.39702" x1="56.3374" stroke="#ff0000" fill="none"/>
    <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
   </g>
  </svg>`;
}

//Charts the tooth as caries
function caries() {
  let cariesSurfaces = prompt("Enter carious surfaces: .. [M / O / D / B / P]");
  document.getElementById("tooth").innerHTML =  `<svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
  <g>
  <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
  <rect id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#000000" fill="#fff"/>
  <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
  <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
  <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
  <ellipse ry="25.04065" rx="25.85366" id="svg_8" cy="28.57588" cx="29.34553" stroke-width="3" stroke="#ff0000" fill="#ff0000"/>
  <text transform="matrix(0.616101, 0, 0, 0.638818, 19.071, 13.3949)" font-style="normal" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="20" id="svg_9" y="30.34194" x="-19.87535" stroke-width="0" stroke="#ff0000" fill="#ffffff">${cariesSurfaces}</text>
 <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
  </g>
 </svg>`;
}

//Charts the tooth as pap
function pap() {
  document.getElementById("tooth").innerHTML = `
  <svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
   <g>
   <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
   <rect stroke-dasharray="5,2,2,2,2,2" id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#ff0000" fill="#fff"/>
   <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
   <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
   <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
   <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
   <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
   <path id="svg_23" d="m23.05583,75.71547l0.745,-0.54203l0.745,0.54203l-0.28456,0.87702l-0.92087,0l-0.28456,-0.87702z" stroke-dasharray="5,2,2,2" stroke-width="3" stroke="#ff0000" fill="#ffffff"/>
   <path id="svg_24" d="m40.04364,73.61222l0.745,-0.54203l0.745,0.54203l-0.28456,0.87702l-0.92087,0l-0.28456,-0.87702z" stroke-dasharray="5,2,2,2" stroke-width="3" stroke="#ff0000" fill="#ffffff"/>
    <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
   </g>
  </svg>`;
}

//Charts the tooth as filling
function filling() {
  let filledSurfaces = prompt("Enter filled surfaces: .. [M / O / D / B / P]");
  document.getElementById("tooth").innerHTML = `
  <svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
   <g>
   <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
   <rect id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#000000" fill="#fff"/>
   <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
   <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
   <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
   <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
   <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
   <ellipse ry="25.04065" rx="25.85366" id="svg_8" cy="28.57588" cx="29.34553" stroke-width="3" stroke="#000000" fill="#000000"/>
   <text transform="matrix(0.616101, 0, 0, 0.638818, 19.071, 13.3949)" font-style="normal" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="20" id="svg_9" y="30.34194" x="-19.87535" stroke-width="0" stroke="#ff0000" fill="#ffffff">${filledSurfaces}</text>
   <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
   </g>
  </svg>
  `;
}

//Charts tooth as crown
function crown() {
  document.getElementById("tooth").innerHTML = `
  <svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
  <g>
  <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
  <rect id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#000000" fill="#fff"/>
  <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
  <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
  <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
  <path id="svg_10" d="m9.16659,21.33363l8.21048,-5.6524l8.2105,5.6524l-3.13612,9.14581l-10.14874,0l-3.13613,-9.14581z" stroke-width="3" stroke="#FFE7A2" fill="#FFE7A2"/>
  <path id="svg_18" d="m22.33732,21.17103l8.21048,-5.6524l8.2105,5.6524l-3.13612,9.14581l-10.14874,0l-3.13613,-9.14581z" stroke-width="3" stroke="#FFE7A2" fill="#FFE7A2"/>
  <path id="svg_19" d="m35.18285,21.00842l8.21048,-5.6524l8.2105,5.6524l-3.13612,9.14581l-10.14874,0l-3.13613,-9.14581z" stroke-width="3" stroke="#FFE7A2" fill="#FFE7A2"/>
  <rect id="svg_20" height="15.44715" width="35.44715" y="32.25609" x="12.76016" stroke-width="3" stroke="#FFE7A2" fill="#FFE7A2"/>
  <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
  </g>
  </svg>`;
}

//Charts tooth as implant
function implant() {
  document.getElementById("tooth").innerHTML = `
  <svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
  <g>
  <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
  <rect id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#000000" fill="#fff"/>
  <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
  <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
  <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
  <path id="svg_23" d="m23.05583,75.71547l0.745,-0.54203l0.745,0.54203l-0.28456,0.87702l-0.92087,0l-0.28456,-0.87702z" stroke-dasharray="5,2,2,2" stroke-width="3" stroke="#ff0000" fill="#ffffff"/>
  <path id="svg_24" d="m40.04364,73.61222l0.745,-0.54203l0.745,0.54203l-0.28456,0.87702l-0.92087,0l-0.28456,-0.87702z" stroke-dasharray="5,2,2,2" stroke-width="3" stroke="#ff0000" fill="#ffffff"/>
  <path id="svg_25" d="m17.23485,7.35275l4.84779,42.92554l16.15929,0l4.84778,-42.92554l-25.85486,0z" stroke-width="2" stroke="#999999" fill="#444444"/>
  <line id="svg_26" y2="15.67073" x2="44.63008" y1="15.67073" x1="15.68699" stroke-width="2" stroke="#999999" fill="none"/>
  <line id="svg_27" y2="22.5" x2="44.30488" y1="22.5" x1="16.1748" stroke-width="2" stroke="#999999" fill="none"/>
  <line id="svg_28" y2="29.00406" x2="43.65447" y1="29.00406" x1="16.9878" stroke-width="2" stroke="#999999" fill="none"/>
  <line id="svg_29" y2="35.67073" x2="42.84146" y1="35.67073" x1="17.63821" stroke-width="2" stroke="#999999" fill="none"/>
  <line id="svg_30" y2="41.84959" x2="42.19106" y1="41.84959" x1="18.45122" stroke-width="2" stroke="#999999" fill="none"/>
  <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
  </g>
  </svg>`
}

//Charts tooth as healthy
function healthy() {
  document.getElementById("tooth").innerHTML = `
  <svg id="tooth" width="59" height="57" xmlns="http://www.w3.org/2000/svg">
  <g>
  <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
  <rect id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#000000" fill="#fff"/>
  <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
  <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
  <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
  <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
  <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
  </g>
  </svg>`;
  }

