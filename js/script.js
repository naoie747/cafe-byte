const agora = new Date();
const hora = agora.getHours();
const diaDaSemana = agora.getDay();

console.log('Agora são ' + hora + ' horas. Dia da semana: ' + diaDaSemana);

document.querySelector('#saudacao').textContent = saudacao(hora);

function saudacao(h){
    if (h<12){
        return 'Bom dia! ☀️';
    }
    else if (h<18){
        return 'Boa tarde! 🌤️';
    }
    else {
        return 'Boa noite! 🌑';
    }
}

document.querySelector('#saudacao').textContent = saudacao(hora);

function estaAberto(dia,h){
    if (dia===0){
        return false;
    }
    else if (dia ===6){
        return h >= 8 && h < 18;
    }
    else {
        return h >= 7 && h < 20;
    }
}

const avisoStatus = document.querySelector('#status');

if (estaAberto(diaDaSemana, hora)) {
    avisoStatus.textContent = '🟢 Estamos Abertos agora!';
    avisoStatus.classList.add('aberto-agora'); 
} else {
    avisoStatus.textContent = '🔴 Estamos fechados agora. Volte mais tarde';
    avisoStatus.classList.add('fechado-agora');
}

const botaoTema=document.querySelector('#botao-tema');

function atualizarIconeTema(){
    if (document.body.classList.contains('escuro')){
        botaoTema.textContent = '☀️';
    } else {
        botaoTema.textContent = '🌑'
    }
}

botaoTema.addEventListener('click',function (){
    document.body.classList.toggle('escuro');
    atualizarIconeTema();
});

const botaoMenu = document.querySelector('#botao-menu');
const menu = document.querySelector('#menu');

botaoMenu.addEventListener('click',function (){
    menu.classList.toggle('mostrar');
});

menu.addEventListener('click', function (){
    menu.classList.remove('mostrar');
});