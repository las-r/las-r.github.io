async function loadRepos() {
    const username = "las-r";
    let allRepos = [];
    
    let page = 1;
    let keepFetching = true;
    while (keepFetching) {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&page=${page}`);
        const repos = await res.json();
        
        if (repos.length === 0) {
            keepFetching = false;
        } else {
            allRepos = allRepos.concat(repos);
            page++;
        }
    }

    const filtered = allRepos.filter(repo => !repo.fork && !repo.archived);
    filtered.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    
    const container = document.getElementById("projects");
    const maxRepos = 10;

    filtered.slice(0, maxRepos).forEach(repo => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3><a href="${repo.homepage ? repo.homepage : repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || "No description provided."}</p>
            <p class="links">
                <a href="${repo.html_url}" target="_blank">Source</a>
                ${repo.homepage ? ` | <a href="${repo.homepage}" target="_blank">Webpage</a>` : ""}
            </p>
        `;

        container.appendChild(div);
    });
}

loadRepos();
