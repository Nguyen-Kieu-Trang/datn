export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    type: 'mysql',
    username: process.env.DATABASE_USERNAME || 'root',
    password: process.env.DATABASE_PASSWORD || 'Password1@',
    database: process.env.DATABASE_NAME || 'localdb',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    logging: process.env.DATABASE_LOGGING ? true : false,
  },
  jwtAuth: {
    access_token_ttl: process.env.JWT_ACCESS_TOKEN_TTL || '15m',
    refresh_token_ttl: process.env.JWT_REFRESH_TOKEN_TTL || '7d',
    reset_password_token_ttl: process.env.JWT_RESET_PASSWORD_TOKEN_TTL || '30m',
    jwt_access_token_secret:
      process.env.JWT_ACCESS_TOKEN_SECRET || 'vHEWl0LSfgdU5DybNLRT',
    jwt_refresh_token_secret:
      process.env.JWT_REFRESH_TOKEN_SECRET || '5589Xe1LU0VQ1iU11Jh9',
    jwt_reset_password_token_secret:
      process.env.JWT_RESET_PASSWORD_TOKEN_SECRET || '0000Xe1LU0VQ1iU11Jh9',
    jwt_access_token_update_lineId:
      process.env.JWT_ACCESS_TOKEN_UPDATE_LINEID || 'vHEWl0LSfgdU5DybNLRT',
    jwt_access_token_update_lineId_ttl:
      process.env.JWT_ACCESS_TOKEN_UPDATE_LINEID_TTL || '3d',
  },
  otpAuth: {
    hotp_secret: process.env.HOTP_SECRET || '',
    hotp_ttl: process.env.HOTP_TTL || 60000,
  },
  redis: {
    dsn: process.env.REDIS_DSN || 'redis://:@localhost:6379/0',
  },
  caching: {
    ttl: parseInt(process.env.CACHE_TTL, 10) || -1,
  },
  loggingType: process.env.ENV_LOG_TYPE || 'dev',
  domain: process.env.DOMAIN || '',
  mailService: {
    mail_host: process.env.MAIL_HOST,
    mail_port: process.env.MAIL_PORT,
    mail_secure: process.env.MAIL_SECURE,
    mail_user: process.env.MAIL_USER,
    mail_pass: process.env.MAIL_PASS,
    mail_sender: process.env.MAIL_SENDER,
  },
  stm: {
    ttl: process.env.TTL_CACHE_STM || 3600000,
  },
  booking_lock: {
    ttl: process.env.TTL_CACHE_BOOKING || 300000,
  },
  s3: {
    bucket: process.env.S3_BUCKET || '',
    aws_access_key: process.env.S3_AWS_ACCESS_KEY || '',
    aws_secret_key: process.env.S3_AWS_SECRET_KEY || '',
    aws_prefix_path: process.env.S3_PREFIX_PATH || '',
  },

  socketService: {
    url: process.env.BASE_SOCKET_SERVICE,
    apiKey: process.env.SOCKET_API_KEY,
  },
  location: process.env.LOCATION,
  site: {
    baseUrl: process.env.BASE_URL,
    baseUrlLogin: process.env.BASE_URL_LOGIN,
    linkLinePMP: process.env.LINK_LINE_PMP,
  },
  timeRemindBeforeCall: process.env.TIME_REMIND_BEFORE_CALL || 300000,
  urlRenewCard: process.env.URL_RENEW_CARD,
});
