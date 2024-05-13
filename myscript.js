document.querySelector('#cliccami').addEventListener('click', function(){

let kmEl = document.querySelector('input#km');
let etaEl = document.querySelector('input#eta');

console.log(Number.parseFloat(kmEl.value,10));
console.log(Number.parseFloat(etaEl.value,10));
    const price = 0.267113;
    let discount = 0;
    if ( etaEl.value < 21)
        {
            discount = 24.552
        }
        else if ( eta > 63 ){
            discount = 37.893
        }
        let totdiscount = (price * kmEl.value) / 100 * discount;
        let totalprice = (price * kmEl.value) - totdiscount;
        console.log(totalprice);
});