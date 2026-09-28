/* =========================================================
   EDITE SÓ AQUI. Link vazio ("") esconde o botão automaticamente.
   Foto: salve seu arquivo como foto.jpg na mesma pasta deste index.html
   ========================================================= */
const CONFIG = {
  nome: "Joandre",
  foto: "foto.jpg",
  curso: "Análise e Desenvolvimento de Sistemas",
  foco: "Desenvolvimento back-end",
  status: "Buscando estágio",
  sobre: "Estudante de Análise e Desenvolvimento de Sistemas, com foco em me tornar desenvolvedor back-end. Gosto de entender como as coisas funcionam por trás da tela e de aprender construindo. (Reescreva com as suas palavras.)",
  links: {
    github: "",    // ex.: https://github.com/seu-usuario
    linkedin: "",  // ex.: https://linkedin.com/in/seu-perfil
    email: ""      // ex.: seunome@email.com
  },
  habilidadesAtuais: [
    "Lógica de programação", "Algoritmos", "Git e GitHub",
    "Metodologias ágeis (Scrum)", "Modelos Cascata e RUP",
    "Computação em nuvem (fundamentos)", "Trabalho em equipe", "Apresentação oral"
  ],
  habilidadesAprendendo: [
    "Java", "Orientação a objetos", "SQL e bancos de dados",
    "APIs REST", "CRUD", "HTML, CSS e JavaScript"
  ],
  projetos: [
    { titulo: "Marketplace da faculdade", texto: "Sistema web com CRUD completo para compra e venda entre alunos. Descreva aqui as tecnologias e o que você aprendeu.", repo: "", demo: "" },
    { titulo: "Nome do próximo projeto", texto: "Uma frase sobre o problema que ele resolve.", repo: "", demo: "" }
  ]
};

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const L = CONFIG.links;

document.title = CONFIG.nome + " | Portfólio";
$("brand").textContent = CONFIG.nome;
$("nome").textContent = CONFIG.nome;
$("sobreTxt").textContent = CONFIG.sobre;
$("rodape").textContent = "© " + new Date().getFullYear() + " " + CONFIG.nome;

const img = new Image();
img.alt = "Foto de " + CONFIG.nome;
img.onload = () => { $("photo").textContent = ""; $("photo").appendChild(img); };
$("photo").textContent = CONFIG.nome.charAt(0);
img.src = CONFIG.foto;

$("json").innerHTML =
`<span class="c">GET /${esc(CONFIG.nome.toLowerCase())}</span>
{
  <span class="k">"curso"</span>: <span class="s">"${esc(CONFIG.curso)}"</span>,
  <span class="k">"foco"</span>: <span class="s">"${esc(CONFIG.foco)}"</span>,
  <span class="k">"status"</span>: <span class="s">"${esc(CONFIG.status)}"</span>
}`;

const tags = (id, arr) => $(id).innerHTML = arr.map(t => `<li>${esc(t)}</li>`).join("");
tags("skillsAtuais", CONFIG.habilidadesAtuais);
tags("skillsAprendendo", CONFIG.habilidadesAprendendo);

const btn = (href, txt, alt) => href ? `<a class="btn${alt ? " alt" : ""}" href="${esc(href)}" target="_blank" rel="noopener">${txt}</a>` : "";
$("projetos-lista").innerHTML = CONFIG.projetos.map(p =>
  `<article class="card"><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p><div class="btns">${btn(p.repo, "Ver código")}${btn(p.demo, "Ver online", true)}</div></article>`
).join("");

$("contatos").innerHTML =
  btn(L.github, "GitHub") + btn(L.linkedin, "LinkedIn", true) +
  (L.email ? btn("mailto:" + L.email, "E-mail", true) : "") ||
  "<p class='lead'>Adicione seus links no CONFIG do arquivo.</p>";