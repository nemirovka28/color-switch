const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const body = document.querySelector('body')
                     .addEventListener('click', onStartBtn);

let interval = null;
const length = colors.length-1;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};
 
function onStartBtn (e) {
    if (e.target.dataset.action == "start"){
        startColorStyle ();
        isActive = true;
    }
    else {
        clearInterval(interval);
        document.body.style.backgroundColor = 'white';
        isActive = false;
        console.log('stop');
    }
}

function startColorStyle () {
        if(isActive){
            return ;
        }
    interval = setInterval(styleBody, 1000);
} 

function styleBody() {
let random = randomIntegerFromInterval(0, length);
let hex = colors[random]; 
document.body.style.backgroundColor = hex;
console.log('hex');
}

  