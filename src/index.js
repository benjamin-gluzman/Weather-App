import "./style.css"
import { Day } from "./Day.js"

const API_KEY = "T24B39FRDTLNBQ9Z4PR88WNNB"; // free tier
const WEATHER_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

const form = document.querySelector("form");
const locationInput = document.querySelector("#location");

const weatherContainer = document.querySelector("#weatherContainer");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if(locationInput.value === "") {
        console.log("INVALID LOCATION");
        return;
    }

    weatherContainer.replaceChildren();

    try {
        const res = await fetch(`${WEATHER_URL}${locationInput.value}?key=${API_KEY}&include=days`);

        if(!res.ok) {
            throw new Error(`HTTP error. Status: ${res.status}`);
        }

        const days = (await res.json()).days;

        for(const day of days) {
            const dayObj = new Day(day.datetime, day.tempmin, day.tempmax);

            weatherContainer.appendChild(dayObj.createDayContainer());
        }
    }
    catch(error) {
        console.error("Fetch failed:", error.message);
    }



})