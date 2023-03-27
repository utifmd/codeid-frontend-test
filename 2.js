
// buatlah fungsi yang menerima object, kemudian mengembalikan value berupa 
// array dengan bentuk seperti contoh output dibawah


const transform = (obj) => {
    // your code here
    let output = [], category = ["view", "create", "update", "delete"]
    for(item of Object.entries(obj)){
        const key = item[0]
        const value = item[1]
        let props = {}
        for (let i = 0; i < category.length; i++) {
            props[category[i]] = value.includes(category[i])
        }
        let data = { key, ...props }
        output.push(data)
    }
    return output
}
const obj = {
    user: ["view", "create"],
    category: ["view", "create", "update", "delete"],
    news: ["view"],
};

console.log(transform(obj));

/*
expected result:
[
    { 
        key: "user", 
        view: true, 
        create: true, 
        update: false, 
        delete: false, 
    },
    { key: "category", view: true, create: true, update: true, delete: true, },
    { key: "news", view: true, create: false, update: false, delete: false, },
];`
*/

