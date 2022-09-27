//card down
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const circle = document.querySelector(".circle");

const logo =document.querySelector('.logorub img');

container.addEventListener("mousemove", (e) => {
    console.log(e.pageX);
    let xAxis = (window.innerWidth / 8 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 1.2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

 container.addEventListener('mouseenter', e => {
     card.style.transition = "none";
     logo.style.transform = "translateZ(100px)";
     
 });

 container.addEventListener('mouseleave', e => {
     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
     card.style.transition = "all 0.5s ease";
     logo.style.transform = "translateZ(0px)";
 });

 //card up
 const card1 = document.querySelector(".card1");
const container1 = document.querySelector(".container1");
const circle1 = document.querySelector(".circle1");

const logo1 =document.querySelector('.logorub1 img');

container1.addEventListener("mousemove", (e) => {
    console.log(e.pageX);
    let xAxis = (window.innerWidth / 8 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 4 - e.pageY) / 10;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

 container1.addEventListener('mouseenter', e => {
     card1.style.transition = "none";
     logo1.style.transform = "translateZ(100px)";
     
 });

 container1.addEventListener('mouseleave', e => {
     card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
     card1.style.transition = "all 0.5s ease";
     logo1.style.transform = "translateZ(0px)";
 });

 

