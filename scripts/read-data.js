document.getElementById('fetchButton').addEventListener('click', function () {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            document.getElementById('dataDisplay').innerHTML = `
                <h3>User Information</h3>
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                <img src="${user.picture.large}" alt="User Picture" class="img-fluid rounded-circle">
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('dataDisplay').innerHTML = `<p>Error fetching data.</p>`;
        });
});

