
const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const result = document.getElementById("result");

fetch('https://api.apilayer.com/exchangerates_data/symbols?apikey=m0PfB2FUoQw6jqOOOQrvvrKEqzvGWF0R')
  .then(response => response.json())
  .then(data => {
    
    // console.log(data.symbols);
    show(data);
  })

function show(data) {
  const array = Object.entries(data.symbols);

  for (let i = 0; i < array.length; i++) {

    select[0].innerHTML += `<option value="${array[i][0]}">${array[i][1]} </option>`;
    select[1].innerHTML += `<option value=${array[i][0]}>${array[i][1]} </option>`;

  }
}

btn.addEventListener("click", () => {
  let cuurency1 = select[0].value;
  let cuurency2 = select[1].value;

  let value = input.value;

  if (cuurency1 != cuurency2) {
    convert(cuurency1, cuurency2, value);

  } else {
    alert("Choose different currencies!!!");
  }

});

function convert(currency1, currency2, value) {

  var myHeaders = new Headers();
  myHeaders.append("apikey", "m0PfB2FUoQw6jqOOOQrvvrKEqzvGWF0R");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  fetch(`https://api.apilayer.com/exchangerates_data/convert?apikey=m0PfB2FUoQw6jqOOOQrvvrKEqzvGWF0R&to=${currency2}&from=${currency1}&amount=${value}`, requestOptions)
    .then(response => response.json())
    .then(val => {

      result.value = val.result;

    })
}