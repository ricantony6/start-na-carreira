function calculateTip(event) {
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let num0fpeople = document.getElementById('people').value;

    if(bill == '' | serviceQual == 0){
        alert("Por favor preencha os valores")
        return;
    }

    if(num0fpeople == '' | num0fpeople <= 1) {
        num0fpeoplo = 1;
        document.getElementById('each').style.display="none"
    } else {
        document.getElementById('each').style.display="block"
    }

    let total = (bill * serviceQual) / num0fpeople;
    total = total.toFixed(2);
    document.getElementById('Tip').innerHTML = total;
    document.getElementById('totalTip').style.display="block";
}

document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);