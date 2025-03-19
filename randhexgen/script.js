// Function to get the inversion of a hex color
function invertColor(hex) {
    if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
    }

    // Convert 3-digit hex to 6-digit hex
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error("Invalid HEX color");
    }

    // Invert color components
    var r = (255 - parseInt(hex.substr(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.substr(2, 2), 16)).toString(16),
        b = (255 - parseInt(hex.substr(4, 2), 16)).toString(16);

    // Pad each with zeros if length less than 2
    r = r.length === 1 ? "0" + r : r;
    g = g.length === 1 ? "0" + g : g;
    b = b.length === 1 ? "0" + b : b;

    return "#" + r + g + b;
}

// Function to generate a random hex code
function randHex() {
    // Generate a random hex color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    // Calculate the inverse color
    const inverseColor = invertColor(randomColor);

    // Display the colors
    document.body.style.backgroundColor = randomColor;
    document.getElementById("hexcode").textContent = randomColor;
    document.getElementById("hexcode").style.color = inverseColor;
}

// Connect functions
document.addEventListener("keydown", randHex);
document.addEventListener("click", randHex);
document.addEventListener("touchend", randHex);