// Typescript has a Interface creation option
interface Logger {
    log(message: any): void;
}

class WhisperLogger implements Logger {
    public log(message: string) {  // Overrides the previous 'any' type with 'string' type
        this.whisper(message);
    }
    
    private whisper(message: string) {
        console.log(message.toLowerCase())
    }
}

class ScreamLogger implements Logger {
    public log(message: string) {
        this.scream(message)
    }
    
    private scream(message: string) {
        console.log(message.toUpperCase())
    }
}

const whisperer = new WhisperLogger()
const screamer = new ScreamLogger()

whisperer.log('Hello There')
screamer.log('General Kenobi')
