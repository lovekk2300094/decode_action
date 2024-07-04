//Thu Jul 04 2024 09:09:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const axios = require("axios");
function signIn(_0x302a05, _0x4c9627) {
  const _0x1f25d1 = {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "www.kugua.com",
      "Referer": "https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Linux; Android 14; 23116PN5BC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/2445 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android",
      "xweb_xhr": "1"
    },
    _0x21e218 = {
      "type": 1,
      "invite_id": "",
      "code_ticket": "",
      "count": "",
      "token": _0x302a05,
      "appid": "wx1f9fc8e79fcbce16",
      "openid": _0x4c9627
    };
  return axios.post("https://www.kugua.com/wxapp/inflatedv3/popUpRedEnvelopes", _0x21e218, {
    "headers": _0x1f25d1
  }).then(_0x197bc2 => {
    console.log("签到成功");
    console.log(_0x197bc2.data);
    return _0x197bc2.data.data.dialogId;
  }).catch(_0x498753 => {
    console.error("签到失败", _0x498753);
    throw _0x498753;
  });
}
function withdraw(_0x3cb46e, _0x2e8f6f, _0x41b900) {
  const _0x5436d9 = {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "www.kugua.com",
      "Referer": "https://servicewechat.com/wx1f9fc8e79fcbce16/93/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Linux; Android 14; 23116PN5BC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/2445 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android",
      "xweb_xhr": "1"
    },
    _0x33fce6 = {
      "dialogId": _0x41b900,
      "token": _0x3cb46e,
      "appid": "wx1f9fc8e79fcbce16",
      "openid": _0x2e8f6f
    };
  return axios.post("https://www.kugua.com/wxapp/inflatedv3/receiveRedEnvelopes", _0x33fce6, {
    "headers": _0x5436d9
  }).then(_0x3f2709 => {
    console.log(_0x3f2709.data);
  }).catch(_0x45f625 => {
    console.error("提现失败", _0x45f625);
    throw _0x45f625;
  });
}
function getToken(_0x55a62e) {
  const _0x28fdb6 = {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "www.kugua.com",
      "Referer": "https://servicewechat.com/wx1f9fc8e79fcbce16/94/page-frame.html",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "cross-site",
      "User-Agent": "Mozilla/5.0 (Linux; Android 14; 23116PN5BC Build/UKQ1.230804.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220099 MMWEBSDK/20240404 MMWEBID/2445 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/4G Language/zh_CN ABI/arm64 MiniProgramEnv/android",
      "xweb_xhr": "1"
    },
    _0x5c49d2 = {
      "refresh_token": _0x55a62e
    };
  return axios.post("https://www.kugua.com/wxapp/refreshToken", _0x5c49d2, {
    "headers": _0x28fdb6
  }).then(_0x381c1f => {
    console.log(_0x381c1f.data);
    return _0x381c1f.data.data.token;
  }).catch(_0x34c5eb => {
    console.error("获取token失败", _0x34c5eb);
    throw _0x34c5eb;
  });
}
function printAsciiArt() {
  console.log("// ┏┓   ┏┓");
  console.log("// ┏┛┻━━━┛┻┓");
  console.log("// ┃       ┃");
  console.log("// ┃   ━   ┃");
  console.log("// ┃ ┳┛ ┗┳ ┃");
  console.log("// ┃       ┃");
  console.log("// ┃   ┻   ┃");
  console.log("// ┃       ┃");
  console.log("// ┗━┓   ┏━┛");
  console.log("// ┃   ┃ 分享群：");
  console.log("// ┃   ┃ 780261548");
  console.log("// ┃   ┗━━━┓");
  console.log("// ┃       ┣┓");
  console.log("// ┃       ┏┛");
  console.log("// ┗┓┓┏━┳┓┏┛");
  console.log("// ┃┫┫ ┃┫┫");
  console.log("// ┗┻┛ ┗┻┛");
}
async function main() {
  printAsciiArt();
  const _0x51b435 = process.env.kg;
  if (_0x51b435) {
    const _0x4b9eec = _0x51b435.includes("@") ? _0x51b435.split("@") : _0x51b435.split(" ");
    console.log("共" + _0x4b9eec.length + "个账号");
    for (let _0x1b9748 = 0; _0x1b9748 < _0x4b9eec.length; _0x1b9748++) {
      const [_0x581fd8, _0x230f4d] = _0x4b9eec[_0x1b9748].split("&");
      try {
        const _0x3266d4 = await getToken(_0x581fd8),
          _0x8eba4b = await signIn(_0x3266d4, _0x230f4d);
        await withdraw(_0x3266d4, _0x230f4d, _0x8eba4b);
        await new Promise(_0x223a7f => setTimeout(_0x223a7f, 3000));
      } catch (_0xd894f8) {
        console.error(_0xd894f8);
        continue;
      }
    }
  } else {
    console.log("变量不存在");
  }
}
main();