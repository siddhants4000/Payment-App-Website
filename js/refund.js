const refund= () => {
    document.getElementById('refund').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const param1Value = document.getElementById("transactionId").value;

        fetch('http://localhost:8091/payment/transaction/refund?transactionId='+param1Value, {
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

refund();