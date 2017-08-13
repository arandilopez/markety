import Dexie from 'dexie'
const env = process.env.NODE_ENV
const db = new Dexie(`markety_${env}`)

db.version(1).stores({
  shoppingCart: '++id,name,price'
})

if (env !== 'production') {
  db.transaction('rw', db.shoppingCart, async() => {
    // Make sure we have something in DB:
    if ((await db.shoppingCart.count()) === 0) {
      await db.shoppingCart.bulkAdd([
        {name: 'Tomatoes', price: 2},
        {name: 'Cereal', price: 10},
        {name: 'Potatoes', price: 1}
      ])
    }
  }).catch(e => {
    alert(e.stack || e)
  })
}

export default db
