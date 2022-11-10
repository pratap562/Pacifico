colorWithNames = [
    { code: 'red', count: 28 },
    { code: 'yellow', count: 38 },
    { code: 'green', count: 18 },
    { code: 'pink', count: 15 },
    { code: 'blue', count: 20 },
    { code: 'green', count: 38 },
    { code: 'white', count: 8 },
    { code: 'purple', count: 23 },
    { code: 'green', count: 18 },
    { code: 'turquoise', count: 25 },
    { code: 'orange', count: 10 },
]

concepts = [
    { code: "BASICS", count: 10 },
    { code: "H&M MAN", count: 23 },
    { code: "H&M Move", count: 1 },
    { code: "MODERN CLASSIC", count: 50 }
]
colorWithNames.sort((a, b) => b.count - a.count)
concepts.sort((a, b) => b.count - a.count)

console.log(colorWithNames)
console.log(concepts);


// appendData