export const roomNames = [
  'northern-entry-parlour',
  'eastern-entry-foyer',
  'southern-entry-lobby',
  'western-entry-atrium',
  'the-void',
  'shadowed-crypt',
  'regal-throne-room',
  'abandoned-armoury',
  'endless-staircase',
  'enigmatic-chamber',
  'gemstone-vault',
  'vintage-study',
  'industrial-warehouse',
  'isolated-cell',
  'grand-library',
  'tranquil-garden',
  'ethereal-nexus',
  'bolted-passage',
  'musical-parlour',
  'scenic-overlook',
  'experimental-den',
  'blocked-passage',
  'hidden-grotto',
  'concealed-path',
] as const;

type Room<T extends (typeof roomNames)[number]> = {
  id: string;
  name: T;
  description: string;
  weight: number; // 0-1 how likely to appear
  // time?: number; // will only appear at this hour utc
  blockedDestinations?: (typeof roomNames)[number][];
  favouredDestinations?: (typeof roomNames)[number][];
  requiredEntrances?: (typeof roomNames)[number][];
};

type Rooms = {
  [K in (typeof roomNames)[number]]: Room<K>;
};

export const rooms = {
  'northern-entry-parlour': {
    id: '1150849726019805235',
    name: 'northern-entry-parlour',
    description:
      'Walking down the stairs you a long seemingly endless hallway. You look back and are shocked to see the stairs have disappeared.',
    weight: 0,
    favouredDestinations: ['industrial-warehouse', 'isolated-cell'],
  },
  'eastern-entry-foyer': {
    id: '1150849864649945109',
    name: 'eastern-entry-foyer',
    description:
      'Exiting the elevator you see a large open room with a seemingly endless number of doors. Looking back you see the elevator has disappeared.',
    weight: 0,
    favouredDestinations: ['musical-parlour', 'scenic-overlook'],
  },
  'southern-entry-lobby': {
    id: '1150849913647792200',
    name: 'southern-entry-lobby',
    description:
      'You enter a circular room with doors regularly spaced out, as your hand closes the door behind you, you hear a click. The room starts to spin, destroying any sense of direction.',
    weight: 0,
    favouredDestinations: ['experimental-den', 'blocked-passage'],
  },
  'western-entry-atrium': {
    id: '1150849960703692850',
    name: 'western-entry-atrium',
    description:
      'You enter a large room with a large glass dome, looking up you see the sky. You look back and see the staircase has disappeared.',
    weight: 0,
    favouredDestinations: ['tranquil-garden', 'grand-library'],
  },
  'the-void': {
    id: '1150850125019742320',
    name: 'the-void',
    description:
      'A strange feeling comes over you, you feel like you are falling. You look around and see nothing but darkness.',
    weight: 0.8,
    favouredDestinations: ['shadowed-crypt', 'endless-staircase'],
  },
  'shadowed-crypt': {
    id: '1150850422056177694',
    name: 'shadowed-crypt',
    description:
      'You enter a dark room, you see a large stone coffin in the centre of the room. On it you can just about make out the word CRA.', // TODO: better thing
    weight: 0.5,
    favouredDestinations: ['regal-throne-room', 'abandoned-armoury'],
  },
  'regal-throne-room': {
    id: '1150850538792034424',
    name: 'regal-throne-room',
    description:
      'You enter a large room with a large throne in the centre, a name is engraved into the throne, Lofi.',
    weight: 0.9,
    favouredDestinations: ['gemstone-vault', 'enigmatic-chamber'],
  },
  'abandoned-armoury': {
    id: '1150851270870057060',
    name: 'abandoned-armoury',
    description:
      'You enter a large room with a large number of weapons and armour, strangely some seem to be modern or even futuristic while others are ancient.',
    weight: 0.4,
    favouredDestinations: ['gemstone-vault', 'endless-staircase'],
  },
  'endless-staircase': {
    id: '1150851363480293376',
    name: 'endless-staircase',
    description:
      'You enter a stairwell, looking up you see the stairs continue into the darkness, room is strangely white and you can feel the presence of something watching you.',
    weight: 0.8,
    favouredDestinations: ['isolated-cell', 'bolted-passage'],
  },
  'enigmatic-chamber': {
    id: '1150853416831176715',
    name: 'enigmatic-chamber', // reference to minecraft end gateway
    description:
      'You enter a large room with a strange ring, the ring seems to be made of yellowish stone with greenish eyes embedded into it. There seems to be a singular missing eye.',
    weight: 0.8,
    favouredDestinations: ['gemstone-vault', 'hidden-grotto'],
  },
  'gemstone-vault': {
    id: '1150853944915005470',
    name: 'gemstone-vault',
    description:
      'You enter a large room with a large number of gemstones, gold and other treasures. In the centre of the room you find a large chest filled with gold coins with a strange skull symbol.',
    weight: 0.1,
    favouredDestinations: ['abandoned-armoury', 'regal-throne-room'],
    requiredEntrances: [
      'regal-throne-room',
      'enigmatic-chamber',
      'abandoned-armoury',
    ],
  },
  'vintage-study': {
    id: '1150854512622456913',
    name: 'vintage-study',
    description:
      'You enter a small room with a large number of books, the room is lit by a single candle. You see a large desk with a strange book on it. The book is titled "Javascript > Typescript".', // TODO: better book title
    weight: 0.7,
    favouredDestinations: ['grand-library', 'isolated-cell'],
  },
  'industrial-warehouse': {
    id: '1150857440515076166',
    name: 'industrial-warehouse',
    description:
      'You enter what seems to be a never ending warehouse, you see flatpack furniture everywhere. The walls are painted a strange blue and yellow colour.',
    weight: 0.8,
    favouredDestinations: ['isolated-cell', 'blocked-passage'],
  },
  'isolated-cell': {
    id: '1150857645524271256',
    name: 'isolated-cell',
    description:
      'You enter a small room with a single bed, a desk and a chair. The room is lit by a single lightbulb hanging from the ceiling.',
    weight: 0.7,
    favouredDestinations: ['industrial-warehouse', 'endless-staircase'],
  },
  'grand-library': {
    id: '1150858017684869141',
    name: 'grand-library',
    description:
      'You enter a beautiful library, the room is lit by a large chandelier. Shelf after shelf of books line the walls.',
    weight: 0.8,
    favouredDestinations: ['tranquil-garden', 'vintage-study'],
  },
  'tranquil-garden': {
    id: '1150858654787059763',
    name: 'tranquil-garden',
    description:
      'You look up to see a massive seven-story greenhouse, the room is serene and seems to be packed with plants you have never seen before. You can hear the constant chatter of a thousand fountains.',
    weight: 0.1,
    favouredDestinations: ['grand-library', 'scenic-overlook'],
  },
  'ethereal-nexus': {
    id: '1150862207333179533',
    name: 'ethereal-nexus',
    description:
      'You look around to see space itself, you see stars, planets and galaxies all unfamiliar to you. Looking down you see your standing on a strange path that almost seems to be made of glowing water.',
    weight: 0.1,
    blockedDestinations: ['the-void'],
  },
  'bolted-passage': {
    id: '1150862422953955458',
    name: 'bolted-passage',
    description:
      'You seem to have reached a dead end, you see a large metal door with a strange symbol on it. You can find no way to open the door.',
    weight: 1,
    favouredDestinations: ['hidden-grotto', 'experimental-den'],
  },
  'musical-parlour': {
    id: '1150883905692508270',
    name: 'musical-parlour',
    description:
      'You enter a large room with a large number of instruments, you see a large piano in the centre of the room.',
    weight: 0.4,
    favouredDestinations: ['scenic-overlook', 'vintage-study'],
  },
  'scenic-overlook': {
    id: '1150884052509933618',
    name: 'scenic-overlook',
    description:
      "Somehow you seem to have reached the top of a mountain, even though you were just deep underground. In the distance you can see Rustular's HQ.",
    weight: 0.4,
    favouredDestinations: ['tranquil-garden', 'musical-parlour'],
  },
  'experimental-den': {
    id: '1150884476407255080',
    name: 'experimental-den',
    description:
      'You enter a large room with a large number of strange machines, you see a large machine in the centre of the room. The machine seems to be made of a strange metal and has a large number of buttons and levers.',
    weight: 0.2,
    favouredDestinations: ['industrial-warehouse', 'blocked-passage'],
  },
  'blocked-passage': {
    id: '1150884893283319878',
    name: 'blocked-passage',
    description:
      'You seem to have reached a dead end, the path is blocked by a large pile of rubble. You can find no way to continue.',
    weight: 1,
  },
  'hidden-grotto': {
    id: '1150886465845346304',
    name: 'hidden-grotto',
    description:
      'You see a large open, wandering down the path you see vehicle on strange platforms. Looking out you see a large exit covered by a waterfall.',
    weight: 0.6,
    favouredDestinations: ['concealed-path', 'bolted-passage'],
  },
  'concealed-path': {
    id: '1150886539958685857',
    name: 'concealed-path',
    description:
      'Pulling a book from the shelf you hear a click, and slowly the bookshelf starts to move. You see a long path with an end you cannot see.',
    weight: 0.9,
    requiredEntrances: ['grand-library'],
    favouredDestinations: ['hidden-grotto', 'vintage-study'],
  },
} satisfies Rooms as Rooms;

// how to choose rooms to show:
// - create a list from the rooms object
// - filter out rooms that are blocked
// - randomise the list
// - move favoured rooms to the front of the list
// - move current rooms to the front of the list
// - generate a random number between 0 and 1
// - if the number is less than the weight of the first room, show it
// - minus 0.1 from the next room's weight
// - repeat until list is empty

export const generateRooms = (currentRoomNames: string[]) => {
  const currentRooms = currentRoomNames.map((roomName) => rooms[roomName]);

  const roomList = Object.values(rooms);
  const blockedRooms = new Set<string>();
  const favouredRooms = new Set<string>();

  currentRooms.forEach((room) => {
    room.blockedDestinations?.forEach((blockedRoom) => {
      blockedRooms.add(blockedRoom);
    });
    room.favouredDestinations?.forEach((favouredRoom) => {
      favouredRooms.add(favouredRoom);
    });
  });

  const filteredRooms = roomList.filter(
    (room) =>
      !blockedRooms.has(room.name) &&
      !currentRooms.some((currentRoom) => currentRoom.name === room.name)
  );
  const randomisedRooms = filteredRooms.sort(() => Math.random() - 0.5);
  const favouredRoomsFirst = randomisedRooms.sort((a, b) => {
    if (favouredRooms.has(a.name)) {
      return -1;
    }
    if (favouredRooms.has(b.name)) {
      return 1;
    }
    return 0;
  });
  const currentRoomsFirst = favouredRoomsFirst.sort((a, b) => {
    if (currentRoomNames.includes(a.name)) {
      return -1;
    }
    if (currentRoomNames.includes(b.name)) {
      return 1;
    }
    return 0;
  });

  const chosenRooms: Room<(typeof roomNames)[number]>[] = [];

  let weightMod = 0;
  currentRoomsFirst.forEach((room) => {
    if (
      room.requiredEntrances?.some((requiredEntrance) =>
        currentRoomNames.includes(requiredEntrance)
      )
    ) {
      return;
    }
    const weight = room.weight - weightMod;
    const random = Math.random();
    if (random < weight) {
      chosenRooms.push(room);
      weightMod += 0.05;
    }
  });

  return chosenRooms;
};

// use to ensure weights average to 0.5
// const averageWeight =
//   Object.values(rooms).reduce((total, room) => total + room.weight, 0) /
//   Object.values(rooms).length;

// console.log('averageWeight', averageWeight);
