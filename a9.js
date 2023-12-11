const{MongoClient}=require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('server Connected');
    
    const db=client.db("product_inventory");
    console.log("Database selected");

    const collection=db.collection('products');
    console.log('collection selected');

    const result=await collection.insertMany([{'name':'chair','price':'RS 1000','quantity':'100'},{'name':'table','price':'RS 2000','quantity':'50'},{'name':'sofa','price':'RS 5000','quantity':'20'}]);
    console.log(result);

    const result1=await collection.updateOne({'name':'chair'},{$set:{'name':'desk'}});
    console.log(result1);

    const result2=await collection.deleteOne({'name':'sofa'});
    console.log(result2);

}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())