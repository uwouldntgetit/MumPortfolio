
function sendEmailContacts(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let object = document.getElementById("object").value;
    let message = document.getElementById("text").value;

    var messageBody = "Nome: " + name + "<br>Cognome: " + surname +
                    "<br>Email: " + email + "<br>Oggetto: " + object +
                    "<br>Messaggio: " + message;
    
    Email.send({
        SecureToken : "e1dcb547-d194-4526-a7c2-900c44d4be6e",
        To : 'benedettavigori@gmail.com',
        From : "federicogiudici14@gmail.com",
        Subject : "Messagio da un cliente",
        Body : messageBody
    }).then(
        message => {
            if(message == "OK"){
                alert("Il messaggio e' stato inviato con successo")
            }
            else {
                alert("Problema nell'invio del messaggio")
                console.log(message);
            }
        }
    );
};