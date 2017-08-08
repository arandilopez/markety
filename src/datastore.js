import Dexie from 'dexie'
const env = process.env.NODE_ENV
const db = new Dexie(`markety-${env}`)

db.version(1).stores({
  kind: "++id,name,unit"
  products: "++id,name,price,pricePerUnit,kindId"
})

export default db
