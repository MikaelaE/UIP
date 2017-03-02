var orders = [
    {
        "name": "Falcon",
        "kCal": 666,
        "lactose": false,
        "gluten": false,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":1
    }
    , {
        "name": "Lapin Kulta",
        "kCal": 666,
        "lactose": false,
        "gluten": true,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":1
    }
    , {
        "name": "Lapin Kulta",
        "kCal": 666,
        "lactose": false,
        "gluten": true,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":0
    }
    , {
        "name": "Lapin Kulta",
        "kCal": 666,
        "lactose": false,
        "gluten": true,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":1
    }
    , {
        "name": "Beer",
        "kCal": 666,
        "lactose": false,
        "gluten": true,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":1
    }
    , {
        "name": "Beer",
        "kCal": 666,
        "lactose": false,
        "gluten": true,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":1
    }
    , {
        "name": "Beer",
        "kCal": 666,
        "lactose": false,
        "gluten": true,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":1
    }
    , {
        "name": "Beer",
        "kCal": 666,
        "lactose": false,
        "gluten": true,
        "img": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuvKjpfY8p1YUIY9AGY4avlApgPSHr4jjVGyVEU2yr1vvU__kjsA",
        "table":1
    }
]

    function docLoaded(fn) {
        if (document.readyState !== 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

        /*function requestsPageLoaded() {
            var chks = document.getElementsByClassName('chk');
            var table = document.getElementsByClassName('number');//returns all classes 'number'(first occurence of class is table 0 and so on) where the buttons will be
           
            for(var i in orders){
                var inp=document.createElement('input');
                inp.setAttribute("class", "checkb"); 
                inp.type='checkbox';
                //inp.setAttribute("name", ""); 
                //inp.setAttribute("id", ""); 
                //inp.setAttribute("value", ""); 
                var lb=document.createElement('label');
                
                //lb.setAttribute("for", ""); 
                lb.appendChild(document.createTextNode(orders[i].name));
                chks[orders[i].table].appendChild(inp); //chks[1] is the chebox group of table 1
                chks[orders[i].table].appendChild(lb);
                chks[orders[i].table].appendChild(document.createElement('br'));
            }
                //after populated the tables with orders, add buttons for respective tables
            var serve=document.getElementsByClassName('serv');//get buttons
            var undo=document.getElementsByClassName('undo');
            var clean=document.getElementsByClassName('clean');

            for(var i in table){
                //serve itens       
                serve[i].onclick = function(){
                   // something(i);//add function to button to serve the drinks passing table nr i
                };
                //undo order
                 serve[i].onclick = function(){
                   // something(i);//button calls a function to serve the drinks passing table nr i
                };
                //clean table/order
                serve[i].onclick = function(){
                   // something(i);//button calls a function to serve the drinks passing table nr i
                };
            }
        }*/

        var storedNames = JSON.parse(localStorage.getItem("drinksArray"));

        function requestsPageLoaded() {
            var chks = document.getElementsByClassName('chk');
            var table = document.getElementsByClassName('number');//returns all classes 'number'(first occurence of class is table 0 and so on) where the buttons will be
           
            for(i=0; i<storedNames.length; i++){
                var inp=document.createElement('input');
                inp.setAttribute("class", "checkb"); 
                inp.type='checkbox';
                //inp.setAttribute("name", ""); 
                //inp.setAttribute("id", ""); 
                inp.setAttribute("value", storedNames[i]); 
                var lb=document.createElement('label');
                
                //lb.setAttribute("for", ""); 

                lb.appendChild(document.createTextNode(storedNames[i]));
                chks[0].appendChild(inp);
                chks[0].appendChild(lb);
                chks[0].appendChild(document.createElement('br'));
              /*  lb.appendChild(document.createTextNode(orders[i].name));
                chks[orders[i].table].appendChild(inp); //chks[1] is the chebox group of table 1
                chks[orders[i].table].appendChild(lb);
                chks[orders[i].table].appendChild(document.createElement('br'));*/
            }
                //after populated the tables with orders, add buttons for respective tables
            var serve=document.getElementsByClassName('serv');//get buttons
            var undo=document.getElementsByClassName('undo');
            var clean=document.getElementsByClassName('clean');

            for(var i in table){
                //serve itens       
                serve[i].onclick = function(){//add function to button to serve the drinks, so the client is notified on payment page
    
                    var checked = $('.chk').find(':checked').length;
                    if (!checked)//if no checkbox is checked
                        alert("Select beers!");
                    else{

                        setServedDrinks();
                        alert("Beer(s) served!");
                    }
                };
                //undo order
                 undo[i].onclick = function(){
                   // function to undo the entire order, the same as cleanTable()?


                };
                //clean table/order
                clean[i].onclick = function(){
                   // function to clean table for another client
                   cleanTable();
                };
            }
        }
        var servedArray=[];
        function setServedDrinks() {//show client that beer is ready to be fetched in payment.html
            //puts each checkbox selected beer in servedArray array
            servedArray=[];
            $("input:checkbox:checked").each(function(){
                servedArray.push($(this).val());
            });

            //is used by payments page to see the ready drinks that are checked
            localStorage.setItem("servedDrinksArray", JSON.stringify(servedArray));
            console.log(servedArray[0]);
        }

         function cleanTable() {
            var result = confirm("Are you sure?");
            if(result){
                 localStorage.setItem("drinksArray", JSON.stringify(""));
                 localStorage.setItem("servedDrinksArray", JSON.stringify(""));
                 localStorage.setItem("GlobalTotalCost", 0);
                 location.reload(true);

            }
         }