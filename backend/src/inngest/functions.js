const userModel = require("../models/User")
const connectDB = require("../lib/db")
const { inngest } = require("../lib/inngest")

// USER CREATE FUNCTION
const syncUser = inngest.createFunction(
    { id: "sync-user" },
    { event: "clerk/user.created" },
    async ({ event }) => {

        await connectDB()

        const { id, email_addresses, first_name, last_name, image_url } = event.data

        await userModel.findOneAndUpdate(
            { clerkId: id },
            {
                email: email_addresses[0]?.email_address,
                name: `${first_name || ""} ${last_name || ""}`,
                profileImage: image_url
            },
            { upsert: true, new: true }
        )
    }
)


// USER DELETE FUNCTION
const deletUser = inngest.createFunction(
    { id: "delete-user-from-db" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {

        await connectDB()

        const { id } = event.data

        await userModel.deleteOne({
            clerkId: id
        })
    }
)

module.exports = {
    syncUser,
    deletUser
}