// import * as AWS from 'aws-sdk'
// import * as AWSXRay from 'aws-xray-sdk'
// import { DocumentClient } from 'aws-sdk/clients/dynamodb'
// import { TodoItem } from '../models/TodoItem'
// import { TodoUpdate } from '../models/TodoUpdate';
import {getDocumentClient} from "@shelf/aws-ddb-with-xray";

const region = process.env.REGION;
const tableName = process.env.TODOS_TABLE

const DB = getDocumentClient({ //AWS XRAY TRACING
  ddbParams: {region: region, convertEmptyValues: true},
  ddbClientParams: {region: region},
});

// const XAWS = AWSXRay.captureAWS(AWS)


// TODO: Implement the dataLayer logic

export function getTodos(userId: string): Promise<any>{
    return new Promise(async(resolve) => {
        const result = await DB.query({
            TableName: tableName,
            KeyConditionExpression: "userId = :userId",
            ExpressionAttributeNames: {":userId": `${userId}`}
        }).promise;
        resolve(result);
    })
}