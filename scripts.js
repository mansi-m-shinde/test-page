let startTime;

function startTimer() {
  startTime = new Date().getTime();
  alert("Timer started. Add to cart button clicked.");
}

function stopTimer() {
  if (startTime) {
    let endTime = new Date().getTime();
    let timeSpent = (endTime - startTime) / 1000; // Time in seconds

    // Send custom event to Google Analytics
    gtag('event', 'time_spent', {
      'event_category': 'Engagement',
      'event_label': 'Time Spent Between Clicks',
      'value': timeSpent
    });

    alert(`Time spent: ${timeSpent} seconds`);
    startTime = null; // Reset the timer
  }
}
