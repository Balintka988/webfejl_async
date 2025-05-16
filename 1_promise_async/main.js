const service = new Service();
const dataViewController = new DataViewController();

service.init().then((value) => {
    console.log(value)
    dataViewController.renderData(value)
})
