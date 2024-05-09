gsap.set('.cursor',{xPrercent: -50,yPercent: -50});
let cursor = document.querySelector('.cursor');
let qrCursor = document.querySelector('.qr-cursor');
let QrSection = document.querySelector('.qr-code');
let mouseX;
let mouseY;
window.addEventListener('mousemove', e=>{
    mouseX = e.clientX-250;
    mouseY = e.clientY-250;
})

QrSection.addEventListener('mouseenter',()=>{
    gsap.to(qrCursor,0.5,{
        scale:1,
        opacity:1,
        top:'50',
        left:'50',
    })
})
QrSection.addEventListener('mousemove',()=>{
    gsap.to(qrCursor,0.5,{
        x: mouseX,
        y: mouseY
    })
})
QrSection.addEventListener('mouseleave',()=>{
    gsap.to(qrCursor,0.5,{
        scale:0,
        opacity:0,
        backgroundColor:"#fff6e0",
    })
})

