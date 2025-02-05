// Function to update the UTC time
function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.innerText = `Current UTC Time: ${now.toUTCString()}`;
}

// Initial call to display time on page load
updateTime();

// Update UTC time every second
setInterval(updateTime, 1000);
