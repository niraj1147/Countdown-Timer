const endDate = "30 Nov 2027 05:00 AM";
const inputs = document.querySelectorAll('input');
document.getElementById('end-date').innerText = endDate;


const clock = () => {
    const end = new Date(endDate);
    const curr = new Date();
    const diff = (end - curr)/1000;
    if(diff<0){
        return;
    }
    inputs[0].value = Math.floor(diff/3600/24); 
    inputs[1].value = Math.floor(diff/3600)%24;
    inputs[2].value = Math.floor(diff/60);
    inputs[3].value = Math.floor(diff%60);
    // console.log(diff);
}
setInterval(clock, 1000);