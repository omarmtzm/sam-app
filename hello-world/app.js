let response

exports.lambdaHandler = async (event, context) => {
  throw new Error("This will cause a deployment rollback")
  //try {
//    response = {
 //     statusCode: 200,
 //     body: JSON.stringify({
 //       message: "I'm using canary deployments",
 //     }),
 //   }
 // } catch (err) {
  //  console.log(err)
//    return err
 // }

 // return response
}