"use server"


const mailchimp = require("@mailchimp/mailchimp_marketing");
import crypto from "crypto";

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX
});

const audienceID = process.env.MAILCHIMP_AUDIENCE_ID




export const addSubscriptionAction = async ({firstName, lastName, email, phone, instrument}) => {

    try {
        // Add a subscriber
        await mailchimp.lists.addListMember(audienceID, {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                "FNAME": firstName,
                "LNAME": lastName,
                "PHONE": phone,
                "INSTRUMENT": instrument
            }
        });


        // Assign a tag to a subscriber
        const formattedEmail = email.toLowerCase();
        const subscriberHash = crypto.createHash("md5").update(formattedEmail).digest("hex");

        await mailchimp.lists.updateListMemberTags(audienceID, subscriberHash, {
            tags: [
                { name: "current/returning students", status: "active" },
                { name: instrument, status: "active" }
            ],
          });

        console.log("Loggin res:", res)
        return {message: "success"}

    } catch (error) {
        console.log("logging erorr:", error)
        return {error: error.message}
    }
    
}




