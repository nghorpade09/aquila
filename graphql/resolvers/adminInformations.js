/* eslint-disable no-unused-vars */
const {NSErrors} = require('../../utils');

const resolvers = {
    Query : {
        getAdminInformation : async (parent, {id}, context, info) => {
            const {AdminInformation} = require('../../orm/models');
            return AdminInformation.find({}).lean();
        }
    }
};

module.exports = resolvers;