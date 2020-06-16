    function contar(){
        let ini=document.getElementById('n1')
        let fim=document.getElementById('n2')
        let passo=document.getElementById('pass')
        let res=document.getElementById('res')
        if(ini.value.length==0||fim.value.length==0
         || passo.value.length==0 ){
             alert('[ERRO] Faltam dados!')
         }
         else{
             res.innerHTML="Contando :"
             let i =Number(ini.value)
             let f=Number(fim.value)
             let p=Number(passo.value)
             for(let c=i;c<=f;c<=p){
                 res.innerHTML+=`${c} `
             }
         }
    }