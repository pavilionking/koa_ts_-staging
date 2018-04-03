// tslint:disable
import * as Sequelize from 'sequelize';


// table: userinfo_uni
export interface userinfo_uniAttribute {
	id:number;
	userid?:string;
	nickname?:string;
	phone?:string;
	wxid?:string;
	wbid?:string;
	qqid?:string;
	psw?:string;
	coin?:number;
	point?:number;
	level?:string;
	plus?:number;
	name?:string;
	gender?:number;
	birth?:Date;
	email?:string;
	province?:string;
	city?:string;
	address?:string;
	area?:string;
	createtime?:Date;
	processtime?:Date;
	referid?:number;
	source?:string;
	wx_unionid?:string;
}
export interface userinfo_uniInstance extends Sequelize.Instance<userinfo_uniAttribute>, userinfo_uniAttribute { }
export interface userinfo_uniModel extends Sequelize.Model<userinfo_uniInstance, userinfo_uniAttribute> { }
