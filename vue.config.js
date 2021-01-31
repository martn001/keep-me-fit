module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  /*publicPath: '/keep-me-fit/'
  */publicPath: process.env.NODE_ENV === 'production'
    ? '/keep-me-fit/'
    : '/',
};
