/* For Each */

 //Perulangan foreach biasanya digunakan untuk mencetak item di dalam array.

   var Nama = ["Samsul", "Udin", "Rizki", "Ilham"];

   for(i = 1; i < Nama.length; i++){
      document.write(i+". "+ Nama[i] + "<br/>");
   }


  var Nama = ["Siti", "Rahma", "Ais", "Nanda"];

  for(i in Nama){
      document.write(i+". "+ Nama[i] + "<br/>");
  }

// //Cara kedua membuat perulangan foreach ialah dengan menggunakan method forEach() dari array.

// // kita punya array seperti berikut
 var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

// // // Kemudian kita tampilkan semua hari
// // // dengan menggunakan method foreach
  days.forEach(function(day){
      document.write("<p>" + day + "</p>");
  });

// // // kita punya array seperti berikut
  var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"];

// // // Kemudian kita tampilkan semua hari
// // // dengan menggunakan method foreach
  days.forEach((day) => {
      document.write("<p>" + day + "</p>");
  });


/* Nested */


// Di dalam blok perulangan, kita juga dapat membuat perulangan.

// Ini disebut dengan nested loop atau perulangan bersarang atau perulangan di dalam perualangan.


 for(let i = 0; i < 10; i++){
     for(let j = 0; j < 10; j++){
         document.write("<p>Perulangan ke " + i + "," + j + "</p>");
     }
 }

for(i = 1; i<=5; i++){
    for(j = 1; j <=5; j++){
        document.writeln('X')
    }
    document.writeln('<br>')
}