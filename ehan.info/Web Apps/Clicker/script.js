// Clicker Script

// Game Variables
var clicks = 0;
var clickPower = 1;
var autoClicks = 0;

// Upgrade Costs
var costOne = 20;
var costTwo = 150;
var costThree = 780;
var costFour = 1970;
var costFive = 4730;
var costSix = 36820;
var costSeven = 70480;
var costEight = 201204;
var costNine = 981000;
var costTen = 3102380;
var costEleven = 10025010;
var costTwelve = 40103010;

// Auto Clicker Costs
var autoCostOne = 100000;
var autoCostTwo = 750000;
var autoCostThree = 5625000;
var autoCostFour = 20100200;
var autoCostFive = 210320100;
var autoCostSix = 110502240500;

// Cheat
var cheatClicks;

// Options

function applyOptions() {
    setInterval(function () {
        lightMode();
        solidButtons();
    }, 100)
}

function lightMode() {
    // Check if lightMode is yes
    if (document.getElementById("lightMode").checked == 1) {
        // Add and remove attributes
        document.getElementById("page").removeAttribute("data-bs-theme");
        if (document.getElementById("solidButtons").checked == 1) {
            document.getElementById("clickMeButton").classList.remove("btn-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-dark");
            document.getElementById("clickMeButton").classList.remove("btn-dark");

            document.getElementById("clickMeButton").classList.add("btn-dark");
        }
        
        else {
            document.getElementById("clickMeButton").classList.remove("btn-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-dark");
            document.getElementById("clickMeButton").classList.remove("btn-dark");

            document.getElementById("clickMeButton").classList.add("btn-outline-dark");
        }
    }

    else {
        // Add and remove attributes
        document.getElementById("page").setAttribute("data-bs-theme", "dark");
        if (document.getElementById("solidButtons").checked == 1) {
            document.getElementById("clickMeButton").classList.remove("btn-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-dark");
            document.getElementById("clickMeButton").classList.remove("btn-dark");

            document.getElementById("clickMeButton").classList.add("btn-light");
        }
        
        else {
            document.getElementById("clickMeButton").classList.remove("btn-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-light");
            document.getElementById("clickMeButton").classList.remove("btn-outline-dark");
            document.getElementById("clickMeButton").classList.remove("btn-dark");

            document.getElementById("clickMeButton").classList.add("btn-outline-light");
        }
    }
}

function solidButtons() {
    // Check if solidButton is yes
    if (document.getElementById("solidButtons").checked == 1) {
        // Add and remove attributes
        if (document.getElementById("lightMode").checked == 1) {
            document.getElementById("clickMeButton").classList.remove("btn-outline-dark");
            document.getElementById("clickMeButton").classList.add("btn-dark");
        }
        else {
            document.getElementById("clickMeButton").classList.remove("btn-outline-light");
            document.getElementById("clickMeButton").classList.add("btn-light");
        }

        document.getElementById("upgradeOne").classList.remove("btn-outline-success");
        document.getElementById("upgradeOne").classList.add("btn-success");
        document.getElementById("upgradeTwo").classList.remove("btn-outline-success");
        document.getElementById("upgradeTwo").classList.add("btn-success");
        document.getElementById("upgradeThree").classList.remove("btn-outline-success");
        document.getElementById("upgradeThree").classList.add("btn-success");
        document.getElementById("upgradeFour").classList.remove("btn-outline-success");
        document.getElementById("upgradeFour").classList.add("btn-success");
        document.getElementById("upgradeFive").classList.remove("btn-outline-success");
        document.getElementById("upgradeFive").classList.add("btn-success");
        document.getElementById("upgradeSix").classList.remove("btn-outline-success");
        document.getElementById("upgradeSix").classList.add("btn-success");
        document.getElementById("upgradeSeven").classList.remove("btn-outline-success");
        document.getElementById("upgradeSeven").classList.add("btn-success");
        document.getElementById("upgradeEight").classList.remove("btn-outline-success");
        document.getElementById("upgradeEight").classList.add("btn-success");
        document.getElementById("upgradeNine").classList.remove("btn-outline-success");
        document.getElementById("upgradeNine").classList.add("btn-success");
        document.getElementById("upgradeTen").classList.remove("btn-outline-success");
        document.getElementById("upgradeTen").classList.add("btn-success");
        document.getElementById("upgradeEleven").classList.remove("btn-outline-success");
        document.getElementById("upgradeEleven").classList.add("btn-success");
        document.getElementById("upgradeTwelve").classList.remove("btn-outline-success");
        document.getElementById("upgradeTwelve").classList.add("btn-success");

        document.getElementById("autoOne").classList.remove("btn-outline-primary");
        document.getElementById("autoOne").classList.add("btn-primary");
        document.getElementById("autoTwo").classList.remove("btn-outline-primary");
        document.getElementById("autoTwo").classList.add("btn-primary");
        document.getElementById("autoThree").classList.remove("btn-outline-primary");
        document.getElementById("autoThree").classList.add("btn-primary");
        document.getElementById("autoFour").classList.remove("btn-outline-primary");
        document.getElementById("autoFour").classList.add("btn-primary");
        document.getElementById("autoFive").classList.remove("btn-outline-primary");
        document.getElementById("autoFive").classList.add("btn-primary");
        document.getElementById("autoSix").classList.remove("btn-outline-primary");
        document.getElementById("autoSix").classList.add("btn-primary");

        document.getElementById("resetButton").classList.remove("btn-outline-danger");
        document.getElementById("resetButton").classList.add("btn-danger");
        document.getElementById("optionsButton").classList.remove("btn-outline-info");
        document.getElementById("optionsButton").classList.add("btn-info");

        document.getElementById("resetOptions").classList.remove("btn-outline-secondary");
        document.getElementById("resetOptions").classList.add("btn-secondary");
    }

    else {
        // Add and remove attributes
        if (document.getElementById("lightMode").checked == 1) {
            document.getElementById("clickMeButton").classList.add("btn-outline-dark");
            document.getElementById("clickMeButton").classList.remove("btn-dark");
        }
        else {
            document.getElementById("clickMeButton").classList.add("btn-outline-light");
            document.getElementById("clickMeButton").classList.remove("btn-light");
        }

        document.getElementById("upgradeOne").classList.add("btn-outline-success");
        document.getElementById("upgradeOne").classList.remove("btn-success");
        document.getElementById("upgradeTwo").classList.add("btn-outline-success");
        document.getElementById("upgradeTwo").classList.remove("btn-success");
        document.getElementById("upgradeThree").classList.add("btn-outline-success");
        document.getElementById("upgradeThree").classList.remove("btn-success");
        document.getElementById("upgradeFour").classList.add("btn-outline-success");
        document.getElementById("upgradeFour").classList.remove("btn-success");
        document.getElementById("upgradeFive").classList.add("btn-outline-success");
        document.getElementById("upgradeFive").classList.remove("btn-success");
        document.getElementById("upgradeSix").classList.add("btn-outline-success");
        document.getElementById("upgradeSix").classList.remove("btn-success");
        document.getElementById("upgradeSeven").classList.add("btn-outline-success");
        document.getElementById("upgradeSeven").classList.remove("btn-success");
        document.getElementById("upgradeEight").classList.add("btn-outline-success");
        document.getElementById("upgradeEight").classList.remove("btn-success");
        document.getElementById("upgradeNine").classList.add("btn-outline-success");
        document.getElementById("upgradeNine").classList.remove("btn-success");
        document.getElementById("upgradeTen").classList.add("btn-outline-success");
        document.getElementById("upgradeTen").classList.remove("btn-success");
        document.getElementById("upgradeEleven").classList.add("btn-outline-success");
        document.getElementById("upgradeEleven").classList.remove("btn-success");
        document.getElementById("upgradeTwelve").classList.add("btn-outline-success");
        document.getElementById("upgradeTwelve").classList.remove("btn-success");

        document.getElementById("autoOne").classList.add("btn-outline-primary");
        document.getElementById("autoOne").classList.remove("btn-primary");
        document.getElementById("autoTwo").classList.add("btn-outline-primary");
        document.getElementById("autoTwo").classList.remove("btn-primary");
        document.getElementById("autoThree").classList.add("btn-outline-primary");
        document.getElementById("autoThree").classList.remove("btn-primary");
        document.getElementById("autoFour").classList.add("btn-outline-primary");
        document.getElementById("autoFour").classList.remove("btn-primary");
        document.getElementById("autoFive").classList.add("btn-outline-primary");
        document.getElementById("autoFive").classList.remove("btn-primary");
        document.getElementById("autoSix").classList.add("btn-outline-primary");
        document.getElementById("autoSix").classList.remove("btn-primary");

        document.getElementById("resetButton").classList.add("btn-outline-danger");
        document.getElementById("resetButton").classList.remove("btn-danger");
        document.getElementById("optionsButton").classList.add("btn-outline-info");
        document.getElementById("optionsButton").classList.remove("btn-info");

        document.getElementById("resetOptions").classList.add("btn-outline-secondary");
        document.getElementById("resetOptions").classList.remove("btn-secondary");
    }
}

// Reset Options
function resetOptions() {
    document.getElementById("lightMode").checked = 0;
    document.getElementById("solidButtons").checked = 0;
    document.getElementById("autoClickPower").checked = 0;
}

// Update Clicks Function
function updateClicks() {
    document.getElementById("clicks").innerHTML = "Total Clicks: " + clicks;
}

// Update All Function
function updateAll() {
    // Update All

    // Variables
    document.getElementById("clicks").innerHTML = "Total Clicks: " + clicks;
    document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;
    document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";

    // Upgrade Costs
    document.getElementById("upgradeOne").innerHTML = "+2 Power<br>Cost: " + costOne;
    document.getElementById("upgradeTwo").innerHTML = "+14 Power<br>Cost: " + costTwo;
    document.getElementById("upgradeThree").innerHTML = "+97 Power<br>Cost: " + costThree;
    document.getElementById("upgradeFour").innerHTML = "+236 Power<br>Cost: " + costFour;
    document.getElementById("upgradeFive").innerHTML = "+1264 Power<br>Cost: " + costFive;
    document.getElementById("upgradeSix").innerHTML = "+10000 Power<br>Cost: " + costSix;
    document.getElementById("upgradeSeven").innerHTML = "+36793 Power<br>Cost: " + costSeven;
    document.getElementById("upgradeEight").innerHTML = "+100327 Power<br>Cost: " + costEight;
    document.getElementById("upgradeNine").innerHTML = "+402050 Power<br>Cost: " + costNine;
    document.getElementById("upgradeTen").innerHTML = "+1002404 Power<br>Cost: " + costTen;
    document.getElementById("upgradeEleven").innerHTML = "+4592024 Power<br>Cost: " + costEleven;
    document.getElementById("upgradeTwelve").innerHTML = "+15066930 Power<br>Cost: " + costTwelve;

    // Auto Clicker Costs
    document.getElementById("autoOne").innerHTML = "+1 Click/s<br>Cost: " + autoCostOne;
    document.getElementById("autoTwo").innerHTML = "+50 Click/s<br>Cost: " + autoCostTwo;
    document.getElementById("autoThree").innerHTML = "+1750 Click/s<br>Cost: " + autoCostThree;
    document.getElementById("autoFour").innerHTML = "+5000 Click/s<br>Cost: " + autoCostFour;
    document.getElementById("autoFive").innerHTML = "+50575 Click/s<br>Cost: " + autoCostFive;
    document.getElementById("autoSix").innerHTML = "+10000000 Click/s<br>Cost: " + autoCostSix;
}

// Add Click(s) Function
function addClicks() {
    // Add Clicks
    clicks = clicks + clickPower;

    // Update Clicks
    updateClicks();
}

// Upgrades

// Upgrade One
function upgradeOne() {
    // Check If Clicks are enough
    if (clicks > (costOne - 1)) {
        // Subtract Clicks
        clicks = clicks - costOne;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 2;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costOne = costOne + (costOne * 0.5);

        // Round Cost
        costOne = Math.round(costOne);

        // Update Cost
        document.getElementById("upgradeOne").innerHTML = "+2 Power<br>Cost: " + costOne;
    }
}

// Upgrade Two
function upgradeTwo() {
    // Check If Clicks are enough
    if (clicks > (costTwo - 1)) {
        // Subtract Clicks
        clicks = clicks - costTwo;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 14;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costTwo = costTwo + (costTwo * 0.5);

        // Round Cost
        costTwo = Math.round(costTwo);

        // Update Cost
        document.getElementById("upgradeTwo").innerHTML = "+14 Power<br>Cost: " + costTwo;
    }
}

// Upgrade Three
function upgradeThree() {
    // Check If Clicks are enough
    if (clicks > (costThree - 1)) {
        // Subtract Clicks
        clicks = clicks - costThree;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 97;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costThree = costThree + (costThree * 0.5);

        // Round Cost
        costThree = Math.round(costThree);

        // Update Cost
        document.getElementById("upgradeThree").innerHTML = "+97 Power<br>Cost: " + costThree;
    }
}

// Upgrade Four
function upgradeFour() {
    // Check If Clicks are enough
    if (clicks > (costFour - 1)) {
        // Subtract Clicks
        clicks = clicks - costFour;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 236;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costFour = costFour + (costFour * 0.5);

        // Round Cost
        costFour = Math.round(costFour);

        // Update Cost
        document.getElementById("upgradeFour").innerHTML = "+236 Power<br>Cost: " + costFour;
    }
}

// Upgrade Five
function upgradeFive() {
    // Check If Clicks are enough
    if (clicks > (costFive - 1)) {
        // Subtract Clicks
        clicks = clicks - costFive;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 1264;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costFive = costFive + (costFive * 0.5);

        // Round Cost
        costFive = Math.round(costFive);

        // Update Cost
        document.getElementById("upgradeFive").innerHTML = "+1264 Power<br>Cost: " + costFive;
    }
}

// Upgrade Six
function upgradeSix() {
    // Check If Clicks are enough
    if (clicks > (costSix - 1)) {
        // Subtract Clicks
        clicks = clicks - costSix;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 10000;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costSix = costSix + (costSix * 0.5);

        // Round Cost
        costSix = Math.round(costSix);

        // Update Cost
        document.getElementById("upgradeSix").innerHTML = "+10000 Power<br>Cost: " + costSix;
    }
}

// Upgrade Seven
function upgradeSeven() {
    // Check If Clicks are enough
    if (clicks > (costSeven - 1)) {
        // Subtract Clicks
        clicks = clicks - costSeven;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 36793;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costSeven = costSeven + (costSeven * 0.5);

        // Round Cost
        costSeven = Math.round(costSeven);

        // Update Cost
        document.getElementById("upgradeSeven").innerHTML = "+36793 Power<br>Cost: " + costSeven;
    }
}

// Upgrade Eight
function upgradeEight() {
    // Check If Clicks are enough
    if (clicks > (costEight - 1)) {
        // Subtract Clicks
        clicks = clicks - costEight;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 100327;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costEight = costEight + (costEight * 0.5);

        // Round Cost
        costEight = Math.round(costEight);

        // Update Cost
        document.getElementById("upgradeEight").innerHTML = "+100327 Power<br>Cost: " + costEight;
    }
}

// Upgrade Nine
function upgradeNine() {
    // Check If Clicks are enough
    if (clicks > (costNine - 1)) {
        // Subtract Clicks
        clicks = clicks - costNine;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 402050;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costNine = costNine + (costNine * 0.5);

        // Round Cost
        costNine = Math.round(costNine);

        // Update Cost
        document.getElementById("upgradeNine").innerHTML = "+402050 Power<br>Cost: " + costNine;
    }
}

// Upgrade Ten
function upgradeTen() {
    // Check If Clicks are enough
    if (clicks > (costTen - 1)) {
        // Subtract Clicks
        clicks = clicks - costTen;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 1002404;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costTen = costTen + (costTen * 0.5);

        // Round Cost
        costTen = Math.round(costTen);

        // Update Cost
        document.getElementById("upgradeTen").innerHTML = "+1002404 Power<br>Cost: " + costTen;
    }
}

// Upgrade Eleven
function upgradeEleven() {
    // Check If Clicks are enough
    if (clicks > (costEleven - 1)) {
        // Subtract Clicks
        clicks = clicks - costEleven;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 4592024;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costEleven = costEleven + (costEleven * 0.5);

        // Round Cost
        costEleven = Math.round(costEleven);

        // Update Cost
        document.getElementById("upgradeEleven").innerHTML = "+4592024 Power<br>Cost: " + costEleven;
    }
}

// Upgrade Twelve
function upgradeTwelve() {
    // Check If Clicks are enough
    if (clicks > (costTwelve - 1)) {
        // Subtract Clicks
        clicks = clicks - costTwelve;

        // Update Clicks
        updateClicks();

        // Add Power
        clickPower = clickPower + 15066930;

        // Update Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;

        // Higher Cost
        costTwelve = costTwelve + (costTwelve * 0.5);

        // Round Cost
        costTwelve = Math.round(costTwelve);

        // Update Cost
        document.getElementById("upgradeTwelve").innerHTML = "+15066930 Power<br>Cost: " + costTwelve;
    }
}

// Auto Clickers

// Auto Click Function
function autoClick() {
    setInterval(function () {
        // Check if autoClickPowerVar is yes
        if (document.getElementById("autoClickPower").checked == 1) {
            // Add Clicks
            clicks = clicks + (autoClicks * clickPower);
        
            // Update Clicks
            updateClicks();
        }

        else {
            // Add Clicks
            clicks = clicks + autoClicks;
        
            // Update Clicks
            updateClicks();
        }
    }, 1000);
}

// Auto Clicker One
function autoOne() {
    // Check If User Has Enough Clicks
    if (clicks > (autoCostOne - 1)) {
        // Subtract Clicks
        clicks = clicks - autoCostOne;

        // Update Clicks
        updateClicks();

        // Add Auto Clicks 
        autoClicks = autoClicks + 1;

        // Update Auto Clicks
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";

        // Higher Cost
        autoCostOne = autoCostOne + (autoCostOne * 0.5);

        // Round Cost
        autoCostOne = Math.round(autoCostOne);

        // Update Cost
        document.getElementById("autoOne").innerHTML = "+1 Click/s<br>Cost: " + autoCostOne;
    }
}

// Auto Clicker Two
function autoTwo() {
    // Check If User Has Enough Clicks
    if (clicks > (autoCostTwo - 1)) {
        // Subtract Clicks
        clicks = clicks - autoCostTwo;

        // Update Clicks
        updateClicks();

        // Add Auto Clicks 
        autoClicks = autoClicks + 50;

        // Update Auto Clicks
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";

        // Higher Cost
        autoCostTwo = autoCostTwo + (autoCostTwo * 0.5);

        // Round Cost
        autoCostTwo = Math.round(autoCostTwo);

        // Update Cost
        document.getElementById("autoTwo").innerHTML = "+50 Click/s<br>Cost: " + autoCostTwo;
    }
}

// Auto Clicker Three
function autoThree() {
    // Check If User Has Enough Clicks
    if (clicks > (autoCostThree - 1)) {
        // Subtract Clicks
        clicks = clicks - autoCostThree;

        // Update Clicks
        updateClicks();

        // Add Auto Clicks 
        autoClicks = autoClicks + 1750;

        // Update Auto Clicks
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";

        // Higher Cost
        autoCostThree = autoCostThree + (autoCostThree * 0.5);

        // Round Cost
        autoCostThree = Math.round(autoCostThree);

        // Update Cost
        document.getElementById("autoThree").innerHTML = "+1750 Click/s<br>Cost: " + autoCostThree;
    }
}

// Auto Clicker Four
function autoFour() {
    // Check If User Has Enough Clicks
    if (clicks > (autoCostFour - 1)) {
        // Subtract Clicks
        clicks = clicks - autoCostFour;

        // Update Clicks
        updateClicks();

        // Add Auto Clicks 
        autoClicks = autoClicks + 5000;

        // Update Auto Clicks
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";

        // Higher Cost
        autoCostFour = autoCostFour + (autoCostFour * 0.5);

        // Round Cost
        autoCostFour = Math.round(autoCostFour);

        // Update Cost
        document.getElementById("autoFour").innerHTML = "+5000 Click/s<br>Cost: " + autoCostFour;
    }
}

// Auto Clicker Five
function autoFive() {
    // Check If User Has Enough Clicks
    if (clicks > (autoCostFive - 1)) {
        // Subtract Clicks
        clicks = clicks - autoCostFive;

        // Update Clicks
        updateClicks();

        // Add Auto Clicks 
        autoClicks = autoClicks + 50575;

        // Update Auto Clicks
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";

        // Higher Cost
        autoCostFive = autoCostFive + (autoCostFive * 0.5);

        // Round Cost
        autoCostFive = Math.round(autoCostFive);

        // Update Cost
        document.getElementById("autoFive").innerHTML = "+50575 Click/s<br>Cost: " + autoCostFive;
    }
}

// Auto Clicker Six
function autoSix() {
    // Check If User Has Enough Clicks
    if (clicks > (autoCostSix - 1)) {
        // Subtract Clicks
        clicks = clicks - autoCostSix;

        // Update Clicks
        updateClicks();

        // Add Auto Clicks 
        autoClicks = autoClicks + 10000000;

        // Update Auto Clicks
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";

        // Higher Cost
        autoCostSix = autoCostSix + (autoCostSix * 0.5);

        // Round Cost
        autoCostSix = Math.round(autoCostSix);

        // Update Cost
        document.getElementById("autoSix").innerHTML = "+10000000 Click/s<br>Cost: " + autoCostSix;
    }
}

// Progress Management

// Save Data
function save() {
    // Variables
    localStorage.setItem("clicks", clicks);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("autoClicks", autoClicks);

    // Upgrade Costs
    localStorage.setItem("costOne", costOne);
    localStorage.setItem("costTwo", costTwo);
    localStorage.setItem("costThree", costThree);
    localStorage.setItem("costFour", costFour);
    localStorage.setItem("costFive", costFive);
    localStorage.setItem("costSix", costSix);
    localStorage.setItem("costSeven", costSeven);
    localStorage.setItem("costEight", costEight);
    localStorage.setItem("costNine", costNine);
    localStorage.setItem("costTen", costTen);
    localStorage.setItem("costEleven", costEleven);
    localStorage.setItem("costTwelve", costTwelve);

    // Auto Clicker Costs
    localStorage.setItem("autoCostOne", autoCostOne);
    localStorage.setItem("autoCostTwo", autoCostTwo);
    localStorage.setItem("autoCostThree", autoCostThree);
    localStorage.setItem("autoCostFour", autoCostFour);
    localStorage.setItem("autoCostFive", autoCostFive);
    localStorage.setItem("autoCostSix", autoCostSix);

    // Options
    localStorage.setItem("lightMode", lightModeVar.checked);
}

// Load Data
function load() {
    if (localStorage.getItem("clicks")) {
        // Variables
        clicks = parseInt(localStorage.getItem("clicks"));
        clickPower = parseInt(localStorage.getItem("clickPower"));
        autoClicks = parseInt(localStorage.getItem("autoClicks"));

        // Upgrade Costs
        costOne = parseInt(localStorage.getItem("costOne"));
        costTwo = parseInt(localStorage.getItem("costTwo"));
        costThree = parseInt(localStorage.getItem("costThree"));
        costFour = parseInt(localStorage.getItem("costFour"));
        costFive = parseInt(localStorage.getItem("costFive"));
        costSix = parseInt(localStorage.getItem("costSix"));
        costSeven = parseInt(localStorage.getItem("costSeven"));
        costEight = parseInt(localStorage.getItem("costEight"));
        costNine = parseInt(localStorage.getItem("costNine"));
        costTen = parseInt(localStorage.getItem("costTen"));
        costEleven = parseInt(localStorage.getItem("costEleven"));
        costTwelve = parseInt(localStorage.getItem("costTwelve"));

        // Auto Clicker Costs
        autoCostOne = parseInt(localStorage.getItem("autoCostOne"));
        autoCostTwo = parseInt(localStorage.getItem("autoCostTwo"));
        autoCostThree = parseInt(localStorage.getItem("autoCostThree"));
        autoCostFour = parseInt(localStorage.getItem("autoCostFour"));
        autoCostFive = parseInt(localStorage.getItem("autoCostFive"));
        autoCostSix = parseInt(localStorage.getItem("autoCostSix"));

        // Options
        lightModeVar = localStorage.getItem("lightMode");

        updateAll();
    }
}

// Reset Data
function reset() {
    // Variables
    clicks = 0;
    clickPower = 1;
    autoClicks = 0;

    // Upgrade Costs
    costOne = 20;
    costTwo = 150;
    costThree = 780;
    costFour = 1970;
    costFive = 4730;
    costSix = 36820;
    costSeven = 70480;
    costEight = 201204;
    costNine = 981000;
    costTen = 3102380;
    costEleven = 10025010;
    costTwelve = 40103010;

    // Auto Clicker Costs
    autoCostOne = 100000;
    autoCostTwo = 750000;
    autoCostThree = 5625000;
    autoCostFour = 20100200;
    autoCostFive = 210320100;
    autoCostSix = 110502240500;

    // Save
    save();

    // Refresh
    location.reload(true);
}

// Cheats

function setCheatClicks() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Clicks Accordingly
        clicks = cheatClicks;

        // Update Clicks
        updateClicks();
    }
}

function addCheatClicks() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Clicks Accordingly
        clicks = clicks + cheatClicks;

        // Update Clicks
        updateClicks();
    }
}

function subCheatClicks() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Clicks Accordingly
        clicks = clicks - cheatClicks;

        // Update Clicks
        updateClicks();
    }
}

function setCheatClickPower() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Click Power Accordingly
        clickPower = cheatClicks;

        // Update Click Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;
    }
}

function addCheatClickPower() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Click Power Accordingly
        clickPower = clickPower + cheatClicks;

        // Update Click Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;
    }
}

function subCheatClickPower() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Click Power Accordingly
        clickPower = clickPower - cheatClicks;

        // Update Click Power
        document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower;
    }
}

function setCheatAutoClicks() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Auto Clicks Accordingly
        autoClicks = cheatClicks;

        // Update Click Power
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";
    }
}

function addCheatAutoClicks() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Auto Clicks Accordingly
        autoClicks = autoClicks + cheatClicks;

        // Update Click Power
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";
    }
}

function subCheatAutoClicks() {
    // Check if value is present
    if (parseInt(document.getElementById("cheatClicks").value)) {
        // Assign Value
        cheatClicks = parseInt(document.getElementById("cheatClicks").value);

        // Manipulate Auto Clicks Accordingly
        autoClicks = autoClicks - cheatClicks;

        // Update Click Power
        document.getElementById("autoClicks").innerHTML = "Auto Clicks: " + autoClicks + "/s";
    }
}

function disableSave() {
    document.getElementById("clickerBody").removeAttribute("onbeforeunload");
}

// Upgrade Enabling

function upgradeOneEnable() {
    if (clicks > (costOne - 1)) {
        // Enable Button
        document.getElementById("upgradeOne").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeOne").classList.add("disabled");
    }
}

function upgradeTwoEnable() {
    if (clicks > (costTwo - 1)) {
        // Enable Button
        document.getElementById("upgradeTwo").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeTwo").classList.add("disabled");
    }
}

function upgradeThreeEnable() {
    if (clicks > (costThree - 1)) {
        // Enable Button
        document.getElementById("upgradeThree").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeThree").classList.add("disabled");
    }
}

function upgradeFourEnable() {
    if (clicks > (costFour - 1)) {
        // Enable Button
        document.getElementById("upgradeFour").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeFour").classList.add("disabled");
    }
}

function upgradeFiveEnable() {
    if (clicks > (costFive - 1)) {
        // Enable Button
        document.getElementById("upgradeFive").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeFive").classList.add("disabled");
    }
}

function upgradeSixEnable() {
    if (clicks > (costSix - 1)) {
        // Enable Button
        document.getElementById("upgradeSix").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeSix").classList.add("disabled");
    }
}

function upgradeSevenEnable() {
    if (clicks > (costSeven - 1)) {
        // Enable Button
        document.getElementById("upgradeSeven").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeSeven").classList.add("disabled");
    }
}

function upgradeEightEnable() {
    if (clicks > (costEight - 1)) {
        // Enable Button
        document.getElementById("upgradeEight").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeEight").classList.add("disabled");
    }
}

function upgradeNineEnable() {
    if (clicks > (costNine - 1)) {
        // Enable Button
        document.getElementById("upgradeNine").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeNine").classList.add("disabled");
    }
}

function upgradeTenEnable() {
    if (clicks > (costTen - 1)) {
        // Enable Button
        document.getElementById("upgradeTen").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeTen").classList.add("disabled");
    }
}

function upgradeElevenEnable() {
    if (clicks > (costEleven - 1)) {
        // Enable Button
        document.getElementById("upgradeEleven").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeEleven").classList.add("disabled");
    }
}

function upgradeTwelveEnable() {
    if (clicks > (costTwelve - 1)) {
        // Enable Button
        document.getElementById("upgradeTwelve").classList.remove("disabled");
    }

    else {
        document.getElementById("upgradeTwelve").classList.add("disabled");
    }
}

function autoOneEnable() {
    if (clicks > (autoCostOne - 1)) {
        // Enable Button
        document.getElementById("autoOne").classList.remove("disabled");
    }

    else {
        document.getElementById("autoOne").classList.add("disabled");
    }
}

function autoTwoEnable() {
    if (clicks > (autoCostTwo - 1)) {
        // Enable Button
        document.getElementById("autoTwo").classList.remove("disabled");
    }

    else {
        document.getElementById("autoTwo").classList.add("disabled");
    }
}

function autoThreeEnable() {
    if (clicks > (autoCostThree - 1)) {
        // Enable Button
        document.getElementById("autoThree").classList.remove("disabled");
    }

    else {
        document.getElementById("autoThree").classList.add("disabled");
    }
}

function autoFourEnable() {
    if (clicks > (autoCostFour - 1)) {
        // Enable Button
        document.getElementById("autoFour").classList.remove("disabled");
    }

    else {
        document.getElementById("autoFour").classList.add("disabled");
    }
}

function autoFiveEnable() {
    if (clicks > (autoCostFive - 1)) {
        // Enable Button
        document.getElementById("autoFive").classList.remove("disabled");
    }

    else {
        document.getElementById("autoFive").classList.add("disabled");
    }
}

function autoSixEnable() {
    if (clicks > (autoCostSix - 1)) {
        // Enable Button
        document.getElementById("autoSix").classList.remove("disabled");
    }

    else {
        document.getElementById("autoSix").classList.add("disabled");
    }
}

function refreshEnabled() {
    setInterval(function () {
        upgradeOneEnable();
        upgradeTwoEnable();
        upgradeThreeEnable();
        upgradeFourEnable();
        upgradeFiveEnable();
        upgradeSixEnable();
        upgradeSevenEnable();
        upgradeEightEnable();
        upgradeNineEnable();
        upgradeTenEnable();
        upgradeElevenEnable();
        upgradeTwelveEnable();
        autoOneEnable();
        autoTwoEnable();
        autoThreeEnable();
        autoFourEnable();
        autoFiveEnable();
        autoSixEnable();
    }, 100)
}