// Circle Area Script

// Calculate Function
function calculateArea() {
    var radius = parseFloat(document.getElementById("radius").value);
    var area = (radius ** 2) * Math.PI;
    document.getElementById("area").innerHTML = area;
}

// Clear Function
function clear() {
    document.getElementById("area").innerHTML = "";
}