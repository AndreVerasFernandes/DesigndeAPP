async function PostUser(codigo){

const host = "http://localhost:3000/api";
    var usuario = document.getElementById("usuario").value
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;    
    const url = `${host}/${usuario}/${email}/${senha}`;
    const data = new URLSearchParams();
    data.append('command', codigo);

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar requisição');
        }

        const responseData = await response.json();
        console.log('Resposta do servidor:', responseData);
        
        fetch(`${host}/${usuario}/${email}/${senha}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((resposta) => resposta.json())
        .then((resposta => {
            console.log(`Comando enviado ao BD`)
        }))
 
    } catch (error) {
        console.error('Erro:', error);
    }  

}