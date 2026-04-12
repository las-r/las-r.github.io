async function loadRepos() {
    const username = "las-r";
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await res.json();
    const filtered = repos.filter(repo => !repo.fork && !repo.archived);
    filtered.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    const container = document.getElementById("projects");
    const maxRepos = 10;

    filtered.slice(0, maxRepos).forEach(filtered => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3><a href="${filtered.html_url}" target="_blank">${filtered.name}</a></h3>
            <p>${filtered.description || "No description provided."}</p>
            <p class="links">
                <a href="${filtered.html_url}" target="_blank">Source</a>
                ${filtered.homepage ? ` | <a href="${filtered.homepage}" target="_blank">Webpage</a>` : ""}
            </p>
        `;

        container.appendChild(div);
    });
}

loadRepos();
