else if(command === 'marry') {
          const MarryEmbedSuccess = new Flandre.flandreEmbedSuccess().setFooter(`Marry Flandre!`, FlandreClient.user.displayAvatarURL({ dynamic: true })),
                MarryEmbedError = new Flandre.flandreEmbedError().setFooter(`Marry Flandre!`, FlandreClient.user.displayAvatarURL({ dynamic: true }));
           let MarryDb = Database.get(`marrieduserdata_${msg.author.id}`),
               Reply = new Object();
          switch(MarryDb) {
              case true:
                  MarryEmbedError.setTitle(`${FlandreUgh} | *You Already have a spouse! Please Divorce First!*`)
                  Reply = MarryEmbedError;
                  switch(Reply) {
                      case MarryEmbedError:
                          Flandre.messageCreate(Reply, msg);
                  }
          } else {
  let ongoingdb = Database.get(`ongoingproposal_${msg.author.id}`)
  switch(ongoingdb) {
      case true:
          MarryEmbedError.setTitle(`${FlandreUhhh} | *Please wait you already have ongoing proposal!*`)
          Reply = MarryEmbedError;
          switch(Reply) {
                 case MarryEmbedError:
                  Flandre.messageCreate(Reply, msg);
          }
  } else {
let spouse = msg.mentions.members.first() || FlandreClient.users.cache.get(args[0]);

if(!spouse) {
    MarryEmbedError.setTitle(`${FlandreUhhh} | *Please Mention a user you love!*`)
    Reply = MarryEmbedError;
    switch(Reply) {
        case MarryEmbedError:
            Flandre.messageCreate(Reply, msg);
    }
} else {
    switch(spouse.user.bot) {
        case true:
            MarryEmbedError.setTitle(`${FlandreUgh} | *You can't marry a bot!*`)
            Reply = MarryEmbedError;
            Flandre.messageCreate(Reply, msg);
    } else {
       switch(spouse.id) {
           case msg.author.id:
               MarryEmbedError.setTitle(`${FlandreUhhh} | *You can't marry yourself!*`)
               Reply = MarryEmbedError;
               Flandre.messageCreate(Reply, msg);
       } else {
let marrieddb = Database.get(`marrieduserdata_${spouse.id}`)
switch(marrieddb) {
    case true:
        MarryEmbedError.setTitle(`${FlandreUhhh} | *The user you mentioned is already married!*`)
        Reply = MarryEmbedError;
        Flandre.messageCreate(Reply, msg);
} else {
    MarryEmbedSuccess.setTitle(`${FlandreLaugh} | *Wait for \`${spouse.user.username}\` to accept your proposal! Please <@${spouse.user.id}> type \`yes\` or \`no\`*`)
    msg.channel.send(`<@${spouse.user.id}>`).then(msgf => {
        msgf.delete({ timeout: 1000 })
    })
    Reply = MarryEmbedSuccess;
    Flandre.messageCreate(Reply, msg);
Database.set(`ongoingproposal_${msg.author.id}`, true)

let filter = m => m.author.id === spouse.id;
        try {
            let msge = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
            let word = 'yes'
            let decline = 'no'
           if(msge.first().content.toLowerCase() === word) {
            Database.set(`marrieduserdata_${msg.author.id}`, true)
            Database.set(`marrieduserdata_${spouse.id}`, true)
            Database.set(`spousesuserdata_${spouse.id}_${msg.author.id}`, 1)
               MarryEmbedSuccess.setTitle(`${FlandreLaugh} | *Congrats! ${spouse.user.username} and ${msg.author.username} Are now Married!*`)
   Database.set(`ongoingproposal_${msg.author.id}`, false)
   Reply = MarryEmbedSuccess;
               Flandre.messageCreate(Reply, msg);
           } else if(msge.first().content.toLowerCase() === decline) {
              MarryEmbedError.setTitle(`${FlandreUhhh} | *${spouse.user.username} Declined your proposal.*`)
               Reply = MarryEmbedError;
               Flandre.messageCreate(Reply, msg);
  Database.set(`ongoingproposal_${msg.author.id}`, false)
} else {
    MarryEmbedError.setTitle(`${FlandreUgh} | *Incorrect Answer! Try again!*`)
    Reply = MarryEmbedError;
    Flandre.messageCreate(Reply, msg);
  Database.set(`ongoingproposal_${msg.author.id}`, false)
}
        }
        catch(ex) {
            MarryEmbedError.setTitle(`${FlandreUgh} | *Sorry it seems **${spouse.user.username}** Didnt Answer!*`)
            Reply = MarryEmbedError;
            Flandre.messageCreate(Reply, msg);
                        Database.set(`ongoingproposal_${msg.author.id}`, false)
        }
      }
  }
  }
      }
  }
      }
