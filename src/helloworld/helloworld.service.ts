import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {
    private helloString: string = '';

    getHelloWorld(): string {
        return this.helloString;
    }

    setHelloString() {
        this.helloString = 'Hello World!!!';
    }
}
