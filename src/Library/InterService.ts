/**
* name 
*/
module Library{
	export class InterService{
		constructor(){

		}

		public test(a:number, b:number):number
		{
			return RecuService.recalcu(a, b);
		}

		public static forInter(a:number, b:number):number
		{
			return a - b;
		}
	}
}