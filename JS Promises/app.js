const firstName = (firstName)=>{
    return  firstPromise.then((`${firstName}`)=>{
        console.log("First Name ", `${firstName}`)
    })

}

const firstPromise = new Promise ((resolve,reject)=>{
    resolve(`Hi ${firstName}`);

})


const secondFunction =()=>{

}

const thirdFunction = ()=>{

}

firstName("Fassam")