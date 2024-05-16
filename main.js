let result = 0;
let _result = document.querySelector('.result')

let from = document.querySelector('#from');
let to = document.querySelector('#to');

var temp = `<option value="select">select</option>`;

let btn = document.querySelector('button');
let form = document.querySelector('form');
let input = document.querySelector('input');


(function prevent () {
  // Tab to edit
  btn.addEventListener('click', (event) =>{
    event.preventDefault()
    
  })
  
  form.addEventListener('submit',(event) => {
    event.preventDefault()
  })
})()


fetch('https://api.frankfurter.app/latest')
  .then(response => {
    // Check if the request was successful (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Work with the JSON data
    let keys = Object.keys(data.rates);
    for(let i in keys){
      temp += `<option value="${keys[i]}">${keys[i]}</option>`
      from.innerHTML = temp;
      to.innerHTML = temp;
      
      
    }
    
    btn.addEventListener('click', (result) =>{
      result = (data.rates[to.value])/(data.rates[from.value]);
      _result.innerHTML = `${result*(input.value)} ${to.value}`;

      console.log(result);
    })
    
    
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });

