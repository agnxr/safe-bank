
document.addEventListener("DOMContentLoaded", function() {


    var slider = document.getElementById("myRange");
    var output = document.getElementById("output");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    }

    var slider2 = document.getElementById("myRange2");
    var output2 = document.getElementById("output2");
    var years = document.getElementById("years");
    output2.innerHTML = slider2.value;
    var output3 = document.querySelector("#rata");
    var defaultRata = document.querySelector("#defaultRata");

    slider2.oninput = function() {
        if (slider2.value == -1){
            output2.innerHTML = "1 miesiąc";
            years.style.visibility = "hidden";
            output3.innerHTML = "200 zł";
            defaultRata.style.display = "none";
        } else if (slider2.value == 0) {
            output2.innerHTML = "pół roku";
            output3.innerHTML = "150 zł";
            defaultRata.style.display = "none";

        } else if (slider2.value == 1) {
            output2.innerHTML = "rok";
            years.style.visibility = "hidden";
            defaultRata.style.display = "none";
            output3.innerHTML = "100 zł";
        } else {
            output2.innerHTML = this.value;
            years.style.visibility = "visible";
            output3.innerHTML = "50 zł";

        }
    }


});


