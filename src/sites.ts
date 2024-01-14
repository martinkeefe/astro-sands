// https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.wikidata.org&size=32

export type Kind = "stream" | "review";

export interface Site {
  name: string;
  image?: string;
  kind?: Kind;
}

export const SITES: Record<string, Site> = {
  // stream
  "apple.com": { name: "Apple", image: "music.apple.com.png", kind: "stream" },
  "bandcamp.com": {
    name: "Bandcamp",
    image: "bandcamp.com.png",
    kind: "stream",
  },
  "deezer.com": { name: "Deezer", image: "deezer.com.png", kind: "stream" },
  "soundcloud.com": {
    name: "Sound Cloud",
    image: "soundcloud.com.ico",
    kind: "stream",
  },
  "spotify.com": {
    name: "Spotify",
    image: "spotify.com (2).png",
    kind: "stream",
  },
  "tidal.com": { name: "Tidal", image: "tidal.com.png", kind: "stream" },
  "music.youtube.com": {
    name: "YouTube Music",
    image: "music.youtube.com.png",
    kind: "stream",
  },
  // general
  "allmusic.com": { name: "All Music", image: "allmusic.com.jpg" },
  "albumoftheyear.org": {
    name: "Album of the Year",
    image: "albumoftheyear.org.png",
  },
  "anydecentmusic.com": {
    name: "Any Decent Music",
    image: "anydecentmusic.com.png",
  },
  "discogs.com": { name: "Discogs", image: "discogs.com.png" },
  "facebook.com": { name: "FaceBook", image: "facebook.com.png" },
  "google.com": { name: "Google", image: "google.com.png" },
  "imdb.com": { name: "IMDB", image: "imdb.com.png" },
  "instagram.com": { name: "Instagram", image: "instagram.com.png" },
  "jazzdisco.org": { name: "Jazz Discography", image: "jazzdisco.org.png" },
  "metacritic.com": { name: "MetaCritic", image: "metacritic.com.png" },
  "metal-archives.com": {
    name: "Metal Archives",
    image: "metal-archives.com.png",
  },
  "musicbrainz.org": { name: "Music Brainz", image: "musicbrainz.org.png" },
  "rateyourmusic.com": {
    name: "Rate Your Music",
    image: "rateyourmusic.com.png",
  },
  "sf-encyclopedia.com": {
    name: "SF Encyclopedia",
    image: "sf-encyclopedia.com.png",
  },
  "themoviedb.org": {
    name: "The Movie DB",
    image: "themoviedb.org.png",
  },
  "twitter.com": { name: "Twitter", image: "twitter.com.png", kind: "review" },
  "tvtropes.org": {
    name: "TV Tropes",
    image: "tvtropes.org.png",
  },
  "wikidata.org": {
    name: "WikiData",
    image: "wikidata.org.png",
  },
  "wikipedia.org": {
    name: "Wikipedia",
    image: "wikipedia.org.png",
  },
  // review
  "archive.org": { name: "Internet Archive", image: "", kind: "review" },
  "bbc.co.uk": { name: "BBC", image: "bbc.co.uk.png", kind: "review" },
  "drownedinsound.com": {
    name: "Drowned in Sound",
    image: "drownedinsound.com.png",
    kind: "review",
  },
  "exclaim.ca": { name: "Exclaim!", image: "exclaim.ca.png", kind: "review" },
  "gramophone.co.uk": {
    name: "Gramophone",
    image: "gramophone.co.uk.png",
    kind: "review",
  },
  "nme.com": { name: "NME", image: "nme.com.png", kind: "review" },
  "noripcord.com": {
    name: "No Ripcord",
    image: "noripcord.com.jpg",
    kind: "review",
  },
  "pastemagazine.com": {
    name: "Paste",
    image: "pastemagazine.com.png",
    kind: "review",
  },
  "pitchfork.com": {
    name: "Pitchfork",
    image: "pitchfork.com (2).png",
    kind: "review",
  },
  "popmatters.com": {
    name: "Pop Matters",
    image: "popmatters.com.jpg",
    kind: "review",
  },
  "progarchives.com": {
    name: "Prog Archives",
    image: "progarchives.com.png",
    kind: "review",
  },
  "progrography.com": { name: "Progrography", kind: "review" },
  "ra.co": { name: "Resident Advisor", image: "ra.co.png", kind: "review" },
  "recordcollectormag.com": {
    name: "Record Collector",
    image: "recordcollectormag.com.png",
    kind: "review",
  },
  "rollingstone.com": {
    name: "Rolling Stone",
    image: "rollingstone.com.png",
    kind: "review",
  },
  "slantmagazine.com": {
    name: "Slant",
    image: "slantmagazine.com (2).png",
    kind: "review",
  },
  "starsend.org": { name: "Star’s End", kind: "review" },
  "theguardian.com": {
    name: "The Guardian",
    image: "theguardian.com.png",
    kind: "review",
  },
  "tinymixtapes.com": {
    name: "Tiny Mix Tapes",
    image: "tinymixtapes.com.png",
    kind: "review",
  },
  "uncut.co.uk": { name: "Uncut", image: "uncut.co.uk.png", kind: "review" },
  "undertheradarmag.com": {
    name: "Under the Radar",
    image: "undertheradarmag.com.gif",
    kind: "review",
  },
};
