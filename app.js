let balance = 1000;

function checkBalance() {
    alert(`Your current balance is $${balance.toFixed(2)}`);
}

function transferFunds() {
    const amount = parseFloat(prompt("Enter the amount to transfer:"));
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a positive number.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient funds.");
    } else {
        balance -= amount;
        document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
        alert(`$${amount.toFixed(2)} transferred successfully.`);
    }
}

function processTransfer() {
    const amount = parseFloat(document.getElementById("amount").value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid transfer amount.");
        return;
    }

    if (amount > balance) {
        alert("Insufficient funds.");
    } else {
        balance -= amount;
        document.getElementById("balance").textContent = `$${balance.toFixed(2)}`;
        alert(`$${amount.toFixed(2)} transferred successfully.`);
    }
}
