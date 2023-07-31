document.addEventListener('DOMContentLoaded', function () {
    const eventDates = [
        moment("2023-04-12"),
        moment("2023-04-22"),
        moment("2023-04-30")
    ];

    const eventList = document.getElementById('event-dates');

    eventDates.forEach(date => {
        const formattedDate = moment(date).format('MMMM Do');
        const listItem = document.createElement('li');
        listItem.textContent = formattedDate;
        eventList.appendChild(listItem);
    });

    const nextEventInfo = document.getElementById('next-event');
    const now = moment();
    const nextEvent = eventDates.find(date => moment(date).isAfter(now));

    if (nextEvent) {
        function updateCountdown() {
            const remainingTime = moment(nextEvent).diff(now);
            const duration = moment.duration(remainingTime);
            const days = Math.floor(duration.asDays());
            const hours = duration.hours();
            const minutes = duration.minutes();
            const sec = duration.seconds();
            nextEventInfo.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${sec} sec`;
        }

    }
    else {
        nextEventInfo.textContent = 'No upcoming events.';
    }

    updateCountdown(); // Update the countdown immediately
    setInterval(updateCountdown, 1000); // Update the countdown every second
});
