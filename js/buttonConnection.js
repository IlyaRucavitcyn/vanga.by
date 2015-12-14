var currencyChoiceContainer = document.getElementById('currency-choice-container');
var currentCurrencyButton = document.getElementById('current-currency');

currencyChoiceContainer.onclick = function(e){
  // var target = e.target;
  currentCurrencyButton.classList.remove(currentCurrencyButton.dataset.currency);
  if(usd.checked){
    currentCurrencyButton.classList.add('usd');
    currentCurrencyButton.dataset.currency="usd";
  } else if(euro.checked){
    currentCurrencyButton.classList.add('euro');
    currentCurrencyButton.dataset.currency="euro";
  } else if (rrubles.checked) {
    currentCurrencyButton.classList.add('rruble');
    currentCurrencyButton.dataset.currency="rruble";
  }
};
