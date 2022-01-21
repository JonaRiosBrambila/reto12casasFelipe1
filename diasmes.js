// JavaScript Document
function mostrarDias() {

    var fechaInicio = document.getElementById("fechaInicio").value;
    var fechaFin = document.getElementById("fechaFin").value;

    if (fechaInicio.length != 10 || fechaFin.length != 10) {
        document.getElementById("diasDisfrutados").value = 0;
    } else {

        //Separamos las fechas en dias, meses y años
        var diaInicio = fechaInicio.substring(0, 2);
        var mesInicio = fechaInicio.substring(3, 5);
        var anoInicio = fechaInicio.substring(6, 10);

        var diaFin = fechaFin.substring(0, 2);
        var mesFin = fechaFin.substring(3, 5);
        var anoFin = fechaFin.substring(6, 10);

        //Los meses empiezan en 0 por lo que le restamos 1
        mesFin = mesFin - 1;
        mesInicio = mesInicio - 1;

        //Creamos una fecha con los valores que hemos sacado
        var fInicio = new Date(anoInicio, mesInicio, diaInicio);
        var fFin = new Date(anoFin, mesFin, diaFin);

        diasTotal = 0;

        if (fFin > fInicio) {

            //Para sumarle 365 días tienen que haber 2 años de diferencia
            //Si no solamente sumo los días entre meses
            anoInicio++;
            while (anoFin > anoInicio) {

                alert("Entro aquí si hay dos años de diferencia");

                if (esBisiesto(anoFin)) {
                    dias_e_anio = 366;
                } else {
                    dias_e_anio = 365;
                }
                diasTotal = diasTotal + dias_e_anio;
                anoFin--;
            }

            //Para sumarle los días de un mes completo, tengo que ver que haya diferencia de 2 meses
            mesInicio++;
            while (mesFin > mesInicio) {
                dias_e_mes = getDays(mesFin - 1, anoFin);
                diasTotal = diasTotal + dias_e_mes;
                mesFin--;
            }

            //Solamente falta sumar los días 
            mesInicio--;
            if (mesInicio == mesFin) {
                diasTotal = diaFin - diaInicio + 1;
            } else {

                //Saco los días desde el mesInicio hasta fin de mes
                dias_e_mes = getDays(mesInicio, anoInicio);
                diasTotal = diasTotal + (dias_e_mes - diaInicio) + 1;
                //ahora saco los días desde el principio de mesFin hasta el día
                diasTotal = diasTotal + parseInt(diaFin);

            }
        }

        //Si la fechaFin es mayor
        else if (fechaFin < fechaInicio) {
            alert("La fecha de fin no puede ser mayor que la fecha de inicio");
            diasTotal = 0;
        }

        //Si las fechas son iguales
        else {
            diasTotal = 1;
        }

    }
}

function esBisiesto(ano) {
    if (ano % 4 == 0)
        return true
            /* else */
    return false
}

function getDays(month, year) {

    var ar = new Array(12)
    ar[0] = 31 // Enero
    if (esBisiesto) {
        ar[1] = 29
    } else {
        ar[1] = 28
    }
    ar[2] = 31 // Marzo
    ar[3] = 30 // Abril
    ar[4] = 31 // Mayo
    ar[5] = 30 // Junio
    ar[6] = 31 // Julio
    ar[7] = 31 // Agosto
    ar[8] = 30 // Septiembre
    ar[9] = 31 // Octubre
    ar[10] = 30 // Noviembre
    ar[11] = 31 // Diciembre

    return ar[month];
}