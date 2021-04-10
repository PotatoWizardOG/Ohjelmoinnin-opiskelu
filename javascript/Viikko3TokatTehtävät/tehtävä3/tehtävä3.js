function muunnaTaulukoksi()
{
  var jono = [];
  jono = [[2, 6, 1, 24], [9, 5, 9, 1], [7, 0, 7, 0], [3, 2, 600, 11], [6, 107, 5, 5]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('taulu').innerHTML = taulu;
}
