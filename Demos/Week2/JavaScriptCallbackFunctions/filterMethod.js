// GO BACK THROUGH THIS 
// https://github.com/takis-fuego-cohort/lessons-and-labs/blob/main/Unit_1/07-js-continued/7.2-js-callback-functions-full.md




// Callback functions allow for thigns to take time, like below, where we're searching and waiting for the specified cars to be pulled out of the array.

const cars = [
    { make: 'Toyota', yrsOld: 5, mileage: 92399 },
    { make: 'Ford', yrsOld: 12, mileage: 255005 },
    { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
    { make: 'Subaru', yrsOld: 9, mileage: 111266 },
    { make: 'Toyota', yrsOld: 2, mileage: 41888 },
    { make: 'Tesla', yrsOld: 3, mileage: 57720 }
  ];

function carIsGood(car) { // Here, we're creating the fuction that returns the cars that have driven more than 20,000 miles per year.
    return (car.mileage / car.yrsOld) > 20000 // Read the instructions!
}



const wellDrivenCars = cars.filter(carIsGood) 
  wellDrivenCars.forEach((car) => {
    console.log(car)
  })

// or...
const wellDrivenCars2 = cars.filter((car) => {
    return car.mileage / car.yrsOld > 20000
  })
  




