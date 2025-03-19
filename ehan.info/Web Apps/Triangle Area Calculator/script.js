// Triangle Area Calculator Script

// Triangle Area Function
function calculateArea() {
    // Get User Input Values
    var base = parseFloat(document.getElementById("base").value);
    var height = parseFloat(document.getElementById("height").value);

    // Calculate Area
    var area = (base * height) * 0.5;

    // Show Area
    document.getElementById("area").innerHTML = area;
}