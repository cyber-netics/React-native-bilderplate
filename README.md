# React Native Starter
[![CircleCI](https://circleci.com/gh/edo92/AWS-ECS-Hosting-Pipeline.svg?style=shield)]()
[![License](https://img.shields.io/badge/license-MIT-yellow?style=shield)](https://github.com/edo92/AWS-ECS-Hosting-Pipeline/blob/main/LICENSE)
[![Contribution](https://img.shields.io/badge/contributions-welcome-red.svg?style=shield)](https://github.com/edo92/AWS-ECS-Hosting-Pipeline)

<br/>

## Prerequisites
- Xcode (Mac)
- Android Studio (Mac & Win)
     
<br/>

## MacOs [Environment Setup](https://reactnative.dev/docs/environment-setup)
- Initial Installations
    - `brew install node`
    - `brew install watchman`
    - `brew install --cask adoptopenjdk/openjdk/adoptopenjdk8`
    - `xcode-select --install`

- Setup Environmental Variables
    - `npm run setup`
    - `Manual installation` (Run each line to export env)
        - `export JAVA_HOME="/Applications/Android Studio.app/Contents/jre/jdk/Contents/Home"`
        - `export ANDROID_HOME=$HOME/Library/Android/sdk`
        - `export PATH=$PATH:$ANDROID_HOME/emulator`
        - `export PATH=$PATH:$ANDROID_HOME/tools`
        - `export PATH=$PATH:$ANDROID_HOME/tools/bin`
        - `export PATH=$PATH:$ANDROID_HOME/platform-tools`
    
<br/>

## Windows [Environment Setup](https://reactnative.dev/docs/environment-setup)
- Open windows PowerShell and Run As admin
    - `choco install -y nodejs.install openjdk8`



