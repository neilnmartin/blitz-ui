const config = {
  local: {
    api: 'http://localhost:9001'
  },
  production: {
    api: 'TODO' // need to figure out how the endpoint will work in prod
  }
}
export default { 
  ...(process.env.NODE_ENV === 'development' 
        ? config.local 
        : config.production
)}