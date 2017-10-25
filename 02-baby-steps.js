// BABY STEPS

const result = process.argv.slice(2).reduce((acum, value) => {
    return acum += Number(value)
}, 0)

console.log(result)