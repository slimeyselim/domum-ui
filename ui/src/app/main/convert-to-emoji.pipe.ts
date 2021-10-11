import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToEmoji'
})
export class ConvertToEmojiPipe implements PipeTransform {
  transform(value:string):string{
    switch(value){
      case 'dog':
        return '🐶';
        break;
      case 'hamster':
        return '🐹';
        break;
      case 'cat':
        return '🐱';
        break;
      default :
        return value;
    }
  }
}
