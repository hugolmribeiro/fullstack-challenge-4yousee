document.addEventListener("DOMContentLoaded", function () {
  const title = document.getElementById("title");
  const planTableBody = document.getElementById("plan-table-body");
  const apiUrl = "http://localhost:3005/api/plans/";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      title.textContent = data._device._name;
      data._plans.forEach((plan) => {
        const row = document.createElement("tr");

        const typeCell = document.createElement("td");
        typeCell.textContent = plan._type;

        const nameCell = document.createElement("td");
        nameCell.textContent = plan._name;

        const phonePriceCell = document.createElement("td");
        phonePriceCell.textContent = plan._phonePrice;

        const phonePriceOnPlanCell = document.createElement("td");
        phonePriceOnPlanCell.textContent = plan._phonePriceOnPlan;

        const installmentsCell = document.createElement("td");
        installmentsCell.textContent = plan._installments;

        const monthlyFeeCell = document.createElement("td");
        monthlyFeeCell.textContent = plan._monthlyFee;

        row.appendChild(typeCell);
        row.appendChild(nameCell);
        row.appendChild(phonePriceCell);
        row.appendChild(phonePriceOnPlanCell);
        row.appendChild(installmentsCell);
        row.appendChild(monthlyFeeCell);

        planTableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar dados da API:", error);
    });
});
