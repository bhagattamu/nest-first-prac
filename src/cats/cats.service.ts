import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface'; 

@Injectable()
export class CatsService {
    private cats: Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }
    
    findAll(): Cat[] {
        return this.cats;
    }

    findById(id: number): Cat {
        return this.cats.filter(cat => cat.id === id)[0];
    }

    delete(id: number): Cat {
        console.log("id from param:", typeof id)
        const deleted = this.cats.filter(cat => {
            console.log("cat id:",typeof cat.id)
            return cat.id === id;
        })[0];
        console.log("deleted cat:", deleted);
        this.cats = this.cats.filter(cat => cat.id !== id)
        return deleted;
    }

    update(id: number, updatedCat: Cat): Cat {
        this.cats = this.cats.map(cat => {
            if(cat.id === id){
                cat.name = updatedCat.name;
                cat.age = updatedCat.age;
                cat.breed = updatedCat.breed;
                return cat;
            }else{
                return cat;
            }
        });

        return this.cats.filter(cat => cat.id === id)[0];
    }
}