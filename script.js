let sonucTxt=document.querySelector('.sonuc');
let esittirBtn=document.querySelector('.esittir');
let temizleBtn= document.querySelector('.temizle');
let operatorBtn=document.querySelectorAll('.operator');
let numberBtns= document.querySelectorAll('.number');

numberBtns.forEach(function (element) {
    element.addEventListener("click", function (e) {
        if(sonucTxt.value=="0"){
            sonucTxt.value="";
        }
        sonucTxt.value += this.textContent;
    });

});

operatorBtn.forEach(function(element){
    element.addEventListener('click',function(e) {
        sonucTxt.value+=this.textContent;

    });
    

});

temizleBtn.addEventListener('click',function(e){
    sonucTxt.value='0';
    location.reload(); //Sayfa yenilemek için kullanılır

});


esittirBtn.addEventListener('click',function(e){
    sonucTxt.value=eval(sonucTxt.value); //eval işevi

   
})

