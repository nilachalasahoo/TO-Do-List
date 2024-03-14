const add=document.querySelector('.btn-add');
const inp=document.querySelector('.input');
const ul=document.querySelector('ul');





add.addEventListener('click',(event)=>{
    let x=inp.value;
    inp.value="";
    for(i of x){
        if(i===' ')
            x=x.substring(1);
    }
    if(x!=""){
        const li=document.createElement('li');
        li.innerHTML=x;
        inp.value='';
        const span=document.createElement('span');
        span.innerHTML='&#10006;';
        li.append(span);
        ul.append(li);
        save();
    }
})

ul.addEventListener('click',(event)=>{
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked');
    }else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
    }
    save();
},false);

function save(){
    localStorage.setItem("data",ul.innerHTML);
}
ul.innerHTML=localStorage.getItem("data");