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

    function requestsPageLoaded() {
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
        }