# FIETU
> Image generation library

# Installation

```sh
npm install fietu
````

| Fietu | |
| --- | --- |
| Clases |
| Canvas |  Filters and Efects |
| Tweet |  Generate a tweet |
| Love |  Generate a graph to measure your love |

| Canvas | |
| --- | --- |
| blur |  Generates a blurred effect |
| invert | Generates an inverted effect |
| pixelate | Generates a pixelated effect |
| greyscale | Generates a black and white effect |
| brightness | Generates a shimmering effect |
| rainbow | Generates a rainbow effect |
| circle | Generates a circle |

# Examples

## blur

```js
const fietu = require("fietu")
const buffer = await fietu.Canvas.blur("https://cdn.discordapp.com/avatars/780876656352559125/c89c766ef2e00991c45a661845402e17.webp?size=1024")
```

## Preview
![img](https://cdn.discordapp.com/attachments/969273389841784852/971161577552236544/blur.png)


### Tweet

```js
const fietu = require("fietu")
const tweet = await new fietu.Tweet()
    .setAvatar("https://cdn.discordapp.com/avatars/780876656352559125/c89c766ef2e00991c45a661845402e17.png")
    .setUsername("Alguien")
    .setNickname("El Fietulais")
    .setText("Holaaa")
    .render() // renders the image

```

### Preview
![img](https://cdn.discordapp.com/attachments/970948627390410822/971429743373205604/file.jpg)



### Love

```js
const fietu = require("fietu")
const love = await new fietu.Love()
    .setAvatarOne("https://cdn.discordapp.com/avatars/780876656352559125/c89c766ef2e00991c45a661845402e17.png")
    .setAvatarTwo("https://cdn.discordapp.com/avatars/736691726089060372/997623d873d2070c350c17ac8ae2ff89.png")
    .setEmoji("https://cdn.discordapp.com/emojis/970071879102644304.png")
    .setBackground("https://cdn.discordapp.com/attachments/970948627390410822/971441960416051261/unknown.png")
    .render() // renders the image

```

### Preview
![img](https://media.discordapp.net/attachments/970948627390410822/971443590574248066/file.jpg?width=720&height=225)