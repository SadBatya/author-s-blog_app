const fs = require('fs/promises')
const path = require('path')
console.log(path.basename(__filename))
const base = path.join(__dirname, 'temp')
const fsSync = require('fs')

const getContent = () => {
  `/n/r${process.argv[2] ?? ''}`
}

async function start() {
  try {
    if(fsSync.existsSync(base)){
      await fs.appendFile(path.join(base, 'logs.txt'), getContent())
      await fs.readFile(path.join(base, 'logs.txt'), {encoding: 'utf-8'})
      console.log(data)
    }else{
      await fs.mkdir(base)
      await fs.writeFile(path.join(base, 'logs.txt'), getContent())
    }
    await fs.access()
    await fs.mkdir(base)
    await fs.writeFile(path.join(base, 'logs.txt'), getContent())
  } catch (error) {
    console.log(error)
  }
}



start()


