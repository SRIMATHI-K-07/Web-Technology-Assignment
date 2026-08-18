function calculateAmount(quantity, price) {
    return quantity * price;
}

function calculateTotal(amounts) {
    let total = 0;

    for (let i = 0; i < amounts.length; i++) {
        total += amounts[i];
    }

    return total;
}

function calculateDiscount(total) {
    if (total > 2000) {
        return total * 0.10;
    }

    return 0;
}

function generateBill() {

    let product1 = document.getElementById("product1").value.trim();
    let product2 = document.getElementById("product2").value.trim();
    let product3 = document.getElementById("product3").value.trim();

    let quantity1 = Number(document.getElementById("quantity1").value);
    let quantity2 = Number(document.getElementById("quantity2").value);
    let quantity3 = Number(document.getElementById("quantity3").value);

    let price1 = Number(document.getElementById("price1").value);
    let price2 = Number(document.getElementById("price2").value);
    let price3 = Number(document.getElementById("price3").value);

    if (
        product1 === "" ||
        product2 === "" ||
        product3 === "" ||
        quantity1 <= 0 ||
        quantity2 <= 0 ||
        quantity3 <= 0 ||
        price1 < 0 ||
        price2 < 0 ||
        price3 < 0
    ) {
        alert("Please enter valid details for all three products.");
        return;
    }

    let amount1 = calculateAmount(quantity1, price1);
    let amount2 = calculateAmount(quantity2, price2);
    let amount3 = calculateAmount(quantity3, price3);

    let total = calculateTotal([
        amount1,
        amount2,
        amount3
    ]);

    let discount = calculateDiscount(total);

    let finalAmount = total - discount;

    document.getElementById("resultProduct1").textContent = product1;
    document.getElementById("resultQuantity1").textContent = quantity1;
    document.getElementById("resultPrice1").textContent =
        "₹" + price1.toFixed(2);
    document.getElementById("resultAmount1").textContent =
        "₹" + amount1.toFixed(2);

    document.getElementById("resultProduct2").textContent = product2;
    document.getElementById("resultQuantity2").textContent = quantity2;
    document.getElementById("resultPrice2").textContent =
        "₹" + price2.toFixed(2);
    document.getElementById("resultAmount2").textContent =
        "₹" + amount2.toFixed(2);

    document.getElementById("resultProduct3").textContent = product3;
    document.getElementById("resultQuantity3").textContent = quantity3;
    document.getElementById("resultPrice3").textContent =
        "₹" + price3.toFixed(2);
    document.getElementById("resultAmount3").textContent =
        "₹" + amount3.toFixed(2);

    document.getElementById("total").textContent =
        "₹" + total.toFixed(2);

    document.getElementById("discount").textContent =
        "₹" + discount.toFixed(2);

    document.getElementById("finalAmount").textContent =
        "₹" + finalAmount.toFixed(2);
}

function resetBill() {

    document.getElementById("product1").value = "";
    document.getElementById("product2").value = "";
    document.getElementById("product3").value = "";

    document.getElementById("quantity1").value = "";
    document.getElementById("quantity2").value = "";
    document.getElementById("quantity3").value = "";

    document.getElementById("price1").value = "";
    document.getElementById("price2").value = "";
    document.getElementById("price3").value = "";

    document.getElementById("resultProduct1").textContent = "-";
    document.getElementById("resultProduct2").textContent = "-";
    document.getElementById("resultProduct3").textContent = "-";

    document.getElementById("resultQuantity1").textContent = "-";
    document.getElementById("resultQuantity2").textContent = "-";
    document.getElementById("resultQuantity3").textContent = "-";

    document.getElementById("resultPrice1").textContent = "-";
    document.getElementById("resultPrice2").textContent = "-";
    document.getElementById("resultPrice3").textContent = "-";

    document.getElementById("resultAmount1").textContent = "-";
    document.getElementById("resultAmount2").textContent = "-";
    document.getElementById("resultAmount3").textContent = "-";

    document.getElementById("total").textContent = "₹0.00";
    document.getElementById("discount").textContent = "₹0.00";
    document.getElementById("finalAmount").textContent = "₹0.00";
}