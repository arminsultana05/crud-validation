const isAuth = (req, res, next) => {
    console.log('authentication USer');
    next();
  };
  
  module.exports = { isAuth };
  