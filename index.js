const { TOKEN } = require('./config.json');
const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: TOKEN ,
    prefix: "_",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

/* Slash Interaction Command Example (ping)
You must execute the function below for the slash command to work:
$createApplicationCommand[$guildID;ping;Pong!;true;slash]
*/

bot.interactionCommand({
    name: "ping",
    prototype: "slash",
    code: `$interactionReply[Pong! $pingms;;;;everyone;false]`
});

  bot.status({
    text: "your mom",
    type: "WATCHING",
    time: 12,
    shard: 0
});