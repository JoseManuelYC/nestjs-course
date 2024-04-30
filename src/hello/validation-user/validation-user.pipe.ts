import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidationUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const ageNumber = parseInt(value.age.toString(), 10);

    console.log(metadata);

    if (isNaN(ageNumber)) {
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }

    return { ...value, age: ageNumber };
  }
}
