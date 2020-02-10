const AnimalApi = require('./lib/index').default

AnimalApi.getCat().then((animal) => {
    console.log(animal)
})