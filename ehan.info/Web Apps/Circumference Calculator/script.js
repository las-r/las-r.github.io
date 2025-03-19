// Circumference Script

// Calculate Function
function calculateCircumference() {
    var radius = parseFloat(document.getElementById("radius").value);
    var circumference = (radius * 2) * Math.PI;
    document.getElementById("circumference").innerHTML = circumference;
}