function fn(){
var d = new Date();

//adding var 
var date = parseInt(document.getElementById("day").value);
var month = parseInt(document.getElementById("month").value);
var year = parseInt(document.getElementById("year").value);
// setting up the days
if (day < 0 || day > 31) {
    alert("Enter valid date");
} else if (date == "") {
       alert("This field cannot be empty");
        return false;
} else; {
            d.setDate(date);
        
}
// setting up the months
if (month < 0 || month == 12) {
     alert("Enter valid date");
} else if (month == " ") {
        alert("This field cannot be empty");
        return false;
} else if (month < 13 ){
        alert("Enter valid date")
}else; {
            d.setMonth(month);


// setting up the year a
if (year < 0 ){
    alert ("Enter valid date");
} else if (year == " ") {
        alert("This field cannot be empty");
         return false;  
} else if (year > 12 ){
        alert("Enter valid date")
}
else; {
            d.setYear(year);
        
}
//adding days of the week and akan names
var day = d.getDay();
var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
var male = [ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', "Kwame"]
var female = [ 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

//assigning names to days
function getAkan() {
    var ismale = document.getElementById('male').checked;
    var isfemale = document.getElementById('female').checked;
 if (ismale == true && isfemale == false) {
     if (day == 0){
         alert("your name is " + male[0]);
        }
    
     else  if (day == 1) {
         alert("your name is " + male[1]);
        }
   
     else if (day == 2) {
         alert("your name is " + male[2]);
        }
   
     else if (day == 3) {
         alert("your name is " + male[3]);
        }
   
     else if (day == 4) {
         alert("your name is " + male[4]);
        }  
     else if (day == 5) {
            alert("your name is " + male[5]);
        }

     else if (day == 6) {
            alert("your name is" + male[6]);
        }
        


}   else if (ismale == false && isfemale == true) {
       if (day == 0) {
         alert("your name is " + female[0]);
        }
    
     else if (day == 1) {
         alert("your name is " + female[1]);
        }
   
     else if (day == 2) {
         alert("your name is " + female[2]);
        }
   
     else if (day == 3) {
         alert("your name is " + female[3]);
        }
   
      else if (day == 4) {
         alert("your name is " + female[4]);
        }  
      else if (day == 5) {
            alert("your name is " + female[5]);
        }

      else if (day == 6) {
            alert("your name is" + female[6]);
        }
      
        


    }
   

}
}
getAkan();
function calculatingDay(){
    year = document.getElementById('year').value;
    cc = parseInt(year.substring(0,2));
}


}
