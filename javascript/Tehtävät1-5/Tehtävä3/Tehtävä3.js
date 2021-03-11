function paritonParillinen()
  {
    var arvo;
    arvo = parseInt(document.getElementById('luku').value);
    if(arvo%2 == 0)
    {
      document.write("Antamasi luku on parillinen");
    }
    else {
      document.write("Antamasi luku on pariton");
    }
  }
