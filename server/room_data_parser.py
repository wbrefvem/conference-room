import csv
import json

with open('room_data.csv', 'r+') as csvfile:

    roomreader = csv.DictReader(csvfile)
    building_counter = 1
    room_counter = 1

    buildings = []
    rooms = []

    for row in roomreader:
        if not any(b['name'] == row['building'] for b in buildings):
            building = {'id': building_counter, 'name': row['building'], 'address': row['address']}
            buildings.append(building)
            building_counter += 1

        current_building = (building['id'] for building in buildings if building['name'] == row['building']).next()

        hasUsageRestrictions = True
        if row['usageRestrictions'] == 'n/a':
            hasUsageRestrictions = False
        room = {
            'id': room_counter,
            'building': current_building,
            'roomNumber': row['room'],
            'type': row['type'],
            'manager': row['manager'],
            'generalUsage': row['generalUsage'] == 'Yes',
            'seating': row['seating'],
            'display': row['display'] == 'Yes',
            'phone': row['phone'] == 'Yes',
            'network': row['network'] == 'Yes',
            'usageRestrictions': row['usageRestrictions'],
            'hasUsageRestrictions': hasUsageRestrictions
        }
        room_counter += 1

        rooms.append(room)

    fixtures = [{'items': rooms, 'model': 'room'}, {'items': buildings, 'model': 'building'}]

    f = open('fixtures.json', 'w+')

    json.dump(fixtures, f, indent=4)

    f.close()
