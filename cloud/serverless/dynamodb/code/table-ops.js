const { Endpoint } = require("aws-sdk");
const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-west-2' });

const dynamodb = new AWS.DynamoDB({
    endpoint: "http://localhost:8000"
});

// dynamodb.listTables({}, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });


let promise = dynamodb.describeTable({
    TableName: "td_notdes_sdk"
}).promise()
.then( (data) => {
    console.log(data);
})
.catch( (err) => { 
    console.log("err: " + err)
});

// dynamodb.createTable({
//     TableName: "td_notes_sdk",
//     AttributeDefinitions: [
//         {
//             AttributeName: "user_id",
//             AttributeType: "S"
//         },
//         {
//             AttributeName: "timestamp",
//             AttributeType: "N"
//         }
//     ],
//     KeySchema: [
//         {
//             AttributeName: "user_id",
//             KeyType: "HASH"
//         },
//         {
//             AttributeName: "timestamp",
//             KeyType: "RANGE"
//         }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 1,
//         WriteCapacityUnits: 1
//     }
// }, (err, data)=>{
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// dynamodb.updateTable({
//     TableName: "td_notes_sdk",
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 2,
//         WriteCapacityUnits: 1
//     }
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });

// dynamodb.deleteTable({
//     TableName: "td_notes_sdk"
// }, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(JSON.stringify(data, null, 2));
//     }
// });