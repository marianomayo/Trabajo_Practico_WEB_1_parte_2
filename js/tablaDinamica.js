document.addEventListener("DOMContentLoaded",


    function () {        
        let mitabla = [
            {
                "ropa":"blusa",
                "precio":"$700"
            },
            {
                "ropa":"remera",
                "precio":"$500"
            },
            {
                "ropa":"jean",
                "precio":"$999"
            },{
                "ropa": "remeron",
                "precio": "$600"
            },
            {
                "ropa": "sweters",
                "precio": "$980"
            },
            {
                "ropa": "jogging",
                "precio": "$600"
            }      
        ]   


        function cargarTabla(){            
            let body = document.getElementById("tbody");
            limpiarTabla();
            for (i=0;i<mitabla.length;i++){
            let value1= mitabla[i].ropa;
            let value2= mitabla[i].precio;
            console.log(value1);
            console.log(value2);
            let nodotr = document.createElement("tr");
            let nodotd1 = document.createElement("td");
            let nodotd2 = document.createElement("td");
            let promocion = 0.15;
            let NumeroMalIngresado = document.getElementById("numeroMalPuesto");
            nodotd1.innerText=value1;
            nodotd2.innerText=value2;
            if(value2>=0){
                if(value2>=3000){
                    nodotd2.innerText= "$"+(value2-(value2*promocion))+"!!!";  
                    nodotd1.classList.add("estiloPromo");
                    nodotd2.classList.add("estiloPromo");                      
                    NumeroMalIngresado.innerHTML="";             
                }
                else if(value2<3000){
                nodotd2.innerHTML= "$"+value2;//si es menor publicalo asi nomas
                NumeroMalIngresado.innerHTML="";
                }              
            }
            if(value2<0){
                NumeroMalIngresado.innerHTML="Ingrese un numero mayor a 0";
                NumeroMalIngresado.classList.add("errorEnNumero");
                nodotr.appendChild(nodotd1)="";            
                nodotr.appendChild(nodotd2)="";
            }

            nodotr.appendChild(nodotd1);
            nodotr.appendChild(nodotd2);

            body.appendChild(nodotr);


            }
        }
        
        function limpiarTabla(){
            let body = document.getElementById("tbody");
            body.innerHTML="";
        }

        /*Funcion para agregar elemento a la tabla*/
        function agregarElementoTabla() {    
            let inputValue1 = document.getElementById("ropa").value;    
            let inputValue2 = document.getElementById("precio").value;          
            let nodotabla = {
                "ropa": inputValue1,
                "precio": inputValue2
            }
            mitabla.push(nodotabla);               
       
         cargarTabla();
        }
        /*funcion para vaciar la tabla, al body al ponerle " " lo vacio*/
        function vaciartabla() {
            let body = document.getElementById("tbody");
            body.innerHTML = "";
            mitabla=[];
            
        }

        

        function agregar3Elementos(){
            "use strict";
        for(let i=1; i<=3; i++){
            agregarElementoTabla();
        }    
               
        }

        
        
        
        cargarTabla();
        document.getElementById("agregar-tabla").addEventListener("click", agregarElementoTabla);
        document.getElementById("vaciar-tabla").addEventListener("click", vaciartabla);
        document.getElementById("agregar-tablaX3").addEventListener("click", agregar3Elementos);    
    }



);