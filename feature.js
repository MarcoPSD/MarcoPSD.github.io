const webchat = window.WebChat.default;
const accessToken = "YOUR_DIALOGFLOW_ACCESS_TOKEN";

webchat.init({
  selector: "#webchat",
  customData: { language: "en" },
  accessToken: accessToken
});
