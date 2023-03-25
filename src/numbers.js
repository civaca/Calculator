

export function get_numbers(addToExpre,f2,f3,f4){ 
  document.getElementById("all").focus();
document.getElementById("all").onkeyup=(event)=>{ 
  switch(event.key){
    case "0":
      addToExpre("0");
        break;  
    case "1":
      addToExpre("1");
        break;   
    case "2":
      addToExpre("2");
        break;  
    case "3":
      addToExpre("3");
        break;   
    case "4":
      addToExpre("4");
        break;  
    case "5":
      addToExpre("5");
        break;   
    case "6":
      addToExpre("6");
        break;  
    case "7":
      addToExpre("7");
        break;  
    case "8":
      addToExpre("8");
        break;  
    case "9":
          addToExpre("9");
            break;   
    case "+":
      f2("+");
        break;  
    case "-":
      f2("-");
        break;  
    case "*":
      f2("*");
        break;  
    case "/":
      f2("/");
        break;   
    case ".":
      addToExpre(".");
        break;  
    case "=":
      f3();
        break; 
    default: // Do nothing
}
}
}
