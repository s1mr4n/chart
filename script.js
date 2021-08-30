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

<svg id="tooth"
width="59"
height="57"
xmlns="http://www.w3.org/2000/svg"
>
<g>
  <rect
    stroke-width="2"
    rx="3"
    id="svg_16"
    height="56.98565"
    width="59.13876"
    y="0.00822"
    x="0"
    stroke="#000"
    fill="#fff"
  />
  <rect
    rx="2"
    id="svg_1"
    height="33.0622"
    width="33.30143"
    y="11.73071"
    x="12.91866"
    stroke="#000"
    fill="#fff"
  />
  <line
    stroke-dasharray="5,2,2,2"
    transform="rotate(90, 52.1397, 6.33144)"
    id="svg_5"
    y2="0"
    x2="46.10999"
    y1="12.66288"
    x1="58.16945"
    stroke="#000"
    fill="none"
  />
  <line
    stroke-dasharray="5,2,2,2"
    transform="rotate(90, 8.30864, 48.5523)"
    id="svg_12"
    y2="41.86198"
    x2="2.15929"
    y1="55.24257"
    x1="14.45799"
    stroke="#000"
    fill="none"
  />
  <line
    stroke-dasharray="5,2,2,2"
    id="svg_13"
    y2="43.05809"
    x2="44.02532"
    y1="55.48174"
    x1="57.04172"
    stroke="#000"
    fill="none"
  />
  <line
    stroke-dasharray="5,2,2,2"
    id="svg_15"
    y2="0.71359"
    x2="0.96312"
    y1="12.1803"
    x1="13.97952"
    stroke="#000"
    fill="none"
  />
  <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
</g>
</svg>`;

const missingTooth =`
<svg id="tooth" width="59" height="57.00000000000001" xmlns="http://www.w3.org/2000/svg">
 <g>
  <rect rx="1" fill="#fff" stroke="#000" x="0" y="-0.13067" width="59.13876" height="57.19399" id="svg_16" stroke-width="2"/>
  <rect fill="#ffffff" stroke="#000" x="13.09723" y="11.55214" width="33.30143" height="33.0622" id="svg_1"/>
  <line fill="none" stroke="#000" x1="58.16945" y1="12.66288" x2="46.10999" y2="0" id="svg_5" transform="rotate(90, 52.1397, 6.33144)" stroke-dasharray="5,2,2,2"/>
  <line fill="none" stroke="#000" x1="14.45799" y1="55.24257" x2="2.15929" y2="41.86198" id="svg_12" transform="rotate(90, 8.30864, 48.5523)" stroke-dasharray="5,2,2,2"/>
  <line fill="none" stroke="#000" x1="57.04172" y1="55.48174" x2="44.02532" y2="43.05809" id="svg_13" stroke-dasharray="5,2,2,2"/>
  <line fill="none" stroke="#000" x1="13.08666" y1="12.35887" x2="0.96312" y2="0.71359" id="svg_15" stroke-dasharray="5,2,2,2"/>
  <line fill="none" stroke="#ff0000" x1="0.25892" y1="0.74404" x2="58.83033" y2="56.99402" id="svg_2" stroke-linejoin="undefined" stroke-linecap="undefined" stroke-width="6"/>
  <line fill="none" stroke="#ff0000" x1="58.11604" y1="0.50053" x2="0.51865" y2="56.99402" id="svg_3" stroke-linejoin="undefined" stroke-linecap="undefined" stroke-width="6"/>
  <rect class="chartClickLayer" id="chartClickLayer" x="0" y="0" width="56" height="59" onclick="chartingMenu()" />
 </g>
</svg>`;

//Charts the tooth as missing

function missing() {
  document.getElementById("tooth").innerHTML = missingTooth;
}

//Charts the tooth as caries



//Charts the tooth as apical periodontitis


//Charts the tooth as filling


//Charts tooth as crown


//Charts tooth as implant

//Charts tooth as healthy
function healthy() {
  document.getElementById("tooth").innerHTML = healthyTooth;

  }

