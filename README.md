## Information

It was developed for those who want to learn React Native and to monitor the current and weekly weather conditions of all cities in the world.

SDK level ``51.0.0``

Create new project at https://console.firebase.google.com, used ``Firebase/Database`` Realtime Database in this project
## Package.json

```JSON
 "dependencies": {
    "@react-native-async-storage/async-storage": "1.23.1",
    "axios": "^1.7.7",
    "expo": "~51.0.28",
    "expo-blur": "~13.0.2",
    "expo-font": "~12.0.10",
    "expo-status-bar": "~1.12.1",
    "firebase": "^11.0.0",
    "react": "18.2.0",
    "react-native": "0.74.5",
    "react-native-pager-view": "6.3.0",
    "yarn": "^1.22.22"
  },
```
## explanation


The application works as follows; first it asks for login or signup and saves them to the database, then on the home screen it shows your todo cards if you have any, on the create screen it asks for a sentence, address and time for the event, when you click the create button this card is saved to your device with AsyncStorage, the reason we do this is to prevent users from straining the database.
## Screenshots from Application

<img src="https://github.com/AliArslan44/React-Native-Weather-App/blob/main/screenshots/Screenshot_20241122-214531_WeatherApp.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Weather-App/blob/main/screenshots/Screenshot_20241122-214533_WeatherApp.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Weather-App/blob/main/screenshots/Screenshot_20241124-143245_WeatherApp.jpg?raw=true" width="400"/>
<img src="https://github.com/AliArslan44/React-Native-Weather-App/blob/main/screenshots/Screenshot_20241122-214546_WeatherApp.jpg?raw=true" width="400"/>
