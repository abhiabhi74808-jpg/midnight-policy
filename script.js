document.getElementById("btn").addEventListener("click",function () {
    alert("Welcome to Midnight Policy!");
});

function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"
        }) +
        " | " +
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

function searchNews() {

    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search === "india") {
        window.location.href = "india.html";
    }

    else if (search === "world") {
        window.location.href = "world.html";
    }

    else if (search === "economy") {
        window.location.href = "economy.html";
    }

    else if (search === "defence") {
        window.location.href = "defence.html";
    }

    else {
        alert("No news found.");
    }

}