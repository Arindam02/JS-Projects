let male = document.getElementById('male');
let female = document.getElementById('female');
let speedmeter = document.getElementsByClassName('speedmeter');
let needle = document.getElementsByClassName('needle')
let weight = document.getElementById('weight')
let height = document.getElementById('height')
let male_btn = document.getElementById('male_btn')
let female_btn = document.getElementById('female_btn')
let male_value = document.getElementById('male_value')
let female_value = document.getElementById('female_value')
let male_image = document.getElementById('male_img')
let female_image = document.getElementById('female_img')


const male_fun = ()=>{

    let c = weight.value / ((height.value/100)*2);
    male_value.innerText = parseInt(c) + ".00";
    let needle_value = -90 + parseInt(c)* 3.6;
    if (needle > 50){
        needle_value = 50;
    } else if(needle <= -1){
        needle_value = 1;
    }

    needle[0].style.transform = `rotate(${needle_value}deg)`
    let border = '13px solid #000'

    if (parseInt(c) >= 18 && parseInt(c) <= 25){
        border = "13px solid greenYellow"
        male_btn.innerText = 'Healthy'
        male_btn.style.background = "greenyellow"
        male_image.src = "image/male.png";
    }else if (parseInt(c) > 25 && parseInt(c) <= 29){
        border = "13px solid orange"
        male_btn.innerText = 'Over-Weight'
        male_btn.style.background = "orange"
        male_image.src = "image/male_overweight.png";
    }
    else if (29 < parseInt(c)){
        border = "13px solid red"
        male_btn.innerText = 'Obesity'
        male_btn.style.background = "red"
        male_image.src = "image/male_obesity.png";
    }
    else{
        border = "13px solid Yellow"
        male_btn.innerText = 'Under-Weight'
        male_btn.style.background = "yellow"
        male_image.src = "image/male_underweight.png";
    }

    speedmeter[0].style.borderTop = border;
    speedmeter[0].style.borderLeft = border;
}

male.addEventListener("click",()=>{
    male_fun();
})




const female_fun = ()=>{

    let c = weight.value / ((height.value/100)*2);
    female_value.innerText = parseInt(c) + ".00";
    let needle_value = -90 + parseInt(c)* 3.6;
    if (needle > 50){
        needle_value = 50;
    } else if(needle <= -1){
        needle_value = 1;
    }

    needle[1].style.transform = `rotate(${needle_value}deg)`
    let border = '13px solid #000'

    if (parseInt(c) >= 18 && parseInt(c) <= 25){
        border = "13px solid greenYellow"
        female_btn.innerText = 'Healthy'
        female_btn.style.background = "greenyellow"
        female_image.src = "image/female.png";
    }else if (parseInt(c) > 25 && parseInt(c) <= 29){
        border = "13px solid orange"
        female_btn.innerText = 'Over-Weight'
        female_btn.style.background = "orange"
        female_image.src = "image/female_overweight.png";
    }
    else if (29 < parseInt(c)){
        border = "13px solid red"
        female_btn.innerText = 'Obesity'
        female_btn.style.background = "red"
        female_image.src = "image/female_obesity.png";
    }else{
        border = "13px solid Yellow"
        female_btn.innerText = 'Under-Weight'
        female_btn.style.background = "yellow"
        female_image.src = "image/female_underweight.png";
    }

    speedmeter[1].style.borderTop = border;
    speedmeter[1].style.borderLeft = border;
}



female.addEventListener("click",()=>{
    female_fun();
})
