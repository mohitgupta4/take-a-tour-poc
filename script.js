var counter = 0;
var tourData = [{
    title: 'Hello Buddy!',
    text: 'I am first div',
    targetId: "first"
},
{
    title: 'Hello Buddy!',
    text: 'I am second div',
    targetId: "second"
}, {
    title: 'Hello Buddy!',
    text: 'I am third div',
    targetId: "third"
}, {
    title: 'Hello Buddy!',
    text: 'I am fourth div',
    targetId: "fourth"
}];


function initTour(data) {
    var previous = document.getElementById("previous");
    var next = document.getElementById("next");
    showStep(data);

    previous.onclick = function (e) { previousStep(data); };
    next.onclick = function (e) { nextStep(data); };
}

function showStep(data) {
    var tooltip = document.getElementById("tourTooltip");
    var header = document.getElementById("header");
    var content = document.getElementById("content");
    var footer = document.getElementById("footer");
    var overlay = document.getElementById("overlay");
    var targetElement = document.getElementById(data[counter].targetId);

    header.innerHTML = data[counter].title;
    content.innerHTML = data[counter].text;
    overlay.classList.add("d-block");
    tooltip.classList.add("d-inline-block");
    tooltip.style.top = targetElement.getBoundingClientRect().bottom + 'px';
    tooltip.style.left = targetElement.getBoundingClientRect().left + 'px';

}

function closeTour() {
    var overlay = document.getElementById("overlay");
    var tooltip = document.getElementById("tourTooltip");

    overlay.classList.remove("d-block");
    tooltip.classList.remove("d-inline-block");
}

function nextStep(data) {
    counter = counter+1;
    if (counter < 0 || counter > data.length-1) {
        closeTour();
    }
    else {
        showStep(data);
    }
}

function previousStep(data) {
    counter = counter-1;
    if (counter < 0 || counter > data.length-1) {
        closeTour();
    }
    else {
        showStep(data);
    }
}

initTour(tourData);