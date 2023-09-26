
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#result');

    const bmi = (weight / ((height * height)/10000)).toFixed(2);
    results.innerHTML  = bmi;
});