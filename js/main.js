window.addEventListener('load', function() {
    let cambioA, cambioB;
    cambioA = this.document.getElementById('abce');
    cambioB = this.document.getElementById('enla');

    cambioA.addEventListener('click', function() {
        cambioB.classList.toggle('active');
        cambioA.classList.toggle('active');
    })
})