let string= "";
let display= document.getElementById('display');
let buttons= document.querySelectorAll('.button');

for (let x of Array.from(buttons)){
        x.addEventListener('click' , function(event){
         if (event.target.value == "DE"){
             string= string.slice(0,-1);
              display.value=string;
         }else if (event.target.value == "AC"){
             string="";
             display.value= string;
         }else if (event.target.value == "="){
            try{
                string= eval(string);
                display.value=string;
                string = string.toString();
            }
            catch(err){
             display.value="Syntax Error";
            }
        }else{
        string += event.target.value;
        display.value=string;
        }
    });
}
