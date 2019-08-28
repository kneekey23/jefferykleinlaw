// Load the SDK for JavaScript
var AWS = require('aws-sdk');

// Set the Region 
AWS.config.update({region: 'us-east-1'});
var SES = new AWS.SES({apiVersion: '2010-12-01'})

exports.lambdaHandler = async (event, context) => {

    
    let body = JSON.parse(event.body);
    console.log(body)
    console.log(body.message)

    // Create sendEmail params 
    var params = {
    Destination: { /* required */
        ToAddresses: [
        'jefferymkleinlaw@aol.com'
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
    Source: 'jefferykleinlaw@aol.com' /* required */

    };
    console.log(params);
    // Create the promise and SES service object
    try {
    let data = SES.sendEmail(params).promise();
    console.log(data);
    return data;

    } catch (err) {
        console.log(err);
        return err;
    }

};
