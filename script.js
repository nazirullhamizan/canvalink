  const canvaLinks = [
  {
    title: "Marketing Poster",
    url: "https://www.canva.com/"
  },
  {
    title: "Business Presentation",
    url: "https://www.canva.com/"
  }
];

const linksDiv = document.getElementById("links");

function renderLinks(data) {
    linksDiv.innerHTML = "";

    data.forEach(item => {
        linksDiv.innerHTML += `
            <div class="card">
                <h3>${item.title}</h3>
                <a href="${item.url}" target="_blank">
                    Open Canva
                </a>
            </div>
        `;
    });
}

renderLinks(canvaLinks);

document
.getElementById("search")
.addEventListener("input", e => {

    const keyword = e.target.value.toLowerCase();

    const filtered = canvaLinks.filter(link =>
        link.title.toLowerCase().includes(keyword)
    );

    renderLinks(filtered);
});
