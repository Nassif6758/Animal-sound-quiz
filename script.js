const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const a4 = document.querySelector(".a4");
const a5 = document.querySelector(".a5");
const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");
const q5 = document.querySelector(".q5");
const r1 = document.querySelector(".r1");
const r2 = document.querySelector(".r2");
const r3 = document.querySelector(".r3");
const r4 = document.querySelector(".r4");
const r5 = document.querySelector(".r5");
const pevoice= document.querySelector(".evoice");
const ppvoice = document.querySelector(".pvoice");
const psvoice = document.querySelector(".svoice");
const pmvoice = document.querySelector(".mvoice");
const plvoice = document.querySelector(".lvoice");
const result = document.querySelector(".result");
const fpause1=document.querySelector(".stop1");
const fpause2=document.querySelector(".stop2");
const fpause3=document.querySelector(".stop3");
const fpause4=document.querySelector(".stop4");
const fpause5=document.querySelector(".stop5");

function fevoice() {
    pevoice.play();
}

function fpvoice() {
    ppvoice.play();
}

function fsvoice() {
    psvoice.play();
}

function fmvoice() {
    pmvoice.play();
}

function flvoice() {
    plvoice.play();
}
function fstop1(){
    pevoice.pause();
}

function fstop2(){
     ppvoice.pause();
}

function fstop3(){
    psvoice.pause();
}

function fstop4(){
    pmvoice.pause();
}

function fstop5(){
    plvoice.pause();
}

function answer() {
    if (a1.value.toLowerCase() === "elephant") {
        r1.innerText = "Your answer is correct";
    } else {
        r1.innerText = "Your answer is wrong";
    }
    if (a2.value.toLowerCase() === "parrot") {
        r2.innerText = "Your answer is correct";
    } else {
        r2.innerText = "Your answer is wrong";
    }
    if (a3.value.toLowerCase() === "snake") {
        r3.innerText = "Your answer is correct";
    } else {
        r3.innerText = "Your answer is wrong";
    }
    if (a4.value.toLowerCase() === "monkey") {
        r4.innerText = "Your answer is correct";
    } else {
        r4.innerText = "Your answer is wrong";
    }
    if (a5.value.toLowerCase() === "lion") {
        r5.innerText = "Your answer is correct";
    } else {
        r5.innerText = "Your answer is wrong";
    }
}

q1.onclick = fevoice;
q2.onclick = fpvoice;
q3.onclick = fsvoice;
q4.onclick = fmvoice;
q5.onclick = flvoice;
result.onclick = answer;
fpause1.onclick=fstop1;
fpause2.onclick=fstop2;
fpause3.onclick=fstop3;
fpause4.onclick=fstop4;
fpause5.onclick=fstop5;
