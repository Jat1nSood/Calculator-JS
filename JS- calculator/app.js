(function(){

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clr');
    let equal = document.querySelector('.btn-eql');
    
    buttons.forEach(function(button){

        console.log(buttons);
        

        button.onclick = function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            
        }


    });

    clear.onclick = function(e){
        screen.value = "";
    }

    equal.onclick = function(e){

        if(screen.value ===''){
            screen.value = "Please Enter";

        }

        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    }








})();