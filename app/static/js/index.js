document.addEventListener('DOMContentLoaded', () => {
    const linhas = document.querySelectorAll( '#tabela tbody tr' );
    linhas.forEach( linha => {
        const posicao = parseInt( linha.cells[0].textContent );
        if ( posicao === 1 ) {
            linha.classList.add( 'lider' );
        } else if ( posicao >= 2 && posicao <= 4 ) {
            linha.classList.add( 'g4' );
        } else if ( posicao >= 17 ) {
            linha.classList.add( 'z4' );
        }   
       
    });
});