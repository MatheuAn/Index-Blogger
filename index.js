// MOBILE MENU

function toggleContent(targetHtmlId, event) {
  var targetHtmlElement = document.querySelector('#' + targetHtmlId);
  var allContentContainers = document.querySelectorAll('.conteudo-mobile');
  var isActive = targetHtmlElement.style.display === 'block';

  allContentContainers.forEach(function (element) {
    element.style.display = 'none';
  });
  var allMenuItems = document.querySelectorAll('.menuItem');
  allMenuItems.forEach(function (item) {
    item.classList.remove('active');
  });

  if (!isActive) {
    targetHtmlElement.style.display = 'block';
    event.currentTarget.classList.add('active');
    document.querySelector('.header').style.display = 'none';
  } else {
    event.currentTarget.classList.remove('active');
    document.querySelector('.header').style.display = 'block';
  }
}

function toggleClass() {
  var toggleButton = document.getElementById('toggleButton');
  var icon = document.getElementById('icon');
  var mobMenus = document.querySelectorAll('.mobMn');

  if (toggleButton.classList.contains('active-btn')) {
    toggleButton.classList.remove('active-btn');
    icon.textContent = 'arrow_drop_down_circle';
    toggleButton.style.bottom = '60px';

    mobMenus.forEach(function (menu) {
      menu.style.bottom = '0';
    });
  } else {
    toggleButton.classList.add('active-btn');
    icon.textContent = 'keyboard_capslock';
    toggleButton.style.bottom = '0';

    mobMenus.forEach(function (menu) {
      menu.style.bottom = '-50px';
    });
  }
}

var activeElement = null;

function toggleOverflow(t) {
  var htmlS = document.getElementById('htmlS');
  
  activeElement = t === activeElement ? null : t;

  if (activeElement) {
    activeElement.classList.add('active');
    htmlS.style.overflow = 'hidden';
  } else {
    if (activeElement) {
      activeElement.classList.remove('active');
    }
    htmlS.style.overflow = 'auto';
  }
}

  //--------------------------------------
  //--------------------------------------
  //--------------------------------------
  
  // IMG PERFIL HEADER
function abrirCaixa() {
  var caixa = document.getElementById("caixapnem");
  var overlay = document.getElementById("overlaypnem");
  caixa.style.bottom = "0%";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
}

function fecharCaixa() {
  var caixa = document.getElementById("caixapnem");
  var overlay = document.getElementById("overlaypnem");
  caixa.style.bottom = "-100%";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
}

  

  //--------------------------------------
  //--------------------------------------
  //--------------------------------------
  
// PÁGINA INICIAL

// banner
var mySwiper = new Swiper('.swiper-container', {
  effect: 'fade',
  autoplay: {
    delay: 10000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: false,
  },
  mousewheelControl: true,
  // Adicione o parâmetro para pausar no hover
  pauseOnMouseEnter: true,
});

// POSTAGEM EP RECENTES BUTTON MUDAR
// Variável para controlar o estado do ícone
let iconeAlterado = false;

// Função para alternar a classe e o ícone do botão
function alterarClasse() {
  const botao = document.querySelector('.mudarEPR');
  const spanIcone = botao.querySelector('.material-symbols-rounded');

  if (iconeAlterado) {
    spanIcone.textContent = 'browse';
  } else {
    spanIcone.textContent = 'view_carousel';
  }

  iconeAlterado = !iconeAlterado; // Inverte o estado do ícone

  // Função para alternar a classe "mudarEPR" na div com classe "epCon"
  const epCon = document.querySelector('#HTML41 .ctgry .epCon');
  epCon.classList.toggle('mudarEPR');
}

// FOOTER PAG INICIAL IMG

const imgfooterElements = document.querySelectorAll('.imgfooter');

imgfooterElements.forEach((element) => {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const randomImageUrl = imageUrls[randomIndex];
  element.style.backgroundImage = `url('${randomImageUrl}')`;
});




// RECENTES EP SCROLLBAR
// Selecione todos os botões com a classe "scrollButton"
var scrollButtons = document.querySelectorAll(".scrollButton");

scrollButtons.forEach(function(button) {
  // Variável para controlar o temporizador do clique duplo
  var doubleClickTimestamp = 0;

  button.addEventListener("click", function(event) {
    var currentTime = new Date().getTime();
    var direction = button.getAttribute("data-direction");
    var currentSection = button.closest("[id^='HTML']");
    var epConElement = currentSection.querySelector(".epCon");

    if (currentTime - doubleClickTimestamp < 500) {
      // Detectado um clique duplo
      if (direction === "left") {
        epConElement.scrollLeft = 0; // Vá para o início
      } else if (direction === "right") {
        epConElement.scrollLeft = epConElement.scrollWidth; // Vá para o final
      }
      doubleClickTimestamp = 0; // Zere o registro do clique duplo
    } else {
      // Clique simples
      doubleClickTimestamp = currentTime;
      if (direction === "left") {
        epConElement.scrollLeft -= 350; // Altere o valor conforme necessário
      } else if (direction === "right") {
        epConElement.scrollLeft += 350; // Altere o valor conforme necessário
      }
    }
  });
});

// Barra de pesquisa mangas 
var ascendingOrder = false;  // Inicialmente em ordem decrescente

var button = document.getElementById("Azhtml47");
var aZ = button.querySelector(".a-z");
var zA = button.querySelector(".z-a");

button.addEventListener("click", function() {
  var ntryContainer = document.querySelector("#HTML47 .epCon");
  var ntryItems = Array.from(ntryContainer.querySelectorAll(".ntry"));

  ntryItems.sort(function(a, b) {
    var titleA = a.querySelector(".titlePos").textContent.toLowerCase();
    var titleB = b.querySelector(".titlePos").textContent.toLowerCase();

    if (ascendingOrder) {
      return titleB.localeCompare(titleA);
    } else {
      return titleA.localeCompare(titleB);
    }
  });

  ntryContainer.innerHTML = "";  // Limpe o conteúdo atual do contêiner

  ntryItems.forEach(function(item) {
    ntryContainer.appendChild(item);
  });

  ascendingOrder = !ascendingOrder;  // Alternar entre ordem crescente e decrescente

  // Alternar visibilidade das classes "a-z" e "z-a"
  if (ascendingOrder) {
    aZ.style.display = "none";
    zA.style.display = "block";
  } else {
    aZ.style.display = "block";
    zA.style.display = "none";
  }
});

document.getElementById("searchInputh47").addEventListener("input", function() {
  var searchTerm = this.value.toLowerCase();
  var ntryItems = document.querySelectorAll("#HTML47 .ntry");

  for (var i = 0; i < ntryItems.length; i++) {
    var titlePos = ntryItems[i].querySelector(".titlePos").textContent.toLowerCase();
    if (titlePos.includes(searchTerm)) {
      ntryItems[i].style.display = "block";
    } else {
      ntryItems[i].style.display = "none";
    }
  }
});

  //--------------------------------------
  //--------------------------------------
  //--------------------------------------
// PAGINA DE MANGÁ 
// Generos
const vertudogenButton = document.getElementById('vertudogen');
const label4 = document.getElementById('Label4');

vertudogenButton.addEventListener('click', function () {
  // Verifique se o botão possui a classe 'active'
  if (vertudogenButton.classList.contains('active')) {
    // Se tiver, remova a classe 'active' do botão
    vertudogenButton.classList.remove('active');
    // Adicione a classe 'active' a #Label4
    label4.classList.remove('active');
  } else {
    // Se não tiver, adicione a classe 'active' ao botão
    vertudogenButton.classList.add('active');
    // Remova a classe 'active' de #Label4
    label4.classList.add('active');
  }
});

// Mangas físicos 
document.getElementById("mangafis").addEventListener("input", function () {
  var searchTerm = this.value.toLowerCase();
  var titles = document.querySelectorAll(".itemmf #titlemf");

  for (var i = 0; i < titles.length; i++) {
    var title = titles[i].textContent.toLowerCase();
    var parentItem = titles[i].closest(".itemmf");

    if (title.includes(searchTerm)) {
      parentItem.style.display = "block";
    } else {
      parentItem.style.display = "none";
    }
  }
});

let iconIndex = 0;
const icons = [
  '<span class="material-symbols-outlined ichovermf2">text_increase</span>',
  '<span class="material-symbols-outlined ichovermf">text_decrease</span>',
];

function updateSortIcon(ascending) {
  const iconContainer = document.getElementById("sortIconContainer");
  if (iconContainer) {
    iconContainer.innerHTML = icons[ascending ? 0 : 1];
  }
}

function sortItemsCustom(ascending) {
  var items = document.querySelectorAll(".itemmf");
  var itemsArray = Array.from(items);

  itemsArray.sort(function (a, b) {
    var titleA = a.querySelector("#titlemf").textContent;
    var titleB = b.querySelector("#titlemf").textContent;
    var compareResult = customCompare(titleA, titleB);

    if (!ascending) {
      compareResult *= -1;
    }

    return compareResult;
  });

  var parentElement = items[0].parentNode;

  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }

  itemsArray.forEach(function (item) {
    parentElement.appendChild(item);
  });
}

function customCompare(titleA, titleB) {
  var order = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

  var indexA = order.indexOf(titleA[0]);
  var indexB = order.indexOf(titleB[0]);

  // Realiza a comparação com base nos índices na ordem personalizada
  if (indexA < indexB) {
    return -1;
  } else if (indexA > indexB) {
    return 1;
  } else {
    return titleA.localeCompare(titleB);
  }
}

// Chama a função de ordenação inicialmente para organizar em ordem crescente
sortItemsCustom(true);

var azorderButton = document.getElementById("azorder");
var ascending = true;

azorderButton.addEventListener("click", function () {
  ascending = !ascending; // Alternar entre ascendente e decrescente
  sortItemsCustom(ascending);
  updateSortIcon(ascending);
});

  
  
// Valores atualizados 

const itemmfElements = document.querySelectorAll(".itemmf");
const pastmBackground1 = document.querySelector(".colecaom .pastm:nth-child(1)");
const pastmBackground2 = document.querySelector(".colecaom .pastm:nth-child(2)");
const voltaElement = document.getElementById("volns");
const valormanElement = document.querySelector(".valorman");
const hreflinkElement = document.querySelector(".hreflink");
const centamfElement = document.querySelector(".centamf");
const menorvaElement = document.querySelector(".menorva");

let itemmfAtivo = null;

function updateElements() {
  if (itemmfAtivo) {
    const index = Array.from(itemmfElements).indexOf(itemmfAtivo);
    const imgSrc = itemmfAtivo.querySelector("img").getAttribute("src");
    pastmBackground1.style.backgroundImage = `url('${imgSrc}')`;
    pastmBackground2.style.backgroundImage = `url('${imgSrc}')`;
    voltaElement.textContent = itemmfAtivo.querySelector(".volmf").textContent;

    // Obtenha o valor da classe "valmf"
    const valmfValue = itemmfAtivo.querySelector(".valmf").textContent;

    // Defina o atributo data-value do elemento valorman com o valor de centamf
    valormanElement.setAttribute("data-value", itemmfAtivo.querySelector(".centamf").textContent);

    // Defina o conteúdo do elemento valorman com o valor da classe "valmf"
    valormanElement.textContent = valmfValue;

    hreflinkElement.setAttribute("href", itemmfAtivo.querySelector(".hrefmf").getAttribute("href"));
    menorvaElement.textContent = itemmfAtivo.querySelector(".centamf").textContent;
  }
}

itemmfElements.forEach((itemmf) => {
  itemmf.addEventListener("click", (event) => {
    event.preventDefault();

    if (itemmfAtivo) {
      itemmfAtivo.classList.remove("ativo");
    }
    itemmf.classList.add("ativo");
    itemmfAtivo = itemmf;

    updateElements();
  });
});
if (itemmfElements.length > 0) {
  itemmfAtivo = itemmfElements[0];
  itemmfAtivo.classList.add("ativo");
  updateElements();
}

document.addEventListener("DOMContentLoaded", function () {
  var mangafisico = document.querySelector(".mangafisico");
  var leftButton = document.getElementById("leftms");
  var rightButton = document.getElementById("rightms");

  leftButton.addEventListener("click", function () {
    mangafisico.scrollLeft -= 100; // Ajuste o valor conforme necessário
  });

  rightButton.addEventListener("click", function () {
    mangafisico.scrollLeft += 100; // Ajuste o valor conforme necessário
  });
});

// Banner mangá 
var currentNtryIndex = 1;
var timer; // Variável para controlar o temporizador

function updateDots() {
  var dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, index) {
    dot.classList.toggle("active", index + 1 === currentNtryIndex);
  });
}

function moveNtry() {
  var ntries = document.querySelectorAll("#HTML54 .ntry");
  ntries[currentNtryIndex - 1].style.display = "none";
  currentNtryIndex = (currentNtryIndex % 5) + 1;
  ntries[currentNtryIndex - 1].style.display = "block";
  updateDots();
  changePhrase();
}

function autoMoveNtry() {
  timer = setInterval(moveNtry, 5000);
}

document.getElementById("rightnc").addEventListener("click", function () {
  clearInterval(timer); // Limpa o temporizador ao clicar no botão direito
  moveNtry();
  autoMoveNtry(); // Reinicia o passeio automático
});

document.getElementById("leftnc").addEventListener("click", function () {
  clearInterval(timer); // Limpa o temporizador ao clicar no botão esquerdo
  var ntries = document.querySelectorAll("#HTML54 .ntry");
  ntries[currentNtryIndex - 1].style.display = "none";
  currentNtryIndex = (currentNtryIndex - 2 + 5) % 5 + 1;
  ntries[currentNtryIndex - 1].style.display = "block";
  updateDots();
  autoMoveNtry(); // Reinicia o passeio automático
});

// Inicie o passeio automático quando a página carregar
autoMoveNtry();

const phrases = [
  ["HISTÓRIAS", "QUE VÃO", "TE PRENDER", "Em cada página"],
  ["UMA NOVA", "AVENTURA", "ESPERANDO", "por você"],
  ["DESCUBRA", "HISTÓRIAS", "INCRÍVEIS", "nas páginas"],
  ["VIAJE", "PARA LUGARES", "INESPERADOS", "com a leitura"],
  ["ONDE AS", "PALAVRAS", "SUSSURRAM", "e as imagens gritam"],
  ["PALAVRAS", "SE TORNAM", "ARTE", "arte se torna vida."],
  ["A CADA MANGÁ ", "UMA NOVA", "DIMENSÃO ", "se revela"],
  ["NAS MARGENS", "DO PAPEL", "MORAM HERÓIS", "e vilões!"]
];
let currentPhraseIndex = 0;
let currentWordIndex = 0;
const wordElements = document.querySelectorAll('.titlepagManga span');

function changePhrase() {
  const phrase = phrases[currentPhraseIndex];
  currentWordIndex = 0;

  phrase.forEach((word, index) => {
    const spanElement = wordElements[index];
    spanElement.classList.remove('visible');
    setTimeout(() => {
      spanElement.textContent = word;
      spanElement.classList.add('visible');
    }, 500); // 500ms para garantir que a transição funcione corretamente
  });

  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

changePhrase();



  
  
  
  
// Ranking
document.addEventListener("DOMContentLoaded", function() {
  const imgpopM = document.querySelector(".imgpopM");
  const postImage = document.querySelector("#PopularPosts6 .itm:nth-child(1) .post-image");

  if (imgpopM && postImage) {
    imgpopM.src = postImage.src;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const opcpopElements = document.querySelectorAll(".opcpop");
  const popularPostsElements = document.querySelectorAll("#PopularPosts5, #PopularPosts6, #PopularPosts7");

  opcpopElements.forEach(function(element, index) {
    element.addEventListener("click", function() {
      if (!element.classList.contains("active")) {
        opcpopElements.forEach(function(item) {
          item.classList.remove("active");
        });
        element.classList.add("active");

        if (popularPostsElements[index]) {
          popularPostsElements.forEach(function(item) {
            item.style.display = "none";
          });
          popularPostsElements[index].style.display = "block";
        }
      }
    });
  });
});

// MANGÁS RECOMENDADOS
const container = document.querySelector('.iconsdu');
const spanToDuplicate = container.querySelector('.material-symbols-outlined');
const numberOfCopies = 4;

for (let i = 0; i < numberOfCopies; i++) {
  const clonedSpan = spanToDuplicate.cloneNode(true);
  container.appendChild(clonedSpan);
}

// Principal
var currentNtryIndex57 = 1;
var totalNtries57 = 10;
var dots = document.querySelectorAll('#HTML57 .dotshtml57 .dotpR');
var indiceDotAtivo = 0;

function updateDisplay() {
  var ntries = document.querySelectorAll('#HTML57 .ntry');

  ntries.forEach(function (ntry, index) {
    ntry.style.display = index === currentNtryIndex57 - 1 ? 'block' : 'none';
  });

  document.getElementById('ntryNumero57').textContent = '# ' + currentNtryIndex57;
}

function showNtry(index) {
  currentNtryIndex57 = index + 1;
  updateDisplay();
}

function updateActiveDot() {
  dots.forEach(function (dot, index) {
    dot.classList.toggle('active', index === indiceDotAtivo);
  });
}

function nextDot() {
  indiceDotAtivo = (indiceDotAtivo + 1) % dots.length;
  showNtry(currentNtryIndex57 % totalNtries57);
  updateActiveDot();
}

function previousDot() {
  indiceDotAtivo = (indiceDotAtivo - 1 + dots.length) % dots.length;
  showNtry((currentNtryIndex57 - 2 + totalNtries57) % totalNtries57);
  updateActiveDot();
}

dots.forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    indiceDotAtivo = index;
    showNtry(currentNtryIndex57 % totalNtries57);
    updateActiveDot();
  });
});

document.getElementById('proximo57').addEventListener('click', nextDot);
document.getElementById('anterior57').addEventListener('click', previousDot);

updateDisplay();
updateActiveDot();


  
  //--------------------------------------
  //--------------------------------------
  //--------------------------------------
  
  
// PÁGINA DO ANIME
document.addEventListener("DOMContentLoaded", function () {
  let currentNtry = 1;
  const ntryElements = document.querySelectorAll("#HTML55 .ntry");
  const nextButton = document.querySelector(".next55");
  const prevButton = document.querySelector(".prev55");

  nextButton.addEventListener("click", function () {
    ntryElements[currentNtry - 1].style.display = "none";
    currentNtry = (currentNtry % ntryElements.length) + 1;
    ntryElements[currentNtry - 1].style.display = "block";
  });

  prevButton.addEventListener("click", function () {
    ntryElements[currentNtry - 1].style.display = "none";
    currentNtry = (currentNtry - 2 + ntryElements.length) % ntryElements.length + 1;
    ntryElements[currentNtry - 1].style.display = "block";
  });
});

// banner html55
document.addEventListener("DOMContentLoaded", function () {
  let currentNtry = 1;
  const maxNtry = 5;
  const ntryElements = document.querySelectorAll("#HTML55 .ntry");
  const nextButton = document.querySelector(".next55");
  const prevButton = document.querySelector(".prev55");
  const dotElements = document.querySelectorAll(".dothtml55");
  let autoAdvanceInterval = setInterval(autoNext, 3000);

  updateVisibility();

  nextButton.addEventListener("click", function () {
    clearTimeout(autoAdvanceInterval);
    currentNtry = (currentNtry % maxNtry) + 1;
    updateVisibility();
    autoAdvanceInterval = setInterval(autoNext, 3000);
  });

  prevButton.addEventListener("click", function () {
    clearTimeout(autoAdvanceInterval);
    currentNtry = (currentNtry - 2 + maxNtry) % maxNtry + 1;
    updateVisibility();
    autoAdvanceInterval = setInterval(autoNext, 3000);
  });

  dotElements.forEach((dot, index) => {
    dot.addEventListener("click", function () {
      clearTimeout(autoAdvanceInterval);
      currentNtry = index + 1;
      updateVisibility();
      autoAdvanceInterval = setInterval(autoNext, 3000);
    });
  });

  function updateVisibility() {
    ntryElements.forEach((element, index) => {
      element.style.display = index === currentNtry - 1 ? "block" : "none";
    });

    dotElements.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentNtry - 1);
    });
  }

  function autoNext() {
    currentNtry = (currentNtry % maxNtry) + 1;
    updateVisibility();
  }
});

// LISTA COMPLETA
const containers = ["#HTML78", "#HTML79", "#HTML80", "#HTML81", "#HTML42", "#HTML61", "#HTML62", "#HTML63", "#HTML64", "#HTML65", "#HTML66", "#HTML67"];
const searchInput = document.getElementById("searchInput");
const listAz = document.querySelector(".listAz");
const alphabet = [...Array(26)].map((e, t) => String.fromCharCode(65 + t));

function filterNtry(s) {
  containers.forEach(e => {
    const t = document.querySelector(e);
    const l = t.querySelectorAll(".ntry");
    l.forEach(e => {
      const t = e.querySelector(".titlePos").textContent.toLowerCase();
      t.includes(s) ? (e.style.display = "block") : (e.style.display = "none");
    });
  });
}

alphabet.unshift("#");

alphabet.forEach(e => {
  const t = document.createElement("li");
  t.textContent = e;
  listAz.appendChild(t);
});

let selectedLetter = null;

function filterNtryByLetter(s) {
  s === selectedLetter
    ? ((selectedLetter = null), showAllNtry())
    : ((selectedLetter = s),
      containers.forEach(e => {
        const t = document.querySelector(e);
        const l = t.querySelectorAll(".ntry");
        l.forEach(e => {
          const t = e.querySelector(".titlePos").textContent.toLowerCase();
          "#" === s
            ? /^[0-9!@#$%^&*(),.?{}|<>]/.test(t.charAt(0))
              ? (e.style.display = "block")
              : (e.style.display = "none")
            : t.startsWith(s.toLowerCase())
            ? (e.style.display = "block")
            : (e.style.display = "none");
        });
      }));
}

function showAllNtry() {
  containers.forEach(e => {
    const t = document.querySelector(e);
    const l = t.querySelectorAll(".ntry");
    l.forEach(e => {
      e.style.display = "block";
    });
  });
}

listAz.addEventListener("click", function (e) {
  if ("LI" === e.target.tagName) {
    const t = e.target;
    t.classList.contains("selected")
      ? (t.classList.remove("selected"), showAllNtry())
      : (listAz.querySelectorAll("li").forEach(e => {
          e.classList.remove("selected");
        }),
        t.classList.add("selected"),
        filterNtryByLetter(t.textContent));
  }
});

searchInput.addEventListener("input", function () {
  const e = searchInput.value.toLowerCase();
  selectedLetter = null;
  const t = listAz.querySelector(".selected");
  t && t.classList.remove("selected"),
    "" === e.trim() ? showAllNtry() : filterNtry(e);
});

// Categorias de leitura
document.addEventListener("DOMContentLoaded", function () {
  const mangaElements = document.querySelectorAll('.manga');
  const htmlElements = {
    HTML61: document.getElementById('HTML61'),
    HTML62: document.getElementById('HTML62'),
    HTML63: document.getElementById('HTML63'),
    HTML64: document.getElementById('HTML64'),
    HTML65: document.getElementById('HTML65'),
    HTML66: document.getElementById('HTML66'),
    HTML67: document.getElementById('HTML67'),
    HTML68: document.getElementById('HTML68'),
  };
  let selectedOption = "Já encerrados";

  function selectManga(element) {
    mangaElements.forEach((mangaElement) => {
      mangaElement.classList.remove('selected');
    });
    element.classList.add('selected');
    updateDisplayedHTML();
  }

  mangaElements.forEach((mangaElement, index) => {
    mangaElement.addEventListener('click', () => {
      selectManga(mangaElement);
    });
  });

  function updateDisplayedHTML() {
    for (const key in htmlElements) {
      if (Object.hasOwnProperty.call(htmlElements, key)) {
        htmlElements[key].style.display = 'none';
      }
    }

    const currentOption = selectedOption;
    const isCompleto = currentOption === 'Já encerrados';

    mangaElements.forEach((mangaElement, index) => {
      if (mangaElement.classList.contains('selected')) {
        const htmlElementId = isCompleto ? `HTML6${index + 1}` : `HTML6${index + 5}`;
        if (htmlElements[htmlElementId]) {
          htmlElements[htmlElementId].style.display = 'block';
        }
      }
    });
  }

  updateDisplayedHTML();

  updateDisplayedHTML();
  catcompleto.addEventListener('click', () => {
    selectedOption = 'Já encerrados';
    updateDisplayedHTML();
    catcompleto.classList.add('selectedcat');
    catlancando.classList.remove('selectedcat');
  });

  catlancando.addEventListener('click', () => {
    selectedOption = 'Em lançamento';
    updateDisplayedHTML();
    catlancando.classList.add('selectedcat');
    catcompleto.classList.remove('selectedcat');
  });
});

  //--------------------------------------
  //--------------------------------------
  //--------------------------------------
/*-------MENU MANGA-------*/
function selecionar(id) {
  var elementoClicado = document.getElementById(id);
  var possuiView = elementoClicado.classList.contains('view');

  // Remove 'view' class from all elements and lists
  document.getElementById('leituraC').classList.remove('view');
  document.getElementById('animesC').classList.remove('view');
  document.getElementById('desenhosC').classList.remove('view');
  document.getElementById('listManga').classList.remove('view');
  document.getElementById('listAnimes').classList.remove('view');
  document.getElementById('listDesenhos').classList.remove('view');

  // Add 'view' class to the clicked element only if it doesn't have the class
  if (!possuiView) {
    elementoClicado.classList.add('view');

    // Add 'view' class to the corresponding list
    if (id === 'leituraC') {
      document.getElementById('listManga').classList.add('view');
    } else if (id === 'animesC') {
      document.getElementById('listAnimes').classList.add('view');
    } else if (id === 'desenhosC') {
      document.getElementById('listDesenhos').classList.add('view');
    }
  }
}

document.getElementById('cat18A').addEventListener('click', function () {
  var html78 = document.getElementById('HTML78');
  var html79 = document.getElementById('HTML79');

  toggleClass(this, 'on');
  toggleClass(html78, 'on');
  toggleClass(html79, 'on');
});

document.getElementById('cat18D').addEventListener('click', function () {
  var html80 = document.getElementById('HTML80');
  var html81 = document.getElementById('HTML81');

  toggleClass(this, 'on');
  toggleClass(html80, 'on');
  toggleClass(html81, 'on');
});

document.getElementById('cat18').addEventListener('click', function () {
  var htmlElements = ["HTML61", "HTML62", "HTML63", "HTML64", "HTML65", "HTML66", "HTML67", "HTML68", "HTML42"];

  toggleClass(this, 'on');
  htmlElements.forEach(function (elementId) {
    toggleClass(document.getElementById(elementId), 'on');
  });
});

// Function to toggle the class
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}
