function luvut()
{
  var ten = '<p>';
  for(var x = 1; x <=10; x++)
  {
    ten += x + ' ';
  }
  ten += '</p>';
  document.getElementById('tulostus').innerHTML = ten;
}
