This is simple example of using Socket.io with react-native
===

Make cloning
```
$ git clone https://github.com/raksa/ReactNativeSocketIOExample.git
$ cd ReactNativeSocketIOExample
$ npm install
```

Make running on Android
```
$ npm run server
$ adb reverse tcp:3000 tcp:3000
$ npm run android
```

Make running on iOS
```
$ npm run server
$ npm run ios
```

Make forwarding ports on Android (to make available access localhost from Android)
```
port for react-native
$ adb reverse tcp:8081 tcp:8081
port for socket.io server
$ adb reverse tcp:3000 tcp:3000
```

Logging Android
```
$ npm run log-android
```

Logging iOS
```
$ npm run log-ios
```

Starting react-native serve
```
$ npm start
```
