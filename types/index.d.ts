declare module 'fietu' {
    
    export class Canvas {

        static blur(img: string | Buffer) : Promise<Buffer>

        static invert(img: string | Buffer): Promise<Buffer>

        static circle(img: string | Buffer): Promise<Buffer>

        static pixelate(img: string | Buffer): Promise<Buffer>

        static greyscale(img: string | Buffer): Promise<Buffer>

        static brightness(img: string | Buffer): Promise<Buffer>

        static rainbow(img: string | Buffer): Promise<Buffer>

    }

    export class Tweet {

        avatar: string | Buffer
        name: string
        text: string

        setAvatar(img: string | Buffer): Tweet

        setUsername(username: string): Tweet

        setNickname(nickname: string): Tweet

        setText(text: string): Tweet

        render() : Promise<Buffer>

    }

    export class Love {
            
            background: string | Buffer
            avatarOne: string | Buffer
            avatarTwo: string | Buffer
            emoji: string | Buffer
    
            setBackground(img: string | Buffer): Love
    
            setAvatarOne(img: string | Buffer): Love
    
            setAvatarTwo(img: string | Buffer): Love
    
            setEmoji(img: string | Buffer): Love
    
            render() : Promise<Buffer>
    
    }
}

