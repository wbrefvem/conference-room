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
        name: {
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
        capacity: {
            type: 'integer',
            required: true
        },
        projector: {
            type: 'boolean',
            required: true
        },
        conferencePhone: {
            type: 'boolean',
            required: true,
        },
        equipment: {
            type: 'string',
            required: true
        },
        hasUsageRestrictions: {
            type: 'boolean',
            required: true
        }
    }
};

