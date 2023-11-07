
//Album: Write a function called make_album() that builds a Object describing a music album.
//The function should take in an artist name and an album title, 
//and it should return a Object containing these two pieces of information.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function makeAlbum(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create three album objects
const album1: Album = makeAlbum("Selena Gomez", "Rare");
const album2: Album = makeAlbum("Adam Levine", "The Fourth World ", 11);
const album3: Album = makeAlbum("Taylor Swift", "Midnights", 13 );

// Print each album's information
console.log(album1);
console.log(album2);
console.log(album3);
