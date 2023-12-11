const{MongoClient}=require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');

async function main(){
    await client.connect();
    console.log('server Connected');
    
    const db=client.db("employee_management");
    console.log("Database selected");

    const collection=db.collection('employees');
    console.log('collection selected');

    const result=await collection.insertMany([{'name':'nikil','position':'hod','salary':'80000'},{'name':'jakab','position':'teacher','salary':'50000'},{'name':'jayanth','position':'director','salary':'100000'}]);
    console.log(result);

    const result1=await collection.find({}).toArray();
    console.log(result1);

    const result2=await collection.find({'name':'nikil'}).toArray();
    console.log(result2);

    const result3=await collection.updateOne({'name':'jakab'},{$set:{'name':'pavan'}})
    console.log(result3);

}
main()
.then(console.log)
.catch(console.error)
.finally(()=>client.close())