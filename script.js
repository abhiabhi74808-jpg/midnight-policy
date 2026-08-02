// ===============================
// Midnight Policy
// Version 2.0
// Developed by BG
// Sprint 3
// ===============================

// ===============================
// Search Function
// ===============================


function searchNews() {

    let search =document.getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

        if(search === ""){
    alert("Please enter something to search.");
    return;
}

    if (search.includes("india")) {
        window.location.href = "india.html";
    }

    else if (search.includes("world")) {
        window.location.href = "world.html";
    }

    else if (search.includes("economy")) {
        window.location.href = "economy.html";
    }

    else if (search.includes("defence")) {
        window.location.href = "defence.html";
    }

    else if (search.includes("research")) {
        window.location.href = "research.html";
    }

    else if (search.includes("about")) {
        window.location.href = "about.html";
    }

    else if (search.includes("contact")) {
        window.location.href = "contact.html";
    }

    else {
        alert("No news found.\nTry: India, World, Economy, Defence or Research.");
    }

}

// ===============================
// Search with Enter Key
// ===============================

document.getElementById("searchInput").addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        searchNews();
    }

});

// ===============================
// Mobile Menu
// ===============================

function toggleMenu(){
    document.getElementById("navbar").classList.toggle("show");
}

// ===============================
// Breaking News
// ===============================

const headlines = [

"ISRO announces new lunar mission",

"Global markets close higher after economic data",

"New Defence Technology unveiled",

"Artificial Intelligence transforms industries",

"India strengthens semiconductor mission"

];

const ticker = document.getElementById("tickerContent");

headlines.forEach(news =>{

const span=document.createElement("span");

span.textContent=news;

ticker.appendChild(span);

});

