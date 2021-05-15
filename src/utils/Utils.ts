import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
//import utc from "dayjs-plugin-utc";
import _ from 'lodash';

export class Utils {
	static firstLetterUppercase(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	static formatAddressForUrl(address: string) {
		//Como tenho q colocar o endereco na requisição get e ele contém '/'(foward slash)
		//e espaço em branco, eu substituo esse caracteres para não dar erro.
		//No backend reverto essa substituição
		return address.replace(/ /g, '_').replace(/\//g, '#');
	}

	static formatDateApi(date: string) {
		try {
			const splitedDate = date.split('/', 3);
			const reversedArray = _.reverse(splitedDate);
			return reversedArray.toString().replace(/,/g, '-');
		} catch {
			return date;
		}
	}

	//   static formatDateToPtBr(day) {
	//     return dayjs(day.dateString).locale("pt-br").format("DD/MM/YYYY");
	//   }

	static formatThousands(value: number) {
		const str = value.toString();

		if (str.length <= 3) return str;

		let formatted = '';

		for (let i = 0; i < str.length; i++) {
			if ((str.length - (i + 1)) % 3 === 0 && i < str.length - 1) {
				formatted += `${str[i]}.`;
			} else {
				formatted += `${str[i]}`;
			}
		}

		return formatted;
	}

	static substractDate(dias: number) {
		return dayjs().subtract(dias, 'day').locale('pt-br').format('DD/MM/YYYY');
	}

	static titleCase(str: string) {
		if (str === null) return false;
		let splitStr = str.toLowerCase().split(' ');
		for (let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}

		return splitStr.join(' ');
	}

	//   static todayPtBr() {
	//     dayjs.extend(utc);
	//     return dayjs.utc(new Date()).locale("pt-br").format("DD/MM/YYYY");
	//   }
}
