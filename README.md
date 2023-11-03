# SongSaver - Flatiron School Phase 2 Project

## Getting Started - Requirements

**This project uses a free API key and Secret associated with my Spotify account.** These are stored in a config.js file that is ignored by git. In order to fetch a temporary access token and access Spotify data, you need the config.js file storing the protected keys.

This project can be run by starting up JSON server with the command `$ json-server --watch db.json`, followed by starting the React app with `$ npm start`.

## Description

SongSaver is a front end React application that accesses data from the [Spotify API](https://developer.spotify.com/documentation/web-api) and manipulates data in my own JSON Server.

### Features

Users are able to input custom details about songs, including titles, artists, albums, album art, and genres. They can then save those songs and see those changes reflected in their saved songs library, which is always up to date.

Alternatively, users can search for track titles with Spotify's API. Selecting a Spotify song will autopopulate the song details form with all of the required information. The user can then save that song without needing to manually enter its details.

Here is an example song format in the saved songs database:

```JSON
{
    "title": "Misery Business",
    "album": "Riot!",
    "artist": "Paramore",
    "art": "https://i.scdn.co/image/ab67616d0000b273bee754528c08d5ff6799a1eb",
    "genre": "candy pop",
    "id": 12
}
```

Outside of saving a song, user's can also navigate between pages by using the links in the navigation bar.

Lastly, users can see an overview of their saved songs by clicking the 'view summary' button. This navigates to a nested route within the saved songs page and displays artists and ranked genres. This view can be hidden by clicking the 'hide summary' button.

Quick demo:
![project gif](https://github.com/khamerling-potts/phase-2-project/blob/main/src/demo.gif)

#### Various edge cases were accounted for:

- When on page 1 of the search results, users are prevented from going back another page.
- If users reach the end of the available animals, they are prevented from moving forward another page.
- If a user moves between saved animals and search results without looking up a new zip code, the page count is maintained. This means users will be on the same page of results when they return to the results page.
- If a zip code returns no animals, users are alerted and the DOM remains the way it was from the last successful search.

## Future additions

I hope to add additional functionality to this project by implementing more search filters, including filtering by breed and by distance.

I would also like to eventually add a page/offset endpoint in my JSON Server. This would allow me to implement page navigation buttons and only display 6 saved animals at a time.

(Icon image courtesy of [The Noun Project](https://thenounproject.com/))
