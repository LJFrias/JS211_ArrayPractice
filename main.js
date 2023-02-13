let cars = ['Ford', 'Chevy', 'Toyota', 'BMW']
let moreCars = ['Jeep', 'Mercury', 'Dodge', 'Honda']
let totalCars = cars.concat(moreCars)
let stringOfCars = totalCars.join()
let carsFromString = stringOfCars.split(',')
let carsInReverse = totalCars.reverse()
let pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
let reptiles = pets.slice(4, 6)
let removedReptiles = pets.splice(4, 2, 'hamster')
let removedPet = pets.pop()
pets.push(removedPet)
pets.shift()
let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
let addTwo = (num, index, arr) => {
    arr[index] = num + 2
}
numbers.forEach(addTwo)




console.log(`1. Length of cars is: ${cars.length}`)
console.log(`2. Two arrays of cars is: ${totalCars}`)
console.log(`3. The index of Honda is: ${totalCars.indexOf('Honda')} The last index of Ford is: ${totalCars.lastIndexOf('Ford')} `)
console.log(`4. The string of totalCars is: ${stringOfCars}`)
console.log(`5. The array of cars from string is: ${carsFromString}`)
console.log(`6. The cars in reverse is: ${carsInReverse}`)
console.log(`7. The cars in reverse in alphbetical order should have BMW as index 0: ${carsInReverse.sort()}`)
console.log(`8. The reptiles from the pets array are: ${reptiles}`)
console.log(`9. The pets array items removed is: ${removedReptiles} The new array is now: ${pets}`)
console.log(`10. The pets array last pet taken out is: ${removedPet} The new array is ${pets}`)
console.log(`11. The pets array with the removedPet back in is  ${pets}`)
console.log(`12. Thee first item in the pets array is ${pets.shift()}`)
console.log(`13. The pets array with turtle as the first pet is: ${pets.unshift('turtle')} ${pets}`)
console.log(`14. Adds 2 to the numbers in the arrray: ${numbers} `)