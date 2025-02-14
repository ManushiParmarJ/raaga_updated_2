
document.addEventListener("DOMContentLoaded", function () {
    // Get album name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const albumName = urlParams.get("album");

    // Define album data with audio sources
    const albums = {
        "aashiqui2": {
            title: "Aashiqui 2",
            artist: "Arijit Singh",
            image: "Images/Album-1.jpg",
            description: "Aashiqui 2 is a Bollywood romantic musical drama film.",
            bgGradient: "bg-gradient-to-b from-[#386663] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Tum Hi Ho", artist: "Arijit Singh", duration: "4:22", src: "Musics/s1.mp3",image: "pics/ashiqui.jpeg"},
                { number: "2", title: "Sunn Raha Hai", artist: "Ankit Tiwari", duration: "5:07", src: "Musics/s2.mp3", image: "pics/ashiqui.jpeg"},
                { number: "3", title: "Chahun Main Ya Naa", artist: "Palak Muchhal, Arijit Singh", duration: "4:41", src: "Songs/chahun_main_ya_naa.mp3",image: "pics/ashiqui.jpeg" },
                { number: "4", title: "Bhula Dena", artist: "Mustafa Zahid", duration: "4:48", src: "Songs/bhula_dena.mp3",image: "pics/ashiqui.jpeg"}
            ]
        },

        "honeybhai": {
            title: "GLORY",
            artist: "Honey Singh",
            image: "Images/Album-2.jpg",
            description: "GLORY is a hip-hop album by Yo Yo Honey Singh.",
            bgGradient: "bg-gradient-to-b from-gray-500 to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Jaam", artist: "Honey Singh", duration: "3:45", src: "Musics/jaam.mp3", image: "Images/Album-2.jpg"},
                { number: "2", title: "Kalaastar", artist: "Honey Singh", duration: "3:22", src: "Musics/kalaastar.mp3", image: "Images/Album-2.jpg"},
                { number: "3", title: "Kanna Vich Waaliyan", artist: "Honey Singh", duration: "3:56", src: "Songs/kanna_vich_waaliyan.mp3", image: "Images/Album-2.jpg" },
                { number: "4", title: "Gatividhi", artist: "Honey Singh", duration: "3:30", src: "Songs/gatividhi.mp3", image: "Images/Album-2.jpg"}
            ]
        },
        "animal": {
            title: "Animal",
            artist: "Various Artists",
            image: "pics/animal.jpeg",
            description: "Animal is the soundtrack album for the 2023 Bollywood film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#A46923] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Jamal Kudu", artist: "Vishal Mishra", duration: "3:15", src: "Musics/jamal_kudu.mp3", image: "pics/animal.jpeg"},
                { number: "2", title: "Arjan Vailly", artist: "Bhupinder Babbal", duration: "3:30", src: "Musics/arjan_vailly.mp3", image: "pics/animal.jpeg"},
                { number: "3", title: "Papa Meri Jaan", artist: "Sonu Nigam", duration: "4:12", src: "Songs/papa_meri_jaan.mp3", image: "pics/animal.jpeg" },
                { number: "4", title: "Satranga", artist: "Arijit Singh", duration: "4:45", src: "Songs/satranga.mp3", image: "pics/animal.jpeg"}
            ]
        },
        "rockstar": {
            title: "Rockstar",
            artist: "A.R. Rahman",
            image: "pics/rockstar.jpeg",
            description: "Rockstar is the soundtrack album to the 2011 Hindi romantic drama film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#1B3938] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Sadda Haq", artist: "Mohit Chauhan", duration: "6:24", src: "Musics/sadda_haq.mp3", image: "pics/rockstar.jpeg"},
                { number: "2", title: "Kun Faya Kun", artist: "A.R. Rahman, Javed Ali, Mohit Chauhan", duration: "7:11", src: "Musics/kun_faya_kun.mp3", image: "pics/rockstar.jpeg"},
                { number: "3", title: "Nadaan Parindey", artist: "A.R. Rahman, Mohit Chauhan", duration: "6:49", src: "Songs/nadaan_parindey.mp3", image: "pics/rockstar.jpeg" },
                { number: "4", title: "Tum Ho", artist: "Mohit Chauhan", duration: "4:48", src: "Songs/tum_ho.mp3", image: "pics/rockstar.jpeg"}
            ]
        },
        "kabir_singh": {
            title: "Bhaag Milka Bhaag",
            artist: "Shankar-Ehsaan-Loy",
            image: "pics/bhagmilkabhag.jpeg",
            description: "An Album that revolves around our Spirits of Dedication.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Gurbani", artist: "Shankar-Ehsaan-Loy", duration: "6:11", src: "Musics/bekhayali.mp3", image: "pics/bhagmilkabhag.jpeg"},
                { number: "2", title: "Zinda", artist: "Shankar-Ehsaan-Loy", duration: "4:45", src: "Musics/tujhe_kitna_chahein_aur.mp3", image: "pics/bhagmilkabhag.jpeg"},
                { number: "3", title: "Mera Yaar", artist: "Shankar-Ehsaan-Loy", duration: "3:13", src: "Songs/mere_sohneya.mp3", image: "pics/bhagmilkabhag.jpeg" },
                { number: "4", title: "O Rangrez", artist: "Shankar-Ehsaan-Loy", duration: "3:54", src: "Songs/kaise_hua.mp3", image: "pics/bhagmilkabhag.jpeg"}
            ]
        },
        "ae_dil_hai_mushkil": {
            title: "Ae Dil Hai Mushkil",
            artist: "Pritam",
            image: "pics/adhm.jpeg",
            description: "Ae Dil Hai Mushkil is the soundtrack album to the 2016 Hindi romantic drama film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Ae Dil Hai Mushkil", artist: "Arijit Singh", duration: "4:29", src: "Musics/ae_dil_hai_mushkil.mp3", image: "pics/adhm.jpeg"},
                { number: "2", title: "Bulleya", artist: "Amit Mishra, Shilpa Rao", duration: "5:50", src: "Musics/bulleya.mp3", image: "pics/adhm.jpeg"},
                { number: "3", title: "Channa Mereya", artist: "Arijit Singh", duration: "4:49", src: "Songs/channa_mereya.mp3", image: "pics/adhm.jpeg" },
                { number: "4", title: "The Breakup Song", artist: "Arijit Singh, Badshah, Jonita Gandhi, Nakash Aziz", duration: "4:12", src: "Songs/the_breakup_song.mp3", image: "pics/adhm.jpeg"}
            ]
        },
        "yjhd": {
            title: "Yeh Jawaani Hai Deewani",
            artist: "Pritam",
            image: "pics/yjhd.jpeg",
            description: "Yeh Jawaani Hai Deewani is the soundtrack album to the 2013 Hindi romantic comedy-drama film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Badtameez Dil", artist: "Benny Dayal, Shefali Alvares", duration: "4:13", src: "Musics/badtameez_dil.mp3", image: "pics/yjhd.jpeg"},
                { number: "2", title: "Balam Pichkari", artist: "Vishal Dadlani, Shalmali Kholgade", duration: "4:37", src: "Musics/balam_pichkari.mp3", image: "pics/yjhd.jpeg"},
                { number: "3", title: "Ilahi", artist: "Arijit Singh", duration: "3:49", src: "Songs/ilahi.mp3", image: "pics/yjhd.jpeg" },
                { number: "4", title: "Kabira", artist: "Arijit Singh, Harshdeep Kaur", duration: "3:43", src: "Songs/kabira.mp3", image: "pics/yjhd.jpeg"}
            ]
        },
        "roy": {
            title: "Roy",
            artist: "Ankit Tiwari",
            image: "pics/roy.jpeg",
            description: "Roy is the soundtrack album to the 2015 Hindi romantic thriller film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Sooraj Dooba Hain", artist: "Arijit Singh, Aditi Singh Sharma", duration: "4:24", src: "Musics/sooraj_dooba_hain.mp3", image: "pics/roy.jpeg"},
                { number: "2", title: "Tu Hai Ki Nahi", artist: "Ankit Tiwari", duration: "5:37", src: "Musics/tu_hai_ki_nahi.mp3", image: "pics/roy.jpeg"},
                { number: "3", title: "Chittiyaan Kalaiyaan", artist: "Kanika Kapoor, Meet Bros", duration: "3:41", src: "Songs/chittiyaan_kalaiyaan.mp3", image: "pics/roy.jpeg" },
                { number: "4", title: "Boond Boond", artist: "Ankit Tiwari", duration: "5:17", src: "Songs/boond_boond.mp3", image: "pics/roy.jpeg"}
            ]
        },
        "dilwale": {
            title: "Dilwale",
            artist: "Pritam",
            image: "pics/dilwale.jpeg",
            description: "Dilwale is the soundtrack album to the 2015 Hindi romantic action comedy film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Gerua", artist: "Arijit Singh, Antara Mitra", duration: "5:45", src: "Musics/gerua.mp3", image: "pics/dilwale.jpeg"},
                { number: "2", title: "Janam Janam", artist: "Arijit Singh, Antara Mitra", duration: "3:57", src: "Musics/janam_janam.mp3", image: "pics/dilwale.jpeg"},
                { number: "3", title: "Manma Emotion Jaage", artist: "Amit Mishra, Anushka Manchanda", duration: "3:31", src: "Songs/manma_emotion_jaage.mp3", image: "pics/dilwale.jpeg" },
                { number: "4", title: "Tukur Tukur", artist: "Arijit Singh, Kanika Kapoor, Siddharth Mahadevan, Neha Kakkar", duration: "3:58", src: "Songs/tukur_tukur.mp3", image: "pics/dilwale.jpeg"}
            ]
        },

        "half_girlfriend": {
            title: "Half Girlfriend",
            artist: "Mithoon, Tanishk Bagchi",
            image: "pics/hgf.webp",
            description: "Half Girlfriend is the soundtrack album to the 2017 Hindi romantic drama film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Baarish", artist: "Ash King, Shashaa Tirupati", duration: "4:49", src: "Musics/baarish.mp3", image: "pics/hgf.webp"},
                { number: "2", title: "Phir Bhi Tumko Chaahunga", artist: "Arijit Singh, Shashaa Tirupati", duration: "5:30", src: "Musics/phir_bhi_tumko_chaahunga.mp3", image: "pics/hgf.webp"},
                { number: "3", title: "Thodi Der", artist: "Farhan Saeed, Shreya Ghoshal", duration: "5:36", src: "Songs/thodi_der.mp3", image: "pics/hgf.webp" },
                { number: "4", title: "Lost Without You", artist: "Ami Mishra, Anushka Shahaney", duration: "4:24", src: "Songs/lost_without_you.mp3", image: "pics/hgf.webp"}
            ]
        },
        //blackpanther
        "ek_villain": {
            title: "Black Panther",
            artist: "Kendrick Lamar,SZA",
            image: "pics/blackpanther.jpeg",
            //description: "Ek Villain is the soundtrack album to the 2014 Hindi romantic thriller film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Black Panther", artist: "Kendrick Lamar", duration: "5:40", src: "Musics/galliyan.mp3", image: "pics/blackpanther.jpeg"},
                { number: "2", title: "All The Stars", artist: "Kendrick Lamar,SZA", duration: "4:35", src: "Musics/banjaara.mp3", image: "pics/blackpanther.jpeg"},
                { number: "3", title: "The Ways", artist: "Kendrick Lamar", duration: "4:21", src: "Songs/hamdard.mp3", image: "pics/blackpanther.jpeg" },
                { number: "4", title: "I Am", artist: "Kendrick Lamar", duration: "4:40", src: "Songs/awari.mp3", image: "pics/blackpanther.jpeg"}
            ]
        },
        //sos
        "sanam_re": {
            title: "SOS",
            artist: "SZA",
            image: "pics/sos.jpeg",
           // description: "Sanam Re is the soundtrack album to the 2016 Hindi romantic drama film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "SOS", artist: "SZA", duration: "4:28", src: "Musics/sanam_re.mp3", image: "pics/sos.jpeg"},
                { number: "2", title: "Kill Bill", artist: "SZA", duration: "4:24", src: "Musics/gazab_ka_hai_din.mp3", image: "pics/sos.jpeg"},
                { number: "3", title: "Seek & Destroy", artist: "SZA", duration: "5:08", src: "Songs/kya_tujhe_ab_ye_dil_bataye.mp3", image: "pics/sos.jpeg" },
                { number: "4", title: "Love Language", artist: "SZA", duration: "3:18", src: "Songs/humne_pee_rakhi_hai.mp3", image: "pics/sos.jpeg"}
            ]
        },
        //jigardan_gadhvi
        "raaz_reboot": {
            title: "Vrindavan",
            artist: "Jigardan Gadhavi",
            image: "pics/jigro.jpeg",
            description: "Twril on the Og garba beats of Jigardan.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Tara Vina Shyam", artist: "Jigardan Gadhavi", duration: "5:32", src: "Musics/lo_maan_liya.mp3", image: "pics/jigro.jpeg"},
                { number: "2", title: "Aaj No Chandalyo", artist: "Jigardan Gadhavi", duration: "5:14", src: "Musics/raaz_aankhein_teri.mp3", image: "pics/jigro.jpeg"},
                { number: "3", title: "Ame Mahiyara Re", artist: "Jigardan Gadhavi", duration: "5:49", src: "Songs/yaad_hai_na.mp3", image: "pics/jigro.jpeg" },
                { number: "4", title: "Hudla", artist: "Jigardan Gadhavi", duration: "4:51", src: "Songs/sound_of_raaz.mp3", image: "pics/jigro.jpeg"}
            ]
        },
        "love_aaj_kal": {
            title: "Love Aaj Kal",
            artist: "Pritam",
            image: "pics/lajkal.jpeg",
            description: "Love Aaj Kal is the soundtrack album to the 2020 Hindi romantic drama film of the same name.",
            bgGradient: "bg-gradient-to-b from-[#FF9800] to-black", // 🎨 Background Gradient
            songs: [
                { number: "1", title: "Shayad", artist: "Arijit Singh", duration: "4:07", src: "Musics/shayad.mp3", image: "pics/lajkal.jpeg"},
                { number: "2", title: "Haan Main Galat", artist: "Arijit Singh, Shashwat Singh", duration: "3:38", src: "Musics/haan_main_galat.mp3", image: "pics/lajkal.jpeg"},
                { number: "3", title: "Mehrama", artist: "Darshan Raval, Antara Mitra", duration: "4:09", src: "Songs/mehrama.mp3", image: "pics/lajkal.jpeg" },
                { number: "4", title: "Aur Tum Aaye", artist: "KK", duration: "4:38", src: "Songs/aur_tum_aaye.mp3", image: "pics/lajkal.jpeg"}
            ]
        },
    };

    if (!albumName || !albums[albumName]) {
        console.error("Invalid album name:", albumName);
        return;
    }

    const album = albums[albumName];
    const songListContainer = document.getElementById("songList");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const audioPlayer = document.getElementById("audioPlayer");
    const playerImage = document.getElementById("playerImage");
    const playerTitle = document.getElementById("playerTitle");
    const playerArtist = document.getElementById("playerArtist");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let currentSongIndex = 0;
    let currentSongs = album.songs;

    // Populate album details
    document.getElementById("albumTitle").innerText = album.title;
    document.getElementById("albumArtist").innerText = album.artist;
    document.getElementById("albumDescription").innerText = album.description;
    document.getElementById("albumImage").src = album.image;

    // Load songs dynamically
    songListContainer.innerHTML = ""; 
    album.songs.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.className = "song-item flex items-center p-4 hover:bg-white/10 rounded-lg transition-colors group cursor-pointer";
        songItem.setAttribute("data-index", index);

        songItem.innerHTML = `
            <div class="w-8 text-center relative">
                <span class="song-number text-gray-400 opacity-100 group-hover:opacity-0 transition-opacity duration-200">${index + 1}</span>
                <i class="fas fa-play text-white text-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
            </div>
            <img src="${song.image}" class="w-12 h-12 rounded mx-4">
            <div class="flex-1">
                <h3 class="font-semibold">${song.title}</h3>
                <p class="text-sm text-gray-400">${song.artist}</p>
            </div>
            <span class="text-gray-400 mr-4">${song.duration}</span>
        `;

        // Play song when clicked
        songItem.addEventListener("click", function () {
            playSong(index);
        });

        songListContainer.appendChild(songItem);
    });

    function playSong(songIndex) {
        currentSongIndex = songIndex;
        const song = currentSongs[currentSongIndex];

        playerTitle.innerText = song.title;
        playerArtist.innerText = song.artist;
        playerImage.src = song.image;
        audioPlayer.src = song.src;

        document.getElementById("musicPlayer").classList.remove("hidden");
        audioPlayer.play();
        playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    }

    // Play/Pause Button - Fixing the Pause Issue
    playPauseBtn.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.innerHTML = `<i class="fas fa-pause"></i>`;
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = `<i class="fas fa-play"></i>`;
        }
    });

    // Next and Previous Song
    nextBtn.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex + 1) % currentSongs.length;
        playSong(currentSongIndex);
    });

    prevBtn.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex - 1 + currentSongs.length) % currentSongs.length;
        playSong(currentSongIndex);
    });
});