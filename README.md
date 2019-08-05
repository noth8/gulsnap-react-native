## :bookmark_tabs: Table of Contents
<br/>

- [Demo](#iphone-demo)
- [Project structure](#department_store-project-structure)
- [Packages list](#mag-packages-list)

Development :
  1. [Prerequisites](#construction-prerequisites)
  2. [Installation](#hammer-installation)
  3. [Launch](#red_circle-launch)

<br />
<br />
<br />

## :iphone: Demo

<img width="340px" height="302px" src="../assets/demo.gif?raw=true"/>

<br />
<br />

If you want to view app by yourself :

- First variant :<br/>
        1. install [Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www) or [Expo for IOS](https://apps.apple.com/app/apple-store/id982107779)<br/>
        2. launch expo and scan this qrcode : <br/>
   
    ![img](../assets/qrcode.png?raw=true)
<br/>

- Second variant:<br/>
    :link: [Download GulSnap.apk](https://github.com/noth8/GulSnap-react-native/releases/download/v1.0.0/GulSnap.apk)  for Android

<br/>
<br/>
<br/>

## :department_store: Project Structure

<br/>

```
├── expo-shared/                        # Shared folder between collaborators 
│   └── assets.json                     # Compressed images
├── assets/                             # Main assets of the app
│   ├── icon.png                        # App icon 
│   └── splash.png                      # App splash screen
├── src/                                # Source files
│   ├── actions/                        # Redux actions
│   │   ├── ApiActions.js               # Fetching images from api 
│   │   ├── AuthActions.js              # Firebase auth
│   │   ├── ImageActions.js             # Handling current selected image
│   │   ├── index.js                    # Export all objects from this dir   
│   │   ├── LikesActions.js             # Saving/fetching favorite images from firebase
│   │   ├── NavigationActions.js        # Handling return to the prev screen behavior 
│   │   └── Types.js                    # Actions types
│   ├── assets/                         # Local assets
│   │   └── logo.png                    # Logo for auth screens 
│   ├── components/                     # App components
│   │   ├── common/                     # Reusable components
│   │   │   ├── Button.js               # Button for submiting actions
│   │   │   ├── index.js                # Export all objects from this dir
│   │   │   ├── InputField.js           # Input field for auth screens
│   │   │   ├── Spinner.js              # Spinner for loading data process
│   │   │   └── StatusBar.js            # Customized status bar for Android/IOS
│   │   ├── LikeButton.js               # Button for saving/removing a favorite image
│   │   ├── List.js                     # Show the list of thumbnails images
│   │   └── Thumbnail.js                # Wrapper for a thumbnail image
│   ├── config/                         # App config
│   │   ├── app.js                      # Main settings
│   │   ├── firebase.js                 # Firebase connection setting
│   │   └── languages.js                # All text strings used in the app
│   ├── navigation/                     # App navigations between screens
│   │   └── AppNavigator.js             # Base Routes
│   ├── reducers/                       # Redux reducers state handling
│   │   ├── ApiReducer.js               # Fetching images
│   │   ├── AuthReducer.js              # Firebase auth
│   │   ├── ImageReducer.js             # Handling for a currently selected image
│   │   ├── index.js                    # Export all objects from this dir
│   │   ├── LikesReducer.js             # Saving/fetching favorite images from firebase
│   │   └── NavigationReducer.js        # State handling for returning to the prev screen
│   ├── screens/                        # App screens
│   │   ├── auth/                       # Auth screens
│   │   │   ├── LoginScreen.js          # Login using firebase
│   │   │   ├── RegisterScreen.js       # Register using firebase
│   │   │   └── ResetPasswordScreen.js  # Reset password using firebase
│   │   ├── FullImageScreen.js          # View image in full size
│   │   ├── HomeScreen.js               # List of fetched images from api
│   │   ├── index.js                    # Export all objects from this dir
│   │   ├── LikesScreen.js              # Show list of user saved images 
│   │   └── UserScreen.js               # Show auth stuff 
│   ├── utils/                          # Helper functions
│   │   ├── checkLike.js                # Check if user has favorite image or not
│   │   ├── index.js                    # Export all objects from this dir
│   │   ├── percentageToDP.js           # Responsive height and width
│   │   ├── replaceUrlParam.js          # Change quality and size in url request 
│   │   └── toHash.js                   # Convert image url to hash for firebase storing
│   └── App.js                          # The main entry point of the app
├── .gitignore                          # List of files ignored by git
├── .watchmanconfig                     # Config for a file watching service
├── App.js                              # Export main entry point of the app
├── app.json                            # Prettier formatter config
├── babel.config.js                     # Babel presets
├── LICENCE                             # Project license
├── readme.md                           # Description of the project
└── package.json                        # Node.js dependencies and scripts
```

<br />
<br />
<br />

## :mag: Packages list
<br/>

**General** :
- [expo](https://github.com/expo/expo) - The fastest way to build an app.
   

      Purpose : build, deploy, and quickly iterate on native iOS and Android apps from the same JavaScript codebase.
- [firebase](https://github.com/firebase/firebase-js-sdk) -  is platform which allow to build web and mobile applications without server side programming language.
 

      Purpose : storing users data(accounts, favorite images) on real-time database and syncing data among users without delay.
- [redux](https://github.com/reduxjs/redux) - A predictable state container for JavaScript apps.
 

      Purpose : helps to write application that behave consistently, run in different environments (client, server, and native), and are easy to test.
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux.


      Purpose : Middleware extend the store's abilities, and let to write async logic that interacts with the store.
- [react-navigation](https://github.com/react-navigation/react-navigation) - is born from the React Native community's need for an extensible yet easy-to-use navigation solution based on Javascript.
 

      Purpose : Routing and navigation for app.
- [react-navigation-material-bottom-tabs](https://github.com/react-navigation/material-bottom-tabs) - A Material Design bottom tab navigator for React Navigation
     
     
      Purpose : animation.
- [react-navigation-redux-helpers](https://github.com/react-navigation/redux-helpers) - Redux middleware and utils for React Navigation.
 

      Purpose : controling app routes through redux.
- [react-navigation-transitions](https://github.com/plmok61/react-navigation-transitions) - Custom transitions for react-navigation.
 

      Purpose : animation.
- [recyclerlistview](https://github.com/Flipkart/recyclerlistview) - high performance listview for React Native and web.
   

      Purpose : apart from all performance benefits RecyclerListView comes with great features out of the box and also fixing memomory leaks with default FlatList. 
 - [react-native-image-progress](https://github.com/oblador/react-native-image-progress) - Progress indicator for networked images in React Native.
 

       Purpose : find out the state of downloading image. 


<br />
<br />
<br />

## :construction: Prerequisites
<br/>

#### You must have :
- Node.js
- Yarn or Npm
- Expo-cli

<br />

#### or install : 

1. Install Node Version Manager with these commands:
   - ```sudo apt update```
   - ```sudo apt install build-essential libssl-dev```
   - ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash```
   - ```source ~/.bashrc```
<br/>

2. Install latest Node.js :
   - ```nvm install node```

<br/>

3. Install Yarn or Npm : 
   - ```sudo apt install yarn```
  or
   - ```nvm install --latest-npm``` 

<br/>

4. Install Expo-cli : 
   - ```npm install -g expo-cli```
  or
   - ```yarn add global expo-cli``` 

<br />
<br />
<br />

## :hammer: Installation
<br/>

1. Go to the directory where you want ```cd somedirectory```
2. Clone this repo to your computer ```git clone https://github.com/noth8/GulSnap-react-native```
3. Go to cloned repo ```cd GulSnap-react-native```
4. Install all packages with ```yarn install``` or ```npm install```


<br />
<br />
<br />

## :red_circle: Launch

<br/>

###### Commands

| name         | Description        |
| ------------ | ------------------ |
| `yarn start` | Launch expo server |
| `npm start`  | Launch expo server |
