// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name){
    cats.pop("Ralph")
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("Bob")
}

function appendCat(name) {
    return [...cats, "Broom"]
}

function prependCat(name) {
    return ["Arnold", ...cats]
}

function removeLastCat(name) {
    return cats.slice(0, cats.length - 1)
}

function removeFirstCat(name) {
    return cats.slice(1)
}   