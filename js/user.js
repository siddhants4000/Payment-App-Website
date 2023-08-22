const addUser= () => {
    document.getElementById('addUser').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        fetch('http://localhost:8091/payment/user/add', {
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

addUser();