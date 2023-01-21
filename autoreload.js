let interval;
function getRefreshInterval() {
    interval = prompt("Enter the reload interval in seconds:");
    if(isNaN(interval)){
        alert('Please enter a valid number')
        return getRefreshInterval();
    }
    let myInterval = setInterval(function(){
        location.reload();
    }, interval*1000);
}
window.getRefreshInterval();
