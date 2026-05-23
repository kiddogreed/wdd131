// Dynamic copyright year
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Dynamic last modified date
const lastModified = document.getElementById('lastModified');
if (lastModified) {
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
}


// In your JavaScript file, provide code to support the following requirements:
// Use JavaScript to display the wind chill factor in the "Weather" section of the page as shown in the examples. The wind chill factor should be calculated and displayed when the page loads.
// At this point in the course, you should define variables that use static values for the temperature and wind speed, matching the static, displayed values you have in your weather section content.
// The next course will cover how to use third-party APIs to get real-time weather data.

// Write a function named "calculateWindChill" that returns the wind chill factor when passed the necessary arguments (temperature and wind speed). The function should use one line of code that returns the result of the wind chill calculation. Your formula should be based upon the location's preferred units (°C or °F).
// Using AI to help determine this formula might be a good approach.

// Do not call the calculateWindChill function unless the following conditions are met:
// Viable Wind Chill Calculations
// Metric	Imperial (English)
// Temperature	<= 10 °C	<= 50 °F
// Wind speed	> 4.8 km/h	> 3 mph
// If the conditions are not met, then display "N/A", which means "not applicable".


// Weather values used for wind chill calculation - matches what is shown on page
const tempF = 30; // Static temperature in Fahrenheit
const windSpeedMph = 10; // Static wind speed in miles per hour

// Calculates how cold it actually feels based on temperature and wind speed
// Uses official NWS (National Weather Service) wind chill formula
// Only works when temp is 50°F or below and wind is faster than 3 mph
function calculateWindChill(tempF, windSpeedMph) {
    const ans =  35.74 + (0.6215 * tempF)
      - (35.75 * Math.pow(windSpeedMph, 0.16)) 
      + (0.4275 * tempF * Math.pow(windSpeedMph, 0.16));
      return ans;
}

// Find wind chill display element on page
const windChillElement = document.getElementById('windChill');

// Only calculate wind chill if conditions are cold and windy enough to matter
if (tempF <= 50 && windSpeedMph > 3) {
    const windChill = calculateWindChill(tempF, windSpeedMph);
    // Round result to 2 decimal places and display on page
    windChillElement.textContent = `Wind Chill: ${windChill.toFixed(2)} °F`;
}
else {
    // Conditions not cold or windy enough - wind chill does not apply
    windChillElement.textContent = 'Wind Chill: N/A';
} 
