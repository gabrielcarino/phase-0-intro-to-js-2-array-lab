// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
const catsSpreadPush = [...cats, "Broom"];
const catsSpreadUnshift = ["Arnold", ...cats];
const catsSliceLast = cats.slice(0, -1);
const catsSliceFirst = cats.slice(1);

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name) {
    return catsSpreadPush
}
function prependCat(name) {
    return catsSpreadUnshift
}
function removeLastCat() {
    return catsSliceLast
}
function removeFirstCat() {
    return catsSliceFirst
}