const x = document.querySelectorAll('span');
const y = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'red', 'orange', 'yellow', 
'green', 'blue', 'indigo', 'violet', 'red', 'orange', 'yellow', 'green', 'blue'];

for (let i of y) {
    
    x.forEach((sp, i) => sp.style.color = y[i]);
    // x.forEach((sp, i) => sp.style.fontSize = '5rem');
    // x.forEach((sp, i) => sp.style.textAlign = 'center');

}

