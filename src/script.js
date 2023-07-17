function numero(num) {
    const numeros = document.querySelector('#current-operation').innerHTML;
    document.querySelector('#current-operation').innerHTML = numeros + num;
 }
  function cle() {
    document.querySelector('#current-operation').innerHTML = '' ;
   

  }
  function back() {
     const apagar = document.querySelector('#current-operation').innerHTML;
      document.querySelector('#current-operation').innerHTML = apagar.substring(0, apagar.length -1) 
  }
 
  function calcular() {
      const total = document.querySelector('#current-operation').innerHTML;
      if(total) {
         document.querySelector('#current-operation').innerHTML = eval(total);
      }
  }