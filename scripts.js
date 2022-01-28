const myForm=document.querySelector('#myForm');
const myInput=document.querySelector('#myInput');
const myUl=document.querySelector('.myUl');


myForm.addEventListener('submit',function(event){
    event.preventDefault();
    if(!myInput.value){
        return;
    }
    const myTextNode=document.createTextNode(myInput.value);
    const myLi=document.createElement('li');
    myLi.classList.add('hey');
    myLi.appendChild(myTextNode);
    myLi.addEventListener('click',function(){
        this.classList.toggle('selected');
    });
    myUl.appendChild(myLi);
    myInput.value='';
});


const myLi=document.querySelector('li');

