class WhatsAppController{
    constructor(){
        console.log('WhatsAppController OK');
    
        this.loadElements();
    }

    //vai percorrer pelo documento e vai pegar todos os IDs
    loadElements(){

        this.el = {};
        //pegou cada ID do HTML, criou um atributo para ele, já o apontando para o HTML, no padrão correto
        document.querySelectorAll('[id]').forEach(element =>{

            this.el[Format.getCamelCase(element.id)] = element;

        });

    }
}