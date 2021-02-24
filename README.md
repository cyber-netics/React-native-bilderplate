# React Native Starter

## Prerequisites
    - Xcode (Mac)
    - Android Studio (Mac & Win)
     

## MacOs [Setup](https://reactnative.dev/docs/environment-setup)
- Initial Installations
    - `brew install node`
    - `brew install watchman`
    - `brew install --cask adoptopenjdk/openjdk/adoptopenjdk8`
    - `xcode-select --install`

- Setup Environmental Variables
    - `npm run setup`
    - Manual installation (Run each line to export env)
        export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"
        export ANDROID_HOME=$HOME/Library/Android/sdk
        export PATH=$PATH:$ANDROID_HOME/emulator
        export PATH=$PATH:$ANDROID_HOME/tools
        export PATH=$PATH:$ANDROID_HOME/tools/bin
        export PATH=$PATH:$ANDROID_HOME/platform-tools
    
    
## Win [Initial Installation](https://reactnative.dev/docs/environment-setup)
    - PowerShell -> Run As admin
        - choco install -y nodejs.install openjdk8



