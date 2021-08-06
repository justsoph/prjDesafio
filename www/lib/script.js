window.onload = function(){
  const revelar = document.querySelector("#revelar");
  const date = document.querySelector("#date");
  const temp = document.querySelector("#temp");
  const max = document.querySelector("#max");
  const min = document.querySelector("#min");

  revelar.addEventListener("click", function(){
    fetch(`https://api.hgbrasil.com/weather?array_limit=1&fields=only_results,temp,forecast,max,min,date&key=72caa2ab`,{
      body: formdata,
      method: "get",
      mode: 'cors',
      cache: 'default'
    }).then(response=>{
      response.json().then(data =>{
        date.value = data['date'];
        temp.value = data['temp'];
        max.value = data['max'];
        min.value = data['min'];
      })
    })
  })
}