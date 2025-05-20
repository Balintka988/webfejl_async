const service = new Service();
const dataViewController = new DataViewController();

service.init().then((value) => {
    dataViewController.renderData(value)
})

// service.initInvalid().then((value) => { 
//     dataViewController.renderData(value)
// }).catch((error) => {
//     dataViewController.renderError(error)
// }) 

service.realInit(3).then((value) => {
    dataViewController.renderData(value)
})
service.realInit(1).then((value) => {
    dataViewController.renderData(value)
}).catch((error) => {
    dataViewController.renderError(error)
});
