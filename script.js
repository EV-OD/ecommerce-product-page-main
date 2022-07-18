
const sidebarFull = document.querySelector(".sidebar-full")
const cartArea = document.querySelector(".cart-area")

async function handleClose(){
    sidebarFull.style.backgroundColor = "transparent"

    sidebarFull.classList.toggle("sidebar-full-open")
}
async function handleOpen(){
    sidebarFull.classList.toggle("sidebar-full-open")
    await sleep(200)
    sidebarFull.style.backgroundColor = "rgba(14, 14, 14, 0.498)"

}
async function sleep(ms){
    return await new Promise((res)=> setTimeout(res,ms))
}
async function handleCart(){
    cartArea.classList.toggle("cart-area-active")
}

// document.addEventListener("click",(e)=>{
//     const cart = document.querySelector(".cart")
//     const cart_svg = document.querySelector(".cart svg")
//     if(e.target != cart && e.target != cart_svg){
//         cartArea.classList.remove("cart-area-active")

//     }
// })
