// if文による条件分岐
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 10) + 1;
if (number % 2 == 0) {
    console.log("スキ！"); // 条件式が成立したときの処理
} else {
    console.log("キライ")  // 条件式が成立しなかったときの処理
}