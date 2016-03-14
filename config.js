module.exports = {
  "app":{id:'hello-world'},
  "redis":{
    "host": process.env.REDIS_PORT_6379_TCP_ADDR || 'redis',
    "port": process.env.REDIS_PORT_6379_TCP_PORT || 6379
  },
  "mongodb":{
    "host": process.env.MONGO_PORT_27017_TCP_ADDR || 'mongo',
    "port": process.env.MONGO_PORT_27017_TCP_PORT || 27017,
    "db": process.env.MONGO_DB || 'test'
  },
  "memcached":{
    "host": process.env.MEMCACHED_PORT_11211_TCP_ADDR || 'memcached',
    "port": process.env.MEMCACHED_PORT_11211_TCP_PORT || 11211
  },
  "elasticsearch":{
    "host":process.env.ELASTICSEARCH_PORT_9200_TCP_ADDR || 'elasticsearch',
    "port":process.env.ELASTICSEARCH_PORT_9200_TCP_PORT || 9200,
    "index":process.env.ELASTICSEARCH_INDEX || 'global'
  }
};