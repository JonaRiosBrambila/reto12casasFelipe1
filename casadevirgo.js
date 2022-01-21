function calcula() {
    var payasos = parseInt(prompt("Escribe el numero de payasos: "));

    var monas = parseInt(prompt("Escribe el numero de muñecas: "));

    var peso_mona = 75;
    var peso_payaso = 112;

    var peso_total = (payasos * peso_payaso) + (monas * peso_mona);
    var paquetes = 0;

    while (peso_total >= 1000) {
        peso_total -= 1000; //se le restara mil gramos lo que equivale a un paquete
        paquetes++; //se sumara un paquete al contador
    }

    if (peso_total < 1000 && peso_total > 0) {
        peso_total = 0; //el utlimo paquete lo añadimos ya con la cantidad restante
        paquetes++; //sumamos un paquete menor a 1 kg
    }

    alert("el peso total de las muñecas es de: " + peso_mona * monas + " y el peso de los payasos: " + peso_payaso * payasos);
    alert("y se enviaran la cantidad de " + paquetes + " paquetes");
}

calcula();