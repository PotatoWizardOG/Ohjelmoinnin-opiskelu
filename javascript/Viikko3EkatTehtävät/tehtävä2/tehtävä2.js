function muuta()
{
  var ksana = document.getElementById('sana').value;
  var salasana = "<p>";
  for(var j = 0; j < ksana.length; j++)
  {
    salasana += ksana[j] + 'Ã–';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}
