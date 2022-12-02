//for button
const calBtn = document.getElementById('cal-Btn')
//document.getElementById("output").max = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];
today = new Date();
//for output
out1 = document.getElementById('output')

calBtn.addEventListener("click", function aaa(){
	fun1();

});


		function fun1(){
			inputEL = document.getElementById('input-el').value;
			 out1.innerHTML = inputEL; 
			 // console.log(inputEL);
				ageCalculator(inputEL);

			}



function ageCalculator(DOB) {  
    // console.log(DOB);  
    const dob = new Date(DOB);
    if(DOB == null || DOB =='') {  
      document.getElementById("output").innerHTML = "**Choose a date please!";    
      return false;   
    } 
    else 
    {  
      
	    //calculate month difference from current date in time  
	    var month_diff = Date.now() - dob.getTime();  

 
		//console.log(Date.now())

		//console.log(dob.getTime())

		//console.log( Date.now() - dob.getTime())
		//console.log( new Date(Date.now() - dob.getTime()))

 
	    //convert the calculated difference in date format  
	    var age_dt = new Date(month_diff);   
	    //console.log(age_dt);
	    //console.log(age_dt.getTime());
	      
	    //extract year from date      
	    var year = age_dt.getUTCFullYear();  
	      
	    //now calculate the age of the user  
	    var age = Math.abs(year-1970); 

	}
		  //2nd one
	 let x = inputEL[1].value;
	    //function to calculate day
	    day = (function(){
	        if(today.getDate() > dob.getDate()) {
	            return today.getDate() - dob.getDate();
	        }
	        else if(today.getDate() == dob.getDate()) {
	            return today.getDate() - dob.getDate();
	        }
	        else {
	            let calDate = new Date(dob.getFullYear(), dob.getMonth() + 1, 0);
	            return (today.getDate() + calDate.getDate()) - dob.getDate() - 1;
	        }
	    }());
	    //function to calculate month
	    month = (function() {
	        if(today.getMonth() >= dob.getMonth()) {
	            if(today.getDate() >= dob.getDate()) {
	                return today.getMonth() - dob.getMonth();
	            }
	            else {
	                if((today.getMonth() - 1) >= dob.getMonth()) {
	                    return (today.getMonth() - 1) - dob.getMonth();
	                }
	                else {
	                    return ((today.getMonth() - 1) + 12) - dob.getMonth();
	                }
	            }
	        }
	        else {
	            if(today.getDate() >= dob.getDate()) {
	                return (today.getMonth() + 12) - dob.getMonth();
	            }
	            else {
	                return ((today.getMonth() - 1) + 12) - dob.getMonth();
	            }
	        }
	    }());
	    	
	    	let hour = addZero(today.getHours());
	    	let min = addZero(today.getMinutes());
	    	let sec = addZero(today.getSeconds());
	      
	    //display the calculated age  
	    return document.getElementById("output").innerHTML = `You are: ${age } year(s) <br><br> ${month} month(s) <br><br> ${day} day(s) <br><br> ${hour} hour(s) <br><br>${min} minute(s) <br><br> ${sec} second(s)`   
	       
	}  



	function addZero(num){
		return num < 10 ? `0${num}`:num;
		
		
	}

	



   
    






