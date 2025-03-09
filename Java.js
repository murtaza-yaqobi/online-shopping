const bar = document.getElementById("bar");
const nav = document.getElementById("nav");
const times = document.getElementById("times");
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    });
}
if(times){
    times.addEventListener('click',()=>{
        nav.classList.remove('active')
    });
}
const mainImage = document.getElementById("mainImage")
const smallimg = document.getElementsByClassName("small-img")
smallimg[0].onclick = ()=>{
    mainImage.src = smallimg[0].src;
}
smallimg[1].onclick = ()=>{
    mainImage.src = smallimg[1].src;
}
smallimg[2].onclick = ()=>{
    mainImage.src = smallimg[2].src;
}
smallimg[3].onclick = ()=>{
    mainImage.src = smallimg[3].src;
}