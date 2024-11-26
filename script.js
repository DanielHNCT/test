const promise = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
console.log(promise);


const logThePromise = () => {
    console.log(promise);
};
console.log(logThePromise);

//setTimeout(logThePromise,1000);

promise.then((response) => {
    //console.log(response);
    return response.json();
}).then((json) => {
    console.log(json);
});

