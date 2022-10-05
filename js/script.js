/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
poi chiedi la sua età
Infine scrivi sulla pagina nomecognomecolorepreferito21 
(dove il 21 è in questo caso l'età) */



const userName = prompt('Come ti chiami?');
const userSurname = prompt("Quale è il tuo congnome?");
const userColor = prompt('Quale è il tuo colore preferito?');
const userAge = prompt('Quanti anni hai?');
const presentation = `
    ${userName} ${userSurname} ${userColor} ${userAge} 
`;


const element = document.getElementById('user');

element.innerHTML = presentation;
