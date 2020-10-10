"use-strict";
// html elements
let mainPage = document.getElementById("main");
let timeSection = document.getElementById("time-section");
let pomodoro = document.getElementById("pomodoro");
let shortBreak = document.getElementById("short-break");
let longBreak = document.getElementById("long-break");
let clockEl = document.getElementById("clock");
let startBtn = document.getElementById("start");
let addTaskBtn = document.getElementById("add-task-btn");
let pageTitle = document.getElementById("title");
let progressBar = document.getElementById("progress-bar");

let Breakminute, time, strt, updateTitle, moveNext, wit;
wit = 0;
// runs when refresh the page
Breakminute = 25;
time = Breakminute * 60;
moveNext = 100 / time;
// style for study time, short break time and long break time
let setStyle = {
	pomofocus: function () {
		startBtn.textContent = "START";
		mainPage.style.background = "rgb(240, 91, 86)";
		timeSection.style.background = "rgba(255, 255, 255, 0.1)";
		startBtn.style.color = "rgb(240, 91, 86)";
		addTaskBtn.style.background = "rgb(177, 59, 56)";
		Breakminute = 25;
		time = Breakminute * 60;
		clockEl.textContent = "25:00";
		moveNext = 100 / time;
		wit = 0;
		updateTitle = "Time To Work";
		pageTitle.textContent = `25:00 | ${updateTitle}`;
	},
	shrtBrk: function () {
		startBtn.textContent = "START";
		mainPage.style.background = "rgb(76, 166, 169)";
		startBtn.style.color = "rgb(76, 166, 169)";
		timeSection.style.background = "rgba(255, 255, 255, 0.1)";
		addTaskBtn.style.background = "rgb(75, 140, 146)";
		Breakminute = 5;
		time = Breakminute * 60;
		clockEl.textContent = "05:00";
		moveNext = 100 / time;
		wit = 0;
		updateTitle = "Short Break";
		pageTitle.textContent = `05:00 | ${updateTitle}`;
	},
	lngBrk: function () {
		debugger;
		startBtn.textContent = "START";
		mainPage.style.background = "rgb(73, 143, 193)";
		startBtn.style.color = "rgb(73, 143, 193)";
		timeSection.style.background = "rgba(255, 255, 255, 0.1)";
		addTaskBtn.style.background = "rgb(60, 120, 166)";
		Breakminute = 15;
		time = Breakminute * 60;
		clockEl.textContent = "15:00";
		moveNext = 100 / time;
		wit = 0;
		updateTitle = "Long Break";
		pageTitle.textContent = `15:00 | ${updateTitle}`;
	},
};

// for future ;-)
let clickHandlers = {
	start: function () {},
	stop: function () {},
};
let startStop = false;
let clearInt;
// run the function on click but it runs automatically
let runFunc = function () {
	startStop = !startStop;
	if (startStop) {
		clearInt = setInterval(countDown, 1000);
	} else {
		startBtn.textContent = "START";
		clearInterval(clearInt);
	}
};

// countdown function for the timer

function countDown() {
	debugger;
	startBtn.textContent = "STOP";

	minute = Math.floor(time / 60);
	let second = time % 60;

	if (minute < 1) {
		clearInterval((minute = 0));
	}
	var formatNum = ("0" + second).slice(-2);
	var formatNum1 = ("0" + minute).slice(-2);
	clockEl.innerHTML = `${formatNum1}:${formatNum}`;
	//moveNext++;
	wit = wit + moveNext;
	progressBar.style.width = `${wit}%`;

	pageTitle.innerHTML = `${formatNum1}:${formatNum} | ${updateTitle}`;
	time--;
}

// calls functions on click
pomodoro.onclick = setStyle.pomofocus;
shortBreak.onclick = setStyle.shrtBrk;
longBreak.onclick = setStyle.lngBrk;
startBtn.onclick = runFunc;
