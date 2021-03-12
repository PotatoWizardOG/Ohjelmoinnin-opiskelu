function kyllä()
{
  var numero
  numero = parseInt(document.getElementById('luku').value);

  if( numero <= 0)
  {
    document.write("Luku on negatiivinen")
  }
  else {
    document.write("Luku on positiivinen")
  }
}
