module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '42ef5e15ea7c9b6345177ca5dd0ea8eb'),
    },
  },
});
