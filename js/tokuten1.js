// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = (parseInt(Math.random() * 3) + 1) * 100; // 得点は100,200,300点が表示する
console.log("あなたの得点は" + number + "ポイントです");
// ここにif文を追加する
if (number == 300) {
    console.log("おめでとう！"); // 条件式が成立したときの処理 300点の時はおめでとう！と表示する
} else {
    console.log("ざんねん！");  // 条件式が成立しなかったときの処理 100,200点の時はざんねん！と表示する
}
