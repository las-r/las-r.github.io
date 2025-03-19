// Pythagorean Theorem Calculator Script

// Calculate Function
function calculatePythagorean() {
    var height = parseFloat(document.getElementById("height").value);
    var base = parseFloat(document.getElementById("base").value);
    var hypotenuse = Math.sqrt((height ** 2) + (base ** 2));
    document.getElementById("hypotenuse").innerHTML = hypotenuse;
}