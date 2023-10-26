// Question 1
console.log('Question 1')


let obj1 = {name: 'Person1', age: 5}
let obj2 = {age: 5, name: 'Person1'}

function compareObjects(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] != obj2[key]) {
            return false
        }
    }
    return true
}

if (compareObjects(obj1,obj2)) {
    console.log('Obj1 & Obj2 have the same properties.')
} else {
    console.log('Obj1 and Obj2 do not have the same properties')
}

// Question 2

URL = 'https://restcountries.com/v3.1/all'
const http1 = new XMLHttpRequest();
http1.open('GET', URL)
http1.send()
http1.onload = () => {
    console.log('----------')
    console.log('Question 2')
    if (http1.status === 200) {
        let countries = JSON.parse(http1.response)
        for (let country of countries) {
            console.log(country.name.common, country.flags.svg)
        }
    } else {
        console.log("There was an error fetching the data.")
    }
}

// Question 3

URL = 'https://restcountries.com/v3.1/all'
const http2 = new XMLHttpRequest();
http2.open('GET', URL)
http2.send()
http2.onload = () => {
    console.log('----------')
    console.log('Question 3')
    if (http2.status === 200) {
        let countries = JSON.parse(http2.response)
        for (let country of countries) {
            console.log(`Name: ${country.name.common}`, "\n",`Region: ${country.region}`, "\n",`Subregion: ${country.subregion}`)
        }
    } else {
        console.log("There was an error fetching the data.")
    }
}