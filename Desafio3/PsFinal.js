var btn1 = document.querySelector('#educa');
var div1 = document.querySelector('#p1');
var btn2 = document.querySelector('#competencia');
var div2 = document.querySelector('#p2'); 
var btn3 = document.querySelector('#soft');
var div3 = document.querySelector('#p3');

btn1.addEventListener('click', function(){
    if (div1.style.display === 'block'){
        div1.style.display = 'none';
    }else{
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
    }
})
btn2.addEventListener('click', function(){
    if (div2.style.display === 'block'){
        div2.style.display = 'none';
    }else{
        div2.style.display = 'block';
        div1.style.display = 'none';
        div3.style.display = 'none';
    }
})
btn3.addEventListener('click', function(){
    if (div3.style.display === 'block'){
        div3.style.display = 'none';
    }else{
        div3.style.display = 'block';
        div2.style.display = 'none';
        div1.style.display = 'none';
    }
});