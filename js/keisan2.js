//値段を計算する
process.stdin.resume();
process.stdin.setEncoding('utf8');
var apple_price = (parseInt(Math.random() *3) +1)*100; // リンゴの単価
var apple_num = parseInt(Math.random() *10) + 1;  //リンゴを買う数
console.log("リンゴの単価 :" + apple_price + "円");
console.log("リンゴを買う数 :" + apple_num + "個");
var total = apple_price * apple_num;
console.log("合計金額" + total + "円");