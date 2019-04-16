// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 3) + 1; // 1位から3位まで表示する
console.log("あなたの順位は" + number + "位です");
// ここにif文を追加する
if (number == 1) {
    console.log("おめでとう！"); // 条件式が成立したときの処理（順位が1位の時はおめでとう！と表示する）
} else {
    console.log("あと少し！");  // 条件式が成立しなかったときの処理（順位が2,3位の時はあと少し！と表示する）
}