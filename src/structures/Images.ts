import jimp from 'jimp'


export class Canvas {
    public constructor() {
        throw new Error(`La clase ${this.constructor.name} no puede ser instanciada`)
    }

    public static async blur(img: string): Promise<Buffer> {
        if (!img) throw new Error('No se ha especificado una imagen')

        const image = await jimp.read(img)
        image.blur(10)
        const buffer = await image.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }

    public static async invert(img: string): Promise<Buffer> {
        if (!img) throw new Error('No se ha especificado una imagen')

        const image = await jimp.read(img)
        image.invert()
        const buffer = await image.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }

    public static async circle(img: string): Promise<Buffer> {
        if (!img) throw new Error('No se ha especificado una imagen')

        const image = await jimp.read(img)
        image.circle()
        const buffer = await image.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }

    public static async pixelate(img: string): Promise<Buffer> {
        if (!img) throw new Error('No se ha especificado una imagen')

        const image = await jimp.read(img)
        image.pixelate(10)
        const buffer = await image.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }

    public static async greyscale(img: string): Promise<Buffer> {
        if (!img) throw new Error('No se ha especificado una imagen')

        const image = await jimp.read(img)
        image.greyscale()
        const buffer = await image.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }

    public static async brightness(img: string): Promise<Buffer> {
        if (!img) throw new Error('No se ha especificado una imagen')

        const image = await jimp.read(img)
        image.brightness(+0.6)
        const buffer = await image.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }

    public static async rainbow(img: string): Promise<Buffer> {
        if (!img) throw new Error('No se ha especificado una imagen')

        const image = await jimp.read(img)
        const rainbow = await jimp.read(`${__dirname}/../../assets/images/rainbow.png`)

        rainbow.resize(image.bitmap.width, image.bitmap.height)
        image.composite(rainbow, 0, 0)

        const buffer = await image.getBufferAsync(jimp.MIME_PNG)
        return buffer
    }
}
