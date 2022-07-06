import jimp from 'jimp'

export class Love {

    private background: string | null
    private avatarOne: string | null
    private avatarTwo: string | null
    private emoji: string | null

    public constructor() {
        this.background = null
        this.avatarOne = null
        this.avatarTwo = null
        this.emoji = null
    }

    public setBackground(value: string): Love {
        this.background = value
        return this
    }

    public setAvatarOne(value: string): Love {
        this.avatarOne = value
        return this
    }

    public setAvatarTwo(value: string): Love {
        this.avatarTwo = value
        return this
    }

    public setEmoji(value: string): Love {
        this.emoji = value
        return this
    }

    public async render(): Promise<Buffer> {

        if (!this.background) throw new Error('No se ha especificado un fondo')
        if (!this.avatarOne) throw new Error('No se ha especificado avatarOne')
        if (!this.avatarTwo) throw new Error('No se ha especificado avatarTwo')
        if (!this.emoji) throw new Error('No se ha especificado un emoji')

        const base = await jimp.read(this.background)
        const avatarOne = await jimp.read(this.avatarOne)
        const avatarTwo = await jimp.read(this.avatarTwo)
        const emoji = await jimp.read(this.emoji)

        base.resize(800, 250)
        avatarOne.resize(200, jimp.AUTO)
        avatarTwo.resize(200, jimp.AUTO)
        emoji.resize(200, jimp.AUTO)

        avatarOne.circle()
        avatarTwo.circle()
        base.composite(avatarOne, 30, 20)
        base.composite(emoji, 300, 20)
        base.composite(avatarTwo, 570, 20)

        const buffer = await base.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }
}
