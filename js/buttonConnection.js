var currencyChoiceContainer = document.getElementById('currency-choice-container');
var currentCurrencyButton = document.getElementById('current-currency');

currencyChoiceContainer.onclick = function(e){
  currentCurrencyButton.classList.remove(currentCurrencyButton.dataset.currency);
  var target = e.target;
  while (target != this) {
      if (target.tagName === 'LABEL') {
        currentCurrencyButton.classList.add(target.dataset.setHidingClass);
        currentCurrencyButton.dataset.currency=target.dataset.setHidingClass;
        return;
      }
      target = target.parentNode;
    }
};
