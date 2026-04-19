// КНОПКИ
const mixSong_button = document.querySelector('.mix_songs_button')
const prevSong_button = document.querySelector('.prev_song_button')
const playSong_button = document.querySelector('.play_song_button')
const nextSong_button = document.querySelector('.next_song_button')
const repeatSong_button = document.querySelector('.repeat_song_button')
const volume_play_button = document.querySelector('.volume_play_button')

// О ПЕСНЕ
const songCover = document.querySelector('.song_img')
const songTitle = document.querySelector('.song_info__title')
const songArtists = document.querySelector('.list_of_artists')


// ИСПОЛНИТЕЛИ
const artists_pick = document.querySelector('.artists_pick')
const close_artists = document.querySelector('.close_artists')
const artists = document.querySelector('.artists')
const artistPhoto = document.querySelectorAll('.artist_photo')
const artistName = document.querySelectorAll('.artist_name')
const artistsItem = document.querySelectorAll('.artists_item')

artistsItem[1].style.display = 'none'
artistsItem[2].style.display = 'none'
artistsItem[3].style.display = 'none'

// ПРОГРЕСС
const progress = document.querySelector('.progress')
const current_time = document.querySelector('.current_time')
const song_duration = document.querySelector('.song_duration')


const photos_artists = [
    {
        text: 'xxxmanera',
        photo: 'artists/xxxmanera.jpeg',
        profile_photo: 'images/xxxmanera.png'
    },
    {
        text: 'asteria',
        photo: 'artists/asteria.jpg'
    },
    {
        text: 'Vizzyx',
        photo: 'artists/Vizzyx.jpg',
        profile_photo: 'images/Vizzyx.png'
    },
    {
        text: 'Kai Angel',
        photo: 'artists/kai angel.jpg'
    },
    {
        text: 'd3r',
        photo: 'artists/d3r.jpg',
        profile_photo: 'images/d3r.png'
    },
    {
        text: 'dollreal',
        photo: 'artists/dollreal.jpg'
    },
    {
        text: 'kets4eki',
        photo: 'artists/kets4eki.jpg'
    },
    {
        text: 'UpVampin',
        photo: 'artists/Upvampin.jpg',
        profile_photo: 'images/UpVampin.png'
    },
    {
        text: '5GSWAG',
        photo: 'artists/5GSWAG.jpg'
    },
    {
        text: 'clout',
        photo: 'artists/clout.jpeg'
    },
    {
        text: 'skypebf',
        photo: 'artists/skypebf.jpeg'
    },
    {
        text: 'Syris',
        photo: 'artists/Syris.jpeg'
    },
    {
        text: 'мистер модератор',
        photo: 'artists/мистер модератор.jpg'
    },
    {
        text: 'SODA LUV',
        photo: 'artists/SODA LUV.jpg'
    },
    {
        text: 'dmtboy',
        photo: 'artists/dmtboy.jpg'
    },
    {
        text: '`ёarly',
        photo: 'artists/`ёarly.jpg'
    },
    {
        text: 'Lytra',
        photo: 'artists/Lytra.jpg'
    },
    {
        text: 'm0v',
        photo: 'artists/m0v.jpeg'
    },
    {
        text: 'm1v',
        photo: 'artists/m1v.jpeg'
    },
    {
        text: 'luvwillow',
        photo: 'artists/luvwillow.jpg'
    },
    {
        text: 'rompy',
        photo: 'artists/rompy.png'
    },
    {
        text: 'wikuro',
        photo: 'artists/wikuro.jpg'
    },
    {
        text: 'stravvbery',
        photo: 'artists/stravvbery.jpg'
    },
    {
        text: 'yungalligator',
        photo: 'artists/yungalligator.jpg'
    },
    {
        text: 'athysue',
        photo: 'artists/athysue.jpeg'
    },
    {
        text: 'Clover!',
        photo: 'artists/Clover!.jpg'
    },
    {
        text: 'Proz',
        photo: 'artists/Proz.png'
    },
    {
        text: 'шейди',
        photo: 'artists/шейди.jpg'
    },
    {
        text: 'akiko!',
        photo: 'artists/akiko!.jpg'
    },
    {
        text: 'GASPXR',
        photo: 'artists/GASPXR.jpg'
    },
    {
        text: 'p6inkillr',
        photo: 'artists/p6inkillr.jpeg'
    },
    {
        text: 'CR0T0N',
        photo: 'artists/CR0T0N.jpg'
    },
    {
        text: 'BroA$tar',
        photo: 'artists/BroA$tar.jpeg'
    },
    {
        text: 'xaduma',
        photo: 'artists/xaduma.jpg'
    },
]




// СПИСОК ПЕСЕН
const songs = [
    {
        cover: 'images/xxxmanera - usb.png',
        title: 'usb',
        artist_1: 'xxxmanera',
        audio: 'audio/usb.mp3'
    },
    {
        cover: "images/d3r - jealous (UNFINISHED).jpeg",
        title: 'jealous',
        artist_1: 'd3r',
        audio: 'audio/jealous.mp3'
    },
    {
        cover: 'images/dollreal, d3r - RED.png',
        title: 'RED',
        artist_1: 'dollreal',
        artist_2: 'd3r',
        audio: 'audio/red.m4a'
    },
    {
        cover: 'images/d3r, kets4eki, asteria - DROP IT!.jpg',
        title: 'DROP IT!',
        artist_1: 'd3r',
        artist_2: 'kets4eki',
        artist_3: 'asteria',
        audio: 'audio/drop it.m4a'
    },
    {
        cover: 'images/Upvampin, kets4eki, 5GSWAG - PASS THAT HOE AROUND!.jpeg',
        title: 'PASS THAT HOE AROUND!',
        artist_1: 'UpVampin',
        artist_2: 'kets4eki',
        artist_3: '5GSWAG',
        audio: 'audio/pass that hoe around!.m4a'
    },
    {
        cover: 'images/clout - sEx dOLL.jpeg',
        title: 'sEx dOLL%)',
        artist_1: 'clout',
        audio: 'audio/sEx dOLL.m4a'
    },
    {
        cover: 'images/skypebf, kets4eki, Syris - talk shit.jpeg',
        title: 'talk shit',
        artist_1: 'skypebf',
        artist_2: 'kets4eki',
        artist_3: 'Syris',
        audio: 'audio/talk shit.m4a'
    },
    {
        cover: 'images/мистер модератор, SODA LUV - занозы.jpeg',
        title: "занозы",
        artist_1: 'мистер модератор',
        artist_2: 'SODA LUV',
        audio: 'audio/занозы.m4a'
    },
    {
        cover: 'images/dmtboy - OMGDBL.jpeg',
        title: 'OMGDBL',
        artist_1: 'dmtboy',
        audio: 'audio/omgdbl.m4a'
    },
    {
        cover: 'images/Kai Angel - im all blessed the fuck up.jpeg',
        title: 'im all blessed the fuck up',
        artist_1: 'Kai Angel',
        audio: 'audio/im all blessed the fuck up.m4a'
    },
    {
        cover: 'images/Vizzyx, `ёarly - INFLUENTIAL.jpeg',
        title: 'INFLUENTIAL',
        artist_1: 'Vizzyx',
        artist_2: '`ёarly',
        audio: 'audio/influential.mp3'
    },
    {
        cover: 'images/asteria, Lytra - bad bad bad.png',
        title: 'bad bad bad',
        artist_1: 'asteria',
        artist_2: 'Lytra',
        audio: 'audio/bad bad bad.m4a'
    },
    {
        cover: 'images/m0v, m1v - addicts.jpeg',
        title: 'run',
        artist_1: 'm0v',
        artist_2: 'm1v',
        audio: 'audio/addicts.m4a'
    },
    {
        cover: 'images/m0v, m1v - addicts.jpeg',
        title: 'addicts',
        artist_1: 'm0v',
        artist_2: 'luvwillow',
        artist_3: 'm1v',
        audio: 'audio/run.m4a'
    },
    {
        cover: 'images/rompy - M1NVT3.jpeg',
        title: '//M1NVT3',
        artist_1: 'rompy',
        audio: 'audio/m1nvt3.m4a'
    },
    {
        cover: 'images/wikuro - I REMEMBER.png',
        title: 'I REMEMBER',
        artist_1: 'wikuro',
        audio: 'audio/i remember.mp3'
    },
    {
        cover: 'images/Vizzyx, stravvbery - Соседи.jpeg',
        title: 'Соседи',
        artist_1: 'Vizzyx',
        artist_2: 'stravvbery',
        audio: 'audio/соседи.m4a'
    },
    {
        cover: 'images/Vizzyx - LIFESTYLE.jpeg',
        title: 'LIFESTYLE',
        artist_1: 'Vizzyx',
        audio: 'audio/lyfestyle.m4a'
    },
    {
        cover: 'images/yungalligator, athysue - angelo4ek.jpeg',
        title: 'angelo4ek',
        artist_1: 'yungalligator',
        artist_2: 'athysue',
        audio: 'audio/angelo4ek.m4a'
    },
    {
        cover: 'images/kets4eki, asteria - 40 bands in this bitch.jpeg',
        title: '40 bands in this bitch',
        artist_1: 'kets4eki',
        artist_2: 'asteria',
        audio: 'audio/40 bands in this bitch.m4a'
    },
    {
        cover: 'images/Clover!, Proz - BODYBAGS!.jpeg',
        title: 'BODYBAGS!',
        artist_1: 'Clover!',
        artist_2: 'Proz',
        audio: 'audio/bodybags!.m4a'
    },
    {
        cover: 'images/asteria, kets4eki - hell yeah!.jpeg',
        title: 'hell yeah!',
        artist_1: 'asteria',
        artist_2: 'kets4eki',
        audio: 'audio/hell yeah!.m4a'
    },
    {
        cover: 'images/шейди, akiko! - intheclub.png',
        title: '#intheclub ',
        artist_1: 'шейди',
        artist_2: 'akiko!',
        audio: 'audio/intheclub.mp3'
    },
    {
        cover: 'images/asteria, kets4eki - all u can eat.jpeg',
        title: 'all u can eat',
        artist_1: 'asteria',
        artist_2: 'kets4eki',
        audio: 'audio/all u can eat.m4a'
    },
    {
        cover: 'images/clout - МРТ.png',
        title: 'МРТ',
        artist_1: 'clout',
        audio: 'audio/мрт.m4a'
    },
    {
        cover: 'images/clout - ХтП.png',
        title: 'ХтП',
        artist_1: 'clout',
        audio: 'audio/хтп.m4a'
    },
    {
        cover: 'images/clout - КоД ХаОса.png',
        title: 'КоД ХаОса*404#',
        artist_1: 'clout',
        audio: 'audio/код хаоса.m4a'
    },
    {
        cover: 'images/Clover! - YOU AND I.png',
        title: 'YOU AND I',
        artist_1: 'Clover!',
        audio: 'audio/you and i.mp3'
    },
    {
        cover: 'images/d3r - im so delusiona.jpg',
        title: 'im so delusional',
        artist_1: 'd3r',
        audio: 'audio/im so delusional.m4a'
    },
    {
        cover: 'images/Clover! - bacardi!.png',
        title: 'bacardi!',
        artist_1: 'Clover!',
        audio: 'audio/bacardi!.m4a'
    },
    {
        cover: 'images/d3r, kets4eki, Proz - life force.jpg',
        title: 'life force',
        artist_1: 'd3r',
        artist_2: 'kets4eki',
        artist_3: 'Proz',
        audio: 'audio/life force.m4a'
    },
    {
        cover: 'images/Clover! - CROWD PLEASER!.jpg',
        title: 'CROWD PLEASER!',
        artist_1: 'Clover!',
        audio: 'audio/crowd pleaser!.m4a'
    },
    {
        cover: 'images/GASPXR, CR0T0N, BroA$tar - ADHD 3!.jpeg',
        title: 'ADHD 3!',
        artist_1: 'GASPXR',
        artist_2: 'CR0T0N',
        artist_3: 'BroA$tar',
        audio: 'audio/adhd 3!.mp3'
    },
    {
        cover: 'images/p6inkillr, dollreal, Proz - TAKE A BITE.jpg',
        title: 'TAKE A BITE',
        artist_1: 'p6inkillr',
        artist_2: 'dollreal',
        artist_3: 'Proz',
        audio: 'audio/take a bite.mp3'
    },
    {
        cover: 'images/xaduma, UpVampin - BLOODSUCKER.jpg',
        title: 'BLOODSUCKER',
        artist_1: 'xaduma',
        artist_2: 'UpVampin',
        audio: 'audio/bloodsucker.mp3'
    },
]

let currentSongIndex = 0
const audio = document.createElement("audio")

// РАНДОМ ВЫБОР ПЕСНИ
const randomIndex = getRandomNumber(songs.length)

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}


const artistProfile = document.querySelector('.artist-profile')
const artistProfilePhoto = document.querySelector('.artist-profile__photo-img')
const artistProfileBack = document.querySelector('.artist-profile__back')
const artistProfileName = document.querySelector('.artist-profile__name')


artistProfileBack.addEventListener('click', ()=> {
    artistProfile.style.display = 'none'
})








// ОБНОВИТЬ ЧТО-ТО
updateSong()

function updateSong () {
    const song = songs[currentSongIndex]
    
    // const sing = songs[randomIndex] МОЖЕТ БЫТЬ КОГДА-НИБУДЬ БУДЕТ....
    songCover.src = song.cover
    songTitle.innerText = song.title

// ИСПОЛНИТЕЛИ ПЕСНИ (В ПЛЕЕРЕ) 
    listArtists = ['','','','']

    listArtists[0] = song.artist_1
    listArtists[1] = song.artist_2 || ""
    listArtists[2] = song.artist_3 || ""
    listArtists[3] = song.artist_4 || ""

    const listArtistsFiltered = listArtists.filter(Boolean).join(', ');

    songArtists.innerText = listArtistsFiltered

// ИСПОЛНИТЕЛИ В ОТКРЫВАЮЩЕМСЯ ОКНЕ
    artistName[0].innerText = song.artist_1
    artistName[1].innerText = song.artist_2 || ""
    artistName[2].innerText = song.artist_3 || ""
    artistName[3].innerText = song.artist_4 || ""

    if (artistName[1].innerText.trim()) {
        artistsItem[1].style.display = 'flex'
    } else {
        artistsItem[1].style.display = 'none'
    }

    if (artistName[2].innerText.trim()) {
        artistsItem[2].style.display = 'flex'
    } else {
        artistsItem[2].style.display = 'none'
    }

    if (artistName[3].innerText.trim()) {
        artistsItem[3].style.display = 'flex'
    } else {
        artistsItem[3].style.display = 'none'
    }

    artistsItem[0].addEventListener('click', ()=> {
        artistProfile.style.display = 'block'
        artists_pick.style.display = 'none'
        artistProfileName.innerText = artistName[0].innerText
    })

    artistsItem[1].addEventListener('click', ()=> {
        artistProfile.style.display = 'block'
        artists_pick.style.display = 'none'
        artistProfileName.innerText = artistName[1].innerText
    })

    artistsItem[2].addEventListener('click', ()=> {
        artistProfile.style.display = 'block'
        artists_pick.style.display = 'none'
        artistProfileName.innerText = artistName[2].innerText
    })

    artistsItem[3].addEventListener('click', ()=> {
        artistProfile.style.display = 'block'
        artists_pick.style.display = 'none'
        artistProfileName.innerText = artistName[3].innerText
    })





    const artistName1 = artistName[0].innerText
    const foundArtist1 = photos_artists.find(item => item.text === artistName1)

    const artistName2 = artistName[1].innerText || ""
    const foundArtist2 = photos_artists.find(item => item.text === artistName2)

    const artistName3 = artistName[2].innerText || ""
    const foundArtist3 = photos_artists.find(item => item.text === artistName3)

    const artistName4 = artistName[3].innerText || ""
    const foundArtist4 = photos_artists.find(item => item.text === artistName4)


    if (foundArtist1) {
        // artistPhoto[0] = document.querySelector('.art_photo1')
        artistPhoto[0].src = foundArtist1.photo
        artistProfilePhoto.src = foundArtist1.profile_photo
        
    } 
    
    if (foundArtist2) {
        // artistPhoto[1] = document.querySelector('.art_photo2')
        artistPhoto[1].src = foundArtist2.photo
        artistProfilePhoto.src = foundArtist2.profile_photo
    } 

    if (foundArtist3) {
        // artistPhoto[2] = document.querySelector('.art_photo3')
        artistPhoto[2].src = foundArtist3.photo
        artistProfilePhoto.src = foundArtist3.profile_photo
    } 

    if (foundArtist4) {
        // artistPhoto[3] = document.querySelector('.art_photo4')
        artistPhoto[3].src = foundArtist4.photo
        artistProfilePhoto.src = foundArtist4.profile_photo
    } 

    audio.src = song.audio

    audio.onloadedmetadata = function() {
        progress.value = 0;
        progress.max = audio.duration;
    };
}


// ВРЕМЯ ПЕСНИ
progress.addEventListener('change', function() {
    audio.currentTime = progress.value;
})

function moveProgress() {
    progress.value = audio.currentTime;
    current_time.innerHTML = sToStr(Math.round(audio.currentTime));
    song_duration.innerHTML = sToStr(Math.round(audio.duration));
}

setInterval(moveProgress, 1000);

audio.addEventListener('ended', nextSong)

function sToStr(s) {
  let m = Math.trunc(s / 60) + ''
  s = (s % 60) + ''
  return m.padStart(2, 0) + ':' + s.padStart(2, 0)
}


// СЛЕДУЮЩАЯ ПЕСНЯ
function nextSong() {
    const song = songs[currentSongIndex]

    playSong_button.src = 'images/pausesongbutton.svg'
    if (currentSongIndex == songs.length - 1 && audio.currentTime == audio.duration) {
        playSong_button.src = 'images/playsongbutton.svg'
        return
    }
    currentSongIndex++

    updateSong()
    audio.play()
}
nextSong_button.addEventListener('click', nextSong)


// ПРЕДЫДУЩАЯ ПЕСНЯ
function prevSong() {
    const song = songs[currentSongIndex]

    if (currentSongIndex != 0) {
        playSong_button.src = 'images/pausesongbutton.svg'
    } 
    if (audio.currentTime < 5) {
        currentSongIndex--

    updateSong()
    audio.play()
    } else {
        audio.currentTime = 0
        audio.play();
    }
}
prevSong_button.addEventListener('click', prevSong)


// ВОСПРОИЗВЕДЕНИЕ АУДИО
playSong_button.addEventListener("click", function() {
    if (!audio.paused) {
        playSong_button.src = 'images/playsongbutton.svg'
        audio.pause()
    }
    else {
        playSong_button.src = 'images/pausesongbutton.svg'
        audio.play()
    }
})


// MUTE ЗВУК  
volume_play_button.addEventListener('click', ()=> {
    if (audio.volume != 0) {
        audio.volume = 0;
    } else {
        audio.volume = 1.0
    }
})


// КНОПКА ЗВУКА
volume_play_button.addEventListener('click', ()=> {
    if (volume_play_button.getAttribute('src') === 'images/volume_play1.svg') {
        volume_play_button.src = 'images/volume_mute.svg'
    }
    else {
        volume_play_button.src = 'images/volume_play1.svg'
    }
})


// БЛОК "ИСПОЛНИТЕЛИ"
artists_pick.style.display = 'none'

songArtists.addEventListener('click', ()=> {
    artists_pick.style.display = 'block'
})

close_artists.addEventListener('click', ()=> {
    artists_pick.style.display = 'none'
})







































