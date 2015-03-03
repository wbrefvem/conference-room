import DS from "ember-data";

var Room = DS.Model.extend({
    building: DS.belongsTo('building'),
    name: DS.attr('string'),
    manager: DS.attr('string'),
    general_usage: DS.attr('boolean'),
    capacity: DS.attr('number'),
    projector: DS.attr('boolean'),
    conferencephone: DS.attr('boolean'),
    equipment: DS.attr('string'),
    hasUsageRestrictions: DS.attr('boolean')
});

Room.reopenClass({
    FIXTURES: [
        {
            "building": 0, 
            "capacity": 16, 
            "general_usage": true, 
            "name": "Conference room 112 Finance, (Conference Mailto: address)", 
            "equipment": "projector & screen|Conference phone, 919-996-7825|room phone, 919-996-4935", 
            "manager": "Finance, Andrea Waters", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 0, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 200, 
            "general_usage": true, 
            "name": "Council Chamber 201, (RMB map link)", 
            "equipment": "Screen|Computer", 
            "manager": "City manager's Office", 
            "hasUsageRestrictions": true, 
            "conferencephone": false, 
            "id": 1, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 12, 
            "general_usage": false, 
            "name": "Conference room 213, (Test of opening calendar event via remote email access)", 
            "equipment": "", 
            "manager": "City Council", 
            "hasUsageRestrictions": false, 
            "conferencephone": false, 
            "id": 2, 
            "projector": false
        }, 
        {
            "building": 0, 
            "capacity": 12, 
            "general_usage": false, 
            "name": "Conf Rm 228", 
            "equipment": "Camera|LCD displays (2)|Smart board|Conference phone, 919-996-7819", 
            "manager": "City manager's Office", 
            "hasUsageRestrictions": false, 
            "conferencephone": true, 
            "id": 3, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 16, 
            "general_usage": true, 
            "name": "Conference room 237", 
            "equipment": "room phone, 919-996-4661|White board (small)?|WiFi (don't most have wifi? YES should it be assumed unless otherwise stated?)", 
            "manager": "City manager's Office", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 4, 
            "projector": false
        }, 
        {
            "building": 0, 
            "capacity": 25, 
            "general_usage": true, 
            "name": "Conference room 303", 
            "equipment": "Screen and overhead projector (laptop cable available in RMB suite 605)|room phone, 919-996-4292", 
            "manager": "Parks, Recreation and Cultural Resources / Facilities & Operations", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 5, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 30, 
            "general_usage": true, 
            "name": "Conference room 305", 
            "equipment": "LCD (front and rear screen with 2 mounted projecters. Cables are not supplied)|VOIP phone, 919-996-4293|White board", 
            "manager": "City manager's Office", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 6, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": true, 
            "name": "Conference room 309", 
            "equipment": "room phone, 919-996-4294", 
            "manager": "Budget & Management Services, Nancy Crouse", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 7, 
            "projector": false
        }, 
        {
            "building": 0, 
            "capacity": 8, 
            "general_usage": true, 
            "name": "Conference room 408", 
            "equipment": "Network port", 
            "manager": "Public Works, Sherry Davis", 
            "hasUsageRestrictions": true, 
            "conferencephone": false, 
            "id": 8, 
            "projector": false
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": true, 
            "name": "Conference room 419", 
            "equipment": "LCD|Network port|TV", 
            "manager": "Public Works, Sherry Davis", 
            "hasUsageRestrictions": true, 
            "conferencephone": false, 
            "id": 9, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 14, 
            "general_usage": true, 
            "name": "TechShowRMB-516", 
            "equipment": "projector & screen|Conference phone, (number?)|White board (large)", 
            "manager": "Information Technology, April Webb", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 10, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": false, 
            "name": "Conference room 601", 
            "equipment": "LCD touch screen|Phone, 919-996-4790 (type?)", 
            "manager": "Parks, Recreation and Cultural Resources", 
            "hasUsageRestrictions": false, 
            "conferencephone": true, 
            "id": 11, 
            "projector": true
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": false, 
            "name": "Conference room 609", 
            "equipment": "LCD|Phone, 919-996-4809 (type?)|White board", 
            "manager": "Parks, Recreation and Cultural Resources", 
            "hasUsageRestrictions": false, 
            "conferencephone": false, 
            "id": 12, 
            "projector": true
        }, 
        {
            "building": 1, 
            "capacity": 6, 
            "general_usage": true, 
            "name": "Conference room 213 One Exchange Plaza", 
            "equipment": "Phone (type? number?)", 
            "manager": "Planning & Development", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 13, 
            "projector": false
        }, 
        {
            "building": 1, 
            "capacity": 0, 
            "general_usage": true, 
            "name": "Conference room 312", 
            "equipment": "", 
            "manager": "Public Works, Debbie Wyatt", 
            "hasUsageRestrictions": true, 
            "conferencephone": false, 
            "id": 14, 
            "projector": false
        }, 
        {
            "building": 1, 
            "capacity": 8, 
            "general_usage": false, 
            "name": "Conference room OEP 4th Flr Fish Bowl", 
            "equipment": "Phone (type? number?)", 
            "manager": "Planning & Development, Cynthia Taylor", 
            "hasUsageRestrictions": false, 
            "conferencephone": true, 
            "id": 15, 
            "projector": false
        }, 
        {
            "building": 1, 
            "capacity": 20, 
            "general_usage": false, 
            "name": "Conference room 1 One Exchange Plaza, Public Utilities 6th Floor", 
            "equipment": "", 
            "manager": "Public Utilities", 
            "hasUsageRestrictions": false, 
            "conferencephone": false, 
            "id": 16, 
            "projector": false
        }, 
        {
            "building": 1, 
            "capacity": 10, 
            "general_usage": false, 
            "name": "Conference room 2 One Exchange Plaza, Public Utilities 6th Floor", 
            "equipment": "", 
            "manager": "Public Utilities", 
            "hasUsageRestrictions": false, 
            "conferencephone": false, 
            "id": 17, 
            "projector": false
        }, 
        {
            "building": 1, 
            "capacity": 40, 
            "general_usage": true, 
            "name": "Conference room 701", 
            "equipment": "", 
            "manager": "Parks, Recreation and Cultural Resources / Facilities & Operations", 
            "hasUsageRestrictions": true, 
            "conferencephone": false, 
            "id": 18, 
            "projector": false
        }, 
        {
            "building": 1, 
            "capacity": 8, 
            "general_usage": true, 
            "name": "Conference room 707", 
            "equipment": "Phone (type? number?)|Smartboard", 
            "manager": "Planning & Development, Amanda Driscoll", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 19, 
            "projector": false
        }, 
        {
            "building": 1, 
            "capacity": 10, 
            "general_usage": true, 
            "name": "TechShowOEP-901", 
            "equipment": "LCD|SmartBoard|Conference phone, (number?)", 
            "manager": "Information Technology, April Webb", 
            "hasUsageRestrictions": true, 
            "conferencephone": true, 
            "id": 20, 
            "projector": true
        }, 
        {
            "building": 1, 
            "capacity": 0, 
            "general_usage": false, 
            "name": "Conference room CA (10th Floor) (NOT in Email?)", 
            "equipment": "", 
            "manager": "City Attorney", 
            "hasUsageRestrictions": false, 
            "conferencephone": false, 
            "id": 21, 
            "projector": false
        }
    ]
});
export default Room;
