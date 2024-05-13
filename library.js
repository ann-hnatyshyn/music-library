const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] },
  },
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function (libraryObject) {
  for (const [playlistId, playlistDetails] of Object.entries(
    libraryObject.playlists
  )) {
    console.log(
      `${playlistId}: ${playlistDetails.name} - ${playlistDetails.tracks.length}`
    );
  }
};
console.log(printPlaylists(library));

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// id, name, artist, album.

const printTracks = function (object) {
  for (const [trackId, trackInfo] of Object.entries(object.tracks)) {
    console.log(
      `${trackId}: ${trackInfo.name} - by ${trackInfo.artist} - ${trackInfo.album}`
    );
  }
};
console.log(printTracks(library));

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three) ->
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  if (!playlist) {
    console.log("Playlist not found");
    return;
  }
  console.log(
    `${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`
  );
  for (const trackId of playlist.tracks) {
    const trackInfo = library.tracks[trackId];
    if (trackInfo) {
      console.log(
        `${trackId}: ${trackInfo.name} by ${trackInfo.artist} [${trackInfo.album}]`
      );
    }
  }
};
printPlaylist("p01");

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const track01 = {
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003",
  };
  library.playlist.Push(track01);
};

console.log(addTrackToPlaylist(library.tracks.t02, library.playlist));

// generates a unique i3
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library
const addTrack = function(name, artist, album) {
  const track = {
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three",
  };
  library.playlist.Push(track);
};

// adds a playlist to the library
const addPlaylist = function(name) {
  let playlist = {
    id: "p02",
    name: "Study Playlist",
    tracks: ["t03"]["t01"]["t02"]
  };
  library.playlist.Push(playlist);
};

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅Assertion Passed:", `${actual}`, "===", `${expected}`);
  } else {
    console.log("❌Assertion Failed:", `${actual}`, "!==", `${expected}`);
  }
};
