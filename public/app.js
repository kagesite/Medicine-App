const container = document.getElementById("drugDetails");

function displayData() {
    const searchDrugName = document.getElementById("searchInput").value;
    fetch("http://localhost:3000/drugs")
        .then(response => response.json())
        .then(data => {
            container.style.display = 'block';
            container.innerHTML = "";

            const drug = data.drugs.find(d => d.name.toLowerCase() === searchDrugName.toLowerCase());

            if (drug) {
                const drugInfo = `
                    <h2>${drug.name}</h2>
                    <div class="lists">
                        <h3 class="pros-head">Pros:</h3>
                        <ul>${drug.pros.map(pro => `<li>${pro}</li>`).join("")}</ul>
                        <h3 class="cons-head">Cons:</h3>
                        <ul>${drug.cons.map(con => `<li>${con}</li>`).join("")}</ul>
                        <h3 class="warning-head">Do Not Mix With:</h3>
                        <ul>${drug.avoid.map(med => `<li>${med}</li>`).join("")}</ul>
                    </div>
                    <a href="#" class="sources-btn"id="sourcesBtn">Sources</a>
                `;
                container.innerHTML = drugInfo;

                const sourcesBtn = document.getElementById('sourcesBtn');
                sourcesBtn.addEventListener("click", () => {
                    getSourcesData(drug.name);
                });
            } else {
                container.innerHTML = "<p>No drug found with that name</p>";
            }

            document.getElementById("searchInput").value = "";
        })
        .catch(error => console.error("Error fetching data:", error));
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", displayData);

function getSourcesData(drugName) {
    // const searchDrugName = document.getElementById("searchInput").value;

    fetch('http://localhost:3000/sources')
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";

            const sources = data.drugs.find(d => d.name.toLowerCase() === drugName.toLowerCase());

            if (sources) {
                const sourcesInfo = `
                    <h2>Sources:</h2>
                    <ul class="sources-list">${sources.sources.map(source => `<li><a href="${source}" target="_blank">${source}</a></li>`).join("")}</ul>
                `;
                container.innerHTML = sourcesInfo;
            } else {
                container.innerHTML = "<p>No sources found for that drug!</p>";
            }
        })
        .catch(error => console.error("Error fetching sources:", error));
}

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        displayData(); // Trigger search when Enter is pressed
    }
});
