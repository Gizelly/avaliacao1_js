function upDate(previewPic) {
    // Verificar se a função está sendo chamada corretamente
    console.log(previewPic); // Verifique as propriedades do elemento

    // Alterar o fundo da div com o id "image" para o src da imagem
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Alterar o texto da div com o id "image" para o alt da imagem
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    // Restaurar o fundo da div com o id "image" para a imagem original
    document.getElementById("image").style.backgroundImage = "url('')";
    
    // Restaurar o texto da div com o id "image" para o texto original
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}
