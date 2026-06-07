import './style.css';
import './app.css';

import logo from './assets/images/logo-universal.png';

import {Convert} from '../wailsjs/go/main/App';

document.querySelector('#app').innerHTML = `
  <div class="converter-container">
    <div class="header">
      <img src="${logo}" alt="logo" class="logo">
      <h1>Numerator</h1>
    </div>
    
    <div class="input-group">
      <label for="dec">Decimal</label>
      <input class="input" id="dec" type="text" autocomplete="off" placeholder="e.g. 255" />
      <span class="error-msg" id="err-dec"></span>
    </div>
    
    <div class="input-group">
      <label for="hex">Hexadecimal</label>
      <input class="input" id="hex" type="text" autocomplete="off" placeholder="e.g. ff" />
      <span class="error-msg" id="err-hex"></span>
    </div>
    
    <div class="input-group">
      <label for="bin">Binary</label>
      <input class="input" id="bin" type="text" autocomplete="off" placeholder="e.g. 11111111" />
      <span class="error-msg" id="err-bin"></span>
    </div>
  </div>
`;

const decInput = document.getElementById("dec");
const hexInput = document.getElementById("hex");
const binInput = document.getElementById("bin");

const errDec = document.getElementById("err-dec");
const errHex = document.getElementById("err-hex");
const errBin = document.getElementById("err-bin");

function clearErrors() {
  errDec.innerText = '';
  errHex.innerText = '';
  errBin.innerText = '';
  decInput.classList.remove('error');
  hexInput.classList.remove('error');
  binInput.classList.remove('error');
}

function updateValues(sourceId, format, value) {
  if (value === "") {
    if (sourceId !== "dec") decInput.value = "";
    if (sourceId !== "hex") hexInput.value = "";
    if (sourceId !== "bin") binInput.value = "";
    clearErrors();
    return;
  }

  Convert(value, format)
    .then((result) => {
      clearErrors();
      if (result.error) {
        document.getElementById('err-' + sourceId).innerText = result.error;
        document.getElementById(sourceId).classList.add('error');
        return;
      }
      
      if (sourceId !== "dec") decInput.value = result.dec;
      if (sourceId !== "hex") hexInput.value = result.hex;
      if (sourceId !== "bin") binInput.value = result.bin;
    })
    .catch((err) => {
      console.error(err);
    });
}

decInput.addEventListener('input', (e) => updateValues('dec', 'dec', e.target.value.trim()));
hexInput.addEventListener('input', (e) => updateValues('hex', 'hex', e.target.value.trim()));
binInput.addEventListener('input', (e) => updateValues('bin', 'bin', e.target.value.trim()));
