var characterSet = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var random;
var passGenerated;
var slider = document.getElementById("pass_length");
var display = document.getElementById('pass_display');
var passLength;
var output = document.getElementById("demo");
var username = document.getElementById("user_display");
var radio = document.getElementsByName('radio_btn');
var symbols = '!@#$%^&*'
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
};
console.log(slider.value);
function generate() {
    if (username.value != '') {
        passGenerated = ''
        var rate_value;
        var formValid=false
        var i = 0;
        while (!formValid && i < radio.length) {
            if (radio[i].checked){formValid = true;rate_value=radio[i].value}
            i++;
        }

        if (!formValid) alert("Must check some option!");

        if (rate_value == 'easy') {
            passGenerated = `${username.value}${symbols[Math.floor(Math.random() * symbols.length)]}${(() => { let numlist = ''; for (let i = 0; i < 3; i++) { random = Math.floor(Math.random() * 10); numlist += random } return numlist; })()}`
            display.value = passGenerated;
        }
        else if (rate_value == 'medium') {
            passGenerated = `${username.value}${symbols[Math.floor(Math.random() * symbols.length)]}${(() => { let numlist = ''; for (let i = 0; i < 3; i++) { random = Math.floor(Math.random() * 10); numlist += random } return numlist; })()}-${(() => { let numlist = ''; for (let i = 0; i < 3; i++) { random = Math.floor(Math.random() * 10); numlist += random } return numlist; })()}`
            display.value = passGenerated;

        }
        else if (rate_value == 'hard') {
            passGenerated = `${username.value}${symbols[Math.floor(Math.random() * symbols.length)]}${(() => { let numlist = ''; for (let i = 0; i < 5; i++) { random = Math.floor(Math.random() * 10); numlist += random } return numlist; })()}-${(() => { let numlist = ''; for (let i = 0; i < 5; i++) { random = Math.floor(Math.random() * 10); numlist += random } return numlist; })()}`
            display.value = passGenerated;

        }



        console.log(passGenerated)



    } else {
        passLength = slider.value;
        passGenerated = '';
        for (var i = 0; i < passLength; i++) {
            random = Math.floor(Math.random() * characterSet.length);
            passGenerated += characterSet[random];
        }
        display.value = passGenerated;


    }
}

