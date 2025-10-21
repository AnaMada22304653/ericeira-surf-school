const i18n = {
  pt: {
    heroTitle: "Apanha a tua primeira onda 🌊",
    heroDesc: "Aprende a surfar em Ericeira com instrutores certificados e vibes incríveis.",
    aulasTitle: "As nossas aulas",
    quizTitle: "Qual é a tua vibe de surf?",
    mapTitle: "Onde estamos",
    ugcTitle: "Partilha a tua experiência",
    aulas: [
      {
        title: "Iniciação",
        desc: "Ideal para quem nunca surfou. Aprende o básico com segurança.",
        tags: "Grupo | 2h | €35",
        img: "images/iniciacao.jpeg" // imagem que enviaste
      },
      {
        title: "Intermédio",
        desc: "Melhora a tua técnica e começa a manobrar nas ondas.",
        tags: "Grupo | 2h | €40",
        img: "https://images.unsplash.com/photo-1548786817-9c2e4c1a1a1f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Privada",
        desc: "Aula personalizada com atenção total do instrutor.",
        tags: "Individual | 1.5h | €60",
        img: "images/privada.jpeg" // imagem que enviaste
      }
    ]
  },
  en: {
    heroTitle: "Catch Your First Wave 🌊",
    heroDesc: "Learn to surf in Ericeira with certified instructors and great vibes.",
    aulasTitle: "Our Lessons",
    quizTitle: "What's your surf vibe?",
    mapTitle: "Where we are",
    ugcTitle: "Share your experience",
    aulas: [
      {
        title: "Beginner",
        desc: "Perfect for first-timers. Learn the basics safely.",
        tags: "Group | 2h | €35",
        img: "images/iniciacao.jpeg"
      },
      {
        title: "Intermediate",
        desc: "Improve your technique and start maneuvering on waves.",
        tags: "Group | 2h | €40",
        img: "https://images.unsplash.com/photo-1548786817-9c2e4c1a1a1f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Private",
        desc: "One-on-one lesson with full instructor attention.",
        tags: "Individual | 1.5h | €60",
        img: "images/privada.jpeg"
      }
    ]
  }
};

function renderAulas(lang) {
  const container = document.getElementById("aulas-grid");
  container.innerHTML = "";
  i18n[lang].aulas.forEach(aula => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${aula.img}" alt="${aula.title}" style="width:100%;height:140px;object-fit:cover;" />
      <div class="card-content">
        <h3>${aula.title}</h3>
        <p>${aula.desc}</p>
        <div class="tags">${aula.tags}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function switchLang(lang) {
  document.documentElement.lang = lang;
  document.getElementById("hero-title").textContent = i18n[lang].heroTitle;
  document.getElementById("hero-desc").textContent = i18n[lang].heroDesc;
  document.getElementById("aulas-title").textContent = i18n[lang].aulasTitle;
  document.getElementById("quiz-title").textContent = i18n[lang].quizTitle;
  document.getElementById("map-title").textContent = i18n[lang].mapTitle;
  document.getElementById("ugc-title").textContent = i18n[lang].ugcTitle;
  renderAulas(lang);
}

switchLang("pt");

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'true');
  document.getElementById('cookie-banner').style.display = 'none';
  loadAnalytics();
}

function loadAnalytics() {
  // --- Plausible (privacidade-friendly) ---
  /*
  const script = document.createElement('script');
  script.setAttribute('defer', '');
  script.setAttribute('data-domain', 'ericeirasurfschool.com');
  script.src = 'https://plausible.io/js/plausible.js';
  document.head.appendChild(script);
  */
}

if (localStorage.getItem('cookieConsent') === 'true') {
  document.getElementById('cookie-banner').style.display = 'none';
  loadAnalytics();
}
