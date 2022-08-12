class Format {
    static getCamelCase(text){
        let div = document.createElement('div');

        div.innerHTML = `<div data-${text}="id"></div>`;
        
        //irá percorrer pelo documento e vai me trazer um array com todas as chaves que ele vai encontrar dentro de um objeto selecionado
        return Object.keys(div.firstChild.dataset)[0];
    }
}