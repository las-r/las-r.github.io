function ohYeah() {
    const mainTitle = document.getElementById("main-title");
    if (!mainTitle) return;

    const date = new Date();
    const m = date.getMonth();
    const d = date.getDate();
    const y = date.getFullYear();

    if (m === 10 && d === 10) {
        mainTitle.textContent = "🎉 las_r 🎉";

        const age = y - 2011;
        const l = age % 10;
        const lt = age % 100;
        ord = "th"
        if (lt < 11 || lt > 13) { 
            ord = ["th", "st", "nd", "rd"][l] || "th";
        }
        console.log(`It's my ${age}${ord} birthday!`);
    } else {
        console.log(`What are you looking for?`);
    }
}

async function loadRepos() {
    const username = "las-r";
    const container = document.getElementById("projects");

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);

        if (!response.ok) {
            throw new Error(`GitHub returned ${response.status}`);
        }

        const repos = await response.json();
        const filtered = repos
            .filter(repo => !repo.fork && !repo.archived)
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

        filtered.slice(0, 10).forEach(repo => {
            const div = document.createElement("article");
            div.className = "project";

            const title = document.createElement("h3");
            const titleLink = document.createElement("a");
            titleLink.href = repo.homepage || repo.html_url;
            titleLink.target = "_blank";
            titleLink.rel = "noopener noreferrer";
            titleLink.textContent = repo.name;
            title.appendChild(titleLink);

            const description = document.createElement("p");
            description.textContent = repo.description || "No description provided.";

            const links = document.createElement("p");
            links.className = "links";

            const source = document.createElement("a");
            source.href = repo.html_url;
            source.target = "_blank";
            source.rel = "noopener noreferrer";
            source.textContent = "Source";
            links.appendChild(source);

            if (repo.homepage) {
                const webpage = document.createElement("a");
                webpage.href = repo.homepage;
                webpage.target = "_blank";
                webpage.rel = "noopener noreferrer";
                webpage.textContent = "Webpage";
                links.append(
                    document.createTextNode(" / "),
                    webpage
                );
            }

            div.append(title, description, links);
            container.appendChild(div);
        });

        if (filtered.length === 0) {
            container.textContent = "No projects to show right now.";
        }
    } catch (error) {
        container.textContent = "Couldn't load projects right now. Find them on GitHub instead.";
    }
}

ohYeah();
loadRepos();