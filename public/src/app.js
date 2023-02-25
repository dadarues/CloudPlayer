import { AudioPlayer } from "./models/AudioPlayer";

export let audioPlayer = undefined;

export function start(song) {
    const config = {
        gui: {
            totalTime: { value: "0:00", DOMElement: document.querySelector(".totalTime")},
            currentTime: { value: "0:00", DOMElement: document.querySelector(".currentTime")},
            progressBar: { value: 0, DOMElement: document.querySelector(".progressBar")},
            songName: { value: song.title, DOMElement: document.querySelector(".songName")},
            artistName: { value: song.artist, DOMElement: document.querySelector(".artistName")},
            albumCover: { value: song.albumCover, DOMElement: document.querySelector("#player")},
        },
        buttons: {
            playPause: document.querySelector(".play"),
            volume: document.querySelector(".volume"),
        },
        src: song.file,
        cover: song.albumCover
    };
    audioPlayer = new AudioPlayer(config);  
}