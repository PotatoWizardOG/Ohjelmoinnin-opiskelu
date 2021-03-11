function jarjesta()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.write("Lukujen järjestys: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      document.write("Lukujen jäjestys: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1<luku3)
    {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys: " + luku2 + ' ' + luku3 + ' ' + luku1);

    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
    {
      if(luku1 < luku2)
      {
        document.write("Lukujen järjestys: " + luku3 + ' ' + luku1 + ' ' + luku2);
      }
      else {
        document.write("Lukujen järjestys: " + luku3 + ' ' + luku2 + ' ' + luku1);

      }
    }
  }
