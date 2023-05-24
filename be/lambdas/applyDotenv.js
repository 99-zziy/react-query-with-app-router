const applyDotenv = (dotenv) => {
  dotenv.config();
  return {
    mongoUri: process.env.MONGO_URI,
  };
};

module.exports = applyDotenv;
