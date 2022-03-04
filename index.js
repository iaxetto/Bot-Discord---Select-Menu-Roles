//this is a example for support join on my discord https://discord.gg/MX7STMbBP3

const fs = require('node:fs');
const { Client, Collection, Intents, MessageActionRow, MessageSelectMenu } = require('discord.js');
const {token , role_id_1 ,role_id_2 ,role_id_3 ,role_id_4, role_id_emoji_1 , role_id_emoji_2 , role_id_emoji_3 , role_id_emoji_4} = require('./config.json')
const Discord = require("discord.js");

const client = new Client({ 
	intents: 32767,
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'] 
  });
const { prefix } = require("./config.json")

client.on("messageCreate", message => {
	if (message.content == "!roles") {
		let roles__ = new Discord.MessageButton()
		.setStyle("PRIMARY") //color buttom visit https://discordjs.guide/interactions/buttons.html#button-styles
		.setLabel('Click me')
		.setCustomId('roles_1')
  
  var row = new Discord.MessageActionRow()
  .addComponents(roles__)
  
		const roles = new Discord.MessageEmbed()
			.setTitle("VCP - Roles Menu") //add title
			.setDescription(`React to this message to get roles!`) //add your description
			.setColor("#FF00D5")
            .setThumbnail("https://imgur.com/WltQ8O5.gif") //add your logo
            .setFooter({ text: 'VCP', iconURL: 'https://imgur.com/WltQ8O5.png' })
            .setTimestamp()
	
			message.channel.send({ embeds: [roles], components: [row] })
			}
		}) 

client.on('interactionCreate', async interaction => {
    

	if (interaction.customId == 'roles_1') {
        const row = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
                .setCustomId('roles')
                .setPlaceholder('Select a reaction role')
                .addOptions([
                    {
                        label: 'Reaction Role 1',
                        description: 'Take this role by clicking me ',
                        value: 'role1_option',
                        emoji: role_id_emoji_1
                    },
                    {
                        label: 'Reaction Role 2',
                        description: 'Take this role by clicking me ',
                        value: 'role2_option',
                        emoji: role_id_emoji_2
                    },
                    {
                        label: 'Reaction Role 3',
                        description: 'Take this role by clicking me ',
                        value: 'role3_option',
                        emoji: role_id_emoji_3
                    },
                    {
                        label: 'Reaction Role 4',
                        description: 'Take this role by clicking me ',
                        value: 'role4_option',
                        emoji: role_id_emoji_4
                    },
                ]),
        );

    await interaction.reply({  content: null,  ephemeral: true ,components: [row]})
}


  if(interaction.isSelectMenu()){
      
    let choice = interaction.values[0] 
    const member = interaction.member
     if(choice == 'role1_option'){
        if (member.roles.cache.some(role => role.id == role_id_1)) {
            interaction.reply({content: "The role was successfully removed from you" , ephemeral: true})
            console.log(`L'Utente ${interaction.user.tag}, si è rimosso il ruolo 1`)
            member.roles.remove(role_id_1)
            
        }
        else{
        member.roles.add(role_id_1)
            await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
            console.log(`L'Utente ${interaction.user.tag}, si è aggiunto il ruolo 1`)
          }

else if(choice == 'role2_option'){
    if (member.roles.cache.some(role => role.id == role_id_2)) {
        interaction.reply({content: "The role was successfully removed from you", ephemeral: true})
        console.log(`L'Utente ${interaction.user.tag}, si è rimosso il ruolo 2`)
        member.roles.remove(role_id_2)
        
    }
    else{
    member.roles.add(role_id_2)
        await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
        console.log(`L'Utente ${interaction.user.tag}, si è aggiunto il ruolo 2`)
      }


      else if(choice == 'role3_option'){
        if (member.roles.cache.some(role => role.id == role_id_3)) {
            interaction.reply({content: "The role was successfully removed from you", ephemeral: true})
            console.log(`L'Utente ${interaction.user.tag}, si è rimosso il ruolo 3`)
            member.roles.remove(role_id_3)
    
        }
        else{
        member.roles.add(role_id_3)
            await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
            console.log(`L'Utente ${interaction.user.tag}, si è aggiunto il ruolo 3`)
          }



          else if(choice == 'role4_option'){
            if (member.roles.cache.some(role => role.id == role_id_4)) {
                interaction.reply({content: "The role was successfully removed from you!", ephemeral: true})
                console.log(`L'Utente ${interaction.user.tag}, si è rimosso il ruolo 4`)
                member.roles.remove(role_id_4)
            }
            else{
            member.roles.add(role_id_4)
                await interaction.reply({ content: "The role was successfully added to you", ephemeral: true })}
                console.log(`L'Utente ${interaction.user.tag}, si è aggiunto il ruolo 4`)
              }
    
      
    
    } 

client.login(YOURTOKEN); //change with your token
