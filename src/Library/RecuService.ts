/**
* name 
*/
module Library{
	export class RecuService{
		constructor(){

		}

		public static recalcu(a:number, b:number):number
		{
			return InterService.forInter(a, b) + InterService.forInter(a, b);
		}
	}
}