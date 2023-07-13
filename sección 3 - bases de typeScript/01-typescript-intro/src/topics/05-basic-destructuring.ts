
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
};

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 26,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}
const song = 'New song'
const {song:anotherSong, songDuration:duration, details:{author}} = audioPlayer;

const dbz: string[] = ['Goku','Vegetta','Trunks'];
const [ , ,trunks = 'Not found'] = dbz

console.error('Personaje 3:', dbz[3] || 'No hay bro')

console.log({anotherSong,duration})

export {};