"use strict";

(() => {
    let display = document.getElementsByClassName('output')[0];
    let buttons = document.getElementsByClassName('btn');
    var methods = {
      "-": function(a, b) {
        return a - b;
      },
      "+": function(a, b) {
        return a + b;
      },
      "*": function(a,b){
        return a*b;
      },
      '/':function(a,b){
        return a/b;
      }
    };

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
    
          if (display.value[0] === '0') {
            display.value = '';
          }
          if(~display.value.indexOf('0')){
            console.log('IDI');
          }
          display.value += buttons[i].value;
          let strVal = display.value;
          // Calculation () => {
          //   function equal (){

          //   };
          // }
          let parse;
          let ans = 0;
          let plus = () =>{
            parse = strVal.split('+');
            for(let i = 0; i<parse.length;i++){
              parse[i] = +parse[i];
            }
            parse.forEach(function(item, i, parse){
              ans += item; 
            });
            // console.log(ans);
          }
          let minus = () =>{
            parse = strVal.split('-');
            for(let i = 0; i<parse.length;i++){
              parse[i] = +parse[i];
            }
            parse.forEach(function(item, i, parse){
              
              ans -= item; 
            });
            // console.log(ans);
          }

          // console.log(strVal); every symbol
            if(~strVal.indexOf("+")){
             plus();
            }
            if(~strVal.indexOf("-")){
              minus();
             }
            // индекс оф экспрешн, то есть добавляет символ, а уже от него вызывает ф-цию
             console.log(ans);
         
        }, false);
      }

    let clear = () => {
        display.value = '0';
      };
    document.getElementsByClassName('clear')[0].addEventListener('click', clear, false);
    let equal = () => {
     display.value = eval(display.value);
    };
    document.getElementsByClassName('equal')[0].addEventListener('click',equal,false);
})();