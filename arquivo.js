const fs = require('fs');

exports.salvarArquivo = (nomeArquivo, conteudo) =>{
    const promessa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fs.writeFile(nomeArquivo, conteudo, (erro) =>{
                if(erro){
                    reject(erro);
                }else{
                    console.log("arquivo salvo", conteudo);
                    resolve();
                }
            })
        }, Math.random(3));
    });
    return promessa;
  }

  exports.lerArquivo = (nomeArquivo)=>{
    const promessa = new Promise((resolve, reject)=>{
        fs.readFile(nomeArquivo, 'utf-8', (erro, conteudo)=>{
            if(erro){
                reject(erro);
            }else{
                resolve(conteudo);
            }
        })
    });return promessa;
  };

  exports.deletarArquivo = (nomeArquivo) => {
    const promessa = new Promise((reject) =>{
         fs.unlink(nomeArquivo, (erro) => {
            if (erro) {
                 reject(erro);
                 } else { console.log("Arquivo deletado com sucesso");}
                 });
                });
                 return promessa;};
