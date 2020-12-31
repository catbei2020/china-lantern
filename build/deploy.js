const { run } = require('runjs')

// 放置至 dist 进行自动部署
run('cp ./test/deploy.html ./dist/index.html')
run('cp ./test/favicon.ico ./dist/favicon.ico')
