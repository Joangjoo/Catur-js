function Catur(baris) {
    var pola = '';
    for (var i = 1; i <= baris; i++) {
      for (var j = 1; j <= baris; j++) {
        if (i % 2 === 1) {
          pola += j % 2 === 1 ? '#' : ' ';
        } else {
          pola += j % 2 === 0 ? '#' : ' ';
        }
      }
      pola += '\n';
    }
    return pola;
  }
  
  console.log(Catur(7));