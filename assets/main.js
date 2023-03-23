
function calcola(){

    let nome = document.getElementById ('nomeCognome').value;
    let km = document.getElementById ('km').value;
    let eta = document.getElementById ('eta').value;

    console.log ( nome, km, eta );

    let prezzoFinale = (km * 0,21);
    let sconto;

    if (eta < 18 ){
        prezzoFinale = prezzoFinale - (prezzoFinale * 0.20);
        sconto = 'prezzo scontato giovani';


    }else if ( eta >= 18 && eta <= 65){
        prezzoFinale = prezzoFinale;
        sconto = 'prezzo intero';

    }else if ( eta > 65){
        prezzoFinale = prezzoFinale - (prezzoFinale * 0.80);
        sconto = 'prezzo scontato over';
    }

    prezzoFinale = prezzoFinale.toFixed(2)

    console.log ( prezzoFinale );

    // document.getElementById ('sconto').innerHTML = offerta;

    document.getElementById ( 'costo' ).innerHTML = prezzoFinale

    document.getElementById ('nominativo').innerHTML = nome;

    document.getElementById ('sconto').innerHTML = sconto;

    document.getElementById ('carrozza').innerHTML = Math.random (1).toFixed(1);

    // document.getElementById ('').innerHTML = asconto;
}




