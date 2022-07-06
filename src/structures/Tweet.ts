import jimp from 'jimp'
import Canvas from 'canvas'

export class Tweet {

    private avatar: string | null
    private username: string | null
    private text: string | null
    private nickname: string | null

    public constructor() {
        this.avatar = null
        this.username = null
        this.text = null
        this.nickname = null
    }

    public setAvatar(value: string): Tweet {
        this.avatar = value
        return this
    }

    public setUsername(value: string): Tweet {
        this.username = value
        return this
    }

    public setNickname(value: string): Tweet {
        this.nickname = value
        return this
    }

    public setText(value: string): Tweet {
        this.text = value
        return this
    }

    public async render(): Promise<Buffer> {
        if (!this.avatar) throw new Error('No se ha especificado una imagen')
        if (!this.username) throw new Error('No se ha especificado un nombre')
        if (!this.text) throw new Error('No se ha especificado un texto')
        if (!this.nickname) throw new Error('No se ha especificado un nickname')

        const canvas = Canvas.createCanvas(1200, 501)
        const ctx = canvas.getContext('2d')

        Canvas.registerFont(`${__dirname}/../../assets/fonts/Roboto-Bold.ttf`, {
            family: 'Bold',
          })
          Canvas.registerFont(`${__dirname}/../../assets/fonts/Roboto-BoldItalic.ttf`, {
            family: 'Italic',
        })
        Canvas.registerFont(`${__dirname}/../../assets/fonts/Roboto-Medium.ttf`, {
            family: 'Medium',
        })

        ctx.font = '40px Bold'
        ctx.fillStyle = '#ffffff'
        ctx.fillText(this.nickname, 185, 71)

        ctx.font = '40px Medium'
        ctx.fillStyle = '#8899a6'
        ctx.fillText(`@${this.username}`, 185, 125.5)

        ctx.font = '60px Medium'
        ctx.fillStyle = '#ffffff'
        ctx.fillText(this.text, 40, 231)

        const base = await jimp.read(canvas.toBuffer())
        const tweetImg = await jimp.read(`${__dirname}/../../assets/images/tweet.png`)
        const avatar = await jimp.read(this.avatar)

        avatar.resize(125, jimp.AUTO)
        avatar.circle()
        tweetImg.composite(avatar, 35, 23)
        tweetImg.composite(base, 0, 0)
        const buffer = await tweetImg.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }
}
