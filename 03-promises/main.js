// aqui.

// const p = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve("ariel")
//     }, 1000)
// })

// p.then(function (data){ //callback functions that are executed when something happen
//     console.log('data',data)
// }).catch(function(error){
//     console.error('error',error)
// })
// console.log("Deu erro")

// //new function
// function randomPromise (){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if (Math.random()> 0.5){
//                 resolve("Deu certo")
//             }else{
//                 reject('Deu errado')
//             }
//         },1000)
//     })
// }

// randomPromise()
//     .then(function(data){
//         console.log('data', data)
//     })
//     .catch(function(error){
//         console.log('error',error)
//     })
    
// //get data request
//     get_data("https://viacep.com.br/ws/04685002/json/")
//     .then(function(data){
//         console.log('sucesso', data)
//     })
//     .catch(function(error){
//         console.log('erro',error)
//     })

    const input_cep = document.getElementById('cep')
    const input_complemento = document.getElementById('complemento')
    const input_bairro = document.getElementById('bairro')
    const input_localidade = document.getElementById('localidade')
    const input_uf = document.getElementById('uf')

    input_cep.addEventListener('keypress', function(e){
        if (e.key==="Enter"){
            let cep_data = "https://viacep.com.br/ws/04685002/json/"
            cep_data = cep_data.replace((/\d+/) , input_cep.value)
            console.log(cep_data)
        
            get_data(cep_data)
            .then(function(data){
            let input_logradouro = document.getElementById('logradouro')
            const json_cep = JSON.parse(data)
            // console.log(json_cep.bairro)
            input_logradouro.value = json_cep.logradouro
            input_complemento.value = json_cep.complemento
            input_bairro.value = json_cep.bairro
            input_localidade.value = json_cep.localidade
            input_uf.value = json_cep.uf
        })
        }
    })
