var library = [
	{ title: 'When Breath Becomes Air', 
	author: 'Paul Kalanithi', 
	readingStatus: true },
	{ title: 'The Girls',
	author: 'Emma Cline ', 
	readingStatus: true }, 
	{ title: 'The Nest', 
	author: 'Cynthia', 
	readingStatus: false }, 
	{ title: 'The Crown', 
	author: 'Kiera Cass', 
	readingStatus: true }, 
	{ title: 'Behind Closed Doors', 
	author: 'B.A. Paris', 
	readingStatus: false }, 
	{ title: 'It Ends with Us ', 
	author: 'Colleen Hoover', 
	readingStatus: true } ];
 	
 	for (i = 0; i < library.length; i++) {

 	if(library[i].readingStatus){
 		document.getElementById("reading").innerHTML += "You have already read: " + library[i].title + "<br>";
 	} else {
 		document.getElementById("reading").innerHTML += "You still need to read: " + library[i].title + "<br>";
 	}
 }
 // Reading Status


 function myFunction() {
    var x = document.getElementById("ourTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}
// Table Creation incomplete!