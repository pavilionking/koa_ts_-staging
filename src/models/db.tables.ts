// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
	userinfo_uni:def.userinfo_uniModel;
}

export const getModels = function(seq:sequelize.Sequelize):ITables {
	const tables:ITables = {
		userinfo_uni: seq.import(path.join(__dirname, './userinfo_uni')),
	};
	return tables;
};
