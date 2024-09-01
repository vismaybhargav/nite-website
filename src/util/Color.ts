export default class Color {
    private red: number;    // 0 <= red   < 256
    private blue: number;   // 0 <= blue  < 256
    private green: number;  // 0 <= green < 256
    private alpha?: number; // 0 <= alpha < 256

    public static WHITE: Color = new Color(255, 255, 255);
    public static BLACK: Color = new Color(0, 0, 0);
    public static GREEN: Color = new Color(0, 255, 0);
    public static TRANSPERANT: Color = new Color(0, 0, 0, 0);

    constructor(red: number, green: number, blue: number, alpha?: number) {
        if(red > 255 || blue > 255 || green > 255
            || red < 0 || blue < 0 || green < 0
        ) {
            throw new RangeError("RGB values must be [0, 256).");
        }

        if(alpha !== undefined && (alpha < 0 || alpha > 1)) {
            throw new RangeError("alpha value must be [0, 1].")
        }

        this.red = red;
        this.blue = blue;
        this.green = green;
        this.alpha = alpha !== undefined ? alpha : 1;
    }

    public toHexWithAlpha(): string {
        const hex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
        return (
            "#" +
            hex(this.red) +
            hex(this.green) +
            hex(this.blue) +
            (this.alpha !== undefined ? hex(Math.round(this.alpha * 255)) : "")
        );
    }

    public toHex(): string {
        const hex = (n: number) => n.toString(16).padStart(2, '0').toUpperCase();
        return (
            "#" + 
            hex(this.red) + 
            hex(this.green) +
            hex(this.blue)
        );
    }

    private clamp(value: number): number {
        return Math.min(255, Math.max(0, value));
    }
    
    /*
    private clampAlpha(value: number): number {
        return Math.min(1, Math.max(0, value));
    }
    */

    public toRGBString(): string {
        return this.alpha !== undefined
            ? `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
            : `rgb(${this.red}, ${this.green}, ${this.blue})`;
    }

    public lighten(factor: number): Color {
        return new Color(
            this.clamp(this.red + factor * 255),
            this.clamp(this.green + factor * 255),
            this.clamp(this.blue + factor * 255),
            this.alpha
        );
    }

    public darken(factor: number): Color {
        return new Color(
            this.clamp(this.red - factor * 255),
            this.clamp(this.green - factor * 255),
            this.clamp(this.blue - factor * 255),
            this.alpha
        );
    }

    public static fromHex(hex: string): Color {
        let red = parseInt(hex.slice(1, 3), 16);
        let green = parseInt(hex.slice(3, 5), 16);
        let blue = parseInt(hex.slice(5, 7), 16);
        let alpha = hex.length === 9 ? parseInt(hex.slice(7, 9), 16) / 255 : undefined;
        return new Color(red, green, blue, alpha);
    }

    // Getters and setters for the color components
    public getRed(): number {
        return this.red;
    }

    public getGreen(): number {
        return this.green;
    }

    public getBlue(): number {
        return this.blue;
    }

    public getAlpha(): number | undefined {
        return this.alpha;
    }

    public setRed(red: number): void {
        if(red < 0 || red > 255) throw new RangeError("Red must be [0, 256)");
        this.red = red; 
    }

    public setGreen(green: number): void {
        if(green < 0 || green > 255) throw new RangeError("Green must be [0, 256)");
        this.green = green;
    }

    public setBlue(blue: number): void {
        if(blue < 0 || blue > 255) throw new RangeError("Blue must be [0, 256)");
        this.blue = blue;
    }

    public setAlpha(alpha: number): void {
        if(alpha < 0 || alpha > 1) throw new RangeError("Alpha must be [0, 256)");
        this.alpha = alpha;
    }
}