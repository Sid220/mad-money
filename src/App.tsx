import React from 'react';
import './App.css';
import Button from './Button'
import Sound from "./Sound";

let sounds = [
    new Sound("BULL", "1", "bull.mp3", "bull.mp4"),
    new Sound("BEAR", "2", "bear.mp3", "bear.mp4"),
    new Sound("KA-CHING!", "3", "kaching.mp3"),
    new Sound("BOWLING PINS", "4", "bowling.mp3"),
    new Sound("SHOTGUN", "5", "shotgun.mp3"),
    new Sound("SELL SELL SELL", "6", "sell.mp3"),
    new Sound("TRAIN WRECK", "7", "train_wreck.mp3"),
    new Sound("MAN OUT WINDOW", "8", "man_out_window.mp3"),

    new Sound("BUZZER", "q", "buzzer.mp3"),
    new Sound("HOGS", "w", "hogs.mp3"),
    new Sound("STRIPES", "e", "stripes.mp3"),
    new Sound("HOUSE OF PLEASURE", "r", "pleasure.mp3"),
    new Sound("oooOOO", "t", "ooo.mp3"),
    new Sound("HORSE RACE", "y", "horse_race.mp3"),
    new Sound("HALLELUJAH", "u", "hallelujah.mp3"),
    new Sound("APPLAUSE", "i", "applause.mp3"),

    new Sound("BABY", "a", "baby.mp3"),
    new Sound("TRIPLE BUY", "s", "buy.mp3"),
    new Sound("DON'T BUY", "d", "dont_buy.mp3"),
    new Sound("HOUSE OF PAIN", "f", "pain.mp3"),
    new Sound("MACHINE GUN", "g", "machine_gun.mp3"),
    new Sound("TA DA", "h", "ta_da.mp3"),
    new Sound("ELECTRIC SHOCK", "j", "electric_shock.mp3"),
    new Sound("HEAD CHOP", "k", "head_chop.mp3"),

    new Sound("BOO", "z", "boo.mp3"),
    new Sound("ALL ABOARD", "x", "all_aboard.mp3"),
    new Sound("FLATLINE", "c", "flatline.mp3"),
    new Sound("PUNCHING BAG", "v", "punching_bag.mp3"),
    new Sound("GONG", "b", "gong.mp3"),
    new Sound("SUB DIVE", "n", "sub_dive.mp3"),
]

const buttons: any[] = [];
for (let i = 0; i < sounds.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    buttons.push(<Button key={i} sound={sounds[i]} />);
}
function App() {
    return (
        <div className="App">
            <div className="App-Button-container">
                {buttons}
            </div>
        </div>
    );
}

export default App;
