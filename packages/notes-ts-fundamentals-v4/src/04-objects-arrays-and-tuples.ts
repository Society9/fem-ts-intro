//* Objects

const myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2002,
}

let car: {
  make: string
  model: string
  year: number
}

// this says myCar is of object type car. ?
car = myCar

// ? A function that prints info about a car to stdout
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number // optional property
}) {
  let str = `${car.make} ${car.model} (${car.year})`
  if (typeof car.chargeVoltage !== 'undefined')
    str += `// ${car.chargeVoltage}v`
  console.log(str)
}

printCar(car)

//* Optional properties
//? Insert into function printCar

printCar({
  //? original fn works
  make: 'Honda',
  model: 'Accord',
  year: 2017,
})

printCar({
  //? optional property works too!
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  chargeVoltage: 220,
})

//* Excess property checking

printCar({
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  // color: "RED", //? EXTRA PROPERTY WONT WORK
})

//* Index signatures

//? Dictionary of phone #s
//? Model as an index signature
// with this we are saying that any attribute in this object, will have
// an object attached to it with the following types?
// let phones: {
//   [key: string]: {
//     country: string
//     area: string
//     number: string
//   }
// }

let phones: {
  mobile: {
    country: string
    area: string
    number: string
  }
  [key: string]: {
    country: string
    area: string
    number: string
  }
}

const myPhones = {
  home: { country: '+1', area: '211', number: '652-4515' },
  mobile: { country: '+1', area: '211', number: '652-4515' },
  work: { country: '+1', area: '670', number: '752-5856' },
  fax: { country: '+1', area: '322', number: '525-4357' },
}

phones = myPhones

// common ts conventions
phones.mobile // use this for KNOWN attributes
phones['work'] // use this for CUSTOM attributes / dictionary

//*  Array Types

const fileExtensions = ['js', 'ts'] as string[]
//  ^? string[]

const cars = [
  //? Let's look at an array of objects
  (car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2002,
  }),
]

//* Tuples

// not well typed example
let myOtherCar = [
  2002, // Year
  'Toyota', // Make
  'Corolla', // Model
]
const [year, make, model] = myOtherCar //✔️ Destructuring

//? Inference doesn't work very well for tuples

myOtherCar = ['Honda', 2017, 'Accord', 'Sedan'] //! Wrong convention

let myOtherOtherCar: [number, string, string] = [
  2002,
  'Toyota',
  'Corolla',
]
// myOtherOtherCar = ["Honda", 2017, "Accord"] //! Wrong convention
// myOtherOtherCar = [2017, "Honda", "Accord", "Sedan"] //! Too many elements

//*  `readonly` tuples

const numPair: [number, number] = [4, 5] //✔️ Valid
// const numTriplet: [number, number, number] = [7] //! Invalid

;[101, 102, 103].length //? number[].length
numPair.length //? [number, number] length

// numPair.push(6) // [4, 5, 6]
// numPair.pop() // [4, 5]
// numPair.pop() // [4]
// numPair.pop() // []

// numPair.length  //! ❌ DANGER ❌

// const roNumPair: readonly [number, number] = [4, 5]
// roNumPair.length
// roNumPair.push(6) // [4, 5, 6] //! Not allowed
// roNumPair.pop() // [4, 5] //! Not allowed

/**/

export default {}
