document.querySelector('#cliccami').addEventListener('click', function(){

let kmEl = document.querySelector('input#km');
let etaEl = document.querySelector('input#eta');

const pricediscountEl = document.querySelector('span#price-discount');

const discountEl = document.querySelector('span#discount');

const totalpriceEl = document.querySelector('span#total-price');


console.log(Number.parseFloat(kmEl.value,10));
console.log(Number.parseFloat(etaEl.value,10));
    const price = 0.267113;
    let discount = 0;
    if ( etaEl.value < 21)
        {
            discount = 24.552
        }
        else if ( etaEl.value > 63 ){
            discount = 37.893
        }
        let totdiscount = (price * kmEl.value) / 100 * discount;
        let totalprice = (price * kmEl.value) - totdiscount;

        console.log(totdiscount);
        console.log(discount);

        pricediscountEl.innerHTML = discount;
        discountEl.innerHTML = totdiscount;
        totalpriceEl.innerHTML = totalprice.toFixed(2);


        console.log(totalprice);
});