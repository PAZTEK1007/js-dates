document.addEventListener('DOMContentLoaded', function() {
    const bruxelles = document.getElementById("p1");
    const anchorage = document.getElementById("p2");
    const reykjavik = document.getElementById("p3");
    const saintPetersburg = document.getElementById("p4");

    function datum(){
    let dateAct = new Date();
    
    let jour = dateAct.getUTCDate();
    let mois = dateAct.getUTCMonth() + 1;
    let annee = dateAct.getUTCFullYear();
    let heure = dateAct.getUTCHours();
    let min = dateAct.getUTCMinutes();
    let seconde = dateAct.getUTCSeconds();
    
    bruxelles.textContent = `BRUXELLES: ${jour}/${mois}/${annee} ${heure +2} hours ${min} minutes ${seconde} secs`;
    anchorage.textContent = `ANCHORAGE: ${jour}/${mois}/${annee} ${heure -8} hours ${min} minutes ${seconde} secs`;
    reykjavik.textContent = `REYKJAVIK: ${jour}/${mois}/${annee} ${heure} hours ${min} minutes ${seconde} secs`;
    saintPetersburg.textContent = `SAINT-PETERSBURG: ${jour}/${mois}/${annee} ${heure +3} hours ${min} minutes ${seconde} secs`;
    }

    const paragraph = document.getElementById('p5');
    const submit = document.getElementById('submit');

    submit.addEventListener('click', calcTime);

    function calcTime(){
        let input = document.getElementById("birthday");
        let birthDate = new Date(input.value);
        const lastDate = new Date();
        let timeout = calcTimeOut(birthDate, lastDate);
        paragraph.textContent = `Your Time On This Earth : ${timeout.jours} days , ${timeout.heures} hours, ${timeout.minutes} minutes, ${timeout.secondes} secondes !`;
    }

    function calcTimeOut(startDate, endDate) {
        const difference = endDate - startDate;
        let secondes = Math.floor(difference / 1000);
        let minutes = Math.floor(secondes / 60);
        let heures = Math.floor(minutes / 60);
        let jours = Math.floor(heures / 24);

        return{
            jours: jours,
            heures: heures % 24,
            minutes: minutes % 60,
            secondes: secondes % 60
        };
    }

    const hoursInput = document.getElementById('hours');
    const futureDateOutput = document.getElementById('futureDate');

        function calculateFutureDate(hours) {
            const now = new Date();
            const futureDate = new Date(now.getTime() + hours * 3600000);
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const formattedDate = futureDate.toLocaleDateString(undefined, options);

            return formattedDate;
        }

        hoursInput.addEventListener('input', function() {
            let hours = parseInt(hoursInput.value);
            if (!isNaN(hours) && hours >= 0) {
                let futureDate = calculateFutureDate(hours);
                futureDateOutput.textContent = futureDate;
            } else {
                futureDateOutput.textContent = 'Invalid input';
            }
        });

    setInterval(datum, 1000);
});


g