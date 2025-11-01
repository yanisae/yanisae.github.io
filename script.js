const saveBtn = document.getElementById("saveBtn");
const tableBody = document.querySelector("#dataTable tbody");

// Add fun interactivity when typing
document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("focus", () => {
    el.style.backgroundColor = "#fff7fa";
  });
  el.addEventListener("blur", () => {
    el.style.backgroundColor = "white";
  });
});

saveBtn.addEventListener("click", () => {
  const studentNumber = document.getElementById("studentNumber").value.trim();
  const firstName = document.getElementById("firstName").value.trim();
  const middleName = document.getElementById("middleName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const gender = document.getElementById("gender").value;
  const birthday = document.getElementById("birthday").value;

  if (!studentNumber || !firstName || !lastName || !gender || !birthday) {
    alert("Please fill out all required fields!");
    return;
  }

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${studentNumber}</td>
    <td>${firstName}</td>
    <td>${middleName}</td>
    <td>${lastName}</td>
    <td>${gender}</td>
    <td>${birthday}</td>
  `;

  // Add hover interactivity
  newRow.addEventListener("mouseover", () => {
    newRow.style.backgroundColor = "#ffe5f0";
  });
  newRow.addEventListener("mouseout", () => {
    newRow.style.backgroundColor = "";
  });

  tableBody.appendChild(newRow);

  // Reset fields after saving
  document.querySelectorAll("input, select").forEach(el => el.value = "");
});
