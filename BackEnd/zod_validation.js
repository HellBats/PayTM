const zod = require('zod');

const zod_signin_schema = zod.object({
    FirstName:zod.string().trim().min(4).max(20),
    LastName:zod.string().trim().min(4).max(20),
    PhoneNo:zod.string().trim().length(10),
    EmailId:zod.string().trim().email(),
    Password:zod.string().min(8).max(50),
})

const zod_signup_schema = zod.object({
    EmailId:zod.string().trim().email(),
    Password:zod.string().min(8).max(50),
})

const zod_update_schema = zod.object({
    FirstName:zod.string().trim().min(4).max(20).optional(),
    LastName:zod.string().trim().min(4).max(20).optional(),
    PhoneNo:zod.string().trim().length(10).optional(),
    EmailId:zod.string().trim().email().optional(),
    Password:zod.string().min(8).max(50).optional(),
})

const zod_filter_schema = zod.object({
    FirstName:zod.string().trim().min(1).max(20).optional(),
    LastName:zod.string().trim().min(1).max(20).optional(),
    PhoneNo:zod.string().trim().length(10).optional(),
})
module.exports = {zod_signin_schema,zod_signup_schema,zod_update_schema,zod_filter_schema}