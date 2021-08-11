function number_ret(a){
    if(a=="rock"){
        return 0;
    }
    else if(a=="paper"){
        return 1;
    }
    else if(a=="scissor"){
        return 2;
    }
}
let user;
let comp;
const comp_icon=document.querySelector('.computer-icon-cont');
const player_icon=document.querySelector('.player-icon-cont');
function img_updater(){
    for(let i=2;i>=0;i--){
        setTimeout(()=>{
            comp_icon.innerHTML=`<img src="./assets/${i}r.svg" alt="">`;
            player_icon.innerHTML=`<img src="./assets/${i}.svg" alt="">`;
        },i*100);
    }
}
function gamePlay(a1){
    let a=number_ret(a1);
    let b=Math.floor(Math.random()*3);
    for(let i=0;i<=4;i++){
    setTimeout(()=>{
        img_updater();
    },i*300);
    }
    setTimeout(()=>{
        player_icon.innerHTML=`<img src="./assets/${a}.svg" alt="">`;
        comp_icon.innerHTML=`<img src="./assets/${b}r.svg" alt="">`;
    },1500);
    if(a==b){
        user++;
        comp++;
    }
    else if(a==0 && b==1){
        comp++
    }
    else if(a==0 && b==2){
        user++;
    }
    else if(a==1 && b==0){
        user++;
    }
    else if(a==1 && b==2){
        comp++;
    }
    else if(a==2 && b==0){
        comp++;
    }
    else if(a==2 && b==1){
        user++;
    }
}
/*Player Name Toggler */
const player_name_inp=document.querySelector('.player-name-inp');
const player_name_h2=document.querySelector('.player-name-h2');
let name='Player Name';
player_name_inp.addEventListener("input",()=>{
    if(player_name_inp.value.length<=10){
        name=player_name_inp.value;
    }
    else{
        player_name_inp.value=name;
    }
})
player_name_h2.addEventListener("click",()=>{
    player_name_h2.classList.toggle('none');
    player_name_inp.classList.toggle('none');
    player_name_inp.focus();
    PosEnd(player_name_inp);
    if(player_name_inp.value===' '){
        player_name_inp.value="Player Name";
    }
});
window.addEventListener("click",(e)=>{
    if(!e.target.matches('h2') && !e.target.matches('input')){
    player_name_h2.classList.remove('none');
    player_name_inp.classList.add('none');
    if(name.trim()===''){
        player_name_h2.textContent='Player Name';
    }
    else{
        player_name_h2.textContent=name;
    }
    }
});
/********************************************/
function PosEnd(end) {
    var len = end.value.length;

    if (end.setSelectionRange) {
        end.focus();
        end.setSelectionRange(len, len);
    } else if (end.createTextRange) {
        var t = end.createTextRange();
        t.collapse(true);
        t.moveEnd('character', len);
        t.moveStart('character', len);
        t.select();
    }
}
/********************************************/
let cnt=1;
comp=0,user=0;
const imgs=document.querySelectorAll('footer img');
imgs.forEach(data=>{
    if(cnt<=6){
    data.addEventListener("click",()=>{
        gamePlay(data.dataset.value);
        cnt++;
        console.log(user,comp);
    });
    }
    else{
        cnt=1;
    }

})