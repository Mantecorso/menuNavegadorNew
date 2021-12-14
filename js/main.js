window.addEventListener('load', function() {

    let cambioA, cambioB;
    cambioA = this.document.getElementById('abce');
    cambioB = this.document.getElementById('enla');

    cambioA.addEventListener('click', function() {
        cambioB.classList.toggle('active');
        cambioA.classList.toggle('active');
    })

    function rain() {
        let uno = 111;
        let goldo = document.querySelector('.gordo');
        let i = 0;

        while (i < uno) {
            let gotas = document.createElement('i');
            let stamano = Math.random() * 5;
            let posicionX = Math.floor(Math.random() * window.innerWidth);
            let retraso = Math.random() * -20;
            let duracion = Math.random() * 5;

            gotas.style.width = 0.2 + stamano + "px";
            gotas.style.left = posicionX + "px";
            gotas.style.animationDelay = retraso + "s";
            gotas.style.animationDuration = 1 + duracion + "s";

            goldo.appendChild(gotas);
            i++;
        }

    }
    rain();

})