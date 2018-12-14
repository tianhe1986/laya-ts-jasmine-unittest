/**
* name 
*/
module Library{
	export class MixedService{
		constructor(){

		}

		public calcu(a:number, b:number):number
		{
			let userService = new UserService();
			return userService.multiple(ToolService.sum(a, b), ToolService.sum(a, -b));
		}
	}
}