// Controls for audio icon
const audioOptions = [{
    iconClass: 'fa-volume-xmark',
    volume: 0
}, {
    iconClass: 'fa-volume-low',
    volume: 0.5
}, {
    iconClass: 'fa-volume-high',
    volume: 1
}];
let audioChoice = 0;
const audio = document.querySelector('#summer-audio');

// Change audio volume on button click
function changeAudio() {
    // remove the current class for the icon
    let iconClasses = document.querySelector('.audio-control').firstChild.classList;
    iconClasses.remove(audioOptions[audioChoice].iconClass);
    // increment the icon type
    if (audioChoice < 2) {
        audioChoice++;
    }
    else {
        audioChoice = 0;
    }
    // update the icon
    iconClasses.add(audioOptions[audioChoice].iconClass);
    // update the volume
    audio.volume = audioOptions[audioChoice].volume;
}

export { changeAudio };