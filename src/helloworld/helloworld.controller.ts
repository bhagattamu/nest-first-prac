import { Controller, Get, Post } from '@nestjs/common';
import { HelloworldService } from './helloworld.service'

@Controller('helloworld')
export class HelloworldController {
    constructor(private helloWorldService: HelloworldService) {}
    @Get()
    getHelloWorld(): string {
        return this.helloWorldService.getHelloWorld();
    }
    @Post()
    setHellowWorld() {
        this.helloWorldService.setHelloString();
    }
}
