import Dexie from 'dexie'
const env = process.env.NODE_ENV
const db = new Dexie(`markety-${env}`)

db.version(1).stores({
  shoppingCart: '++id,name,price'
})

export default db
