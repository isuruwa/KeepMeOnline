let interval;
function getRefreshInterval() {
    interval = prompt("Enter the refresh interval in seconds:");
    if(isNaN(interval)){
        alert('Please enter a valid number')
        return getRefreshInterval();
    }
    return interval;
}
interval = getRefreshInterval();

setInterval(function refreshAtInterval() {
    fetch(location.href)
      .then(response => response.text())
      .then(html => {
        document.open();
        document.write(html);
        document.close();
      });
}, interval*1000);
