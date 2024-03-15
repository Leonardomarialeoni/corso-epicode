let config = {};
let id;
let contenitoreArtist = [];
let contenitoreAlbum = [];
const container = document.getElementById("container");
const artista = document.getElementById("nomeartista");
const ascolti = document.getElementById("ascolti");
const topArtista = document.getElementById("top-artista");
const albumArtist = document.getElementById("album");

const playPauseButton = document.querySelector(".play-pause");
const progressBar = document.querySelector(".progress");
const progressContainer = document.querySelector(
  ".progress-container .progress-bar"
);
const volumeProgressBar = document.querySelector(".volume-bar .progress");
const volumeContainer = document.querySelector(".volume-bar .progress-bar");

const cTime = document.getElementById("currentTime");
const tTime = document.getElementById("totalTime");

let isPlaying = false;
let audio;

function togglePlayPause() {
  if (audio) {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseIcon();
  }
  return;
}

// Funzione per aggiornare l'icona del pulsante play/pausa
function updatePlayPauseIcon() {
  playPauseButton.classList.toggle("bi-play-fill", !isPlaying);
  playPauseButton.classList.toggle("bi-pause-fill", isPlaying);
}

playPauseButton.addEventListener("click", togglePlayPause);

const songBar = document.querySelector(".song-bar");

function canzoneInRiproduzione(element) {
  const canzoneInPlay = document.getElementById("title");
  const artistaInPlay = document.getElementById("artist");
  const imgInPlay = document.getElementById("imgPlay");
  if (audio) {
    songBar.classList.remove("d-none");
    canzoneInPlay.innerText = `${element.title}`;
    artistaInPlay.innerText = `${element.artist.name}`;
    imgInPlay.src = `${element.album.cover_medium}`;
  }
}

progressContainer.addEventListener("click", function (e) {
  if (audio) {
    const clickX = e.offsetX;
    const progressBarWidth = progressContainer.offsetWidth;
    const clickPercent = clickX / progressBarWidth;
    const newTime = clickPercent * audio.duration;
    audio.currentTime = newTime;
  }
});

volumeContainer.addEventListener("click", function (e) {
  const clickX = e.offsetX;
  const volumeBarWidth = volumeContainer.offsetWidth;
  const clickPercent = clickX / volumeBarWidth;
  if (audio) {
    audio.volume = clickPercent;
  }
  volumeProgressBar.style.width = `${clickPercent * 100}%`;
});

window.addEventListener("load", init);

function init() {
  GET();
}

async function GET() {
  let jsonConfig = await fetch("assets/data/config.json");
  jsonConfig = await jsonConfig.json();
  config = jsonConfig;
  const search = window.location.search;
  const urlParametro = new URLSearchParams(search);
  id = urlParametro.get("id");

  let albums = await getArtist();
  setTimeout(async() => {
    await getSongAlbum(albums);
    setTimeout(() => {
        getLibrary();
    }, 500)
  }, 500)
}

function getDurata(time) {
  time = parseInt(time);
  const minuti = Math.floor(time / 60);
  let secondi = time - minuti * 60;
  if (secondi >= 0 && secondi < 10) {
    secondi = "0" + secondi;
  }
  return `${minuti}:${secondi}`;
}

async function getArtist() {
    try {
        let artist = await fetch(config.fetchs.artist + id, config.options.artist);
        if (artist.ok) {
          artist = await artist.json();
          contenitoreArtist = artist;
          artista.innerText = artist.name;
          ascolti.innerText = artist.nb_fan;
          let tracklist = await fetch(config.proxy + artist.tracklist);
          if (tracklist.ok) {
            tracklist = await tracklist.json();
            let count = 0;
            let albums = {};
            for (i = 0; i < tracklist.data.length; i++) {
              if (count >= 5) {
                break;
              }
              count++;
              if (!albums[tracklist.data[i].album.id]) {
                albums[tracklist.data[i].album.id] = true;
              }
              const li = document.createElement("li");
              const div = document.createElement("div");
              div.setAttribute("data-preview", tracklist.data[i].preview);
              div.setAttribute("data-index", i);
              div.innerHTML = `
                      <img class="rounded-1 m-2"
                          src="${tracklist.data[i].album.cover_small}" width="3.5%"
                          alt="${tracklist.data[i].title_short}" />&nbsp;&nbsp;${tracklist.data[i].title}`;
              div.addEventListener("click", async function (e) {
                e.preventDefault();
                if (audio) {
                  if (isPlaying) {
                    togglePlayPause();
                  }
                  audio.removeEventListener("timeupdate", function () {
                    const progressPercent =
                      (audio.currentTime / audio.duration) * 100;
                    progressBar.style.width = `${progressPercent}%`;
                  });
                  audio = null;
                }
                audio = new Audio(this.getAttribute("data-preview"));
                cTime.innerText = "0:00";
                canzoneInRiproduzione(
                  tracklist.data[this.getAttribute("data-index")]
                );
                audio.addEventListener("timeupdate", function () {
                  tTime.innerText = getDurata(audio.duration);
                  const progressPercent = (audio.currentTime / audio.duration) * 100;
                  cTime.innerText = getDurata(audio.currentTime);
                  progressBar.style.width = `${progressPercent}%`;
                });
                togglePlayPause();
              });
              li.appendChild(div);
              topArtista.appendChild(li);
            }
            return albums;
          } else {
              console.log("Qualcosa è andato storto API DI M***A");
            }
        } else {
            console.log("Qualcosa è andato storto API DI M***A");
          }
    } catch (error) {
        console.log('Errore: '+error)
    }
  return {};
}

async function getSongAlbum(albums) {
  for (const [key, value] of Object.entries(albums)) {
    let album = await fetch(config.fetchs.album + key, config.options.album);
    if (album.ok) {
      album = await album.json();
      const id = album.id;
      const title = album.title;
      const cover = album.cover_medium;

      const div = document.createElement("div");
      div.classList.add("col-2");

      div.innerHTML = `<a href="album.html?id=${id}">
                <div class="card bg-card" id="album-${id}">
                    <img src="${cover}" class="card-img-top p-3 m-auto" style="border-radius:20px" alt="${title}">
                    <div class="card-body">
                        <h6 class="card-title">${title}</h6>
                        <p class="card-text text-secondary">Artista</p>
                    </div>
                </div>
            </a>`;
      albumArtist.appendChild(div);
    } else {
        console.log("Qualcosa è andato storto API DI M***A");
      }
  }
}

let libreria = document.getElementById("libreria");

async function getLibrary() {
  for (const [key, value] of Object.entries(config.library)) {
    let artista = await fetch(
      `${config.fetchs.artist}${key}`,
      config.options.artist
    );
    if (artista.ok) {
      artista = await artista.json();
      const div = document.createElement("div");
      div.classList.add("row", "py-2");
      div.innerHTML = `
            <div class="col-2">
                <a href="artista.html?id=${key}">
                    <img
                        src="${artista.picture_small}"
                        class="img-fluid rounded-circle"
                        alt="${artista.name}"
                    />
                </a>
            </div>
            <div class="col-10">
                <a href="artista.html?id=${key}">
                    <h6 id="nome">${artista.name}</h6>
                    <div>
                        <span class="text-white opacity-50"
                        >Artista</span
                        >
                    </div>
                </a>
            </div>
            `;
      libreria.appendChild(div);
      value.albums.forEach(async (element) => {
        let album = await fetch(
          `${config.fetchs.album}${element}`,
          config.options.album
        );
        if (album.ok) {
          album = await album.json();
          const div2 = document.createElement("div");
          div2.classList.add("row", "py-2");
          div2.innerHTML = `
                    <div class="col-2">
                        <a href="album.html?id=${element}">
                        <img
                            src="${album.cover_small}"
                            class="img-fluid rounded-2"
                            alt="${album.title}"
                        />
                        </a>
                    </div>
                    <div class="col-10">
                        <a href="album.html?id=${element}">
                        <h6 id="nome">${album.title}</h6>
                        <div>
                            <span class="text-white opacity-50"
                            >Album &middot; ${album.artist.name}</span
                            >
                        </div>
                        </a>
                    </div>
                    `;
          libreria.appendChild(div2);
          album.tracks.data.forEach(async (element2) => {
            const div3 = document.createElement("div");
            div3.classList.add("row", "py-2");
            div3.innerHTML = `
                        <div class="col-2">
                            <img
                                src="${album.cover_small}"
                                class="img-fluid rounded-2"
                                alt="${element2.title}"
                            />
                        </div>
                        <div class="col-10">
                            <h6 id="nome">${element2.title}</h6>
                            <div>
                                <span class="text-white opacity-50"
                                >Album &middot; ${album.title}</span
                                >
                            </div>
                        </div>
                        `;
            libreria.appendChild(div3);
          });
        } else {
          console.log("Qualcosa è andato storto API DI M***A");
        }
      });
    } else {
        console.log("Qualcosa è andato storto API DI M***A");
      }
  }
}

let ricerca = document.getElementById("ricerca");

ricerca.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    window.location.href = `index.html?risultato=${ricerca.value}`;
  }
});
