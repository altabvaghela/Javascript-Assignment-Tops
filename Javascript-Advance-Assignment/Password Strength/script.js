const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");

let regExpWeak = /[a-z]/;
let regExpMedium = /\d+/;
let regExpStrong = /.[!,@,#,$,%,&,*,?,_,~,-,(,)]/;

function trigger() {
    let no = 0;
    if (input.value !== "") {
        indicator.style.display = "flex";

        if (input.value.length <= 3 ||
            (input.value.match(regExpWeak) || input.value.match(regExpMedium) || input.value.match(regExpStrong))) {
            no = 1;
        }

        if (input.value.length >= 6 &&
            ((input.value.match(regExpWeak) && input.value.match(regExpMedium)) ||
                (input.value.match(regExpMedium) && input.value.match(regExpStrong)) ||
                (input.value.match(regExpWeak) && input.value.match(regExpStrong)))) {
            no = 2;
        }

        if (input.value.length >= 8 &&
            input.value.match(regExpWeak) &&
            input.value.match(regExpMedium) &&
            input.value.match(regExpStrong)) {
            no = 3;
        }

        weak.classList.remove("active");
        medium.classList.remove("active");
        strong.classList.remove("active");
        text.style.display = "block";

        if (no === 1) {
            weak.classList.add("active");
            text.textContent = "Your Password Is Weak";
            text.style.color = "red";
        } else if (no === 2) {
            medium.classList.add("active");
            text.textContent = "Your Password Is Medium";
            text.style.color = "orange";
        } else if (no === 3) {
            strong.classList.add("active");
            text.textContent = "Your Password Is Strong";
            text.style.color = "green";
        }

    } else {
        indicator.style.display = "none";
        text.style.display = "none";
    }
}
