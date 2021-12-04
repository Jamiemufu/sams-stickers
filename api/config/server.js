module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 81),
  url: 'http://localhost:81',
  proxy: true,
});
