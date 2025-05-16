function buyApple(num){
    if (num < 5){
        return Promise.resolve(`van ennyi alma:${num}`);
    }
    else{
        return Promise.reject("nincs ennyi alma")
    }
}

const AlmaIgeret = buyApple(4);
console.log(AlmaIgeret);

AlmaIgeret.then(value => {
    console.log(value)
})

console.log(AlmaIgeret);

const ApplePromise2 = buyApple(6).catch(error => {
    console.log(error)
});
console.log(ApplePromise2);

const ApplePromise3 = buyApple(3).then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})


function buyApple3(num){
return new Promise((resolve, reject)=> {
    if (num < 5){
        setTimeout(() => {
            resolve(`van ennyi alma:${num}`);
        }, 1000)
    }
    else{
        setTimeout(() => {
            reject("nincs ennyi alma")
        }, 1000)
    }     
})
}
buyApple3(3).then(value => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})


