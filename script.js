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

function prec(str) {
    switch (str) {
      case ')':
        return 0;
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      default:
        return -1;
    }
  }
  
  function popOper(nums, ops) {
    var op = ops.pop();
    var a = parseFloat(nums.pop());
    var b = parseFloat(nums.pop());
    switch (op) {
      case '+':
        nums.push(a + b);
        break;
      case '-':
        nums.push(b - a);
        break;
      case '*':
        nums.push(a * b);
        break;
      case '/':
        nums.push(b / a);
        break;
    }
  }
  
  function calc(str) {
    var newNum = true;
    var needOp = false;
    var nums = [];
    var ops = [];
  
    for (var i = 0; i < str.length; i++) {
      switch (str[i]) {
        case '-':
          if (!needOp) {
            nums.push(0);
            ops.push('-');
            break;
          }
        case '+':
        case '*':
        case '/':
        case ')':
          if (needOp) {
            newNum = true;
            while (prec(str[i]) <= prec(ops[ops.length -1])) {
              popOper(nums, ops);
            }
            if (str[i] === ')') {
              var open = ops.pop();
              if (open !== '(') {
                console.log("Error parenthesis: " + open);
              }
            } else {
              ops.push(str[i]);
              needOp = false;
            }
          } else {
            console.log("Parse error: " + str[i] + " at position " + i);
          }
          break;
        case '(':
          ops.push('(');
          break;
        case ' ':
          break;
        default:
          if (newNum) {
            nums.push(str[i]);
            newNum = false;
          } else {
            var num = nums.pop();
            num = num + str[i];
            nums.push(num);
          }
          needOp = true;
      }
    }
    while (ops.length > 0) {
      popOper(nums, ops);
    }
    return nums[0];
  }
  let clear = () => {
    display.value = '0';
  };
  document.getElementsByClassName('clear')[0].addEventListener('click', clear, false);
  let equal = () => {
  display.value = calc(strVal);
    };
    document.getElementsByClassName('equal')[0].addEventListener('click',equal,false);
})();