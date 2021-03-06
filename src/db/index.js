import Dexie from 'dexie'
const env = process.env.NODE_ENV
const db = new Dexie(`markety_${env}`)

db.version(1).stores({shoppingCart: '++id,name,price'})
db.version(2).stores({comparables: '++id,name,price,quantity'})

if (env !== 'production') {
  db.transaction('rw', db.shoppingCart, async() => {
    // Make sure we have something in DB:
    if ((await db.shoppingCart.count()) === 0) {
      await db.shoppingCart.bulkAdd([
        {name: 'Tomatoes', price: 2},
        {name: 'Cereal', price: 10},
        {name: 'Bananas', price: 4},
        {name: 'Apples', price: 7},
        {name: 'Onions', price: 2},
        {name: 'Pinapple', price: 4},
        {name: 'Garlics', price: 6},
        {name: 'Milk', price: 5},
        {name: 'Ham', price: 12},
        {name: 'Cheese', price: 11},
        {name: 'Hamburguers', price: 20},
        {name: 'Chips', price: 2},
        {name: 'Chocolate', price: 2},
        {name: 'Books', price: 25},
        {name: 'Potatoes', price: 1}
      ])
    }
  }).catch(e => {
    alert(e.stack || e)
  })

  db.transaction('rw', db.comparables, async() => {
    // Make sure we have something in DB:
    if ((await db.comparables.count()) === 0) {
      await db.comparables.bulkAdd([
        {name: 'Suavitel', price: 38, quantity: 1000},
        {name: 'Ensueño', price: 39, quantity: 850},
        {name: 'Downy', price: 100, quantity: 3000},
        {name: 'El de aurrera', price: 180, quantity: 5000},
        {name: 'Great Value', price: 120, quantity: 3000}
      ])
    }
  }).catch(e => {
    alert(e.stack || e)
  })
}

export default db
