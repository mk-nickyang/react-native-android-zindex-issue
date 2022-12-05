<h1 align="center">
  React Native Android zIndex issue
</h1>

### IOS & Android `zIndex` behaviour difference

| IOS | Android |
| --- | ------- |
| <img src="https://user-images.githubusercontent.com/29244509/205619307-98283d6d-736b-4354-a912-823e732ca41e.png" width="400" /> | <img src="https://user-images.githubusercontent.com/29244509/205618553-643906f1-027a-4864-b72c-c272ae3fc17f.png" width="400" /> |

### [Android] After adding `backgroundColor: '#fff'` to the root `<View>` style

| Before | After |
| ------ | ----- |
| <img src="https://user-images.githubusercontent.com/29244509/205618553-643906f1-027a-4864-b72c-c272ae3fc17f.png" width="400" /> | <img src="https://user-images.githubusercontent.com/29244509/205619901-fae2bd5c-9c42-4c14-8ea5-10bbf10c325e.png" width="400" /> |


### [Android] React Native CLI VS Expo

| RN CLI | Expo<br />https://snack.expo.dev/@lucissa/android-zindex-playground?platform=android) |
| ------ | ---- |
| <img src="https://user-images.githubusercontent.com/29244509/205618553-643906f1-027a-4864-b72c-c272ae3fc17f.png" width="400" /> | <img src="https://user-images.githubusercontent.com/29244509/205620539-4de210f2-8df9-4f25-9b35-755843b5c35a.png" width="400" /> |
