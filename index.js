const convertCelsiusToFahrenheit =() => {
    var celcius= parseFloat(document.querySelector("#celcius").value);
  
    var fahrenheitResult=(celcius *1.8)+32;
    var x= fahrenheitResult.toFixed(2);
  
    document.querySelector("#celcius").value= celcius;
    document.querySelector("#fahrenheit").value= x;
  
  }
  
  const convertFahrenheitToCelsius =() => {
    var fahrenheit= parseFloat(document.querySelector("#fahrenheit").value);
  
    var celciusResult=(fahrenheit -32)/1.8;
    var y= celciusResult.toFixed(2);
  
    document.querySelector("#fahrenheit").value= fahrenheit;
    document.querySelector("#celcius").value= y;
  
  }
   const reset=() =>{
    document.querySelector("#celcius").value= " ";
    document.querySelector("#fahrenheit").value= " ";
   }
