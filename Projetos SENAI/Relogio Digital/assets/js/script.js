const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dataHoje = new Date();
    let hora = dataHoje.getHours();
    let minuto = dataHoje.getMinutes();
    let segundo = dataHoje.getSeconds();

    if(segundo < 10){
        segundos.textContent = "0" + segundo;
    }
    else{
        segundos.textContent = segundo;
    }

    if(minuto < 10){
        minutos.textContent = "0" + minuto;
    }
    else{
        minutos.textContent = minuto;
    }

    if(hora < 10){
        horas.textContent = "0" + hora;
    }
    else{
        horas.textContent = hora;
    }
})