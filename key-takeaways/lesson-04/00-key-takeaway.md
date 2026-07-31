
lesson 04 - js cơ bản

đầu buổi ôn git chút:
git init -> khởi tạo
git add <file></file> -> add vô staging
git commit -m "message" -> tạo commit

xong qua js.

js kêu là ngôn ngữ top 1 server, dễ cài dễ code. có string boolean number, toán tử số học với logic (&& ||)

hello world:
console.log("Hello world");

chạy file thì dùng node, file trong thư mục thì ghi đường dẫn luôn:
node section-01/01-hello.js

comment = tắt tạm đoạn code cho khỏi chạy
// 1 dòng
/* */ nhiều dòng

biến với hằng
biến = biến thiên = đổi được. cú pháp: <từ khóa> <tên> = <giá trị>
var centerName = "Better Bytes Academy";
let isLovePlaywright = true;

hằng const = cố định không đổi
const slogan = "Học Kỹ - Hiểu Bản Chất - Mentor Tận Tình";

khi nào dùng gì:

- mặc định const
- cần gán lại mới let
- var thì bỏ, đừng dùng

kiểu dữ liệu (8 kiểu, 2 nhóm)
nguyên thủy: number string boolean undefined null symbol bigint
tham chiếu: object

string 3 cách viết:
const name = "John";     // nháy kép
const msg = 'Hello';     // nháy đơn
const t = `Age: 10`;     // backtick (phím dấu huyền cạnh số 1)

boolean chỉ có true / false

toán tử
so sánh -> ra boolean. bằng (== ===), khác (!=), lớn nhỏ (> < >= <=)

== với === dễ nhầm:
== so sánh sau khi tự đổi kiểu
=== so cả giá trị lẫn kiểu -> xài cái này cho chắc
5 == "5"  -> true (đổi "5" thành 5)
5 == "6"  -> false
true == 1 -> true

logic: && đúng khi cả 2 vế đúng, || đúng khi 1 trong 2 vế đúng

số học: + - * /
const result = 5 + 10; // 15

toán tử 1 ngôi ++ -- (chỉ cần 1 toán hạng). có prefix với postfix, hay lộn chỗ này:
++x tăng trước rồi trả
x++ trả trước rồi tăng
let b = ++a; // a lên 11 rồi trả -> b = 11
let d = c++; // trả 10 cho d trước -> d = 10 (c thành 11)

câu điều kiện
kiểm tra logic trước, đúng mới chạy
if / if else / if else if else / switch case

tự nhắc:

- xài === đừng ==
- pre = tăng trước, post = trả trước
- const trước let sau var bỏ
