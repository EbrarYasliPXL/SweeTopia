var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// email verstuur script
    document.getElementById("contactForm").onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Nieuw Contactformulier");
    const body = encodeURIComponent(`Naam: ${name}\nE-mail: ${email}\nBericht: ${message}`);

    const recipientEmail = "sweeetopiaa@gmail.com";
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    // Reset de formulierinvoer
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
};

//contact script
const scriptURL = 'https://script.google.com/macros/s/AKfycbwWwpy0FiTpxFn6DCcWTlgJI_lTmgruxcjUeGepGktaVmj76LhocQrxiZEHWW0Y5UmPug/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})

