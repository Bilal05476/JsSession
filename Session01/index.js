var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let billAmount = document.getElementById("billAmount").value;
  let tipAmount = document.getElementById("tipAmount").value;
  let totalAmount = parseFloat(billAmount) + parseFloat(tipAmount);
  document.getElementById("totalAmount").value = `Total Amount ${totalAmount}`
});
