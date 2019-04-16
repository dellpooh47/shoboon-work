// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 3) + 1;
console.log("あなたの順位は" + number + "位です");
// ここにif文を追加する
if (number == 1) {
    console.log("おめでとう！"); // 条件式が成立したときの処理（順位が1位の時）
} else {
    console.log("");  // 条件式が成立しなかったときの処理（順位が2,3位の時）
}