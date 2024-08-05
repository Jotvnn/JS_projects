main = document.querySelector('.main');
console.log(main);

main.style.color = 'white';
main.style.fontSize = '1em';

elem = document.getElementsByName('name')[0];
console.log(elem.value);

main2 = document.querySelector('.main2');

function addName() {
  div = document.createElement('div');
  div.innerHTML = `<p style=color: white; font-size: 3em;><span style="color: #fff;">Sael, </span><span style="color: #fff;"first-cap;>${elem.value}</span></p>`;

  main2.appendChild(div);

}



block = document.getElementById('block');
console.log(block);
block = document.querySelector('#block');
console.log(block.innerHTML);

innerBlock = document.getElementsByClassName('inner-block')[0];
console.log(innerBlock);

innerBlock.style.width = '275px';

// transform = innerBlock.style.transform;
// console.log(transform);

// width = innerBlock.style.width;
// console.log(width);

w1 = window.getComputedStyle(innerBlock, null).width;
// w1 = window.getComputedStyle(innerBlock, null).getPropertyValue('width');
console.log(w1);

mL =  window.getComputedStyle(innerBlock, null).getPropertyValue('margin-left'); // смешаемся слева направо
console.log(mL);

deg = 90;
// i = 0;
width = w1.split('px')[0]; // берём ширину в пикселях
// marginLeft = mL.split('px')[0]; // value is string --> marginLeft *= 1;
marginLeft = parseInt(mL.split('px')[0]);
widthDynamic = width;
marginDynamic = marginLeft;

innerBlock.addEventListener('click', function () {
  // i++; // i += ; // i = i+1;
  // console.log(i);
  for (i=0; i < 100; i++) {
    if (width <= 105) {
      width = widthDynamic;
      marginLeft = marginDynamic;
    }
    if (deg % 360 == 0) {
       width -= 10;
       marginLeft += 5;
       console.log(marginLeft);
       this.style.width = `${width}px`;
       this.style.marginLeft = `${marginLeft}px`;
     }
    this.style.transform = `rotate(${deg}deg)`;
    deg += 25;
  }
});

