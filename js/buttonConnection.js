var currencyChoiceContainer = document.getElementById('currency-choice-container');
var currentCurrencyButton = document.getElementById('current-currency');

currencyChoiceContainer.onclick = function(e){
   var target = e.target;
   //Checking whether we pushed a button or a free space in 'currency-choice-container'
   if(!target.classList.contains('currency-button')){
     return;
   };
   //Checking whether we pushed the current currency-button
   if(target.classList.contains('active')){
     return;
   };
   //All currency button collection forming
   var buttonCollection = this.getElementsByClassName('currency-button');
   //forEach method definition for buttonCollection
   var forEach = [].forEach;
   forEach.call(buttonCollection,function(x){
     if(x.classList.contains('active')){
       x.classList.remove('active');
       currentCurrencyButton.classList.remove(x.getAttribute('id'));
     };
    });
    target.classList.add('active');
    currentCurrencyButton.classList.add(target.getAttribute('id'));
  // while (target != this) {
  //     if (target.tagName === 'LABEL') {
  //       currentCurrencyButton.classList.remove(currentCurrencyButton.dataset.currency);
  //       currentCurrencyButton.classList.add(target.dataset.setHidingClass);
  //       currentCurrencyButton.dataset.currency=target.dataset.setHidingClass;
  //       return;
  //     }
  //     target = target.parentNode;
  //   }
};
