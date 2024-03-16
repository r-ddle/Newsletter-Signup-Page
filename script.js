function renderPopUp() {
  const cardContainer = document.getElementById("cardContainer");
  const alertContainer = document.getElementById("alertContainer");
  const emailInput = document.getElementById("emailInput");
  emailInput.required = true;

  const email = emailInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
  if (emailPattern.test(email)) {
    cardContainer.classList.add("hidden");
    alertContainer.classList.remove("hidden");
    document.getElementById(
      "emailContent"
    ).innerHTML = `<p>A confirmation email has been sent to <span class='font-bold'>${email}</span>.</p>`;
  }
}

function removePopUp() {
  const cardContainer = document.getElementById("cardContainer");
  const alertContainer = document.getElementById("alertContainer");

  cardContainer.classList.remove("hidden");
  alertContainer.classList.add("hidden");
}
