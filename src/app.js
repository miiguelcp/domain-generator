/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pron = ["the", "our"];
  var adj = ["great", "big"];
  var no = ["jogger", "racoon"];

  const Name = () => {
    for (const p of pron) {
      for (const a of adj) {
        for (const n of no) {
          console.log(p + a + n + ".com");
        }
      }
    }
  };
  Name();
};
