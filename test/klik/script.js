


import Prism from 'https://cdn.skypack.dev/prismjs';
const fullscreen = document.getElementById("fullscreen");


const TOGGLE = document.querySelector(".theme-toggle");

const SWITCH = () => {
  const isDark = TOGGLE.matches("[aria-pressed=true]") ? false : true;
  TOGGLE.setAttribute("aria-pressed", isDark);
  document.documentElement.className = isDark ? 'dark' : 'light';
};

const TOGGLE_THEME = () => {
  if (!document.startViewTransition) SWITCH();
  document.startViewTransition(SWITCH);
};

TOGGLE.addEventListener("click", TOGGLE_THEME); 


let count = 0
const btn = document.getElementById('action-click');
const el = document.getElementById('count');
const message = document.getElementById('message');

const msg = {
  0: '',
  1: ',tolong jgn diklik☺',
  2: ',neh masih di klik😊',
  3: ',ya allah jgn di klik😌',
  4: ', masih ??',
  5: ', sudah jangan diklik lagi tolong',
  6: ', 😕',
  7: ', 🙁',
  8: ', 😟', 
  9: ', 😔',
  10: ', 😞',
  11: ', 😒',
  12: ', 😑oke lah kalo begitu!..',
  13: ', penyanyi apa yg selalu tabah?',
  14: ', apa jawabannya?',
  15: ', nyerah... ???',
  16: ', pasrah ungu ',
  17: ', oke selesai 😁 terima kasih',
  18: ', oke selesai 😁 terima kasih',
  19: ', oke selesai 😁 terima kasih',
  20: ', oke selesai 😁 terima kasih',
  21: ', oke selesai 😁 terima kasih',
  22: ',ampun bang ampun😭',
  23: ',sudah woi ampun aku ampun😭',
  44: ', stop woi😡......',
  45: ', stop ya allah 😡....',
  46: ', maksa banget woiiiiiiiiii🤬',
  60: ', ampun bang ampun',
}

const d = ',udah bang ampun😭'
const dd = ',woi udah stop!!!!😭'

btn.addEventListener('click', function handleClick() {
  count++
  const message1 = msg?.[count] ?? d
  const message = count > 60 ? dd : message1
  el.innerHTML = `diklik ${count} kali ${message}`;
  if(count > 44) {
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'
  }
  
 
});
 