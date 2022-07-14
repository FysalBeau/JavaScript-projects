/*
Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day?
We humans need more than that. If we don’t sleep enough, we accumulate sleep debt.
In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

function getSleepHours (day){
  day = day.toLowerCase();
  switch (day){
    case 'monday':
      return 8;
    case 'tuesday':
      return 9;
    case 'wednesday':
      return 10;
    case 'thursday':
      return 8;
    case 'friday':
      return 5;
    case 'saturday':
      return 10;
    case 'sunday':
      return 8;
    default : 
      console.log('thats not a day of the week..');
  }
}

// console.log(getSleepHours('SaTuRdAy'));

// function getActualSleepHours(){
//   let totalActual = 0;
//   totalActual += getSleepHours('monday');
//   totalActual += getSleepHours('tuesday');
//   totalActual += getSleepHours('wednesday');
//   totalActual += getSleepHours('thursday');
//   totalActual += getSleepHours('friday');
//   totalActual += getSleepHours('saturday');
//   totalActual += getSleepHours('sunday');
//   return totalActual;
// }

const getActualSleepHours = () => 8 + 9 + 10 + 8 + 5 + 10 + 8;

console.log(`actual hours of sleep a week: ${getActualSleepHours()}.`);

// function getIdealSleepHours(){
//   let idealHours = 8;
//   return (idealHours * 7);
// }

const getIdealSleepHours = idealHours => idealHours * 7;

console.log(`ideal hours of sleep a week: ${getIdealSleepHours(8)}.`);

function calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  let sleepDebt = actualSleepHours - idealSleepHours;
  if (actualSleepHours === idealSleepHours){
    return `You got ${sleepDebt} hours over the ideal hours of sleep. You the perfect amount of sleep this week :)`;
  }else if(actualSleepHours < idealSleepHours){
    return `You got ${sleepDebt} hours over the ideal hours of sleep. You got less sleep then needed, you should get some rest!`;
  }else if (actualSleepHours > idealSleepHours){
    return `You got ${sleepDebt} hours over the ideal hours of sleep. You got more sleep than needed, you most have alot of free time..`;
  }
}

console.log(calculateSleepDebt());
