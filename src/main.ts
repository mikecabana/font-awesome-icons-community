import { showUI, once } from '@create-figma-plugin/utilities';
import FAI from './icon-sets';

export default function () {
	const { solid, regular, brands } = FAI;
	const options = { width: 360, height: 480 };
	const data = { solid, regular, brands };
	showUI(options, data);

	// function handleSubmit(data) {
	// 	console.log(data);
	// }
	// once('SUBMIT', handleSubmit);
}
