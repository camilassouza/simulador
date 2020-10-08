(function () {         
  var parent = document.querySelector(".range-slider");
  if (!parent) return;

  var
  rangeS = parent.querySelectorAll("#simulador-range-renda"),
  numberS = parent.querySelectorAll("#simulador-range-value-renda");

  rangeS.forEach(function (el) {
    el.oninput = function () {
      slide2 = parseFloat(rangeS[0].value);
      numberS[0].value = slide2;
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      number2 = parseFloat(numberS[0].value);   
      rangeS[0].value = number2;
    };
  });

   var botaomais = document.querySelector("#simulador-range-value-mais-renda"),
       botaomenos = document.querySelector("#simulador-range-value-menos-renda"),
       inputRange = document.querySelector("#simulador-range-renda"); 
       


   botaomais.addEventListener("click", function(){
       var step = inputRange.getAttribute('step');
       console.log( inputRange.getAttribute('step'), step);
           if( step <= 50000){
               inputRange.setAttribute('step', parseFloat(inputRange.getAttribute('step'))+ 1000);
               slide2 = parseFloat(rangeS[0].value);
               numberS[0].value = slide2 + 1000;
           } 
   });

   botaomenos.addEventListener("click", function(){
       var step = inputRange.getAttribute('step');
       console.log( inputRange.getAttribute('step'), step);
           if( step > 0){
               inputRange.setAttribute('step', parseFloat(inputRange.getAttribute('step'))- 1000);
               slide2 = parseFloat(rangeS[0].value);
               numberS[0].value = slide2 - 1000;
           } 
   });         
})();
    


Array.prototype.forEach.call(document.body.querySelectorAll("*[data-mask]"), applyDataMask);

function applyDataMask(field) {
    var mask = field.dataset.mask.split('');
    
    // For now, this just strips everything that's not a number
    function stripMask(maskedData) {
        function isDigit(char) {
            return /\d/.test(char);
        }
        return maskedData.split('').filter(isDigit);
    }
    
    // Replace `_` characters with characters from `data`
    function applyMask(data) {
        return mask.map(function(char) {
            if (char != '_') return char;
            if (data.length == 0) return char;
            return data.shift();
        }).join('')
    }
    
    function reapplyMask(data) {
        return applyMask(stripMask(data));
    }
    
    function changed() {   
        var oldStart = field.selectionStart;
        var oldEnd = field.selectionEnd;
        
        field.value = reapplyMask(field.value);
        
        field.selectionStart = oldStart;
        field.selectionEnd = oldEnd;
    }
    
    field.addEventListener('click', changed)
    field.addEventListener('keyup', changed)
}            