"use strict";

(() => {
    let display = document.getElementsByClassName('output')[0];
    let buttons = document.getElementsByClassName('btn');
    

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
    
          if (display.value[0] === '0') {
            display.value = '';
          }
    
          display.value += buttons[i].value;
          let strVal = display.value;
          // console.log(strVal); every symbol
          for(let i = 0;i<strVal.length;i++){
            if(strVal[i] == "+"){
              let parse = strVal.split('+');
              let temp;
                for(let i = 0; i<parse.length;i++){
                  parse[i] = +parse[i];
                }
              return console.log(parse[i]+parse[i+1]);
            }
          }
    
        }, false);
      }
    //   let function ParseSimple(expr){
    //       while(expr == ' ')
    //         expr++;
    //     let negative = false;
    //     if(expr == '-'){
    //         negative = true;
    //         expr++;
    //     }
    //     if(expr == '+'){
    //         expr++;
    //     }

    //     if(expr == '('){
    //         expr++;
    //     }
    //   }
    //    let equals = () => {
    //        document.getElementsByClassName('equal')[0].addEventListener('click',()=>{
    //            ()=>{
    //                for(let i = 0;i<display.length;i++){
    //                    while(display[i] == ' ')
    //                     display[i]++;
    //                    if(display[i] == '+')
    //                     return dis
    //                }
    //            }

    //        }, false)
    //    };
       
    //   let ParseSum = ()

    let clear = () => {
        display.value = '0';
      };
    document.getElementsByClassName('clear')[0].addEventListener('click', clear, false);
})();