// Function to change the year color every 1 second
function changeYearColor() {
    const yearElement = document.getElementById('year');
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
    let index = 0;

    setInterval(() => {
        yearElement.style.color = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
}

// Function to change the date and time background color every second
function changeDateTimeBackgroundColor() {
    const dateTimeElement = document.getElementById('date-time');
    const colors = ['lightgray', 'lightblue', 'lightgreen', 'lightyellow', 'lightpink', 'lightcoral'];
    let index = 0;

    setInterval(() => {
        dateTimeElement.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 1000);
}

// Initialize the year color and date-time background color
changeYearColor();
changeDateTimeBackgroundColor();

// Function to update the challenge status
function updateChallengeStatus() {
    const listItems = document.querySelectorAll('ul li');

    listItems.forEach(item => {
        if (item.textContent.includes('Done')) {
            item.classList.add('completed');
        } else if (item.textContent.includes('Ongoing')) {
            item.classList.add('ongoing');
        } else if (item.textContent.includes('Coming')) {
            item.classList.add('coming');
        }
    });
}

// Update challenge status on page load
updateChallengeStatus();
