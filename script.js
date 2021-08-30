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

// SVG for a healthy tooth

const healthyTooth = `
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

// SVG for a missing tooth

const missingTooth =`
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

// SVG for a carious tooth


const cariesTooth =`
<svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
 <g>
 <rect transform="rotate(0.358989, 29.4129, 28.5451)" x="2.93038" stroke-width="2" id="svg_16" height="51.15439" width="52.96506" y="2.96792" stroke="#fff" fill="#ffffff" rx="1"/>
 <rect id="svg_4" height="55.44715" width="57.07317" y="0.771" x="0.89024" stroke-width="2" stroke="#000000" fill="#fff"/>
 <rect stroke-width="2" id="svg_1" height="33.0622" width="33.30143" y="11.55214" x="13.09723" stroke="#000" fill="#ffffff"/>
 <line stroke-width="2" transform="rotate(90, 52.221, 6.16886)" id="svg_5" y2="-0.08128" x2="46.35388" y1="12.419" x1="58.08813" stroke="#000" fill="none"/>
 <line stroke-width="2" transform="rotate(90, 8.06476, 49.284)" id="svg_12" y2="42.83762" x2="2.15931" y1="55.7304" x1="13.9702" stroke="#000" fill="none"/>
 <line stroke-width="2" id="svg_13" y2="43.38329" x2="45.32613" y1="55.48174" x1="57.04172" stroke="#000" fill="none"/>
 <line stroke-width="2" id="svg_15" y2="0.71359" x2="0.96312" y1="11.70846" x1="13.24926" stroke="#000" fill="none"/>
 <ellipse ry="25.04065" rx="25.85366" id="svg_8" cy="28.57588" cx="29.34553" stroke-width="3" stroke="#ff0000" fill="#ff0000"/>
 <text transform="matrix(0.616101, 0, 0, 0.638818, 19.071, 13.3949)" font-style="normal" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="20" id="svg_9" y="30.34194" x="-19.87535" stroke-width="0" stroke="#ff0000" fill="#ffffff">MODBP</text>
<rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
 </g>
</svg>`;

// SVG for a pap tooth

const papTooth =`
<svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
 <g>
 <rect rx="1" fill="#fff" stroke="#000" y="-0.13067" width="59.13876" height="57.19399" id="svg_16" stroke-width="2"/>
 <rect fill="#ffffff" stroke="#000" x="13.09723" y="11.55214" width="33.30143" height="33.0622" id="svg_1"/>
 <line fill="none" stroke="#000" x1="58.16945" y1="12.66288" x2="46.10999" y2="0" id="svg_5" transform="rotate(90, 52.1397, 6.33144)" stroke-dasharray="5,2,2,2"/>
 <line fill="none" stroke="#000" x1="13.92704" y1="55.59658" x2="2.51329" y2="42.39298" id="svg_12" transform="rotate(90, 8.22017, 48.9948)" stroke-dasharray="5,2,2,2"/>
 <line fill="none" stroke="#000" x1="57.04172" y1="55.48174" x2="44.02532" y2="43.05809" id="svg_13" stroke-dasharray="5,2,2,2"/>
 <line fill="none" stroke="#000" x1="13.08666" y1="12.35887" x2="0.96312" y2="0.71359" id="svg_15" stroke-dasharray="5,2,2,2"/>
 <ellipse stroke-dasharray="5,2,2,2,2,2" stroke="#ff0000" ry="24.77876" rx="26.0177" id="svg_3" cy="28.50295" cx="29.65634" stroke-width="6" fill="none"/>
  <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
 </g>
</svg>`;


const fillingTooth =`
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
 <text transform="matrix(0.616101, 0, 0, 0.638818, 19.071, 13.3949)" font-style="normal" font-weight="bold" xml:space="preserve" text-anchor="start" font-family="sans-serif" font-size="20" id="svg_9" y="30.34194" x="-19.87535" stroke-width="0" stroke="#ff0000" fill="#ffffff">MODBP</text>
 </g>
</svg>
`;

  



//Charts the tooth as missing
function missing() {
  document.getElementById("tooth").innerHTML = missingTooth;
}

//Charts the tooth as caries
function caries() {
  document.getElementById("tooth").innerHTML = cariesTooth;
}

//Charts the tooth as pap
function pap() {
  document.getElementById("tooth").innerHTML = papTooth;
}

//Charts the tooth as filling
function filling() {
  document.getElementById("tooth").innerHTML = fillingTooth;
}

//Charts tooth as crown


//Charts tooth as implant

//Charts tooth as healthy
function healthy() {
  document.getElementById("tooth").innerHTML = healthyTooth;

  }

