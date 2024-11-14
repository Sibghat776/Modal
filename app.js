let modal = document.createElement('div');
let mybg = document.querySelector(".background")
function khulJaSimSim() {
    console.log('Chala');
    modal = document.createElement('div')
    mybg.appendChild(modal)
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modalContent">
        <div class="close-icon">
            <i class="fa-regular fa-circle-xmark" onclick="bandHoja()"></i>
        </div>
        <div class="center">
            <h1>Welcome To My Website</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nobis delectus provident fugiat necessitatibus dolorem maxime sit molestias qui asperiores, corrupti, doloribus neque. Qui cum blanditiis eos similique architecto doloremque.</p>
        </div>
    <div/>`
}

function bandHoja() {
    console.log("Chala");
    modal.style.display = 'none'
}