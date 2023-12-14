const hour = document.querySelector(".hand-hour");
const min = document.querySelector(".hand-min");
const sec = document.querySelector(".hand-sec");

function setdate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsdegre = ((seconds/60)*360)+90;
    sec.style.transform = `rotate(${secondsdegre}deg)`;

    const mins = now.getMinutes();
    const mindegre=((mins/60)*360)+((seconds/60)*6)+90;
    min.style.transform = `rotate(${mindegre}deg)`;

    const hours = now.getHours();
    const hoursdegre = ((hours/12)*360)+((mins/60)*30)+90;
    hour.style.transform = `rotate(${hoursdegre}deg)`;
}
setInterval(setdate,1000);
setdate();