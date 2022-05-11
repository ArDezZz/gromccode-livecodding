'use strict';

// const obj = {
//   age: 100,
//   run: function () {
//     console.log(this);
//   },
// };

// console.log(obj.run());

// function run() {
//   console.log(this);
//   console.log(`I've done run in ${this.city}`);
// }
// run();
// function run(city) {
//   console.log(`I've done run in ${city}`);
// }

//===
//1. what is context? +++
//2. when context is lost?
//in callbacks
//in new data
//3. how to fix context?

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    //input: none
    //output: undefined
    this.intervalId = setInterval(() => {
      console.log(this);
      console.log(this.secondsPassed);
      this.secondsPassed += 1;
      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    return clearInterval(this.intervalId);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

//text data
timer.startTimer();
