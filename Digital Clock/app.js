window.onload = () => {
    // This function builds the clock
    function buildClock(){
        // Get the current date and time
        const date = new Date();

        
        // console.log(date);

        // Extract hours, minutes, and seconds from the date
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        // Add leading zeros if necessary to ensure two digits for each unit
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Update the clock display in the HTML
        document.querySelector('#clock-hours').innerText = hours;
        document.querySelector('#clock-minutes').innerText = minutes;
        document.querySelector('#clock-seconds').innerText = seconds;

        // Schedule the buildClock function to run again after 1000 milliseconds (1 second)
        setTimeout(buildClock, 1000);
    }

    // Call the buildClock function to start the clock
    buildClock();
}
