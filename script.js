document.addEventListener("DOMContentLoaded", function () {
    // Simulate hacking and fetch browser history
    simulateHacking();
});

function simulateHacking() {
    var progress = 0;
    var progressBar = document.getElementById("progress-bar");
    var sensitiveData = [
        "Loading micro process emails...",
        "Downloading location data...",
        "Fetching financial records...",
        "Attempting password brute-force...",
        "Searching for Kuda account...",
        "Downloading WhatsApp chat history...",
        "Searching for Kuda account...",
        "https://www.emailprovider.com/inbox/sent",
        "Searching for Opay account...",
        "Kuda account found...",
        "Attempting Brute Force Kuda account...",
        "https://www.socialmedia.com/messages/private",
        "Opay account found...",
        "Attempting Brute Force Opay account...",
        "Decrypting financial records...",
    ];

    var totalItems = sensitiveData.length;
    var processedItems = 0;

    var interval = setInterval(function () {
        // Increment progress based on the number of processed items
        progress = Math.floor((processedItems / totalItems) * 100);
        progressBar.style.width = progress + "%";
        progressBar.setAttribute("aria-valuenow", progress);

        if (processedItems >= totalItems) {
            clearInterval(interval);
            displayDecryptionAnimation();
        }

        // Simulate fetching and displaying sensitive data
        displaySensitiveData(sensitiveData[processedItems]);
        processedItems++;
    }, 1500); // Adjust interval as needed
}

function displaySensitiveData(dataItem) {
    var sensitiveDataContainer = document.getElementById("sensitive-data");

    var listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerText = dataItem;
    sensitiveDataContainer.appendChild(listItem);

    // Animate item removal
    setTimeout(function () {
        listItem.style.opacity = "0";
        setTimeout(function () {
            listItem.remove();
        }, 900); // Adjust animation duration as needed
    }, 1000); // Delay before removing item (9 seconds)
}

function displayDecryptionAnimation() {
    // Hide hacking interface and progress bar
    document.getElementById("hacking-interface").style.display = "none";
    document.getElementById("progress-bar").style.display = "none";
    document.getElementById("hourglass-container").style.display = "none";
    
    document.getElementById("header").style.display = "none";

    // Display decryption animation
    var decryptionContainer = document.getElementById("decryption-container");
    decryptionContainer.style.display = "block";

    var decryptionText = document.getElementById("decryption-text");
    var decryptionProgress = 0;
    var decryptionInterval = setInterval(function () {
        decryptionProgress += 10;
        decryptionText.innerHTML = "Decrypting data... " + decryptionProgress + "%";

        if (decryptionProgress >= 100) {
            clearInterval(decryptionInterval);
            displayAprilFoolsMessage();
        }
    }, 900); // Adjust decryption animation speed as needed
}

function displayAprilFoolsMessage() {
    // Hide decryption animation
    document.getElementById("decryption-container").style.display = "none";

    // Display April Fools' message
    document.getElementById("message").innerHTML =
        "Happy April Fools!😈, Be happy, Na play o . ";
    document.getElementById("message").classList.remove("hidden");
}
