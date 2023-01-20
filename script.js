let intervalId;
let scrollDirection = 'down';

function startScrolling(intervalTime) {
    intervalId = setInterval(function() {
        if (scrollDirection === 'down') {
            window.scrollBy(0, 50);
            if (window.pageYOffset >= document.body.offsetHeight - window.innerHeight) {
                scrollDirection = 'up';
            }
        } else {
            window.scrollBy(0, -50);
            if (window.pageYOffset <= 0) {
                scrollDirection = 'down';
            }
        }
    }, intervalTime);
}

let interval = prompt("Enter interval time in milliseconds:");
startScrolling(interval);
