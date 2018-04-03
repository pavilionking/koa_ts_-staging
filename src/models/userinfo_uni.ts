/* jshint indent: 1 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {userinfo_uniInstance, userinfo_uniAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
	return sequelize.define<userinfo_uniInstance, userinfo_uniAttribute>('userinfo_uni', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		userid: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		nickname: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		phone: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		wxid: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		wbid: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		qqid: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		psw: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		coin: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			defaultValue: '0'
		},
		point: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '0'
		},
		level: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		plus: {
			type: DataTypes.FLOAT,
			allowNull: true,
			defaultValue: '1'
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		gender: {
			type: DataTypes.INTEGER(4),
			allowNull: true,
			defaultValue: '0'
		},
		birth: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		email: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		province: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		address: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		area: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		createtime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		processtime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		referid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		source: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		wx_unionid: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'userinfo_uni',
		timestamps: false
	});
};
