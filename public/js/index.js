const container1 = document.getElementsByClassName('container1');
const container2 = document.getElementsByClassName('container2');
const container3 = document.getElementsByClassName('container3');
document.querySelector('#btn1').onclick = function left() {
    if (document.querySelector('#btn1').style.left != 92 + "px") {
        document.querySelector('.container1').style.width = "7%";
        document.querySelector('.container1').style.backgroundColor = "#3f3f3f";
        document.querySelector('.container2').style.width = "59.5%";
        document.querySelector('.container3').style.width = "33.5%";
        document.querySelector('#btn1').style.left = "92px";
        // document.querySelector('.spanH').style.display = "none";
        document.querySelectorAll('.tnt').forEach(function (element) {
            element.style.marginBottom = '0px';
            element.style.marginTop = '20px';
        });
        anime.timeline({
            loop: false
        })
            .add({
                targets: "#btn1",
                rotate: [0, 180],
                duration: 600,
                easeing: "easeInOutExpo",
            })
        anime.timeline({
            loop: false
        })
            .add({
                targets: ".spanH",
                opacity: [1, 0],
                duration: 600,
                scale: [1, 0],
                easeing: "easeInOutExpo",
            })
        anime.timeline({
            loop: false
        })
            .add({
                targets: ".spanC",
                translateX: [0, -100],
                translateY: [0, 40],
                scale: [1, 0],
                opacity: [1, 0],
                duration: 2000,
                easeing: "easeInOutQuad",

            })
        anime.timeline({
            loop: false
        })
            .add({
                targets: ".spanI",
                translateX: [0, 8],
                translateY: [0, -20],
                scale: [1, 1.4],
                delay: 100,
                duration: 1000,
                easeing: "easeInOutQuad",

            })
    }
    else {
        document.querySelector('.container1').style.width = "20%";
        document.querySelector('.container2').style.width = "53%";
        document.querySelector('.container3').style.width = "27%";
        document.querySelector('#btn1').style.left = "291px";
        document.querySelector('.spanH').style.display = "block";
        document.querySelector('.container1').style.backgroundColor = "#000000e3";
        document.querySelectorAll('.tnt').forEach(function (element) {
            element.style.marginBottom = '0px';
            element.style.marginTop = '0px';
        });
        anime.timeline({
            loop: false
        })
            .add({
                targets: "#btn1",
                rotate: [180, 0],
                duration: 600,
                easeing: "easeInOutSine",
            })
        anime.timeline({
            loop: false
        })
            .add({
                targets: ".spanH",
                opacity: [0, 1],
                duration: 600,
                scale: [0, 1],
                easeing: "easeInOutExpo",
            })
        anime.timeline({
            loop: false
        })
            .add({
                targets: ".spanC",
                translateX: [-100, 0],
                translateY: [40, 0],
                scale: [0, 1],
                opacity: [0, 1],
                duration: 1500,
                easeing: "easeInOutQuad",
            })
        anime.timeline({
            loop: false
        })
            .add({
                targets: ".spanI",
                translateX: [8, 0],
                translateY: [-20, 0],
                scale: [1.4, 1],
                duration: 1000,
                easeing: "easeInOutQuad",
            })
    }
}