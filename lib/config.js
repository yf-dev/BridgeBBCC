configData = {
  numChatMax: 20,
  personalColor: true,
  badgeVisible: true,
  badgeChannelId : 414759894,
  themeURI: "",
  theme: "default",
  themeName: "",
  msgExistDuration: 0,
  msgAniDuration: 0,
  debugLevel: 1,
  useDisplayName: true,
  loadCheerImgs: true,
  loadTwitchCons: true,
  loadDcCons: true,
  dcConsURI: "",
  subMonthsMsg: "☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
  cheersMsg: "☆ {!0:{bits} 비트 }후원 ! ☆",
  clipReplaceMsg: "[ 클립 ]",
  linkReplaceMsg : "[ 링크 ]",
  webSocket: "wss://irc-ws.chat.twitch.tv:443",
  nick: "justinfan16845",
  pass: "foobar",
  channel: "#sleeping_ce",
  retryInterval: 2,
  allMessageHandle: false,
  muteUser: ["Nightbot", "Ssakdook", "싹둑", "Hibiya_bot", "히비야봇"],
  deleteBanMsg: true,
  commands: [
    { exe: "clear", msg: "!!clear" },
    { exe: "theme", msg: "!!theme" }
  ],
  replaceMsgs: [
    { orig: /^![a-zA-Z]+/, to: "{no_display}" }
  ],
  scale: 1
};