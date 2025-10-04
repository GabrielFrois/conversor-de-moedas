document.getElementById("convertForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const form = e.target;
    const amount = form.amount.value;
    const from = form.from.value;
    const to = form.to.value;

    const response = await fetch(`/convert?amount=${amount}&from=${from}&to=${to}`);
    const data = await response.json();

    const result = document.getElementById("result");
    result.textContent = data.result || data.error;
});

document.addEventListener('DOMContentLoaded', () => {
    const convertForm = document.getElementById("convertForm");
    const resultEl = document.getElementById("result");
    const swapBtn = document.getElementById("swap-currencies-btn");
    const fromSelect = document.getElementById("from");
    const toSelect = document.getElementById("to");

    // Lógica da conversão
    convertForm.addEventListener("submit", async function (e){
     e.preventDefault();
     
     const amount = convertForm.amount.value;
     const from = fromSelect.value;
     const to = toSelect.value;

     resultEl.textContent = "Convertendo...";

     try{
        const response = await fetch(`/convert?amount=${amount}&from=${form}&to${to}`);

        if(!response.ok){
            const errorData = await response.json();
            throw new Error(errorData.error || `Erro ${response.status}`);
        }

        const data = await response.json();
        resultEl.textContent = data.result;
     } catch (error){
        resultEl.textContent = error.message;
     }
    });

    // Lógica para inversão de moedas
    swapBtn.addEventListener('click', () => {
        const fromValue = fromSelect.value;
        const toValue = toSelect.value;

        fromSelect.value = toValue;
        toSelect.value = fromValue;
    });
});