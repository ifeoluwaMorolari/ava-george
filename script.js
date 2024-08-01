document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("kidsForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const clothingSize = document.getElementById("clothingSize").value;
        const age = document.getElementById("age").value;
        const address = document.getElementById("address").value;
        const phoneNumber = document.getElementById("phoneNumber").value;

        const formData = {
            name: name,
            clothingSize: clothingSize,
            age: age,
            address: address,
            phoneNumber: phoneNumber,
        };

        // Store data in localStorage
        localStorage.setItem("kidsFormData", JSON.stringify(formData));

        alert("Form submitted and data saved locally!");

        form.reset();
    });
});
