document.addEventListener('DOMContentLoaded', function () {
    // Inicializa a biblioteca PageFlip para criar o efeito de folheto
    const pageFlip = new St.PageFlip(
        document.getElementById('my-flipbook'),
        {
            width: 300, // largura da página em px
            height: 400, // altura da página em px
            size: 'fixed',
            minWidth: 300,
            maxWidth: 600,
            minHeight: 400,
            maxHeight: 400,
            maxShadowOpacity: 0.5, // opacidade da sombra de dobra
            showCover: true, // exibe a capa de forma individual
            mobileScrollSupport: false
        }
    );

    // Carrega as páginas presentes no HTML dentro do folheto
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
});