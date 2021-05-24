let tests = []

const test = (name, fn) => {
    tests.push({ name, fn })
}
global.test = test

const run = () => {
    tests.forEach( test => {
        try {
            test.fn()
            console.log('✅', test.name)
        } catch (err) {
            console.log('❌', test.name)
			console.log(e.stack)
        }
    })
}

const files = process.argv.slice(2)

files.forEach( async file => {
    await import(file)
})

setTimeout( () => run(), 1000)