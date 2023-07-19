function getRandomNumber() {
    return Math.floor(Math.random() * 40) + 1;
}

function shuffle(){

    // Loading Text Values
    let ftext = document.getElementById("ftxt").value;
    let ltext = document.getElementById("ltxt").value;
    let dname = document.getElementById("domain").value;

    // Loading Mail Showcase Values
    let mail1 = document.getElementById("mt1");
    let mail2 = document.getElementById("mt2");
    let mail3 = document.getElementById("mt3");

    // Checking for DNAME
    if(dname == ""){
        dname = "gmail.com";
    }

    else{
        dname = dname;
    }

    // Loading Check Box
    let dotBox = document.getElementById("include-dot");
    let numBox = document.getElementById("include-number");

    if (dotBox.checked){
        let dot = ".";

        let em1 = ftext+dot+ltext+"@"+dname;
        let em2 = dot+ftext+dot+ltext+"@"+dname;
        let em3 = ftext+dot+ltext+dot+"@"+dname;

        mail1.innerHTML = "Mail 1: "+em1;
        mail2.innerHTML = "Mail 2: "+em2;
        mail3.innerHTML = "Mail 3: "+em3;
    }

    else if (numBox.checked){
        let ranNum = getRandomNumber();

        let em1 = ftext+ranNum+ltext+"@"+dname;
        let em2 = ranNum+ftext+ltext+"@"+dname;
        let em3 = ftext+ltext+ranNum+"@"+dname;

        mail1.innerHTML = "Mail 1: "+em1;
        mail2.innerHTML = "Mail 2: "+em2;
        mail3.innerHTML = "Mail 3: "+em3;
    }
}