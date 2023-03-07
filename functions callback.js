// callback function

function sayMyName(name){
    console.log(`before execute a callback`)

    name()

    console.log(`after execute a callback`)
}

sayMyName(
    () => {
        console.log(`I am in a callback`)
    }
)
