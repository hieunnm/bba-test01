// Bai 1 
function createCharacters() {
  // Mảng gốc: các object chứa thuộc tính name, level, health
  const characters = [
    { name: 'Shade', level: 10, health: 200 },
    { name: 'Milky', level: 15, health: 380 },
    { name: 'Malia', level: 12, health: 350 },
    { name: 'Roman', level: 20, health: 400 },
  ];

// map: duyệt từng phần tử của "characters", tạo ra mảng MỚI cùng độ dài
  // - char.name.toUpperCase() -> chuyển name gốc thành chữ hoa
  // - char.level * 2          -> nhân đôi level gốc
  // - char.health * 3         -> nhân ba health gốc
  // Lưu ý: phải bọc object literal trong () để JS không hiểu {} là thân hàm
  const charactersPowerUp = characters.map((char) => ({
    name: char.name.toUpperCase(),
    level: char.level * 2,
    health: char.health * 3,
  }));


  // filter: duyệt trên "charactersPowerUp" (mảng đã power-up, không phải mảng gốc)
  // chỉ giữ lại phần tử có health (đã x3) > 1000
  // filter trả về mảng mới, có thể ít phần tử hơn mảng đầu vào
  const possibleWinners = charactersPowerUp.filter((char) => char.health > 1000);

  // In ra để kiểm tra kết quả
  console.log(charactersPowerUp); // đủ 4 phần tử, mảng gốc không đổi
  console.log(possibleWinners);   // chỉ những ai health > 1000

  return { charactersPowerUp, possibleWinners };
}

createCharacters();

//==============
//Bài 2 
// ===== Bài 2: printLeaderboard =====

// Hàm nhận vào players (mảng object {name, score}) và IN ra bảng xếp hạng
function printLeaderboard(players) {
  // Sao chép mảng rồi sắp xếp score từ cao đến thấp (không đổi mảng gốc)
  const sorted = [...players].sort((a, b) => b.score - a.score);

  // Huy chương cho 3 vị trí đầu
  const medals = ["🥇", "🥈", "🥉"];

  // Duyệt từng người chơi đã sắp xếp
  sorted.forEach((player, index) => {
    const rank = index + 1;              // thứ hạng = index + 1
    const medal = medals[index] || "  "; // top 3 có huy chương, còn lại để trống

    // In trực tiếp từng dòng ra terminal
    console.log(`${medal} ${rank}. ${player.name} - ${player.score.toLocaleString()} pts`);
  });
}

// ===== Test =====
const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 },
];

// Gọi hàm in bảng xếp hạng
printLeaderboard(players);