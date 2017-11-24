export class Tokenizer {
  constructor(separator = /[\s\t\(\)\{\}\.;,]/) {
    this.separator = separator;
  }

  split(str) {
    return str.split(this.separator).filter(v => v.length > 0);
  }

}