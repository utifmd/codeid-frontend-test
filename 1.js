/*
1, 2, 4, 7, 11, 16, 22, 29
*/
const request = 10
const respose = _operate(request)
console.log(respose)

function _operate(params) {
    let output = [], result = 1
    for (let i = 0; i <= params; i++) {
        result += i
        output.push(result)
    }
    return output.join(", ")
}