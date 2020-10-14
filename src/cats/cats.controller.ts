import { Controller, Get, Req, Post, Body, HttpException, HttpStatus, Delete, Param, Put } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';
import { CreateCatDto }  from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController{
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        // throw new HttpException({
        //     status: HttpStatus.FORBIDDEN,
        //     error: 'This is a custom message',
        //   }, HttpStatus.FORBIDDEN)
        return this.catsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id): Promise<Cat> {
        return this.catsService.findById(parseInt(id));
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Cat> {
        console.log("Deleting id:", id)
        return this.catsService.delete(parseInt(id));
    }

    @Put(':id')
    async update(@Param('id') id,@Body() updateCatDto: UpdateCatDto): Promise<Cat> {
        console.log('Updating id: ', id);
        return this.catsService.update(parseInt(id), updateCatDto);
    }
}