import { Game } from "./game";

export class Anagram extends Game {

    words: Array<string>;
    wordToGuess: string;
    shuffledWord: string;
    wordUser: string;
    startMessage:string;


    constructor(public name: string) {
        super(name);

        this.wordToGuess = "******";
        this.wordUser = "";
        this.shuffledWord = "";
        this.words = new Array<string>();
        this.startMessage = "Empezar a jugar";

    }


    validateWord(): boolean {

        return this.wordUser.toUpperCase() == this.wordToGuess;
    }

    setWordToGuess() {
        this.words = this.words.sort(() => { return Math.random() - 0.5 });
        this.wordToGuess = this.words.pop().toUpperCase();

        this.setDisorderedWord();
    }

    setDisorderedWord() {
        do {
            this.shuffledWord = this.wordToGuess.split('').sort(function () { return 0.5 - Math.random() }).join('');
        } while (this.shuffledWord == this.wordToGuess);
    }

}
