 
let passwordShow = document.getElementById("password")

function generatePassword(){
    let passwordChar = "@%&()4554sgdecvmnbvzcq"
    let password = ""
    
    for (let i = 0; i< 8; i++) {
        let randomPass = Math.floor(Math.random() * passwordChar.length)
       password += passwordChar[randomPass]
        
    }

    passwordShow.innerText = password


    
}

