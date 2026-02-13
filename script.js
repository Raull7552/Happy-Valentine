const popup = document.getElementById("popup");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("status-msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  statusMsg.textContent = "Sending...";
  statusMsg.classList.remove("success", "error");
  statusMsg.classList.add("show");

  const data = new FormData(form);

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      statusMsg.textContent = "Message sent successfully!";
      statusMsg.classList.add("success");
      form.reset();
    } else {
      statusMsg.textContent = "Failed to send message. Try again!";
      statusMsg.classList.add("error");
    }
  } catch {
    statusMsg.textContent = "Network error. Please try again!";
    statusMsg.classList.add("error");
  } finally {
    setTimeout(() => {
      statusMsg.classList.remove("show");
    }, 4000);
  }
});

