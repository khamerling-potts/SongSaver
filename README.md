# SongSaver - Flatiron School Phase 2 Project

## Getting Started - Requirements

**This project uses a free Client ID and Secret associated with my Spotify account.** These are stored in a config.js file that is ignored by git. In order to fetch a temporary access token and access Spotify data, you need the config.js file storing the protected keys. You can log in to the Spotify website [here](https://accounts.spotify.com/en/login?continue=https%3A%2F%2Faccounts.spotify.com%2Foauth2%2Fv2%2Fauth%3Fresponse_type%3Dnone%26client_id%3Dcfe923b2d660439caf2b557b21f31221%26scope%3Demail%2Bopenid%2Bprofile%2Buser-self-provisioning%26redirect_uri%3Dhttps%253A%252F%252Fdeveloper.spotify.com%252Floggedin%26state%3D1bda5925-aabf-40c9-b4f5-e89a0e0853a6), and click 'create app' in your [developer dashboard](https://developer.spotify.com/dashboard) to create your own credentials.

This project can be run by starting up JSON server with the command `$ json-server --watch db.json`, followed by starting the React app with `$ npm start`.

## Description

Watch a full video demo [here](https://www.youtube.com/watch?v=L_Qn57NEsPI).

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

## Future additions

I hope to add additional functionality to this project by implementing pagination within the Spotify results. This would allow users to view more than the first 8 results.

I also plan on allowing users to edit already saved songs within the 'saved songs' page.

When available, I'd like to add song previews embedded in each Spotify track.

(Icon image courtesy of Adobe Stock)
