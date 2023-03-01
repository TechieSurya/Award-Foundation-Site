let videoBtn=document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('src');
        document.querySelector('#video-slider').src=src;
    });
});

window.addEventListener("load", function(){
  setTimeout(
    function open(event){
        document.querySelector(".popup").style.display="block";
    },
    1000
  )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").
    style.display="none";
});
