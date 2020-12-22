const btn = document.querySelector('.btn');
btn.onclick = randomAZ;

function randomAZ() {
    var randomUpperCase = Math.floor(Math.random() * 2);
    var randomAZ;
    if (randomUpperCase == 1) {
        randomAZ = String.fromCharCode(0 | Math.random() * 26 + 97);
    } else {
        randomAZ = String.fromCharCode(0 | Math.random() * 26 + 97).toUpperCase();
    }
    p.innerHTML = randomAZ;
}
