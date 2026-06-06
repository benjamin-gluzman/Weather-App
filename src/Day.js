class Day {
    constructor(date, minTemp, maxTemp) {
        this.date = new Date(date);
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
    }

    createDayContainer() {
        const container = document.createElement("div");
        container.classList.add("day");

        const date = document.createElement("h2");
        date.textContent = this.date;

        const temp = document.createElement("p");
        temp.textContent = `Min Temp: ${this.minTemp}  Max Temp: ${this.maxTemp}`;

        container.appendChild(date);
        container.appendChild(temp);

        return container;
    }
}

export { Day };