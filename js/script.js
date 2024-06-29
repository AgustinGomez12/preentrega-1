const indiseDeMasacorporal = (peso, altura) => {

    let reintentarMedicion = true

    while (reintentarMedicion) {

        peso = parseInt(prompt("¿Cuantos kilos pesas?"))
        altura = parseFloat(prompt("¿Que estatura tienes?\nPon la estatura de la siguente forma:Ej 1.80"))

        let alturaXAltura = (altura * altura)
        let pesoDivididoAlturaXAltura = Math.round(peso / alturaXAltura)
        let estadoDesalud = pesoDivididoAlturaXAltura

        if (estadoDesalud == 15 || estadoDesalud == 16 || estadoDesalud == 17 || estadoDesalud == 18) {
            console.log("Peso bajo.\n(Aumente las calorias que consume)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
            alert("Peso bajo.\n(Aumente las calorias que consume)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
        } else if (estadoDesalud == 19 || estadoDesalud == 20 || estadoDesalud == 21 || estadoDesalud == 22) {
            console.log("Peso saludable.\n(Sigue consumiendo las calorias de siempre)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
            alert("Peso saludable.\n(Sigue consumiendo las calorias de siempre)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
        } else if (estadoDesalud == 23 || estadoDesalud == 24 || estadoDesalud == 25 || estadoDesalud == 26) {
            console.log("Sobre peso.\n(Disminuye un poco las calorias que consumes)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
            alert("Sobre peso.\n(Disminuye un poco las calorias que consumes)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
        } else if (estadoDesalud == 27 || estadoDesalud == 28 || estadoDesalud == 29 || estadoDesalud == 30 || estadoDesalud == 31 || estadoDesalud == 32 || estadoDesalud == 33 || estadoDesalud == 34 || estadoDesalud == 35) {
            console.log("Obesidad.\n(Disminuye las calorias drasticamente y de forma controlada)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
            alert("Obesidad.\n(Disminuye las calorias drasticamente y de forma controlada)." + "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
        }else if(estadoDesalud == 36 || estadoDesalud == 37 || estadoDesalud == 38 || estadoDesalud == 39 || estadoDesalud == 40) {
            console.log("Obesidad morvida.\n(Disminuye las calorias drasticamente,tu salud corre riesgo)."+ "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
            alert("Obesidad morvida.\n(Disminuye las calorias drasticamente,tu salud corre riesgo)."+ "\n" + "Su IMC es de" + " " + pesoDivididoAlturaXAltura + "%")
        }else {
           console.warn("Limite de IMC excedido")
           alert("Limite de IMC excedido")
        }
          
        

        reintentarMedicion = confirm("¿Quieres reintentar la medicion?")

    }

}



const tasaMetabolicaBasal = peso => {
    peso = parseInt(prompt("¿Cuantos kilos pesas?"))

    let parametroHarrisBenedic = 22
    let pesoXparametroH = peso * parametroHarrisBenedic
    let preguntaDeActividadXdia = parseInt(prompt("¿Como definirias tu actividad por dia?.\n1-sedentario\n2-leve\n3-media\n4-fuerte\n5-muy fuerte"))
    const numeroDeActividadXDia = [1.2,1.375,1.55,1.725,1.9]

    console.log("Tus calorias diarias para solo mantenerte vivo son"+" "+pesoXparametroH+" kcal")
    alert("Tus calorias diarias para solo mantenerte vivo son"+" "+pesoXparametroH+" kcal")

    switch (preguntaDeActividadXdia) {
        case 1:
            console.log("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[0]*pesoXparametroH+" kcal\n"+"(SEDENTARIO)😪")
            alert("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[0]*pesoXparametroH+" kcal\n"+"(SEDENTARIO)😪")
            break;
        case 2:
            console.log("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[1]*pesoXparametroH+" Kcal\n"+"(LEVE)🙂")
            alert("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[1]*pesoXparametroH+" Kcal\n"+"(LEVE)🙂")
            break;
        case 3:
            console.log("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[2]*pesoXparametroH+" Kcal\n"+"(MEDIA)😎")
            alert("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[2]*pesoXparametroH+" Kcal\n(MEDIA)😎")
            break;
        case 4:            
            console.log("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[3]*pesoXparametroH+" Kcal\n"+"(FUERTE)🥵")
            alert("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[3]*pesoXparametroH+" Kcal\n"+"(FUERTE)🥵")
        break;
        case 5:
            console.log("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[4]*pesoXparametroH+" Kcal\n"+"(MUY FUERTE)💀")
            alert("Tus calorias diarias para tu actividad son "+numeroDeActividadXDia[4]*pesoXparametroH+" Kcal\n"+"(MUY FUERTE)💀")
            break;
        default:
            console.log("Error digito no encontrado")
            alert("Error digito no encontrado")
            break;
    }
    
}



const calcularProteinas = (proteinasHombre, proteinasMujer, peso) => {

    let seleccionDeSexo = parseInt((prompt("Seleccione que sexo es\n1-Hombre\n2-Mujer\n3-Salir")))

    while (seleccionDeSexo !== 3) {
        switch (seleccionDeSexo) {
            case 1:
                proteinasHombre = 1.25
                peso = parseFloat(prompt("¿Cuantos kilos pesas?"))
                let porsentajeDeProtinasHombre = peso * proteinasHombre
                console.log("Sus proteinas diarias son" + " " + porsentajeDeProtinasHombre + " gramos por dia")
                alert("Sus proteinas diarias son" + " " + porsentajeDeProtinasHombre + " gramos por dia")
                break;
            case 2:
                proteinasMujer = 0.85
                peso = parseFloat(prompt("¿Cuantos kilos pesas?"))
                let porsentajeDeProtinasMujer = peso * proteinasMujer
                console.log("Sus proteinas diarias son" + " " + porsentajeDeProtinasMujer + " gramos por dia")
                alert("Sus proteinas diarias son" + " " + porsentajeDeProtinasMujer + " gramos por dia")
                break;


            default:
                console.log("Error")
                alert("Error")
                break;
        }
        seleccionDeSexo = parseInt((prompt("Seleccione que sexo es\n1-Hombre\n2-Mujer\n3-Salir")))
    }
}



const tipoDeCuerpo = (preguntaDeCalorias, preguntaDeMusculos) => {

    let reintentarCalificacion = true
    
    while (reintentarCalificacion){
    preguntaDeCalorias = parseInt(prompt("Como sientes que quemas calorias?.\n1-rapido\n2-moderadamente\n3-lento"))
    preguntaDeMusculos = parseInt(prompt("¿Como sientes que ganas musculo?.\n1-rapido\n2-moderadamente\n3-lento"))

    const respuestasDeMorfologia = ["Ectomorfo: Complexión ectomorfa,eres delgado y te cuesta ganar peso.\n"+
    "\nDieta:Los ectomorfos deben basar sus comidas en alimentos con alta densidad calórica, como proteínas de origen animal, frutos secos, semillas,huevos y pastas.",
     
    "Mesomorfo: El tipo de cuerpo mesomorfo es aquel que tiene predisposición genética deportiva por naturaleza.\n"+
    "\nDienta:Una dieta para el tipo de cuerpo mesomorfo debe prestar especial atención en la calidad y proporción de macros:"+
    "carbohidratos, proteínas y grasas. Lo ideal es mantener una relación de 50:30:20.",

    "Endomorfo: Carecen de una cintura definida y el tejido graso se deposita en la parte inferior del cuerpo.\n"+
    "\nDienta:Para los endomorfos, se recomienda una dieta que sea baja en carbohidratos pero que incluya carbohidratos saludables como avena y arroz integral."
    ]
     
    if(preguntaDeCalorias == 1 && preguntaDeMusculos == 3 || preguntaDeCalorias == 1 && preguntaDeMusculos == 2 ){
         console.log(respuestasDeMorfologia[0])
         alert(respuestasDeMorfologia[0]) 
    }else if(preguntaDeCalorias== 2 && preguntaDeMusculos== 2 || preguntaDeCalorias == 1 && preguntaDeMusculos == 1 || preguntaDeCalorias == 2 && preguntaDeMusculos == 1){
        console.log(respuestasDeMorfologia[1])
        alert(respuestasDeMorfologia[1])
    }else if(preguntaDeCalorias== 3 && preguntaDeMusculos == 1 || preguntaDeCalorias == 3 && preguntaDeMusculos == 2 || preguntaDeCalorias == 3 && preguntaDeMusculos == 3){
        console.log(respuestasDeMorfologia[2])
        alert(respuestasDeMorfologia[2])
    }

    reintentarCalificacion = confirm("¿Quires reintentar la Calificacion?")
     
}
}

let opcion = parseInt(prompt("¿Que medicion quieres hacer?\n1-Calcular indice de masa corporal.\n2-Calcular calorias diarias.\n3-Calcular proteinas diarias.\n4-Encuesta para saber tu tipo de cuerpo.\n5-Para salir."))

while (opcion!==5) {
    switch (opcion) {
        case 1:
            indiseDeMasacorporal()
            break;
        case 2:
            tasaMetabolicaBasal() 
            break;
        case 3:
            calcularProteinas()
            break;
        case 4:
            tipoDeCuerpo()
            break;        
        default:
            console.log("Error digito no encontrado")
            alert("Error digito no encontrado")
            break;
    }

    opcion = parseInt(prompt("¿Que medicion necesitas hacer?\n1-Calcular indice de masa corporal.\n2-Calcular calorias diarias.\n3-Calcular proteinas diarias.\n4-Encuesta para saber tu tipo de cuerpo.\n5-Para salir."))
}

