class Service{
    #data

    constructor(){
        this.#data = people
    }

    init(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.#data);
            }, 3000)
        })
    }
    initInvalid(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Hiba történt!');
            }, 3000)
        })
    }
    realInit(num){
        return new Promise((resolve, reject) => {
            if (num < 2){
                setTimeout(() => {
                    resolve(this.#data);
                }, 3000)
            }
            if (num > 2){
                setTimeout(() => {
                    reject('Hiba történt!');
                }, 3000)
            }
        })
    }   
}