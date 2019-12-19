/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
// import "../assets/img/rigo-baby.jpg";
// import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
// import "../style/index.scss";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

let excuseGenerator = () => {
  let randNumb = Math.floor(Math.random() * 7);
  let who = [
    "Jecky Chan ",
    "Batman ",
    "Godzilla ",
    "Mr President ",
    "Aliens ",
    "Haters ",
    "Ghostbusters "
  ];
  let whatHappend = [
    "have stolen my Id ",
    "created imbalance ",
    "required a bribe ",
    "conquered the Earth ",
    "melted an Iceberg ",
    "initiated dimentional disturbance ",
    "left mess "
  ];
  let where = [
    "at the gas station ",
    "at the court ",
    "on the Highway66 ",
    "in the movie theater ",
    "on the Beach ",
    "at the Barber Shop ",
    "near the dog Park "
  ];
  let when = [
    "yesterday.",
    "a few hours ago.",
    "last night.",
    "the day before.",
    "before I arrived.",
    "last Tuesday.",
    "around noon."
  ];
  let whoNum = Math.floor(Math.random() * 7);
  let whtNum = Math.floor(Math.random() * 7);
  let whrNum = Math.floor(Math.random() * 7);

  return who[whoNum] + whatHappend[whtNum] + where[whrNum] + when[randNumb];
};
