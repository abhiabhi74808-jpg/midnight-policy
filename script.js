function updateClock() {
    const now = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    document.getElementById("clock").innerHTML =
        now.toLocaleDateString("en-GB", options) +
        " | " +
        now.toLocaleTimeString("en-GB");
}

setInterval(updateClock, 1000);
updateClock();

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

document.getElementById("searchInput").addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        searchNews();
    }

});

function toggleMenu(){
    document.getElementById("navbar").classList.toggle("show");
}
