# mobileOrders
an iOS/Android application for creating/editing lists with a NoSQL database. Because of the potential charges
from the Google Firebase API, this application is not published on the iOS/Android marketplaces.

![Authentication](https://github.com/dorandoran/mobileOrders/blob/master/images/authentication.gif)

Opening Screen with custom authentication using Google Firebase Authentication

## Application Demo

#### Creating a New Request
![New Request](https://github.com/dorandoran/mobileOrders/blob/master/images/new%20request.gif)

The main menu displays previous request information. The information is retrieved/stored on a 
backend NoSQL database [Google Firebase Database](https://firebase.google.com/).

#### Submitting New Request
![Submit New Request](https://github.com/dorandoran/mobileOrders/blob/master/images/request%20submit.gif)

After submitting new request, it is saved and displayed on main menu.

#### Editing Previous Requests
![Previous Request Edit](https://github.com/dorandoran/mobileOrders/blob/master/images/request%20edit.gif)

Pressing on an item from the list allows the user to edit any information from a previous request. 
This information is changed on the backend server.

## Current Features
- Custom Authentication using [Google Firebase](https://firebase.google.com/)
- Information Storage using [Google Firebase](https://firebase.google.com/)
- Live list rendering on previous requests

## Future Changes
- Expanded **Profile** Tab
- Compatible Internet Browser Application

## Running Tests
In order to test this application, several services are required.

#### Prerequisites
- [React-Native](https://facebook.github.io/react-native/)
- [Google Firebase Account](https://firebase.google.com/) for API Key
- Simulation Environment: 
[Android Studio](https://developer.android.com/studio/index.html) or 
[Xcode](https://developer.apple.com/xcode/downloads/) or 
[Expo](https://expo.io/)

> Note about Google Firebase:
>
> Ensure you have created a new project in Firebase and
[get your customized Google code snippet](https://firebase.google.com/docs/web/setup?authuser=0)

#### Installing
After setting up your preferred React-Native environment, clone the repository in your terminal:
```sh
 git clone https://github.com/dorandoran/mobileOrders
 cd gms-mobile
```


