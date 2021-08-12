import { paths } from "./path.js";


let click_flag=true;
let user;
let comp;
let main_comp=0;
let main_user=0;
let score='';
const comp_icon=document.querySelector('.computer-icon-cont div');
const player_icon=document.querySelector('.player-icon-cont div');
const score_board_cont=document.querySelector(".score-board-cont");
const player_name_inp=document.querySelector('.player-name-inp');
const player_name_h2=document.querySelector('.player-name-h2');
let name='Player Name';
let cnt=1;
const score_Shower=document.querySelector('.score-shower');
const spanner=score_Shower.querySelectorAll('span');
const res=score_Shower.querySelectorAll('div');
let res_flag=0;
let theme_toggler=document.querySelector('header svg');
let main_score_board=document.querySelector('.main-scorer');
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

function img_updater(){
    for(let i=2;i>=0;i--){
        setTimeout(()=>{
            comp_icon.innerHTML=`${paths[`${i}r`]}`;
            player_icon.innerHTML=`${paths[`${i}`]}`;
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
        player_icon.innerHTML=`${paths[`${a}`]}`;
        comp_icon.innerHTML=`${paths[`${b}r`]}`;
    },1500);
    setTimeout(()=>{
        player_icon.classList.add("svg_comp");
        comp_icon.classList.add("svg_comp");
    },1500);
    setTimeout(()=>{
        player_icon.classList.remove("svg_comp");
        comp_icon.classList.remove("svg_comp");
    },3000);

    if(a==b){
        user++;
        comp++;
    }
    else if(a==0 && b==1){
        comp++;
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
    main_comp+=comp;
    main_user+=user;
}
/*Player Name Toggler */

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

comp=0,user=0;

const imgs=document.querySelectorAll('footer img');
imgs.forEach(data=>{
    data.addEventListener("click",()=>{
        if(!click_flag) return;
        click_flag=false;
        user=0;
        comp=0;
        gamePlay(data.dataset.value);
        if(cnt<=6){
        cnt++;

        }
        else{
            comp=0;
            user=0;
            spanner[0].innerText=`${main_user*10}`;
            spanner[1].innerText=`${main_comp*10}`;
            setTimeout(()=>{
                main_score_board.innerHTML=`<div class="winner">${main_user*10}</div>
                <div class="loser">${main_comp*10}</div>`;
            },3000);
            if(main_user>main_comp){
                res[2].innerText="User Wins"
            }
            else if(main_comp>main_user){
                res[2].innerText="Computer Wins";
            }
            else{
                res[2].innerText="Match Draw";
            }
            setTimeout(()=>{
                scorer();
            },3500);
            main_comp=0;
            main_user=0;
            cnt=1;
            score='';
        }
        if(user===0 && comp===0){
            score='';
        }
        else if(user>comp){
            score+=`<div class="score"><span class="winner">1</span><span class="loser">0</span></div>`;
        }
        else if(comp>user){
            score+=`<div class="score"><span class="loser">0</span><span class="winner">1</span></div>`;
        }
        else{
            score+=`<div class="score"><span class="winner">1</span><span class="winner">1</span></div>`;
        }
        setTimeout(()=>{
            score_board_cont.innerHTML=score;
            main_score_board.innerHTML=`<div class="winner">${main_user*10}</div>
            <div class="loser">${main_comp*10}</div>`;
            click_flag=true;
        },3000);
    });
});

function scorer(){
        score_Shower.classList.toggle('none');
    setTimeout(()=>{
         score_Shower.classList.add('none');
    },2000);
    score_board_cont.innerHTML='';
}

let toggler=1;
theme_toggler.addEventListener("click",()=>{
    if(toggler===1){
        document.documentElement.style.setProperty("--sec-color",'#f7fff7');
        document.documentElement.style.setProperty("--main-color","#1a535c");
        toggler=0;
    }
    else{
        document.documentElement.style.setProperty("--sec-color",'#1a535c');
        document.documentElement.style.setProperty("--main-color","#f7fff7");
        toggler=1;
    }
})