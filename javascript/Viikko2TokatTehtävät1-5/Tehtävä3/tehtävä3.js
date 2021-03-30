function vuosiluku()
{
  var karkaus = document.getElementById('karkaus').value;
  if(karkaus%400==0)
  {
    document.getElementById('vastaus').innerHTML = "Vuosi on karkausvuosi";
  }
  else if (karkaus%4==0 && karkaus%100!=0)
  {
    document.getElementById('vastaus').innerHTML = "Vuosi on karkausvuosi"
  }
  else {
    document.getElementById('vastaus').innerHTML = "Vuosi ei ole karkausvuosi"
  }
}
