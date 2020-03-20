module.exports = {
  apps : [{
    script: "./server/start-prod.js",
    exec_interpreter: "./node_modules/.bin/babel-node",
    error_file: 'err.log',
    out_file: 'out.log',
    log_file: 'combined.log'
  }]
}