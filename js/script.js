let img = document.querySelectorAll("#imagens img");

img.forEach(imagem => {
    imagem.addEventListener("click", () => {
        const valorClicado = imagem.getAttribute("value");

        img.forEach(outraImagem => {
            if (outraImagem !== imagem) { 
                outraImagem.hidden = true; 
            } else {
                outraImagem.hidden = false; 
            }
        });
    });
});