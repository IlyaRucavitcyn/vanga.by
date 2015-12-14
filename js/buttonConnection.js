var currencyChoiceContainer = document.getElementById('currency-choice-container');
var currentCurrencyButton = document.getElementById('current-currency');

currencyChoiceContainer.onclick = function(e){
  currentCurrencyButton.classList.remove(currentCurrencyButton.dataset.currency);
  var target = e.target;
  // if(usd.checked){
  //   currentCurrencyButton.classList.add('usd');
  //   currentCurrencyButton.dataset.currency="usd";
  // } else if(euro.checked){
  //   currentCurrencyButton.classList.add('euro');
  //   currentCurrencyButton.dataset.currency="euro";
  // } else if (rrubles.checked) {
  //   currentCurrencyButton.classList.add('rruble');
  //   currentCurrencyButton.dataset.currency="rruble";
  // }
  while (target != this) {
      if (target.tagName === 'LABEL') {
        currentCurrencyButton.classList.add(target.dataset.setHidingClass);
        currentCurrencyButton.dataset.currency=target.dataset.setHidingClass;
        return;
      }
      target = target.parentNode;
    }
};
