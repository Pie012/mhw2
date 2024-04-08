/// funzioni barra di ricerca a comparsa
function BarraOn(event){
    const barra = event.currentTarget;  /// gestisce l'evento


    const logo = document.querySelector('#logo');  // con questo selettore selezioniamo il div con id = logo
    logo.classList.add("nascosto");                // con add gli aggiungiamo la classe nascosto

    const cerca = document.querySelector('#barra-ricerca');
    cerca.classList.remove("nascosto");
    event.preventDefault();

}

function BarraOff(event){
    const barra = event.currentTarget;  /// gestisce l'evento


    const logo = document.querySelector('#logo');  // con questo selettore selezioniamo il div con id = logo
    logo.classList.remove("nascosto");                // con add gli rimuoviamo la classe nascosto

    const cerca = document.querySelector('#barra-ricerca');
    cerca.classList.add("nascosto");
    event.preventDefault();

}

const barra = document.querySelector("#cerca");  //creata la costante barra è associata al selettore #cerca
barra.addEventListener('click',BarraOn);         //barra è in attesa (ascolto) dell'evento


const barra1 = document.querySelector("#ricerca");  //creata la costante barra1 è associata al selettore #ricerca
barra1.addEventListener('click',BarraOff);         //barra1 è in attesa dell'evento

/// fine barra di ricerca/////

// funzione che se passo sopra un imagine la sostiituisce con un altra nella galleria 'mouseenter' e 'mouseleave' ////
function CambioImage(event){
    const image = event.currentTarget;
    console.log('sono dentro');

    image.src = 'immagini/muso2.jpg'; 
}
//console.log('ciao mondo')


const image = document.querySelector('#macchina');
image.addEventListener('mouseenter',CambioImage);



function RicambioImg(event){
    const image1 = event.currentTarget;
    console.log('sono fuori');

    image1.src = 'immagini/muso.jpg';
    
}
console.log('ciao mondo');


const image1 = document.querySelector('#macchina');
image1.addEventListener('mouseleave',RicambioImg);


//fare uno slider di immagini in modalità desktop
/// zona funzioni ///////

function slideDx(event){
    const destra = event.currentTarget;

    const contenitore = document.querySelector('#prod-item1');
    contenitore.classList.add('hidden');

    const contenitore1 = document.querySelector('#prod-item2');
    contenitore1.classList.remove('hidden');
    event.preventDefault();

}


function slideSx(event){
    const sinistra = event.currentTarget;

    const contenitore = document.querySelector('#prod-item1');
    contenitore.classList.remove('hidden');

    const contenitore1 = document.querySelector('#prod-item2');
    contenitore1.classList.add('hidden');
}

/// dichiarazione delle variabili che scatenano eventi ///

const destra = document.querySelector('#b_destra');
destra.addEventListener('click',slideDx);

const sinistra = document.querySelector('#b_sinistra');
sinistra.addEventListener('click',slideSx);

//slider immagini modalita telefono

function slideDx1(event){
    const destra = event.currentTarget;

    const contenitore = document.querySelector('#prod-item11');
    contenitore.classList.add('hidden');

    const contenitore1 = document.querySelector('#prod-item22');
    contenitore1.classList.remove('hidden');
    event.preventDefault();

}


function slideSx1(event){
    const sinistra = event.currentTarget;

    const contenitore = document.querySelector('#prod-item11');
    contenitore.classList.remove('hidden');

    const contenitore1 = document.querySelector('#prod-item22');
    contenitore1.classList.add('hidden');
}

/// dichiarazione delle variabili che scatenano eventi ///

const destra1 = document.querySelector('#b_destra');
destra1.addEventListener('click',slideDx1);

const sinistra1 = document.querySelector('#b_sinistra');
sinistra1.addEventListener('click',slideSx1);