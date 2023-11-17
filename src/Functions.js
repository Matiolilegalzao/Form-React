function cpfFormater(){
    let input = document.querySelector('input');

    input.addEventListener('keypress', () =>{
        let inputLength = input.value.length

        if(inputLength === 3){
            input.value += '.'
        }
    })
}

function enviarDados(){
    alert("Enviou")
}

export {enviarDados, cpfFormater}
