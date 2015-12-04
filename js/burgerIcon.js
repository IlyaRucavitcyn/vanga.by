var burgerIcon = document.getElementById('burgerIconCont');
var infoBar = document.getElementById('infoIcon');

burgerIcon.onclick = function(e){
  var target = e.target;
  while (target != this) {
      if (target.tagName === 'A') {
        infoBar.classList.remove('hidden');
        return false;
      }
      target = target.parentNode;
    }
}
infoBar.onclick = function(){
    this.classList.add('hidden');
}
