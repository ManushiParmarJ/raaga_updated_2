        // JavaScript for interactivity (you can add more as needed)
        document.addEventListener('DOMContentLoaded', () => {
            const playButton = document.querySelector('button.bg-green-500');
            const followButton = document.querySelector('button.bg-transparent');

            playButton.addEventListener('click', () => {
                alert('Playing music...');
            });

            followButton.addEventListener('click', () => {
                followButton.textContent = followButton.textContent === 'Follow' ? 'Following' : 'Follow';
                followButton.classList.toggle('bg-white');
                followButton.classList.toggle('text-black');
            });
        });


        document.addEventListener("DOMContentLoaded", function () {
            const urlParams = new URLSearchParams(window.location.search);
            const artistKey = urlParams.get("artist");
        
            const artists = {
                "arijit_singh": {
                    name: "Arijit Singh",
                    banner: "pics/a1.jpg",
                    listeners: "43.7M monthly Listeners",
                    songs: [
                        { title: "Sajni", duration: "4:22", image: "pics/sajni.jpeg" },
                        { title: "Raabta", duration: "3:45", image: "pics/raabta.jpeg" },
                        { title: "Agar Tum Saath Ho", duration: "5:41", image: "pics/agartum.jpeg" },
                        { title: "Tum Hi Ho", duration: "4:22", image: "pics/ashiqui.jpeg" },
                        { title: "Satranga", duration: "3:45", image: "pics/satranga.jpeg" },
                        { title: "Agar Tum Saath Ho", duration: "5:41", image: "pics/agartum.jpeg" },
                        { title: "Apna Bana Le", duration: "3:45", image: "pics/apnabanale.jpeg" },
                        { title: "Pal Pal Dil Ke Pass", duration: "5:41", image: "pics/palpal.jpeg" }

                    ],
                    suggested: [
                        { title: "Humdard", duration: "4:22", image: "pics/hum.jpeg" },
                        { title: "Zaalima", duration: "3:45", image: "pics/zaalima.jpeg" },
                        { title: "Afsos", duration: "5:41", image: "pics/afsos.jpeg" },
                        { title: "Ajab Si", duration: "4:22", image: "pics/ajibsi.jpeg" }
                    ],
                    releases: [
                        { title: "EK tha Raja", year: "2024", image: "pics/album1.jpeg" },
                        { title: "Ae Dil Hai Mushkil", year: "2016", image: "pics/adhm.jpeg" },
                        { title: "Tamasha", year: "2015", image: "pics/agartum.jpeg" },
                        { title: "Pal Pal", year: "2018", image: "pics/palpal.jpeg" },
                        { title: "Sajni", year: "2024", image: "pics/sajni.jpeg" }
                    ]
                },
        
                "the_weeknd": {
                    name: "The Weeknd",
                    banner: "weeknd/weeknd.jpg",
                    listeners: "123,873,105 monthly listeners",
                    songs: [
                        { title: "Blinding Lights", duration: "3:22", image: "weeknd/BLinding lights.jpeg" },
                        { title: "Starboy", duration: "3:51", image: "weeknd/lastsong.jpeg" },
                        { title: "Save Your Tears", duration: "2:35", image: "weeknd/saveyourtears.jpeg" },
                        { title: "Timeless", duration: "3:12", image: "weeknd/timeless.jpeg" },
                        { title: "One Of The Girls", duration: "4:01", image: "weeknd/wakemeup.jpeg" },
                        { title: "Party Monster", duration: "3:11", image: "weeknd/lastsong.jpeg" },
                        { title: "Secrets", duration: "5:22", image: "weeknd/timeless.jpeg" },
                        { title: "Stargirl Interlude", duration: "1:50", image: "weeknd/random.jpeg" },
                        { title: "False Alarm", duration: "2:05", image: "weeknd/saveyourtears.jpeg" }
                    ],
                    suggested: [
                        { title: "God's Plan", artist: "Drake", image: "weeknd/godsplan.jpeg" },
                        { title: "After Hours", artist: "The Weeknd", image: "weeknd/afterhours.jpeg" }
                    ],
                    releases: [
                        { title: "Hurry Up Tomorrow", year: "2025", image: "weeknd/timeless.jpeg" },
                        { title: "After Hours", year: "2020", image: "weeknd/lastsong.jpeg" },
                        { title: "Dawn FM", year: "2022", image: "weeknd/BLinding lights.jpeg" },
                        { title: "Falling", year: "2019", image: "weeknd/wakemeup.jpeg" },
                        { title: "Cry For You", year: "2021", image: "weeknd/saveyourtears.jpeg" }
                    ]
                },
        
                "ed_sheeran": {
                    name: "Ed Sheeran",
                    banner: "pics/edm.jpg",
                    listeners: "71M monthly listeners",
                    songs: [
                        { title: "Perfect", duration: "4:23", image: "pics/ed1.jpeg" },
                        { title: "Shape of You", duration: "3:53", image: "pics/ed1.jpeg" },
                        { title: "Photograph", duration: "4:41", image: "pics/ed.jpeg" },
                        { title: "Shivers", duration: "4:23", image: "pics/ed2.jpeg" },
                        { title: "Shape of You", duration: "3:53", image: "pics/ed3.jpeg" },
                        { title: "Thinking Out Loud", duration: "4:41", image: "pics/ed4.jpeg" },
                        { title: "Perfect", duration: "4:23", image: "pics/ed1.jpeg" },
                        { title: "Shape of You", duration: "3:53", image: "pics/ed5.jpeg" },
                        { title: "Thinking Out Loud", duration: "4:41", image: "pics/ed6.jpeg" }
                    ],
                    suggested: [
                        { title: "Aura", artist: "The-X", image: "weeknd/uwp4592893.jpeg" },
                        { title: "Closer", artist: "The Chainsmokers", image: "weeknd/random.jpeg" }
                    ],
                    releases: [
                        { title: "Deluxe", year: "2017", image: "pics/ed1.jpeg" },
                        { title: "=", year: "2021", image: "pics/ed.jpeg" },
                        { title: "Autumn Variations", year: "2023", image: "pics/ed3.jpeg" },
                        { title: "Change", year: "2020", image: "pics/ed4.jpeg" },
                        { title: "To The Stars", year: "2012", image: "pics/ed6.jpeg" }
                    ]
                },
        
                "taylor_swift": {
                    name: "Taylor Swift",
                    banner: "pics/tsm.jpg",
                    listeners: "120,670,300 monthly listeners",
                    songs: [
                        { title: "Cruel Summer", duration: "3:57", image: "pics/ts1.jpeg" },
                        { title: "Firtnight", duration: "3:52", image: "pics/ts8.jpeg" },
                        { title: "Lover", duration: "3:39", image: "pics/ts2.jpeg" },
                        { title: "Cardigan", duration: "3:57", image: "pics/ts3.jpeg" },
                        { title: "You Belong With Me", duration: "3:52", image: "pics/ts4.jpeg" },
                        { title: "Shake It Off", duration: "3:39", image: "pics/ts5.jpeg" },
                        { title: "Love Story", duration: "3:57", image: "pics/ts6.jpeg" },
                        { title: "The Archer", duration: "3:52", image: "pics/ts7.jpeg" },
                        { title: "Paper Rings", duration: "3:39", image: "pics/ts2.jpeg" }
                    ],
                    suggested: [
                        { title: "Blank Space", artist: "Taylor Swift", image: "pics/ts5.jpeg" },
                        { title: "Anti-Hero", artist: "Taylor Swift", image: "pics/ts8.jpeg" }
                    ],
                    releases: [
                        { title: "Lover", year: "2019", image: "pics/ts8.jpeg" },
                        { title: "Folklore", year: "2022", image: "pics/ts6.jpeg" },
                        { title: "1989", year: "2023", image: "pics/ts1.jpeg" },
                        { title: "Sweet", year: "2019", image: "pics/ts2.jpeg" },
                        { title: "Paper-Hearts", year: "2010", image: "pics/ts5.jpeg" }
                    ]
                },
        
                "dua_lipa": {
                    name: "Dua Lipa",
                    banner: "pics/duam.jpg",
                    listeners: "64.7M monthly listeners",
                    songs: [
                        { title: "Cold Heart", duration: "3:03", image: "pics/d1.jpeg" },
                        { title: "Levitating", duration: "3:23", image: "pics/d2.jpeg" },
                        { title: "New Rules", duration: "3:29", image: "pics/d3.jpeg" },
                        { title: "Don't Start Now", duration: "3:03", image: "pics/d4.jpeg" },
                        { title: "Training Seasons", duration: "3:23", image: "pics/d5.jpeg" },
                        { title: "One Kiss", duration: "3:29", image: "pics/d6.jpeg" },
                        { title: "Hotter Than Hell", duration: "3:03", image: "pics/d4.jpeg" },
                        { title: "Be The One", duration: "3:23", image: "pics/d8.jpeg" },
                        { title: "IDGAF", duration: "3:29", image: "pics/d9.jpeg" }
                    ],
                    suggested: [
                        { title: "Break My Heart", artist: "Bruno Mars", image: "pics/bruno2.jpeg" },
                        { title: "Lost Idea", artist: "Calvin Harris", image: "pics/ed6.jpeg" }
                    ],
                    releases: [
                        { title: "Future Nostalgia", year: "20025", image: "pics/d10.jpeg" },
                        { title: "Radical Optimism", year: "2022", image: "pics/d5.jpeg" },
                        { title: "Plastic Hearts", year: "2018", image: "pics/d8.jpeg" },
                        { title: "Radical Optimism", year: "2024", image: "pics/d6.jpeg" },
                        { title: "Plastic Hearts", year: "2016", image: "pics/d3.jpeg" }
                    ]
                },
        
                "bad_bunny": {
                    name: "Bruno Mars",
                    banner: "pics/brm.jpg",
                    listeners: "95.2M monthly listeners",
                    songs: [
                        { title: "Dakiti", duration: "3:25", image: "pics/b1.jpeg" },
                        { title: "Me Porto Bonito", duration: "3:39", image: "pics/b2.jpeg" },
                        { title: "Yonaguni", duration: "3:26", image: "pics/b3.jpeg" },
                        { title: "DtMF", duration: "3:25", image: "pics/b4.jpeg" },
                        { title: "UN Verano Sin TI", duration: "3:39", image: "pics/b5.jpeg" },
                        { title: "Tarot", duration: "3:26", image: "pics/b6.jpeg" },
                        { title: "Party", duration: "3:25", image: "pics/b7.jpeg" },
                        { title: "Un Coco", duration: "3:39", image: "pics/b8.jpeg" },
                        { title: "Andrea", duration: "3:26", image: "pics/b7.jpeg" }
                    ],
                    suggested: [
                        { title: "Abracadabra", artist: "Lady Gaga", image: "pics/b6.jpeg" },
                        { title: "Callin'U", artist: "Elyanna", image: "pics/b9.jpeg" }
                    ],
                    releases: [
                        { title: "Un Verano Sin Ti", year: "2022", image: "pics/b11.jpeg" },
                        { title: "OASIS", year: "2019", image: "pics/b7.jpeg" },
                        { title: "X 100PRE", year: "2018", image: "pics/b2.jpeg" },
                        { title: "dont smile at me ", year: "2017", image: "pics/b6.jpeg" },
                        { title: "Hit me hard and soft", year: "2024", image: "pics/b4.jpeg" }
                    ]
                },

                "billie_eilish": {
                    name: "Billie Eilish",
                    banner: "pics/billm.jpg",
                    listeners: "94,000,000 monthly listeners",
                    songs: [
                        { title: "Bad Guy", duration: "3:14", image: "pics/o11.jpeg" },
                        { title: "Everything I Wanted", duration: "4:05", image: "pics/o1.jpeg" },
                        { title: "Happier Than Ever", duration: "4:58", image: "pics/o2.jpeg" },
                        { title: "BIRDS OF A FEATHER", duration: "3:14", image: "pics/o3.jpeg" },
                        { title: "WILDFLOWER", duration: "4:05", image: "pics/o4.jpeg" },
                        { title: "CHIHIRO", duration: "4:58", image: "pics/o5.jpeg" },
                        { title: "Lovely", duration: "3:14", image: "pics/o6.jpeg" },
                        { title: "xanny", duration: "4:05", image: "pics/o7.jpeg" },
                        { title: "you should see me in crown", duration: "4:58", image: "pics/o8.jpeg" }
                    ],
                    suggested: [
                        { title: "Therefore I Am", artist: "Billie Eilish", image: "pics/o4.jpeg" },
                        { title: "No Time To Die", artist: "Billie Eilish", image: "pics/b11.jpeg" }
                    ],
                    releases: [
                        { title: "Happier Than Ever", year: "2021", image: "pics/o3.jpeg"},
                        { title: "dont smile at me ", year: "2017", image: "pics/o9.jpeg" },
                        { title: "Hit me hard and soft", year: "2024", image: "pics/o7.jpeg"},
                        { title: "dont smile at me ", year: "2017", image: "pics/o2.jpeg" },
                        { title: "Hit me hard and soft", year: "2024", image: "pics/o11.jpeg"}
                        
                    ]
                }
                
            };
        
            if (artists[artistKey]) {
                const artist = artists[artistKey];
        
                document.getElementById("artist-name").textContent = artist.name;
                document.getElementById("artist-banner").style.backgroundImage = `url(${artist.banner})`;
                document.getElementById("monthly-listeners").textContent = artist.listeners;
        
                let songHTML = "";
                artist.songs.forEach((song, index) => {
                    songHTML += `
                        <div class="flex items-center justify-between p-2 hover:bg-white/10 rounded-lg">
                            <div class="flex items-center gap-4">
                                <span class="font-bold text-gray-400 w-6">${index + 1}</span>
                                <img src="${song.image}" alt="Album Art" class="w-12 h-12 rounded">
                                <div>
                                    <p class="font-medium">${song.title}</p>
                                    <p class="text-sm text-gray-400">${artist.name}</p>
                                </div>
                            </div>
                            <span class="text-gray-400">${song.duration}</span>
                        </div>
                    `;
                });
                document.getElementById("song-list").innerHTML = songHTML;
        
                let suggestedHTML = "";
                    artist.suggested.forEach((track, index) => {
                        suggestedHTML += `
                            <div class="flex items-center justify-between p-2 hover:bg-white/10 rounded-lg">
                                <div class="flex items-center gap-4">
                                    <span class="font-bold text-gray-400 w-6">${index + 1}</span>
                                    <img src="${track.image}" alt="Album Art" class="w-12 h-12 rounded">
                                    <div>
                                        <p class="font-medium">${track.title}</p>
                                        <p class="text-sm text-gray-400">${track.artist}</p>
                                    </div>
                                </div>
                                <span class="text-gray-400">${track.duration}</span>
                            </div>
                        `;
                    });
                    document.getElementById("suggested-list").innerHTML = suggestedHTML;

        
                let releaseHTML = "";
                artist.releases.forEach((release) => {
                    releaseHTML += `
                        <div class="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors">
                            <img src="${release.image}" alt="Album Art" class="w-full aspect-square object-cover rounded-lg mb-4">
                            <h3 class="font-bold">${release.title}</h3>
                            <p class="text-sm text-gray-400">${release.year}</p>
                        </div>
                    `;
                });
                document.getElementById("releases-list").innerHTML = releaseHTML;
            }
            
        });
        