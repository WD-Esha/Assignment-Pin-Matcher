//Hide Notify Section
function hide() {
    document.getElementById("Match").style.display = "none";
    document.getElementById("Unmatch").style.display = "none";
}
hide();

//Pin generator
function pinGenerator() {
    let pinNumber = parseInt(Math.random() * 10000);

    if (pinNumber > 999) {
        document.getElementById("pinnGenerator").value = pinNumber;
    }
    document.getElementById("pinnInput").value = "";
    hide();
}

//Input Number Function
inputNum = (n)=>{
  
    if (pinnInput.value.length < 4 ){
        pinnInput.value = pinnInput.value + n ;
    }
    
  }


//Clear All number
function clearAllNum() {
    document.getElementById("pinnInput").value = '';
}

// Backspace in numberpad
backSpace = ()=>{
    let value=pinnInput.value
    pinnInput.value = value.substr (0, value.length - 1);
  }

// pin numbers Matching
function matchNumber() {
    const pinGenerator = document.getElementById("pinnGenerator").value;
    const inputPin = document.getElementById("pinnInput").value;

    if (pinGenerator == inputPin) {
        document.getElementById("Match").style.display = "block";
        document.getElementById("Unmatch").style.display = "none";
    }
    else {
        document.getElementById("Unmatch").style.display = "block";
        document.getElementById("Match").style.display = "none";

        // Action left
        let ActionLeft = parseInt(document.getElementById("tryLeft").innerText);
        ActionLeft -= 1;
                    document.getElementById("tryLeft").innerText = ActionLeft;
                    if (ActionLeft == 0) {
                        document.getElementById("submitBtn").disabled = true;
                        document.getElementById("submitBtn").style.backgroundColor = "#ffcc00";
                    }
    }
}

