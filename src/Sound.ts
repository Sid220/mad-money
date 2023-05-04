export default class Sound {
    text: string;
    keybinding: string;
    soundFile: string;
    videoFile: string | null;

    constructor(text: string, keybinding: string, soundFile: string, videoFile: string | null = null) {
        this.text = text;
        this.keybinding = keybinding;
        this.soundFile = soundFile;
        this.videoFile = videoFile;
    }
}