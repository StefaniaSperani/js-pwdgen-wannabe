/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 
(dove il 21 è in questo caso l'età) */


// CREO LE DOMANDE DA PORRE ALL'UTENTE

const userName = prompt('Come ti chiami?');
const userSurname = prompt("Quale è il tuo congnome?");
const userColor = prompt('Quale è il tuo colore preferito?');
const userAge = prompt('Quanti anni hai?');
const presentation = `
    <div class="myred">Ciao, questa è la tua password:</div>
    <span class="mywhite"> ${userName}${userSurname}${userColor}${userAge}</span>
`;


// ULTIMO CHECK NELLA CONSOLE PER VEDERE SE REGISTRA TUTTO (LO LASCIO COSI POSSO VEDERLO)

console.log(userName + userSurname + userColor + userAge);


// ORA DICO CHE OGNI COSA INSERITA DALL'UTENTE VENGA VISUALIZZATO NELL'HTML (COME SE FOSSE UNA PRESENTAZIONE)

const element = document.getElementById('user');

element.innerHTML = presentation;

