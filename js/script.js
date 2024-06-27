const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

document.querySelector(".theme-toggle").addEventListener("click",() => {
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set");
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass();
}


let lastChecked = null; // Variable para almacenar el último radio button seleccionado

    function toggleRadio(radio) {
        if (radio === lastChecked) {
            radio.checked = false; // Deselecciona el radio button
            lastChecked = null; // Resetea la variable lastChecked
        } else {
            lastChecked = radio; // Actualiza lastChecked con el radio button actualmente seleccionado
        }
    }
