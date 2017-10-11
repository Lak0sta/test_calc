"use strict";

(() => {
    let strVal;
    let display = document.getElementsByClassName('output')[0];
    let buttons = document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
        
        buttons[i].addEventListener('click', () => {
    
          if (display.value[0] === '0') {
            display.value = '';
          }
          display.value += buttons[i].value;
          strVal = display.value;}, false);
    }
    function calc(input){
        if(~input.indexOf('(') && ~input.indexOf(')'))
            setTimeout(function(){
                calc(input)},0);
            input = input.replace(/[^0-9%^*\/\-+.]/g,'');
        var f = { add : '+', 
                  sub : '-', 
                  div : '/', 
                  mlt : '*', 
                  mod : '%',
                };
 

        f.order = [[ [f.mlt] , [f.div] , [f.mod] ],
            [ [f.add] , [f.sub] ]];

        input = input.replace(/[^0-9%^*\/()\-+.]/g,'');

        var output;
        for(var i=0, n=f.order.length; i<n; i++ ){
            
        // Regular Expression to look for operators between floating numbers or integers
        var re = new RegExp('(\\d+\\.?\\d*)([\\'+f.order[i].join('\\')+'])(\\d+\\.?\\d*)');
        re.lastIndex = 0;                                     // be cautious and reset re start pos
            
       
        while( re.test(input) ){
            output = calc_internal(RegExp.$1,RegExp.$2,RegExp.$3);
            if (isNaN(output) || !isFinite(output)) return output;   // exit early if not a number
            input  = input.replace(re,output);
            }
        }

        return output;

        function calc_internal(a,op,b){
        a=a*1; b=b*1;
        switch(op){
            case f.add: return a+b; break;
            case f.sub: return a-b; break;
            case f.div: return a/b; break;
            case f.mlt: return a*b; break;
            case f.mod: return a%b; break;
            default: null;
            }
        }
    }
    
    let clear = () => {
        display.value = '0';
      };
    document.getElementsByClassName('clear')[0].addEventListener('click', clear, false);
    let equal = () => {
     display.value = calc(display.value);
    };
    document.getElementsByClassName('equal')[0].addEventListener('click',equal,false);
})();