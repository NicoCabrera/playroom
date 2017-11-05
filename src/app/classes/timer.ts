import { Observable } from "rxjs/Rx";

export class Timer {

    private obsTimer: Observable<number>;
    private sub: any;
    constructor(public timeLeft: number) {

    }

    start(callback) {

        this.obsTimer = Observable.timer(1000, 1000);

        this.sub = this.obsTimer.subscribe(() => {
            if (this.timeLeft > 0) {
                this.timeLeft = this.timeLeft - 1;
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

    getTimeLeft(){
        return this.timeLeft;
    }
}
