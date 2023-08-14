const config = Object.freeze({
  PORT: 3000,
  MONGO_URI:
    'mongodb://tests:12345Tests@ac-uoiozhi-shard-00-00.rbs9llu.mongodb.net:27017,ac-uoiozhi-shard-00-01.rbs9llu.mongodb.net:27017,ac-uoiozhi-shard-00-02.rbs9llu.mongodb.net:27017/pokedex?ssl=true&replicaSet=atlas-4jvqkg-shard-0&authSource=admin&retryWrites=true&w=majority',
});

module.exports = {
  PORT: config.PORT,
  MONGO_URI: config.MONGO_URI,
};
