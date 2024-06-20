// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/signup',
        destination: '/app/SignUp', // Adjust the destination path as per your actual path
      },
    ];
  },
};
