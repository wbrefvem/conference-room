/**
* Room.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        building: {
            model: 'building',
            required: true
        },
        roomNumber: {
            type: 'string',
            required: true
        },
        type: {
            type: 'string',
            required: true
        },
        manager: {
            type: 'string',
            required: true
        },
        generalUsage: {
            type: 'boolean',
            required: true
        },
        seating: {
            type: 'integer',
            required: true
        },
        display: {
            type: 'boolean',
            required: true
        },
        phone: {
            type: 'boolean',
            required: true
        },
        network: {
            type: 'boolean',
            required: true
        },
        usageRestrictions: {
            type: 'string',
            required: true
        },
        hasUsageRestrictions: {
            type: 'boolean',
            required: true
        }
    }
};

