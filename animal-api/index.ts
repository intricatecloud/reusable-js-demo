import axios from 'axios';

interface Animal {
    imageSrc: string
    text: string
}

const getCat = (): Promise<Animal> => {
    return axios.get('https://aws.random.cat/meow').then((response) => {
        const imageSrc = response.data.file
        const text = 'CAT'
        return {imageSrc, text} as Animal
    })
}

const getDog = (): Promise<Animal> => {
    return axios.get('https://random.dog/woof.json').then((response) => {
        const imageSrc = response.data.url
        const text = 'DOG'
        return {imageSrc, text} as Animal
    })
}

const getGoat = (): Promise<Animal> => {
    const imageSrc = 'http://placegoat.com/200'
    const text = 'GOAT'
    return Promise.resolve({imageSrc, text} as Animal)
}

export default {
    getDog,
    getCat,
    getGoat
}