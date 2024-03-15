
let config = {}
const durationTrack = document.getElementById('duration');
const trackList = document.getElementById('trackList');
const nomeAlbum = document.getElementById('nomeAlbum');
const artista = document.getElementById('artista');
const anno = document.getElementById('anno');
const nBrani = document.getElementById('nBrani');
const oreAlbum = document.getElementById('oreAlbum');
const minutiAlbum = document.getElementById('minutiAlbum');
const albumCover = document.getElementById('albumCover');
const player = document.getElementById('player');
let id;
let albums = {};

const playPauseButton = document.querySelector(".play-pause");
const progressBar = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container .progress-bar");
const volumeProgressBar = document.querySelector(".volume-bar .progress");
const volumeContainer = document.querySelector(".volume-bar .progress-bar");

const cTime = document.getElementById('currentTime')
const tTime = document.getElementById('totalTime')

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
    return
}

const songBar = document.querySelector('.song-bar')

function canzoneInRiproduzione(element) {
  console.log(element, audio)
  const canzoneInPlay = document.getElementById('title');
  const artistaInPlay = document.getElementById('artist');
  const imgInPlay = document.getElementById('imgPlay');
  if (audio) {
    songBar.classList.remove('d-none')
    canzoneInPlay.innerText = `${element.title}`;
    artistaInPlay.innerText = `${element.artist.name}`;
    imgInPlay.src = `${element.album.cover_medium}`;
  }
}

// Funzione per aggiornare l'icona del pulsante play/pausa
function updatePlayPauseIcon() {
    playPauseButton.classList.toggle("bi-play-fill", !isPlaying);
    playPauseButton.classList.toggle("bi-pause-fill", isPlaying);
}

playPauseButton.addEventListener('click', togglePlayPause)

progressContainer.addEventListener('click', function(e) {
    if (audio) {
        const clickX = e.offsetX;
        const progressBarWidth = progressContainer.offsetWidth;
        const clickPercent = (clickX / progressBarWidth);
        const newTime = clickPercent * audio.duration;
        audio.currentTime = newTime
    }
})

volumeContainer.addEventListener('click', function(e) {
    const clickX = e.offsetX;
    const volumeBarWidth = volumeContainer.offsetWidth;
    const clickPercent = clickX / volumeBarWidth;
    if (audio) {
        audio.volume = clickPercent;
    }
    volumeProgressBar.style.width = `${clickPercent * 100}%`;
})




window.addEventListener('load', init);

function init() {
    GET()
}





async function GET() {
    let jsonConfig = await fetch('assets/data/config.json');
    jsonConfig = await jsonConfig.json();
    config = jsonConfig


    await getSongAlbum();
    setTimeout(() => {
        getLibrary();
    }, 500)

}

function getDurata(time) {
    time = parseInt(time)
    const minuti = Math.floor(time / 60)
    let secondi = time - (minuti * 60)
    if (secondi >= 0 && secondi < 10) {
        secondi = "0"+secondi
    }
    return `${minuti}:${secondi}`
}

async function getSongAlbum() {
    
    const search = window.location.search
    const urlParametro = new URLSearchParams(search)
    id = urlParametro.get('id');


    let album = await fetch(config.fetchs.album + id, config.options.album);
    if (album.ok) {
        album = await album.json()
        albums = album
    
    
        //destrutturiamo l'oggetto
        const nomeAlb = albums.title;
        let durataAlbum = albums.duration;
        let oreAlb = Math.floor((durataAlbum / 60) / 60);
        let minutiRimanentiAlb = oreAlb % 60;
        const annoAlbum = albums.release_date;
        const soloAnno = annoAlbum.split('-')[0];
        const nomeArtista = albums.artist.name;
        const numeroBrani = albums.nb_tracks;
        const img = albums.cover_medium;
        albumCover.src = img;
    
        
        Vibrant.from(albums.cover_medium).getPalette(function(err, palette) {
            const bgVibrant = document.getElementById('bgVibrant')
            bgVibrant.style.background = `linear-gradient(0deg, rgba(${palette.DarkMuted._rgb[0]},${palette.DarkMuted._rgb[1]},${palette.DarkMuted._rgb[2]}, 0) 0%, rgba(${palette.DarkMuted._rgb[0]},${palette.DarkMuted._rgb[1]},${palette.DarkMuted._rgb[2]}, 0.5) 20%, rgb(${palette.DarkMuted._rgb[0]},${palette.DarkMuted._rgb[1]},${palette.DarkMuted._rgb[2]}) 50%`
        });
    
        //mandiamo in html i valori destrutturati
        nomeAlbum.innerText = nomeAlb;
        artista.innerText = nomeArtista;
        anno.innerText = soloAnno;
        nBrani.innerText = numeroBrani;
        oreAlbum.innerText = oreAlb;
        minutiAlbum.innerText = minutiRimanentiAlb;
        
    for (i = 0; i < albums.tracks.data.length; i++) {
            const li = document.createElement('li');
            const idAlbum = albums.tracks.data[i].id;
            const title = albums.tracks.data[i].title;
            const cover = albums.tracks.data[i].cover_medium;
            const duration = albums.tracks.data[i].duration;
            const durationMin = Math.floor(duration / 60);
            let secRiman = duration - (durationMin * 60);
            
            if (secRiman >= 0 && secRiman < 10) {
                secRiman = "0"+ secRiman
      
            }
              
            
            
            
    
            li.innerHTML = `<div class="d-flex align-center justify-content-between">
                <div class="w-75">
                    <span class="d-block fs-5 col-6 titoloTrack w-100" id="${idAlbum}" data-preview="${albums.tracks.data[i].preview}" data-index="${i}">${title}</span>
                    <span class="d-block">${nomeArtista}</span>
                </div>
                <div>${durationMin}:${secRiman}
                </div>
            </div>`
    
            trackList.appendChild(li);
            const album = document.getElementById(idAlbum)
            album.addEventListener('click', function(e) {
                e.preventDefault();
                if (audio) {
                    if (isPlaying) {
                        togglePlayPause();
                    }
                    audio.removeEventListener('timeupdate', function() {
                        const progressPercent = (audio.currentTime / audio.duration) * 100;
                        progressBar.style.width = `${progressPercent}%`;
                    })
                    audio = null;
                }
                const preview = this.getAttribute('data-preview')
                audio = new Audio(preview)
                cTime.innerText = "0:00";
                canzoneInRiproduzione(albums.tracks.data[this.getAttribute('data-index')])
                audio.addEventListener('timeupdate', function() {
                    tTime.innerText = getDurata(this.duration)
                    const progressPercent = (this.currentTime / this.duration) * 100
                    cTime.innerText = getDurata(this.currentTime)
                    progressBar.style.width = `${progressPercent}%`
                })
                togglePlayPause()
            })
        }
    } else {
        console.log('Qualcosa è andato storto API DI M***A')
    }

    

};


let libreria = document.getElementById('libreria');

async function getLibrary() {
    for (const [key, value] of Object.entries(config.library)) {
		let artista = await fetch(`${config.fetchs.artist}${key}`, config.options.artist)
        if (artista.ok) {
            artista = await artista.json();
            const div = document.createElement('div')
            div.classList.add('row', 'py-2')
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
            `
            libreria.appendChild(div)
            value.albums.forEach(async (element) => {
                let album = await fetch(`${config.fetchs.album}${element}`, config.options.album)
                album = await album.json();
                const div2 = document.createElement('div')
                div2.classList.add('row', 'py-2')
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
                `
                libreria.appendChild(div2)
                album.tracks.data.forEach(async (element2) => {
                    const div3 = document.createElement('div')
                    div3.classList.add('row', 'py-2')
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
                    `
                    libreria.appendChild(div3)
                })
            })
        } else {
            console.log('Qualcosa è andato storto API DI M***A')
        }
    }
};


let ricerca = document.getElementById("ricerca");

ricerca.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    window.location.href = `index.html?risultato=${ricerca.value}`;
  }
});