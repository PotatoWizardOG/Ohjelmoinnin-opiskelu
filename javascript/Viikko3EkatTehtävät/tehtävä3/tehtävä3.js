function tarkista()
{
  var annettuSana = document.getElementById('sana').value;
  var vastaus = 'ei ole';
  for(var k = 0; k < annettuSana.length; k++)
  {
    if(annettuSana[k] == 'ö' || annettuSana[k] == 'Ö')
    {
      vastaus = 'on';
    }
  }
  document.getElementById('vastaus').innerHTML = '<p>' + vastaus + '</p>';
}
