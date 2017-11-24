export class Cipher {

  encrypt(str) { return str;}
  decrypt(str) { return str;}

}

export class CaesarCipher extends Cipher {
	constructor(shiftNum){
		super();
		this.alphaArray = "abcdefghijklmnopqrstuvwxyz".split('');
		this.shiftNum = shiftNum;
	}

	encrypt(str) {
		let res = '';
		const splitted = str.split('');
		splitted.map((char) => {
			const index = this.alphaArray.indexOf(char);
			if(index == -1) {
				//アルファベットでない場合
				res += char;
			}else{
				let nextIndex = index + this.shiftNum;
				//indexが26を超えたら0に戻るように余りからindexを計算
				nextIndex = nextIndex % this.alphaArray.length;
				const shiftedChar = this.alphaArray[nextIndex];
				res += shiftedChar;
			}
		}, this);
		return res;
	}

	decrypt(str) {
		let res = '';
		const splitted = str.split('');
		splitted.map((char) => {
			const index = this.alphaArray.indexOf(char);
			if(index == -1) {
				//アルファベットでない場合
				res += char;
			}else{
				let nextIndex = index - this.shiftNum;

				if(nextIndex < 0) {
					nextIndex = this.addNumUntilPositiveOrZero(nextIndex, this.alphaArray.length);
				}

				const shiftedChar = this.alphaArray[nextIndex];
				res += shiftedChar;
			}
		}, this);
		return res;
	}

	addNumUntilPositiveOrZero(initNum, intervalNum) {
		let res = initNum;
		while(true) {
			if(res >= 0) {
				break;
			}

			res = initNum + intervalNum;
		}

		return res;
	}

}

