module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b7957fafa8f4b8850ba8fb1858210648'),
  },
});
