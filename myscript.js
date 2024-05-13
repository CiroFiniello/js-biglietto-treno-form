document.querySelector('#cliccami').addEventListener('click', function(){

let kmEl = document.querySelector('input#km');
let etaEl = document.querySelector('input#eta');

console.log(Number.parseFloat(kmEl.value,10));
console.log(Number.parseFloat(etaEl.value,10));

});
// let eta = prompt('Quanti anni hai?');
// let km = prompt ('Quanti chilometri dovrai percorrere?');
// let price = 0.267113;
// if (eta < 21 )
//     {
//     price = (24.552 * eta ) / 100;
// }else 
// if (eta > 63) {
//     price = (37.893 * eta) / 100;
// }
// console.log(price);
// document.getElementById("price").value=price;