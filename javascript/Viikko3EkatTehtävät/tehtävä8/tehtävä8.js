function laske()
{
  var koro = document.getElementById('k').value;
  var pote = document.getElementById('p').value;
  yht = koro;
  for(var p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById('Tulostus').innerHTML = '<p>' + yht + '</p>';
}
