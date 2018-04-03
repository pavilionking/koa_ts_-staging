export default {

  apiVersion: 'v1',
  listenPort: 3001,
  // 数据库
  dialect: 'mysql',
  database: 'crm',
  username: 'wljdatabase%dnb',
  password: 'qaz!@#456mysql',
  host: 'wljdatabase.mysqldb.chinacloudapi.cn',
  port: 3306,

  defaultPageSize: 10, // 默认每页大小

  jwtExpires: 7200, // 登录过期时间
  jwtSecret: 'df047fb1fcbffd163e0bda4e67e0e0ff7e8a7c74a1d5501ed729de5edb40893b',
  jwtAudience: 'WANGLAOJISOCIALAPI',
  jwtAuthObj: 'SIGNINTOKEN',
  jwtAlgorithm: 'HS512',

}

