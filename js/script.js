let date = new Date()

// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMonth() + 1);
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// rekursiya function

// let x = 1;

// function recursion() {
//     if (x <= 4) {
//         console.log(x++);
//         setTimeout(function () {
//             recursion()
//         }, 1000)
//     }

// }
// recursion()

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

function clock() {
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()
    
    hours.innerHTML = hour < 10 ? '0' + hour : hour
    minutes.innerHTML = min < 10 ? '0' + min : min

    h.style.transform = `rotate(${hour * 30.8}deg)`

    m.style.transform = `rotate(${min * 6}deg)`

    s.style.transform = `rotate(${sec * 6}deg)`

    setTimeout(function () {
        clock()
    }, 1000);

}

clock()


// 

// let tabs_Item = document.querySelectorAll('.tabsLink')

// for (let i = 0; i < tabs_Item; i++) {
//     console.log(tabs_Item[i]);
// }

let listLink = document.querySelectorAll(".tabsItem");
let contentDesc = document.querySelectorAll(".tabsContentItem");

// console.log( listLink);

for (let i = 0; i < listLink.length; i++) {
    // console.log(listLink[i]);

    listLink[i].addEventListener("click", function () {
        // console.log(listLink[i]);
        for (let k = 0; k < listLink.length; k++) {
            listLink[k].classList.remove("active");
            contentDesc[k].classList.remove("active");
        }
        listLink[i].classList.add("active")
        contentDesc[i].classList.add("active")
    })

}

let btn = document.querySelector('.stopwatch__btn') 

let stopHour = document.querySelector('.stopwatch__hours')
let stopMin = document.querySelector('.stopwatch__minutes')
let stopSec = document.querySelector('.stopwatch__seconds')

btn.addEventListener('click', function () {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        let h = 0;
        let m = 0;
        let s = 0;
        function rec() {
            stopSec.innerHTML = s;
            stopMin.innerHTML = m;
            stopHour.innerHTML = h;
            if (s < 59) {
                s++
            } else {
                s = 0
                m++
            }
            if (m == 60) {
                m = 0
                h++
            }
            setTimeout(function () {
                if (btn.innerHTML == 'stop') {
                    rec()
                }
            }, 1000)
        }
        rec()
    } else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
    }
    else {
        btn.innerHTML = 'start'
        stopSec.innerHTML = 0
        stopMin.innerHTML = 0
        stopHour.innerHTML = 0
    }
}) 