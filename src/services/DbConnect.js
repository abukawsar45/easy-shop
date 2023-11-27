import { MongoClient, ServerApiVersion } from 'mongodb';

/**
 * @type {import('mongodb').Db};
 */

let db;

const DbConnect =async () => {
  if (db) return db;
  try
  {
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri =
      'mongodb+srv://easy-shop:BrWq7XQeZ6FdnMKk@cluster0.9lqzgjv.mongodb.net/?retryWrites=true&w=majority';

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db('easy-shop');
     await client.db('admin').command({ ping: 1 });
     console.log(
       'Pinged your deployment. You successfully connected to MongoDB!'
    );
    return db;
  } catch (error)
  {
    console.log(error.message)
  }

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

  
}

export default DbConnect;