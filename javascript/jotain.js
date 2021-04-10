function kaanna()
{
  var haettuTeksti = getElementById('teksti').value;
  var sananPituus = haettuTeksti.length;
  var uusiSana = '';
  for(var x; x = sananPituus; x--)
  {
    uusiSana = uusiSana + haettuTeksti[x];

  }
  document.getElementById('vastaus').innerHTML = uusiSana

  var taulukko = [1, 4, 5, 9];

  console.log(taulukko[3]);


}
