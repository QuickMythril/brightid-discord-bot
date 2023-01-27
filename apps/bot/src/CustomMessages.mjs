// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Env from "./Env.mjs";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as Endpoints from "./Endpoints.mjs";
import * as DiscordJs from "discord.js";
import * as Constants$Shared from "@brightidbot/shared/src/Constants.mjs";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

Env.createEnv(undefined);

var config = Env.getConfig(undefined);

var envConfig;

if (config.TAG === /* Ok */0) {
  envConfig = config._0;
} else {
  throw {
        RE_EXN_ID: Env.EnvError,
        _1: config._0,
        Error: new Error()
      };
}

async function sponsorshipRequested(interaction, contextId, sponsorHash) {
  var verificationStatusUrl = "" + Endpoints.brightIdVerificationEndpoint + "/" + Constants$Shared.context + "/" + contextId + "";
  var sponsorshipStatusUrl = "" + Endpoints.brightIdSubscriptionEndpoint + "/" + sponsorHash + "";
  var embedFields = [
    {
      name: "__Status__",
      value: "Requested"
    },
    {
      name: "__Server__",
      value: "**Server Name:** " + interaction.guild.name + "\n\n **Server ID:** " + interaction.guild.id + ""
    },
    {
      name: "__Bright ID Verification Status__",
      value: "**Context ID:** " + contextId + " \n\n [API Link](" + verificationStatusUrl + " \"" + verificationStatusUrl + "\")"
    },
    {
      name: "__Sponsorship Operation Status__",
      value: "**Request Hash:** " + sponsorHash + "\n\n [API Link](" + sponsorshipStatusUrl + " \"" + sponsorshipStatusUrl + "\")"
    }
  ];
  var messageEmbed = new DiscordJs.MessageEmbed().setColor("#fb8b60").setTitle("A Sponsorship Has Been Requested").setURL(verificationStatusUrl).setAuthor("BrightID Bot", "https://media.discordapp.net/attachments/708186850359246859/760681364163919994/1601430947224.png", "https://www.brightid.org/").setDescription("A member of " + interaction.guild.name + " is attempting to get sponsored").setThumbnail("https://media.discordapp.net/attachments/708186850359246859/760681364163919994/1601430947224.png").addFields(embedFields).setTimestamp();
  try {
    var channel = await interaction.client.channels.fetch(envConfig.discordLogChannelId);
    await channel.send({
          embeds: [messageEmbed]
        });
    return ;
  }
  catch (raw_obj){
    var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);
    if (obj.RE_EXN_ID === Js_exn.$$Error) {
      var obj$1 = obj._1;
      var msg = obj$1.message;
      if (msg !== undefined) {
        console.error("Failed to create sponsorship request: ", msg);
      } else {
        console.error("Failed to create sponsorship request", obj$1);
      }
      return ;
    }
    throw obj;
  }
}

var brightIdVerificationEndpoint = Endpoints.brightIdVerificationEndpoint;

var brightIdSubscriptionEndpoint = Endpoints.brightIdSubscriptionEndpoint;

var context = Constants$Shared.context;

export {
  brightIdVerificationEndpoint ,
  brightIdSubscriptionEndpoint ,
  context ,
  envConfig ,
  sponsorshipRequested ,
}
/*  Not a pure module */