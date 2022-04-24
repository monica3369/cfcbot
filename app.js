const TelegramBot = require('node-telegram-bot-api');
const token = "5187929801:AAECPdUu0RWqH_MjSNFf4HmKhMI1AhuHGK0";
const momentor = require("moment");
const moment = require("moment-timezone");
const fs = require("fs");
const path = require("path");
const { messageTypes } = require('node-telegram-bot-api/src/telegram');
var nigeriaTime;
var nigeriaTimeampm;
const bot = new TelegramBot(token, {polling: true});
const messages = [
    "Welcome to CFC Investment Platform. Hope You Will Make Good Income Here.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Welcome to the CFC - The best Football Investment Platform on the Internet.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "You Are Welcome To Football Investment Platform. You can now make money daily by just playing.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Nice Name, You Are Now The Member Of Our CFC Platform.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Welcome TO CFC, Invest And Earn Daily Money.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Welcome To CFC VIP group, Get Daily profit by playing football matches online.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Now Your Are The VIP Member Of Our Platform. You can easily make money daily by just playing 3 game plans a day.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>"
]
const agentMessages = [
    "Welcome to CFC Agent Group. Hope You Will Invite More Members And Make Automatic Money.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Nice Name, You Are Now The Member Of CFC VIP Agent Group.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Welcome To CFC Agent Group, Make New Members And Earn Daily Income.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "You Are Now The Agent Of CFC Platform, Good Luck! Invite Members And Make More Money.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Welcome To CFC Agent Group. Now You Can Get Agent Salary By Just Inviting Members.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Congratulations! Now You Are The Official Agent Of CFC Platform.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>",
    "Now You Are The Official Agent Of Our Platform, you can make income source here by justing recruting other members to our platform.\n\nFollow Our Channel To Get Latest Updates And News. <a href='https://t.me/S17HrUNNoKEzOTc9'> Join Here </a>"

];
var randompick;
var randomVideo;

const welcomeInline = {
     resize_keyboard : true,
     keyboard : [["About CFC Investment Platform ", "What is Reverse Score Prediction?", "What happens if I lose?"], ["Sign Up ✅", "Recharge Account", "Place A Bet 💰"], ["Big Profit Plan 🤑🤑"]]
}

const keyboard = {
    inline_keyboard :[
            [{
              text: 'Bank Transfer',
              callback_data: 'bank'
            }],
            [{
                text: 'USDT',
                callback_data : 'usdt'
            }],
            [{
                text: 'Online Banking',
                callback_data : "online"
            }]
          ]
        }

const vipchatid = -1001652148623;
const agentchatid = -1001382494688;
const channelid = -1001751135817;

function sendMessage(e, chatId, chatAction){
    bot.sendChatAction(chatId, chatAction)
    setTimeout(() => {
       e()
    }, 400)
}

function randomParent(){
    var i = 0;
   return function(){
        if (i<=8){
            i++;
            return i;
        }
        else {
            i=1;
            return i;
        }
    }

}

var randomVideo = randomParent();
var result;
var startSendingVideo;

startSendingVideo = setInterval(() => {
sendVideos()
}, 2100000);

setInterval(() => {
    checktime()

}, 3600000);

    bot.on('new_chat_members', (e) => {
        setTimeout(function(){
            bot.deleteMessage(e.chat.id, e.message_id)

        }, 6000)
     randompick = Math.floor(Math.random() * 7);
     switch(e.chat.title){
         case "CFC Naija (VIP)":
             sendMessage(() => {
                bot.sendMessage(e.chat.id, `<b>Hi <a href="https://t.me/${e.new_chat_member.username}"> ${e.new_chat_member.first_name} </a> ${messages[randompick]}</b>`, {parse_mode : "HTML", disable_web_page_preview : true});
             }, e.chat.id, "typing")
            break;

            case "CFC Naija (AGENT)":
                sendMessage(() => {
                    bot.sendMessage(e.chat.id, `<b>Hi <a href="https://t.me/${e.new_chat_member.username}"> ${e.new_chat_member.first_name} </a> ${agentMessages[randompick]}</b>`, {parse_mode : "HTML", disable_web_page_preview : true});
                 }, e.chat.id, "typing")
            break;
     }
    })

    bot.on("left_chat_member", (message) => {
            bot.deleteMessage(message.chat.id, message.message_id)

    }) 

    bot.on("message", (message) => {
     if(message.chat.type == "group" || "supergroup"){
                if(/\b(scam|fake|fraud|fuck|ass|scammer|deposit problem|error|deposit failed|scammed|86 football|86football|86fb|86fb football|86fb_86z|86fb 86z|withdraw|withdrawal|withdrew|delete|fuck)\b/i.test(message.text) == true){

                        if(message.from !== "johnmarston39"){

                            bot.deleteMessage(message.chat.id, message.message_id);
                          }
                }

        }
    
         if(message.chat.type ==  "private"){
             console.log(message.chat.username);
             if(message.text == "/start"){
                sendMessage(() => {
                    bot.sendMessage(message.chat.id, "This Official Bot will teach you everything you need to know about CFC Football Investment Platform", {reply_markup : welcomeInline})
                }, message.chat.id, "typing")
             }

             else if(message.text == "About CFC Investment Platform"){
                 sendMessage(() => {
                     bot.sendMessage(message.chat.id, "CFC is the sports investment platform where you get 5-6% profit daily by investing on reverse scores in the vip group.\n\nBy following game plans you will get profit daily.")
                 }, message.chat.id, "typing")
             }

             else if(message.text == "What is Reverse Score Prediction?"){
                 sendMessage(() => {
                     bot.sendMessage(message.chat.id, "In Reverse Score Prediction you have to predict the score which is reverse to the exact end result.\n\nYou will win everytime when your prediction is opposite of game end score.So there is 99% chance that you will get profit on that investment");
                 }, message.chat.id, "typing")
             }

             else if(message.text == "What happens if I lose?"){
                sendMessage(() => {
                    bot.sendMessage(message.chat.id, "There is 1% chance that you will lose the investment but even if you lose you will get 100% refund.\n\nMake sure you are following the given game plans and everything is risk free.");
                }, message.chat.id, "typing")
             }

             else if(message.text == "Sign Up ✅"){
                var filelocation = __dirname + "/Images/registeration.jpg";
                bot.sendChatAction(message.chat.id, "upload_photo");
                 bot.sendPhoto(message.chat.id, filelocation, {supports_streaming : true}, {contentType : "image/jpeg"})
                 .then((message) => {
                     sendMessage(() => {
                        bot.sendMessage(message.chat.id, "Please Go To Our Website And Register Your Account By Submitting This Form\n\n<a href='https://www.cfcfootball10.com/#/registry?invitationCode=101103&type=101103'>VISIT WEBSITE</a>", {parse_mode : "HTML"})
                     }, message.chat.id, "typing");
                 })
             }

             else if(message.text == "Recharge Account"){
                 sendMessage(() =>{
                     bot.sendMessage(message.chat.id, "Please Choose Your Payment Method", {reply_markup : keyboard})
                 }, message.chat.id, "typing")
             }

             else if(message.text == "Place A Bet 💰"){
                var filepath = __dirname + "/Videos/invest.mp4";
                bot.sendVideo(message.chat.id, filepath, {duration : 31, width : 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"})
                    bot.sendMessage(message.chat.id, "To Start Investing Here, you should first create your account and recharge it with amount you want to start with.\n\nIf you have already created your account please watch this video till end to know how to start investing.")
                    .then((message) => {
                        bot.sendChatAction(message.chat.id, "upload_video")   
                    })
             }

             else if(message.text == "Big Profit Plan 🤑🤑"){
                var filepath = __dirname + "/Images/compound.jpg";
                    bot.sendChatAction(message.chat.id, "typing")
                    bot.sendMessage(message.chat.id, `Let's introduce you to our big profit plan - The Compund Interest.

If you have started your investment here now you can be the part of our compound interest profit plan.
                    
According to this if you invest more money but don't withdraw frequently then you can get the profit on your ( investment + previous profit ). The interest will be genrated daily on the previous income. So you will get daily 5-6 % on increasing income. 
                    
If you countinue this process for few months then your money will be multiplied everyday with big profit.
                    
Here is the figure that shows what your bank balance will going to look if you have deposited this much money for long time.`, {parse_mode : "HTML"})
                    .then((message) => {
                        sendMessage(() => {
                            bot.sendPhoto(message.chat.id, filepath, {contentType : "image/jpeg"})
                        }, message.chat.id, "upload_photo");
                    })
             }

             else if(message.text == "time"){
                 nigeriaTime = moment().tz("Africa/Lagos").format("H:mm");
                 nigeriaTimeampm = moment().tz("Africa/Lagos").format("h:mm a")
                 bot.sendMessage(message.chat.id, `The current time in Nigeria is ${nigeriaTime}, ${nigeriaTimeampm}`)
             }

             else if(message.text.toLowerCase() == ("hi" || "hello" || "hy" || "hey")){
                sendMessage(() => {
                    bot.sendMessage(message.chat.id, "Hi, I am CFC Bot here to help you.");
                }, message.chat.id, "typing")
             }

             else if(/how are you/g.test(message.text)){
                 sendMessage(() => {
                    bot.sendMessage(message.chat.id, "I am fine. How about you?");
                }, message.chat.id, "typing")
             }
        }
    })

    bot.on("sticker", (message, data) => {
            bot.deleteMessage(message.chat.id, message.message_id)
    })
    
    bot.on("error", (error) => {
    console.log(error.message)
})

bot.on("edited_message", (message) => {
    if((/\b(scam|fake|fraud|fuck|ass|scammer|deposit problem|error|deposit failed|scammed|86 football|86football|86fb|86fb football|86fb_86z|86fb 86z|withdraw|withdrawal|withdrew|delete|fuck)\b/i.test(message.text) == true)){
      if(message.from !== "johnmarston39"){
            bot.deleteMessage(message.chat.id, message.message_id);
      }
    }
})
bot.on("callback_query", (query) => {
    if(query.data == "bank"){
        var filepath = __dirname + "/Videos/bank.mp4";
        bot.sendVideo(query.message.chat.id, filepath, {duration : 33, width : 1280, height : 720, supports_streaming : true}, {contentType : "video/mp4"})
            bot.sendMessage(query.message.chat.id, "Watch This Video Till End To Recharge Account With Bank Transfer")
            .then((message) => {
                bot.sendChatAction(message.chat.id, "upload_video")   
            })
    }

    else if(query.data == "usdt"){
        var filepath = __dirname + "/Videos/usdt.mp4";
        bot.sendVideo(query.message.chat.id, filepath, {duration : 33, width : 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"})
            bot.sendMessage(query.message.chat.id, "Watch This Video Till End To Recharge Account By USDT Transfer")
            .then((message) => {
                bot.sendChatAction(message.chat.id, "upload_video")   
            })
    }

    else if(query.data == "online"){
        var filepath = __dirname + "/Videos/online.mp4";
        bot.sendVideo(query.message.chat.id, filepath, {duration : 72, width : 1280, height : 720, supports_streaming : true}, {contentType : "video/mp4"})
            bot.sendMessage(query.message.chat.id, "Watch This Video Till End To Recharge Account Through Online Banking")
            .then((message) => {
                bot.sendChatAction(message.chat.id, "upload_video")   
            })

    }
})

bot.on("voice", (message) => {
        bot.deleteMessage(message.chat.id, message.message_id) 
})

function sendVideos(){
    result = randomVideo();
    if (result == 2){
       var filepath = __dirname + "/Videos/bank.mp4";
        bot.sendVideo(vipchatid, filepath, {caption: `Hi all investors now the bank transfer has become more smooth. If you want to deposit money through bank transfer here is the process. 

Watch this video till end if you are confused or facing any error while depositing.
        
Invest now and make more money from this platform with amount you are comfortable with. 

The more you invest the more returns you will get daily and there are big bonuses for first deposit of more than 3000.
                
INVEST NOW`, duration : 33, width : 1280, height : 720, supports_streaming : true}, {contentType : "video/mp4"})
        bot.sendVideo(agentchatid, filepath, {caption: `Hi all agents now the bank transfer has become more smooth. If you want to deposit money through bank transfer here is the process. You can share this to your downlines if they don't know the process.

Invest now and make more money from this platform with amount you are comfortable with. 

The more you invest the more returns you will get daily and there are big bonuses for first deposit of more than 3000.
        
INVEST NOW`, duration : 33, width : 1280, height : 720, supports_straming : true}, {contentType : "video/mp4"})
    }

    else if(result == 4){
       var filepath = __dirname + "/Videos/online.mp4";
        bot.sendVideo(vipchatid, filepath, {caption: `Hi all investors you can also deposit online easily. If you want to deposit money through online banking here is the process. 

Watch this video till end if you are confused or facing any error while depositing.
                
Invest now and make more money from this platform with amount you are comfortable with. 
        
The more you invest the more returns you will get daily and there are big bonuses for first deposit of more than 3000.
                
INVEST NOW`, duration : 72, width : 1280, height : 720, supports_streaming : true}, {contentType : "video/mp4"})
        bot.sendVideo(agentchatid, filepath, {caption: `Hi all agents you can also deposit online easily. If you want to deposit money through online banking here is the process. You can share this to your downlines if they don't know the process.

Invest now and make more money from this platform with amount you are comfortable with. 

The more you invest the more returns you will get daily and there are big bonuses for first deposit of more than 3000.
        
INVEST NOW`, duration : 72, width : 1280, height : 720, supports_streaming : true}, {contentType : "video/mp4"})
    
    }

    else if(result == 5){
        var filepath = __dirname + "/Videos/usdt.mp4";
        bot.sendVideo(vipchatid, filepath, {caption: `Hi all investors if you are crypto enthusiastic now you can also deposit through usdt. If you want to deposit money through usdt transfer here is the process. 

Watch this video till end if you are confused or facing any error while depositing.
                
Invest now and make more money from this platform with amount you are comfortable with. 
        
The more you invest the more returns you will get daily and there are big bonuses for first deposit of more than 3000.
                
INVEST NOW`, duration  : 33, width : 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"})
        bot.sendVideo(agentchatid, filepath, {caption: `Hi all agents here comes the video for crypto lovers. If you want to deposit money through usdt transfer here is the process. You can share this to your downlines if they don't know the process.

Invest now and make more money from this platform with amount you are comfortable with. 

The more you invest the more returns you will get daily and there are big bonuses for first deposit of more than 3000.
        
INVEST NOW`, duration : 33, width : 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"})
    }

    else if(result  == 1){
        var filepath = __dirname + "/Videos/register.mp4";
        bot.sendVideo(vipchatid, filepath, {caption: `Hi all new members you can register easily on our platform and start making money daily. If you want to watch the registeration process here is the video. 

Watch till end to know all about registeration and share it with your friends too to give them the chance to make money everyday.
        
CFC is the platform where everyone can make money by investing. 
        
INVEST NOW AND EARN DAILY`, duration : 35, width : 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"})
        bot.sendVideo(agentchatid, filepath, {caption: `Hi all agents now your new downlines can register easily on our platform and start making money daily. If they want to watch the registeration process here is the video. 

Tell them to watch till end to know all about registeration and start investing with the comfortable amount.
        
CFC is the platform where everyone can make money by investing. 
        
INVEST NOW AND EARN DAILY`, duration : 35, width: 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"})
    }

    else if(result == 7){
        var filepath = __dirname + "/Videos/invest.mp4";
        bot.sendVideo(vipchatid, filepath, {caption: `Hi all new investors if you have registerd here but don't know what to do after that then here is the video for you to know how to start investing.

Watch the video till end to get idea how to start investing on football scores daily and make 5-6% profit everyday.
        
Investing has never been easy like this. CFC provides opportunity to every general people to start investing with the comfortable amount and make money everyday.
        
The more you invest the more you get money everyday. So invest big and make big.
        
INVEST NOW`, duration : 31, width : 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"})
        bot.sendVideo(agentchatid, filepath, {caption: `Hi all agents if your downlines have registerd here but don't know what to do after that then here is the video for them to know how to start investing.

Share this video with them so that they will get the idea how to start investing on football scores daily and make 5-6% profit everyday.
        
Investing has never been easy like this. CFC provides opportunity to every general people to start investing with the comfortable amount and make money everyday.
        
The more they invest the more you get money everyday with premium agent bonus and rebate bonus. So tell them to invest big and make big.
        
INVEST NOW`, duration : 31, width : 1920, height : 1080, supports_streaming : true}, {contentType : "video/mp4"} ) 
    }

    else if(result == 3 || result == 6){
        // const agent = __dirname + "/Images/agent.jpg";
        var filepath = __dirname + "/Images/first deposit bonus.png";
    
        bot.sendPhoto(vipchatid, filepath, {caption : `This is the usdt based first deposit bonus. Start your investment now and get the bonus on your first recharge.\n\nCFC provides you the best opportunity to make money from home. Join this business now and make money daily.`}, {contentType : "image/png"})

        filepath = __dirname + "/Images/agent salary.png";
    
    bot.sendPhoto(agentchatid, filepath, {caption : `This is an agent salary. Let's invite more members and get the agent salary at the end of the month.\n\nThe more you invite the more salary you can get. Start inviting now and make automatic income.`}, {contentType : "image/jpeg"})
    }

    else if(result == 8){
        var filepath = __dirname + "/Images/cfcpromo.png";
        bot.sendPhoto(vipchatid, filepath, {caption : `CFC Provides you the investment opportunity to make money online from the comfort of your home.\n\nStart investing and earn 5-6% interest on your investment daily. The more you invest, the more profit you get daily.\n\nInvestment plans are updated daily in communication group. 100% refund on investment plan if  you lose.\n\nJOIN Now and make money just by investing on football games.`}, {contentType : "image/png"});

        bot.sendPhoto(agentchatid, filepath, {caption : "CFC Provides you the investment opportunity to make money online from the comfort of your home.Start investing and earn 5-6% interest on your investment daily. The more you invest, the more profit you get daily.\n\nInvestment plans are updated daily in communication group.  100% refund on investment plan if  you lose.\n\nJOIN Now and make money just by investing on football games."}, {contentType : "image/png"})
    }

    else if(result == 9){
        var filepath = "/Images/compound.jpg";
        bot.sendPhoto(vipchatid, filepath, {caption : `CFC Provides you the investment opportunity to make money online from the comfort of your home.\n\nStart investing and earn 5-6% interest on your investment daily. The more you invest, the more profit you get daily.\n\nInvestment plans are updated daily in communication group. 100% refund on investment plan if  you lose.\n\nJOIN Now and make money just by investing on football games.`}, {contentType : "image/png"});

        bot.sendPhoto(agentchatid, filepath, {caption : "CFC Provides you the investment opportunity to make money online from the comfort of your home.Start investing and earn 5-6% interest on your investment daily. The more you invest, the more profit you get daily.\n\nInvestment plans are updated daily in communication group.  100% refund on investment plan if  you lose.\n\nJOIN Now and make money just by investing on football games."}, {contentType : "image/png"})
    }

}

function checktime(){
    nigeriaTime = moment().tz("Africa/Lagos").format("H");
    nigeriaTimeampm = moment().tz("Africa/Lagos").format("h:mm a")

    if(nigeriaTime == 10){
        startSendingVideo = setInterval(() => {
            sendVideos()
            }, 2100000);
    }

    else if(nigeriaTime == 3){
        clearInterval(startSendingVideo)
    }

}

// bot.on("chat_join_request", (query) => {
//     bot.approveChatJoinRequest(query.chat.id, query.from.id);
// })

var staff = ["whysoserious2569", "groupanonymousbot", "dhim_0011", "monifa1", "jolayemi101", "faidah2255", "hadiza12345", "janaa62", "leo0w"]

bot.on("photo", (message) => {
    if(message.from.username !== undefined){
        var username = message.from.username.toLowerCase();
    var result = staff.includes((username), 0);
    if(result == false){
        bot.deleteMessage(message.chat.id, message.message_id);
    }
    }
    else{
        bot.deleteMessage(message.chat.id, message.message_id);
    }
})