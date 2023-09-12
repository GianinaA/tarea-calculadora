const ERROR = document.getElementById("error");
const FLU = document.getElementById("flu");
const MAN = document.getElementById("man");
const IMPUT = document.getElementById("peso");
const BOTON = document.getElementById("calcular");
const SC = document.getElementById("sc");
const SC2 = document.getElementById("sc2");

ERROR.style.display = "display";

BOTON.addEventListener("click", ()=>{
    let peso = IMPUT.value

    if (peso > 0){
        ERROR.style.display = "none";
        if (peso >0 && peso <= 30){
            let res = holliday(peso);
            console.log(res);
            let flujo = calcFlujo(res);
            let mantenimiento = flujo*1.5;
            FLU.innerHTML = 'Mantenimiento = ' + Math.trunc(flujo) + 'cc/hr';
            MAN.innerHTML = 'm+m/2 = ' + Math.trunc(mantenimiento) + 'cc/hr';
            FLU.style.display = 'block';
            MAN.style.display = 'block';
            SC.style.display = 'none';
            SC2.style.display = 'none';                 
        } else{
            let res2 = superficieC(peso);
            console.log(res2);
            SC.innerHTML = Math.trunc(res2*1500) + '(*1500)cc/hr';
            SC2.innerHTML = Math.trunc(res2*2000) + '(*2000)cc/hr'; 
            FLU.style.display = 'none';
            MAN.style.display = 'none';
            SC.style.display = 'block';
            SC2.style.display = 'block';
            

        }
            
    } else{
        console.log("error");
        ERROR.style.display = "block";
        FLU.style.display = "none";
        MAN.style.display = "none";
    }
    
});

function holliday(peso){
    let volumen;
    if (peso <= 10){
        volumen = peso * 100;
    } else if (peso > 10 && peso <= 20){
        volumen = 1000 + (peso-10) * 50;
    } else {
        volumen = 1500 + (peso-20) * 20;
    }
    return volumen;
}
function calcFlujo(res){
   let flujo;
   flujo = res / 24;
   return flujo
}

function superficieC(peso){
    let corporal;
     corporal = ( (peso * 4) + 7) / (peso + 90);
    return corporal;
}

