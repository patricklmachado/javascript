function carregar(){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = '../modelo/fotomanha.png'
        window.document.body.style.background = '#d7c5c3'
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = '../modelo/fototarde.png'
        window.document.body.style.background = '#f28a43'
    } else{
        // BOA NOITE!
        img.src = '../modelo/fotonoite.png'
        window.document.body.style.background = '#67507e'
    }

}