document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('current-year');
    const lastModified = document.getElementById('last-modified');
    const now = new Date();

    currentYear.textContent = now.getFullYear();
    lastModified.textContent = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZoneName: 'short',
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const temperature = 10;
    const windSpeed = 5;

    const calculateWindChill = (temp, wind) =>
        (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
    const windchillElement = document.getElementById('windchill');
    if (temperature <= 10 && windSpeed > 4.8) {
        windchillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
    } else {
        windchillElement.textContent = "N/A";
    }
});