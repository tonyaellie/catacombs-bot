import { Client, GuildChannel } from 'discord.js';
import { generateRooms, rooms } from './data';
import { addUser, changeRooms, getUsers, prisma } from './database';

const client = new Client({
  intents: ['Guilds', 'GuildMessages', 'MessageContent'],
});

client.on('ready', () => {
  console.log('Ready!');
});

const users = await getUsers();

client.on('messageCreate', async (message) => {
  if (
    !message.guild ||
    message.content !== 'shuffle' ||
    message.author.id !== '366321360861003787'
  ) {
    return;
  }
  console.log('Shuffling');
  for (const user of users) {
    // get a list of channel ids
    const target = await message.guild.members.fetch(user.id);
    const channels = user.channels.map((channel) => channel.name);
    const newRooms = generateRooms(channels);
    const roomNames = Object.values(newRooms).map((room) => room.name);
    // generate a list of things to remove and things to add to channels
    const toRemove = channels.filter(
      (channel) => !roomNames.includes(channel as any)
    );
    const toAdd = roomNames.filter((channel) => !channels.includes(channel));

    await Promise.allSettled(
      toRemove.map(async (channel) => {
        const channelObj = (await client.channels.fetch(
          rooms[channel as any].id
        )) as GuildChannel;
        console.log('removing', channelObj.name);
        await channelObj.permissionOverwrites.create(target, {
          ViewChannel: false,
        });
      })
    );

    await Promise.allSettled(
      toAdd.map(async (channel) => {
        const channelObj = (await client.channels.fetch(
          rooms[channel as any].id
        )) as GuildChannel;
        await channelObj.permissionOverwrites.create(target, {
          ViewChannel: true,
        });
      })
    );

    await changeRooms(target.id, toAdd, toRemove);
  }
});

client.on('messageReactionAdd', async (reaction, user) => {
  if (reaction.message.id !== '1150902146007580822') {
    return;
  }

  const target = await reaction.message.guild?.members.fetch(user.id);
  if (!target) {
    return;
  }
  const role = await reaction.message.guild?.roles.fetch('1150821082912268298');
  if (!role) {
    return;
  }
  target.roles.add(role);

  const ids = Object.values(rooms).map((room) => room.id);

  await Promise.allSettled(
    ids.map(async (id) => {
      const channel = (await client.channels.fetch(id)) as GuildChannel;
      await channel.permissionOverwrites.create(target, {
        ViewChannel: false,
      });
    })
  );
  const startingRoom = Object.values(rooms)
    .slice(0, 4)
    .sort(() => Math.random() - 0.5)[0];
  console.log(startingRoom);
  const startingRoomChannel = (await client.channels.fetch(
    startingRoom.id
  )) as GuildChannel;
  await startingRoomChannel.permissionOverwrites.create(target, {
    ViewChannel: true,
  });
  addUser(target.id, startingRoom.name);
});

await client.login(process.env.DISCORD_TOKEN);

await prisma.$disconnect();

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(1);
});
