const savat = document.querySelector('.basket');
const total = document.getElementById('total');

 
function getbasket() {
  return localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
}

let baskets = getbasket();

window.addEventListener('DOMContentLoaded', () => {
  let display = baskets.map((item) => {
    return `
    <div class="ress">
    <li class="item" data-id="${item.id}">
      <img class="rasmm" src="${item.img}" alt="">
      <h2 class="text-1">${item.name}</h2>
      <h2 class="text-2">${item.price}.$</h2>
      <div class="serrr"><h2 >0</h2></div>
      <button  class="buttonnm">-</button>
      <button  class="buttonnm2">+</button>
      </li>
  </div>
    `
  })
  display = display.join();
  savat.innerHTML = display;
})

total.textContent =`Jami mahsulotlar soni: ${baskets.length} ta`