const section = document.querySelector("section")
const navLink = document.querySelector("header nav a")
window.onclick=() => {
    section.forEach(sec=>{
        let top=window.scrollY
        let offset=set.offsetTop -150
        let height=sec.offsetHeight;
        let id=sec.getAttribute("id")
        if(top>= offset && top< offset + height){
            navLink.forEach(link=>{
                link.classlist.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
    



let header = document.querySelector("header")
header.classList.toggle("sticky",window.scrollY>100)

menubar.classList.remove('bx-x')
navbar.classList.remove('active')

};

var typed = new Typed('.textline',{
strings:['web Developer..','Blogger...','youtuber...'],
typeSpeed:100,
backSpeed:100,
loop:true
})


// ..........................//..............................//
