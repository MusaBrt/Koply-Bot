const stripIndents = require('common-tags').stripIndents;
const commando = require('discord.js-commando');
const Discord = require('discord.js');
const filterLevels = ['Yok', 'Rolü olmayanlar için', 'Herkes için'];
const verificationLevels = ['Yok', 'Düşük', 'Orta', '(╯°□°）╯︵ ┻━┻', '(╯°□°）╯︵ ┻━┻', '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'];

module.exports = class ServerInfoCommand extends commando.Command {
	constructor(client) {
		super(client, {
			name: 'sunucu',
			aliases: ['sunucubilgi', 'sunucu-bilgi', 'sb'],
			group: 'bilgilendirme',
			memberName: 'sunucu',
			description: 'Bulunduğunuz sunucu hakkında bilgi verir.',
			examples: ['sunucu-bilgi'],
			guildOnly: false
		});
	}

	async run(msg) {
		var embed = {
			color: 3447003,
			author: {
				name: msg.guild.name,
				icon_url: msg.guild.iconURL,
			},
			fields: [
				{
					name: '❯ Ad ve ID',
					value: `${msg.guild.name}, ${msg.guild.id}`,
					inline: false
				},
				{
					name: '❯ Oluşturulma tarihi',
					value: `${msg.guild.createdAt}`,
					inline: false
				},
				{
					name: '❯ Toplam kanal sayısı',
					value: `Toplam: ${msg.guild.channels.size} | Yazı: ${msg.guild.channels.filter(c => c.type === "text").size} | Sesli: ${msg.guild.channels.filter(c => c.type === "voice").size}`,
					inline: true
				},
				{
					name: `❯ Toplam üye sayısı ${msg.guild.memberCount}`,
					value: ``,
					inline: true
				},
				{
					name: '❯ Bot sayısı',
					value: `${msg.guild.members.filter(m => m.user.bot).size}`,
					inline: true
				},
				{
					name: '❯ Sakıncalı içerik filitresi',
					value: `${filterLevels[msg.guild.explicitContentFilter]}`,
					inline: true
				},
				{
					name: '❯ Doğrulama seviyesi',
					value: `${verificationLevels[msg.guild.verificationLevel]}`,
					inline: true
				},
				{
					name: '❯ Rol sayısı',
					value: `${msg.guild.roles.size}`,
					inline: true
				},
				{
					name: '❯ Bölgesi',
					value: `${msg.guild.region}`,
					inline: true
				},
				{
					name: '❯ Sahibi',
					value: `${msg.guild.owner.user.tag}, (${msg.guild.owner.user.id})`,
					inline: true
				}
			],
		thumbnail: { url: msg.guild.iconURL }
		};

		msg.channel.send({embed});
		console.log("Sunucu komutu " + msg.author.tag + " tarafından " + msg.guild.name + " sunucusunda kullanıldı.");
	}
};
