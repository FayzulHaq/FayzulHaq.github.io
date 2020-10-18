const angka1 = document.getElementById('bil1');
const angka2 = document.getElementById('bil2');
const operator = document.getElementById('operator');
const hasil= document.getElementById('hasil');
var lates = document.querySelector('.lates');
var nilai = document.querySelector('.is');
const error_pop = document.querySelector('.error');
const container = document.querySelector('.container');
const btn_container = document.querySelector('.btn-container');
const title = document.querySelector('.title'); 
const reset_btn = document.querySelector('.reset'); 

nilai.addEventListener('click',function(e){
    e.preventDefault();
    if(isNaN(angka1.value) || isNaN(angka2.value)){
        error_in();
        setTimeout(error_out,3000);
    }
 
    else{
        let total;
        total = eval(angka1.value + operator.value + angka2.value);
        hasil.innerText = total;
        lates.innerText=angka1.value + operator.value + angka2.value;
    }
})

function error_in(){
    error_pop.style.display = 'block';
    container.classList.add('blur');
    btn_container.classList.add('blur');
    title.classList.add('blur');
}

function error_out(){
    error_pop.style.display = 'none';
    container.classList.remove('blur');
    btn_container.classList.remove('blur');
    title.classList.remove('blur');
}

reset_btn.addEventListener('click',function(e){
    e.preventDefault();
    angka1.value = '';
    angka2.value = '';
    hasil.innerText= '';
    lates.innerHTML = 'Hasil';

})
