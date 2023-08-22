const addMoney= () => {
    document.getElementById('addMoney').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const param1Value = document.getElementById("accountId").value;

        const param2Value = document.getElementById("amount").value;

        fetch('http://localhost:8091/payment/transaction/addMoney?accountId='+param1Value+'&amount='+param2Value, {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(formData)),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert(data);
        });
    });
}

addMoney();