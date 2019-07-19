

let prom1 = new Promise( function( resolve,reject ){
    setTimeout(() => {
        console.log("Promesa terminada")
        // Termina bien
        resolve();

        // Termina mal
        // reject()

    },1500)
} )

//Recibe dos parametros resolve y reject
prom1.then(()=>{
    console.log("Ejecutarme cuando se termine bien.")
},
() => {
    console.log("Ejecutarme cuando se termine mal.")
})