function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(Response => Response.json())
    .then(user => {
        document.getElementById("data").innerHTML =`
        <h3>${user.name}</h3>
        <p><b>Email:<b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> ${user.website}</p>
        `;
    })
    .catch(error => {
        document.getElementById("data").innerHTML =
        "<p style='color:red;'>Failed to fetch data.</p>";
        console.error(error);
    });
}