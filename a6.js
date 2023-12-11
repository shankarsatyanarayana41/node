const{MongoClient}=require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('server Connected');
    
    const db=client.db("kits");
    console.log("Database selected");

    const collection=db.collection('Students');
    console.log('collection selected');

    const result=await collection.insertMany([{'name':'nikil','reg':'12g8','section':'cse'},{'name':'jakab','reg':'12g1','section':'cse'},{'name':'jayanth','reg':'12g2','section':'cse'}]);
    console.log(result);
    return 'done';
}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())