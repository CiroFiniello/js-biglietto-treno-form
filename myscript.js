let eta = prompt('Quanti anni hai?');
let km = prompt ('Quanti chilometri dovrai percorrere?');
let price = 0.267113;
if (eta < 21 )
    {
    price = (24.552 * eta ) / 100;
}else 
if (eta > 63) {
    price = (37.893 * eta) / 100;
}
console.log(price);
document.getElementById("price").value=price;