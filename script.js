function klik(x){
    x.classList.toggle("change")
};

const ambil = document.querySelector('.iconMenu');
var dd = document.querySelector('.dropdown')

ambil.addEventListener('click', function(){
    dd.classList.toggle('show');
})
