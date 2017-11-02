import { Observable } from "rxjs/Rx";

export class Timer {

    private obsTimer: Observable<number>;
    private sub: any;
    constructor(public timeLeft: number) {

    }

    start(callback) {

        this.obsTimer = Observable.timer(3000, 1000);

        this.sub = this.obsTimer.subscribe(() => {
            if (this.timeLeft > 0) {
                this.timeLeft = this.timeLeft - 1;
                console.log(this.timeLeft);
            } else {
                this.stoper(callback);
            }
        });
        return this.obsTimer;
    }

    stoper(callback) {
        callback();
        this.sub.unsubscribe();
    }
}
