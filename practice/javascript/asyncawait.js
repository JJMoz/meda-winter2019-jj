async function firstAsync() {
    let action = new Promise((resolve, reject) => {
        setTimeout(() => { resolve("Value to send to the Promise so it completes."); }, 3000);
    });

    let result = await action;

    console.log(result);
};


firstAsync();






















/*async function firstAsync() {
    return 27;

    
    
}

console.log(firstAsync());

// then is the promise
firstAsync().then((results) => {
    console.log(results)
});*/