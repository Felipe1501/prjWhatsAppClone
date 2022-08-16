export class ClassEvent {
    constructor(){
        this._events = {};
    }
    on(eventName, fn){
        if (!this._events[eventName]) this._events[eventName] = new Array();
    
        this._events[eventName].push(fn);
    }  
    
    trigger(){
        //arguments é um comando nativo do js, para pegar os argumentos que passamos no parâmetro
        let args = [...arguments];
        let eventName = args.shift();

        args.push(new Event(eventName));

        if (this._events[eventName] instanceof Array){
            this._events[eventName].forEach(fn =>{
                
                fn.apply(null, args);

            });
        }
    }
}