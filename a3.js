const{MongoClient}=require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('server Connected');
    
    const db=client.db("kits");
    console.log("Data selected");

    const collection=db.collection('Students');
    console.log('collection selected');

    const result=await collection.find({}).toArray();
    console.log(result);
    return 'done';
}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())