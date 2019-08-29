// Load the SDK for JavaScript
var AWS = require('aws-sdk');

// Set the Region 
AWS.config.update({region: 'us-east-1'});
var ses = new AWS.SES({apiVersion: '2010-12-01'})
let response;
exports.lambdaHandler = async (event, context) => {

    
    let body = JSON.parse(event.body);
    // Create sendEmail params 
    var params = {
    Destination: { /* required */
        ToAddresses: [
        'contact@jefferymkleinlaw.com'
        ]
    },
    Message: { /* required */
        Body: { /* required */
                Text: {
                Charset: "UTF-8",
                Data: body.message
                }
            },
            Subject: {
            Charset: 'UTF-8',
            Data: "FROM " + body.fromEmail + ": " + body.subject
            }
        },
    Source: 'contact@jefferymkleinlaw.com' /* required */

    };

    // Create the promise and SES service object
    try {
    let data = await ses.sendEmail(params).promise()
        console.log(data);
        response = {
            "isBase64Encoded": false,
            "statusCode": 200,
            "headers": { 
                "Content-Type": "application/json", 
                "Access-Control-Allow-Origin": "http://localhost:3000",
            },
            "body": data
        }
        return response;
  
  
    } catch (err) {
        console.log(err);
        response = {
            "isBase64Encoded": false,
            "statusCode": 500,
            "headers": { 
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
            },
            "body": err
        }
        return response;
    }

};
