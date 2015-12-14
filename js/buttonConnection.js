var currencyChoiceContainer = document.getElementById('currency-choice-container');
var currentCurrencyButton = document.getElementById('current-currency');

currencyChoiceContainer.onclick = function(e){
  // var target = e.target;
  if(usd.checked){
    currentCurrencyButton.style.backgroundImage="url('img/usd_checked.svg')";
  } else if(euro.checked){
    currentCurrencyButton.style.backgroundImage="url('img/euro_checked.svg')";
  } else if (rrubles.checked) {
    currentCurrencyButton.style.backgroundImage="url('img/rruble_checked.svg')";
  }
};
