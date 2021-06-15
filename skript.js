const revers = (string) => {
  const array = string.split("");
  const reversArray = [];
  for (let i = 0; array.length > i; i++) {
    reversArray.unshift(array[i]);
  }

  console.log(reversArray.join(""));
};
// revers("Привет, мир!");
// revers("1");
// revers("");

const moveTank = (roadMinesArray) => {
  const damage = [];
  for (let i = 0; roadMinesArray.length > i; i++) {
    console.log(`танк переместился на ${i + 1}»`);
    if (roadMinesArray[i] === true && damage.length === 1) {
      console.log("танк уничтожен");
      return;
    } else if (roadMinesArray[i] === true) {
      console.log("танк повреждён");
      damage.push("пробитие");
    }
  }
};

// moveTank([true, true, true, true, true, true, true, true, true, true]);
// moveTank([true, false, false, false, false, false, false, false, false, true]);
// moveTank([false, false, false, true, false, false, false, false, false, false]);

const calendar = (dayOfWeek) => {
  const arrayDaysOfWeek = [
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "пятниця",
    "субота",
    "неділя",
  ];
  let index = arrayDaysOfWeek.findIndex((day) => day === dayOfWeek);
  for (let i = 1; i < 32; i++) {
    console.log(`${i} января, ${arrayDaysOfWeek[index]}`);
    if (index === 6) {
      index = 0;
    } else {
      index++;
    }
  }
};

// calendar("вівторок");
// calendar("четвер");
