import DS from "ember-data";

var Room = DS.Model.extend({
    building: DS.belongsTo('building'),
    room: DS.attr('string'),
    manager: DS.attr('string'),
    general_usage: DS.attr('string'),
    capacity: DS.attr('string'),
    projector: DS.attr('string'),
    conferencephone: DS.attr('string'),
    equipment: DS.attr('string')
});

Room.reopenClass({
    FIXTURES: [
        {
            "building": 0, 
            "capacity": 16, 
            "general_usage": "Yes, with restrictions", 
            "room": "Conference room 112 Finance, (Conference Mailto: address)", 
            "equipment": "projector & screen|Conference phone, 919-996-7825|room phone, 919-996-4935", 
            "manager": "Finance, Andrea Waters", 
            "conferencephone": "y", 
            "id": 0, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 200, 
            "general_usage": "Yes, wiRth restrictions", 
            "room": "Council Chamber 201, (RMB map link)", 
            "equipment": "Screen|Computer", 
            "manager": "City manager's Office", 
            "conferencephone": "n", 
            "id": 1, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 12, 
            "general_usage": "No", 
            "room": "Conference room 213, (Test of opening calendar event via remote email access)", 
            "equipment": "", 
            "manager": "City Council", 
            "conferencephone": "n", 
            "id": 2, 
            "projector": "n"
        }, 
        {
            "building": 0, 
            "capacity": 12, 
            "general_usage": "No", 
            "room": "Conf Rm 228", 
            "equipment": "Camera|LCD displays (2)|Smart board|Conference phone, 919-996-7819", 
            "manager": "City manager's Office", 
            "conferencephone": "y", 
            "id": 3, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 16, 
            "general_usage": "Yes", 
            "room": "Conference room 237", 
            "equipment": "room phone, 919-996-4661|White board (small)?|WiFi (don't most have wifi? YES should it be assumed unless otherwise stated?)", 
            "manager": "City manager's Office", 
            "conferencephone": "y", 
            "id": 4, 
            "projector": "n"
        }, 
        {
            "building": 0, 
            "capacity": 25, 
            "general_usage": "Yes", 
            "room": "Conference room 303", 
            "equipment": "Screen and overhead projector (laptop cable available in RMB suite 605)|room phone, 919-996-4292", 
            "manager": "Parks, Recreation and Cultural Resources / Facilities & Operations", 
            "conferencephone": "y", 
            "id": 5, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 30, 
            "general_usage": "Yes", 
            "room": "Conference room 305", 
            "equipment": "LCD (front and rear screen with 2 mounted projecters. Cables are not supplied)|VOIP phone, 919-996-4293|White board", 
            "manager": "City manager's Office", 
            "conferencephone": "y", 
            "id": 6, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": "Yes, with restrictions", 
            "room": "Conference room 309", 
            "equipment": "room phone, 919-996-4294", 
            "manager": "Budget & Management Services, Nancy Crouse", 
            "conferencephone": "y", 
            "id": 7, 
            "projector": "n"
        }, 
        {
            "building": 0, 
            "capacity": 8, 
            "general_usage": "Yes, with restrictions", 
            "room": "Conference room 408", 
            "equipment": "Network port", 
            "manager": "Public Works, Sherry Davis", 
            "conferencephone": "n", 
            "id": 8, 
            "projector": "n"
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": "Yes", 
            "room": "Conference room 419", 
            "equipment": "LCD|Network port|TV", 
            "manager": "Public Works, Sherry Davis", 
            "conferencephone": "n", 
            "id": 9, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 14, 
            "general_usage": "Yes", 
            "room": "TechShowRMB-516", 
            "equipment": "projector & screen|Conference phone, (number?)|White board (large)", 
            "manager": "Information Technology, April Webb", 
            "conferencephone": "y", 
            "id": 10, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": "No", 
            "room": "Conference room 601", 
            "equipment": "LCD touch screen|Phone, 919-996-4790 (type?)", 
            "manager": "Parks, Recreation and Cultural Resources", 
            "conferencephone": "y", 
            "id": 11, 
            "projector": "y"
        }, 
        {
            "building": 0, 
            "capacity": 10, 
            "general_usage": "No", 
            "room": "Conference room 609", 
            "equipment": "LCD|Phone, 919-996-4809 (type?)|White board", 
            "manager": "Parks, Recreation and Cultural Resources", 
            "conferencephone": "n", 
            "id": 12, 
            "projector": "y"
        }, 
        {
            "building": 1, 
            "capacity": 6, 
            "general_usage": "Yes", 
            "room": "Conference room 213 One Exchange Plaza", 
            "equipment": "Phone (type? number?)", 
            "manager": "Planning & Development", 
            "conferencephone": "y", 
            "id": 13, 
            "projector": "n"
        }, 
        {
            "building": 1, 
            "capacity": 0, 
            "general_usage": "", 
            "room": "Conference room 312", 
            "equipment": "", 
            "manager": "Public Works, Debbie Wyatt", 
            "conferencephone": "n", 
            "id": 14, 
            "projector": "n"
        }, 
        {
            "building": 1, 
            "capacity": 8, 
            "general_usage": "No", 
            "room": "Conference room OEP 4th Flr Fish Bowl", 
            "equipment": "Phone (type? number?)", 
            "manager": "Planning & Development, Cynthia Taylor", 
            "conferencephone": "y", 
            "id": 15, 
            "projector": "n"
        }, 
        {
            "building": 1, 
            "capacity": 20, 
            "general_usage": "No", 
            "room": "Conference room 1 One Exchange Plaza, Public Utilities 6th Floor", 
            "equipment": "", 
            "manager": "Public Utilities", 
            "conferencephone": "n", 
            "id": 16, 
            "projector": "n"
        }, 
        {
            "building": 1, 
            "capacity": 10, 
            "general_usage": "No", 
            "room": "Conference room 2 One Exchange Plaza, Public Utilities 6th Floor", 
            "equipment": "", 
            "manager": "Public Utilities", 
            "conferencephone": "n", 
            "id": 17, 
            "projector": "n"
        }, 
        {
            "building": 1, 
            "capacity": 40, 
            "general_usage": "Yes", 
            "room": "Conference room 701", 
            "equipment": "", 
            "manager": "Parks, Recreation and Cultural Resources / Facilities & Operations", 
            "conferencephone": "n", 
            "id": 18, 
            "projector": "n"
        }, 
        {
            "building": 1, 
            "capacity": 8, 
            "general_usage": "Yes", 
            "room": "Conference room 707", 
            "equipment": "Phone (type? number?)|Smartboard", 
            "manager": "Planning & Development, Amanda Driscoll", 
            "conferencephone": "y", 
            "id": 19, 
            "projector": "n"
        }, 
        {
            "building": 1, 
            "capacity": 10, 
            "general_usage": "Yes", 
            "room": "TechShowOEP-901", 
            "equipment": "LCD|SmartBoard|Conference phone, (number?)", 
            "manager": "Information Technology, April Webb", 
            "conferencephone": "y", 
            "id": 20, 
            "projector": "y"
        }, 
        {
            "building": 1, 
            "capacity": 0, 
            "general_usage": "No", 
            "room": "Conference room CA (10th Floor) (NOT in Email?)", 
            "equipment": "", 
            "manager": "City Attorney", 
            "conferencephone": "n", 
            "id": 21, 
            "projector": "n"
        }
    ]
});
export default Room;
