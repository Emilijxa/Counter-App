// document.getElementById("count-el").innerText = 5

// let firstBatch = 5

// let secondBatch = 7

// let count = firstBatch + secondBatch

// console.log(count)

let countEl = document.getElementById("count-el")


count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

document.getElementById("count-el").innerText = count

function save() {
    console.log(count)
}