const { MongoClient } = require('mongodb')

export default async function main () {
  const uri =
    'mongodb+srv://Wilantr0:Guille%3B2007@cluster0.ujed1vy.mongodb.net/'

  const client = new MongoClient(uri)

  try {
    await client.connect()
    console.log('Mongo connected')
    await listDatabases(client)
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
}

main().catch(console.error)

async function listDatabases (client) {
  const databases = await client.db().admin().listDatabases()

  databases.databases.forEach(element => {
    console.log(element.name)
  })
}
