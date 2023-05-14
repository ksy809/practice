// 배열 생성
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// 항목 받아오기
console.log(daysOfWeek[4]);

// 배열 추가
daysOfWeek.push("sun");

console.log(daysOfWeek);

//object 만들기
const player = {
  Name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.Name);
// 다른 방법으로 불러오기
console.log(player["Name"]);
player.fat = false;
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);
