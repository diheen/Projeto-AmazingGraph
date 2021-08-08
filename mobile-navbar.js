class MobileNavbar{
    constructor(){
        this.menuMobile = document.querySelector(".menu__mobile");
        this.navList = document.querySelector(".cabecalho__lista");
        this.navLinks = document.querySelectorAll(".cabecalho__lista___item");
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    
    animateLinks(){
        this.navLinks.forEach((link) =>{
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`)
        })
    }
    
    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();

    }

    addClickEvent(){
        this.menuMobile.addEventListener("click", () =>{
        this.handleClick();
    })
}

    init(){
        if(this.menuMobile){
            this.addClickEvent();
        }
        return this;
    }
}


const mobileNavbar = new MobileNavbar(
    ".menu__mobile",
    ".cabecalho__lista",
    ".cabecalho__lista___item",
)

mobileNavbar.init();