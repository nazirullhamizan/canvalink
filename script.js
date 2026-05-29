const canvaLinks = [
  { title: "Ticket", url: "https://canva.link/r1drpbjytkwm3c2" },
  { title: "Voucher", url: "https://canva.link/65ugst1xwn4m1iv" },
  { title: "Gift Labelling", url: "https://canva.link/fvssqf9bwbbrgkv" },
  { title: "Hamper Label CNY", url: "https://canva.link/e94uf259f00tc20" },
  { title: "Payment Method Poster", url: "https://canva.link/gool9a3rasamcgu" },
  { title: "Certificate", url: "https://canva.link/3n5ycm81p4y1f1y" },
  { title: "Table Tent Template", url: "https://canva.link/2456xps5v8k4iup" },
  { title: "Retirement Cert", url: "https://canva.link/5zoztoxpck35a8h" },
  { title: "Table itenarary", url: "https://canva.link/uf5naouyxgqe1up" },
  { title: "Hamper LabelEid", url: "https://canva.link/jb75ci6y7jwp8ev" },
  { title: "Scissor Hoist Drawing", url: "https://canva.link/aw6shlmrkrvonab" },
  { title: "BAB & TOYOTA LOGO", url: "https://canva.link/mfuel9nx2biv6j4" },
  { title: "Internship Poster", url: "https://canva.link/9czr3u1fwqb65jp" },
  { title: "Drawing for isolator & new machinery", url: "https://canva.link/ri208e67pmi024u" },
  { title: "Ducted & wall mounted drawing", url: "https://canva.link/4b0mwvq5uqnlwv6" }
];

const linksDiv = document.getElementById("links");

function renderLinks(data) {
  linksDiv.innerHTML = "";

  data.forEach(item => {
    linksDiv.innerHTML += `
      <div class="card">
        <h3>${item.title}</h3>
        <a href="${item.url}" target="_blank">Open Canva</a>
      </div>
    `;
  });
}

renderLinks(canvaLinks);

document.getElementById("search").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();

  const filtered = canvaLinks.filter(link =>
    link.title.toLowerCase().includes(keyword)
  );

  renderLinks(filtered);
});
