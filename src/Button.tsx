import React from 'react';
import './Button.css';
import Sound from "./Sound";
import useSound from 'use-sound'
import {useRef} from 'react';

export default function Button({sound}: { sound: Sound }) {
    const [play] = useSound(process.env.PUBLIC_URL + "/audio/" + sound.soundFile)

    let vidRef = useRef<HTMLVideoElement>(null);
    let btnRef = useRef<HTMLDivElement>(null);

    function videoEnd() {
        vidRef.current?.classList.remove("playing");
    }

    let timout = false;

    function start() {
        timout = true;
        btnRef.current?.classList.add("pressed")
        play();
        if (sound.videoFile != null) {
            vidRef.current?.play();
            vidRef.current?.classList.add("playing");
        }
        setTimeout(() => {
            btnRef.current?.classList.remove("pressed")
            timout = false;
        }, 200)
    }

    document.body.addEventListener("keydown", (e) => {
        if (e.key === sound.keybinding && !timout) {
            start();
        }
    });

    return (
        <div className="Button-container">
            {sound.videoFile && <video onEnded={videoEnd} className="Button-video" ref={vidRef}>
                <source src={process.env.PUBLIC_URL + "/video/" + sound.videoFile} type="video/mp4"></source>
            </video>}
            <button onClick={start} className="Button-button-button">
                <div className="Button-button" ref={btnRef}>
                    <span className="Button-text">{sound.text} ({sound.keybinding})</span>
                </div>
            </button>
        </div>
    )
}