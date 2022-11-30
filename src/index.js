var button=document.getElementsByClassName("btn");
var display=document.getElementById("display");

console.log(button.length)

for(item of button){
    item.addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(value=="clear"){
            display.innerText=" ";
        }
        else if(value=="="){
            var p=display.innerText;
            var q=eval(p);
            console.log(p,"=",q)
            if(q==Infinity){
                display.innerHTML="Error";
            }
            else if(q==NaN){
                display.innerHTML="Error";
            }
            else{
            display.innerText=q;
            }   
        }
        // else if(value=="%"){
        //     value="*(1/100)"
        //     var p=display.innerHTML+value;
        //     var q=eval(p);
        //     display.innerHTML=q;
        // }
        else{
            display.innerText+=value;
            console.log(value);
        } 
    });
}



