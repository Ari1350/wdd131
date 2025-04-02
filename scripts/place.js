function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const temperature = 15; 
    const windSpeed = 10; 

    const windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById("windChill").textContent = `${windChill}°C`;
    document.getElementById("lastModified").textContent = document.lastModified;
});