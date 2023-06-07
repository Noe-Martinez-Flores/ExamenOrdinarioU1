const tv = {}

let previousVolumen;

const onoff = document.querySelector("#onoff");

onoff.addEventListener("click", () => {
    if ( !tv.status ){
        tv.status = !tv.status;
        tv.volume = 3;
        tv.chanel = 7;
        tv.mute = false;
        printObject(tv);
        console.info("TV Encendida")
    }else{
        tv.status = !tv.status;
        printObject(tv);
        console.info("TV Apagada")
    }
});


const volumenPlus = document.querySelector("#volumenPlus");
volumenPlus.addEventListener("click", () => {
    if ( tv.status ){
        if ( previousVolumen >= 1 && tv.mute){
            tv.mute = !tv.mute
            tv.volume = previousVolumen
        }
        if ( tv.volume < 10 ){
            tv.volume++; 
            console.info("Volumen Actual : ", tv.volume);
            printObject(tv);
        }else{
            console.error("Volumen Maximo de : ", tv.volume, " ha sido alcanzado");
            printObject(tv);
        }
    }else{
        console.error("La television no esta encendida")
    }
});

const chanelPlus = document.querySelector("#chanelPlus");
chanelPlus.addEventListener("click", () => {
    if ( tv.status ){
        if ( tv.chanel < 100 ){
            tv.chanel++; 
            console.info("Canal actual : ", tv.chanel);
            printObject(tv);
        }else{
            console.error("Canal Maximo  ", tv.chanel, " ha sido alcanzado");
            printObject(tv);
        }
    }else{
        console.error("La television no esta encendida")
    }
});

const mute = document.querySelector("#mute");
mute.addEventListener("click", () => {
    if ( tv.status ){
        if ( !tv.mute ){
            tv.mute = !tv.mute;
            previousVolumen = tv.volume;
            tv.volume = 0;
            console.info("TV SILENCIADA");
            printObject(tv);;
            console.log("volumen : ",tv.volume);
        }else{
            tv.mute = !tv.mute;
            tv.volume = previousVolumen;
            console.info("TV DESMUTEADA");
            printObject(tv);;
            console.log("volumen : ",tv.volume);
        }
        
    }else{
        console.error("La television no esta encendida")
    }
});

const volumenMinus = document.querySelector("#volumenMinus");
volumenMinus.addEventListener("click", () => {
    if ( tv.status ){
        if ( previousVolumen >= 1 && tv.mute ){
            tv.mute = !tv.mute 
            tv.volume = previousVolumen
        }
        if ( tv.volume > 1 ){
            tv.volume--; 
            console.info("Volumen Actual : ", tv.volume);
            printObject(tv);
        }else{
            console.error("Volumen Minimo de : ", tv.volume, " ha sido alcanzado");
            printObject(tv);
        }
    }else{
        console.error("La television no esta encendida")
    }
});

const chanelMinus = document.querySelector("#chanelMinus");
chanelMinus.addEventListener("click", () => {
    if ( tv.status ){
        if ( tv.chanel > 1 ){
            tv.chanel--; 
            console.info("Canal actual : ", tv.chanel);
            printObject(tv);
        }else{
            console.error("Canal Minimo  ", tv.chanel, " ha sido alcanzado");
            printObject(tv);
        }
    }else{
        console.error("La television no esta encendida")
    }
});


const printObject = ( tv ) => {
    console.log( `Encedido : ${ tv.status ? "sí" : "No"}`);
    console.log( `Volumen : ${ tv.volume }`);
    console.log( `Canal : ${ tv.chanel }`);
    console.log( `Mutaedo : ${ tv.mute ? "sí" : "No"}`);
}

