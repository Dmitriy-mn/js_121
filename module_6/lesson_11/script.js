// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseControl з методами accelerate та decrease, властивостями speed та brand.


// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log("Авто зупинилось");
//             return;
//         }

//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }


// cruiseControl.accelerate();
// cruiseControl.accelerate();

// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();
// cruiseControl.decrease();

// console.log(cruiseControl);










// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this


const SPEED = 60;

const bmw = {
    speed: 30,
    brand: "BMW"
}

const audi = {
    speed: 80,
    brand: "Audi"
}

function speedSensor(maxSpeed) {
    if(this.speed <= maxSpeed) {
        return `Автомобіль ${this.brand} рухається з безпечною швидкістю. Швидкість ${this.speed}`;
    }

    return `Автомобіль ${this.brand} перевищує`;
}

const speedSensorBmw = speedSensor.bind(bmw);
console.log(speedSensorBmw(SPEED))

console.log(speedSensor.call(audi, SPEED));



