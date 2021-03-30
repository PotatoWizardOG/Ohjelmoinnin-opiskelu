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



}
