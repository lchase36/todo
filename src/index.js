import "./style.css";
import Task from "./task";

const task = Task("dog", "", "a dog object", 1000);

const body = document.querySelector("body");

const div = document.createElement("div");

div.textContent = "task";

body.appendChild(div);
