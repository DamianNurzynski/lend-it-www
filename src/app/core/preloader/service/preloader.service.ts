import { Injectable } from "@angular/core";

@Injectable()
export class PreloaderService {
    private active: boolean = false;


    start() {
        this.active = true;
    }

    stop() {
        this.active = false;
    }

    isActive() {
        return this.active;
    }
}