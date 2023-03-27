
// buatlah fungsi yang menerima object, kemudian mengembalikan value berupa array dengan bentuk seperti contoh output dibawah


const transform = (obj) => {
    // your code here
    
}
const obj = {
    user: ["view", "create"],
    category: ["view", "create", "update", "delete"],
    news: ["view"],
};

console.log(transform(obj));

// expected result:
// [
//     { key: "user", view: true, create: true, update: false, delete: false, },
//     { key: "category", view: true, create: true, update: true, delete: true, },
//     { key: "news", view: true, create: false, update: false, delete: false, },
// ];`

