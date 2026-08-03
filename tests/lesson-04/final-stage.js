//đếm và in ra các cặp số từ 1 tới 100 có tổng chia hết cho 17. VD:  (1,16) và (2,15)
//mỗi cặp đếm 1 lần: VD: (1,16) và (16,1) đếm 1 lần. 
//2 số trong cặp số được phép bằng nhau (17,17), (34,34)

let count = 0;

for (let a = 1; a <= 100; a++) {
// b bắt đầu từ a để không đếm trùng số  trùng số => mỗi cặp đếm 1 lần: VD: (1,16) và (16,1) đếm 1 lần và 2 số trong cặp được phép bằng nhau
    for (let b = a; b <= 100; b++) {
        if ((a + b) % 17 === 0){
            console.log(`(${a} , ${b})`);
            count++;
        }
    }
// b bắt đầu từ a để không đếm trùng số  trùng số => mỗi cặp đếm 1 lần: VD: (1,16) và (16,1) đếm 1 lần và 2 số trong cặp không được phép bằng nhau
    // for (let b = a + 1; b <= 100; b++) {
    //     if ((a + b) % 17 === 0){
    //         console.log(`(${a} , ${b})`);
    //         count++;
    //     }
    // }
//mỗi cặp đếm 1 lần: VD: (1,16) và (16,1) đếm 2 lần
    // for (let b = 1; b <= 100; b++) {    // b chạy full 100 không phụ thuộc a
    //     if ((a + b) % 17 === 0){
    //         console.log(`(${a} , ${b})`);
    //         count++;
    //     }
    // }
}

console.log(`Tổng số cặp chia hết cho 17: ${count}`);