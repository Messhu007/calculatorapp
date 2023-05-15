        let string = "";
        let buttons = document.querySelectorAll(".button");
        Array.from(buttons).forEach((button)=>{
                button.addEventListener('click', (e)=>{
                        if(e.target.innerHTML == '='){
                                string = eval(string);
                                document.querySelector('input').value = string;
                        }
                        else if(e.target.innerHTML == 'C'){
                                string = "";
                                document.querySelector('input').value = string;
                        }
                        else{
                                console.log(e.target)
                                string = string + e.target.innerHTML;
                                document.querySelector('input').value = string;
                        }

                })
        })


        function myfunction1(color){
                let table2 = document.getElementById('table2')
                document.table2.style.background = color;
        }

        function myfunction(color){
                let body = document.getElementById('body')
                document.body.style.background = color;
        }

        let button = document.getElementById("mahesh1")
        button.style.color = "red";
        button.style.background = "blue";

        let camp = document.querySelectorAll('.button')
        camp[1].style.color = "yellow";
        camp[1].style.background = "black";
        camp[2].style.color = "black";
        camp[2].style.background = "pink";
        camp[3].style.color = "black";
        camp[3].style.background = "red";
        camp[4].style.color = "blue";
        camp[4].style.background = "brown";