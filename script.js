//your JS code here. If required.
const inputs=document.querySelectorAll(".code");
document.addEventListener("DOMContentLoaded",()=>{
	inputs[0].focus();
});
inputs.forEach((input,index) =>{
	input.addEventListener("input",(event) => {
    // If the input is a digit, move focus to the next input
    if (/^\d$/.test(event.target.value) && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
	});
	input.addEventListener("keydown",(e) =>{
		if(e.key==="Backspace"  && e.target.value===""  && index>0){
			inputs[index-1].focus();
		}
	})
});



	
