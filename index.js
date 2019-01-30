const arr = ['tampa', 'jacksonville', 'miami', 'key west']

const upper = (city) => city[0].toUpperCase() + city.slice(1, city.length)

const upperArr = arr.map(upper)

console.log(upperArr + " - to upper case with predefined function")

const newArr = arr.map((city) => city[0].toUpperCase() + city.slice(1, city.length))

console.log(newArr + " - to upper case with callback function")
