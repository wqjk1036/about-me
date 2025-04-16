/*
泰康在线保险-微信小程序

开启捉包，进入小程序，捉: https://m.tk.cn/wechat_item/rest/xcx/login
把返回里的 unionid 填到tkzxbxCookie里，多账号换行隔开
export tkzxbxCookie="你的unionid"

目前只支持签到和部分任务
定时一天一两次就好
cron: 50 9,21 * * *

重写：进入小程序自动获取ck
[task_local]
#泰康在线保险
38 7-22 * * * https://raw.githubusercontent.com/leafTheFish/DeathNote/main/tkzxbx.js, tag=泰康在线保险, enabled=true
[rewrite_local]
https://m.tk.cn/wechat_item/rest/xcx/login url script-request-header https://raw.githubusercontent.com/leafTheFish/DeathNote/main/tkzxbx.js
[MITM]
hostname = m.tk.cn

const $ = new Env("泰康在线保险");
*/
const _0x2f0914 = new _0x5d5158("泰康在线保险");

let _0x29c811 = ["\n"],
    _0xbce4e = "tkzxbxCookie",
    _0x3cc587 = (_0x2f0914.isNode() ? process.env[_0xbce4e] : _0x2f0914.getdata(_0xbce4e)) || "",
    _0x3780ca = [],
    _0x1509ad = 0,
    _0xf37264 = 0,
    _0x355f6c = "WECHAT",
    _0x27af3e = "71672",
    _0x366827 = "application/x-www-form-urlencoded",
    _0x3b3a0a = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.25(0x18001929) NetType/WIFI Language/zh_CN",
    _0x234843 = "https://servicewechat.com/wx9e3e7020c4a10356/185/page-frame.html",
    _0x2332fc = 8,
    _0x2ad931 = 1.01,
    _0x534b61 = "tkzxbx",
    _0x57bc49 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
    _0x7e44fa = "127.0.0.1";

class _0x38d737 {
  constructor(_0x2f0729) {
    this.index = ++_0x1509ad;
    this.name = this.index;
    this.valid = false;
    this.unionid = _0x2f0729;
  }

  async taskApi(_0x420ee8 = {}) {
    let _0x3b4f2a = {};

    try {
      let _0x466a8d = _0x420ee8.url.replace("//", "/").split("/")[1],
          _0x198d8a = _0x420ee8.url;

      if (_0x420ee8.queryParam) {
        _0x198d8a += "?" + _0x2f0914.json2str(_0x420ee8.queryParam, "&", true);
      }

      const _0x1361db = {
        Host: _0x466a8d,
        Connection: "keep-alive",
        "User-Agent": _0x3b3a0a,
        Referer: _0x234843
      };
      const _0x52490e = {
        url: _0x198d8a,
        headers: _0x1361db,
        timeout: 5000
      };

      if (_0x420ee8.body) {
        _0x52490e.headers["Content-Type"] = _0x420ee8["Content-Type"] || _0x366827;

        if (typeof _0x420ee8.body === "object") {
          if (_0x52490e.headers["Content-Type"].includes("json")) {
            _0x52490e.body = JSON.stringify(_0x420ee8.body);
          } else {
            for (let _0x389c56 in _0x420ee8.body) {
              typeof _0x420ee8.body[_0x389c56] === "object" && (_0x420ee8.body[_0x389c56] = JSON.stringify(_0x420ee8.body[_0x389c56]));
            }

            _0x52490e.body = _0x2f0914.json2str(_0x420ee8.body, "&", true);
          }
        } else {
          _0x52490e.body = _0x420ee8.body;
        }
      }

      if (_0x420ee8.urlObjectParam) {
        Object.assign(_0x52490e, _0x420ee8.urlObjectParam);
      }

      if (_0x420ee8.headerParam) {
        Object.assign(_0x52490e.headers, _0x420ee8.headerParam);
      }

      _0x3b4f2a = Object.assign({}, await _0x2d8d3d(_0x420ee8.method, _0x52490e));
      _0x3b4f2a.statusCode = _0x3b4f2a?.["resp"]?.["statusCode"];

      if (!_0x3b4f2a.err) {
        if (_0x3b4f2a?.["resp"]?.["body"]) {
          if (typeof _0x3b4f2a.resp.body === "object") {
            _0x3b4f2a.result = _0x3b4f2a.resp.body;
          } else {
            try {
              _0x3b4f2a.result = JSON.parse(_0x3b4f2a.resp.body);
            } catch (_0x1cfaee) {
              console.log("[" + _0x420ee8.fn + "]没有返回json数据");
              _0x3b4f2a.result = _0x3b4f2a.resp.body;
            }
          }
        }
      }
    } catch (_0x138b0e) {
      console.log(_0x138b0e);
    } finally {
      return Promise.resolve(_0x3b4f2a);
    }
  }

  async getUserInfo() {
    let _0x585fef = {};

    try {
      const _0x5d8708 = {
        fn: "getUserInfo",
        method: "post",
        url: "https://m.tk.cn/member_api/",
        body: {}
      };
      _0x5d8708.body.api_s = "member.userbind";
      _0x5d8708.body.api_m = "selectwxbindbybindid";
      _0x5d8708.body.params = {};
      _0x5d8708.body.params.platform = "APPLET";
      _0x5d8708.body.params.fromid = _0x27af3e;
      _0x5d8708.body.params.bindid = this.unionid;
      _0x585fef = Object.assign({}, await this.taskApi(_0x5d8708));

      if (typeof _0x585fef?.["result"] === "object") {
        let _0x1f0197 = _0x585fef.result;

        if (_0x1f0197.result == "success") {
          this.valid = true;
          this.memberid = _0x1f0197.data.memberid;
          this.token = _0x1f0197.data.token;
          this.mobile = _0x1f0197.data.pmemberuser.membertmmobile;
          console.log("手机：" + this.mobile);
        } else {
          _0x2f0914.logAndNotify("账号" + this.index + "登录失败：" + _0x1f0197.message);
        }
      }
    } catch (_0x44ffee) {
      console.log(_0x44ffee);
    } finally {
      return Promise.resolve(_0x585fef);
    }
  }

  async getMemberGoldbeanNickName() {
    let _0x538f7c = {};

    try {
      const _0x2b944d = {
        enc: false,
        memberid: this.memberid,
        token: this.token
      };
      const _0x2b2bc4 = {
        fn: "getMemberGoldbeanNickName",
        method: "post",
        url: "https://m.tk.cn/activity_execute/rest/membergoldbean/getMemberGoldbeanNickName",
        body: _0x2b944d
      };
      _0x538f7c = Object.assign({}, await this.taskApi(_0x2b2bc4));

      if (typeof _0x538f7c?.["result"] === "object") {
        let _0x5c511e = _0x538f7c.result;
        _0x5c511e.error_code == 0 ? (this.name = _0x5c511e.data.nickName, this.headUrl = _0x5c511e.data.headUrl, console.log("昵称：" + this.name)) : console.log("查询账户失败：" + _0x5c511e.error_message);
      }
    } catch (_0x2e736a) {
      console.log(_0x2e736a);
    } finally {
      return Promise.resolve(_0x538f7c);
    }
  }

  async doSign() {
    let _0x5a0664 = {};

    try {
      const _0x51bcfe = {
        enc: false,
        memberid: this.memberid,
        token: this.token,
        unionid: this.unionid,
        deviceId: "",
        fromid: _0x27af3e,
        platform: _0x355f6c,
        coordinate: "",
        nickName: ""
      };
      const _0x10e7ce = {
        fn: "doSign",
        method: "post",
        url: "https://m.tk.cn/activity_execute/rest/membergoldbean/sign",
        body: _0x51bcfe
      };
      _0x5a0664 = Object.assign({}, await this.taskApi(_0x10e7ce));

      if (typeof _0x5a0664?.["result"] === "object") {
        let _0x48f1f8 = _0x5a0664.result;
        _0x48f1f8.error_code == 0 ? console.log("签到成功，获得" + _0x48f1f8.data.amount + "积分") : console.log("签到失败：" + _0x48f1f8.error_message);
      }
    } catch (_0x560fdb) {
      console.log(_0x560fdb);
    } finally {
      return Promise.resolve(_0x5a0664);
    }
  }

  async queryTask() {
    let _0x298c5d = {};

    try {
      const _0x40f3ed = {
        enc: false,
        memberid: this.memberid,
        token: this.token,
        platform: _0x355f6c
      };
      const _0x505482 = {
        fn: "queryTask",
        method: "post",
        url: "https://m.tk.cn/activity_execute/rest/membergoldbean/queryTask",
        body: _0x40f3ed
      };
      _0x298c5d = Object.assign({}, await this.taskApi(_0x505482));

      if (typeof _0x298c5d?.["result"] === "object") {
        let _0x155114 = _0x298c5d.result;

        if (_0x155114.error_code == 0) {
          for (let _0x3f08b2 of _0x155114.data) {
            console.log("[" + _0x3f08b2.taskName + "] -- " + (_0x3f08b2.status == "Y" ? "已" : "未") + "完成");
            _0x3f08b2.taskToken && (await this.saveNoseEventLog(_0x3f08b2), await this.taskCallBack(_0x3f08b2));
            _0x3f08b2.viewToken;
          }
        } else {
          console.log("查询任务失败：" + _0x155114.error_message);
        }
      }
    } catch (_0x4d025d) {
      console.log(_0x4d025d);
    } finally {
      return Promise.resolve(_0x298c5d);
    }
  }

  async saveNoseEventLog(_0x212a6e) {
    let _0x2a7195 = {};

    try {
      const _0x325dad = {
        enc: false,
        memberid: this.memberid,
        token: this.token,
        eventType: _0x212a6e.taskCode,
        activityCode: "membergoldbean",
        activityId: _0x212a6e.activityId || "",
        assignmentId: _0x212a6e.assignmentId || "",
        assignmentType: _0x212a6e.assignmentType || ""
      };
      const _0x42bd41 = {
        fn: "saveNoseEventLog",
        method: "post",
        url: "https://m.tk.cn/activity_execute/rest/noseEvent/saveNoseEventLog",
        body: _0x325dad
      };
      _0x2a7195 = Object.assign({}, await this.taskApi(_0x42bd41));

      if (typeof _0x2a7195?.["result"] === "object") {
        let _0x53897c = _0x2a7195.result;
        _0x53897c.error_code == 0 ? console.log("开始任务[" + _0x212a6e.taskName + "]") : console.log("开始任务[" + _0x212a6e.taskName + "]失败：" + _0x53897c.error_message);
      }
    } catch (_0x550494) {
      console.log(_0x550494);
    } finally {
      return Promise.resolve(_0x2a7195);
    }
  }

  async taskCallBack(_0x48edb0) {
    let _0x1aa2bc = {};

    try {
      const _0x34521a = {
        memberid: this.memberid,
        taskToken: _0x48edb0.taskToken
      };
      const _0x321564 = {
        fn: "taskCallBack",
        method: "post",
        url: "https://m.tk.cn/activity_execute/rest/callback/taskCallBack",
        body: _0x34521a
      };
      _0x1aa2bc = Object.assign({}, await this.taskApi(_0x321564));

      if (typeof _0x1aa2bc?.["result"] === "object") {
        let _0x175406 = _0x1aa2bc.result;
        _0x175406.error_code == 0 ? console.log("完成任务[" + _0x48edb0.taskName + "]成功") : console.log("完成任务[" + _0x48edb0.taskName + "]失败：" + _0x175406.error_message);
      }
    } catch (_0x5040d8) {
      console.log(_0x5040d8);
    } finally {
      return Promise.resolve(_0x1aa2bc);
    }
  }

  async browse(_0x3906fb) {
    let _0x4b082d = {};

    try {
      const _0x24b274 = {
        viewToken: _0x3906fb.viewToken
      };
      const _0xfaa8dc = {
        fn: "browse",
        method: "post",
        url: "https://m.tk.cn/promotion/net-camp-api/api/callback/browse",
        body: _0x24b274
      };
      _0x4b082d = Object.assign({}, await this.taskApi(_0xfaa8dc));

      if (typeof _0x4b082d?.["result"] === "object") {
        let _0x48db41 = _0x4b082d.result;
        _0x48db41.error_code == 0 ? console.log("完成任务[" + _0x3906fb.taskName + "]成功") : console.log("完成任务[" + _0x3906fb.taskName + "]失败：" + _0x48db41.error_message);
      }
    } catch (_0x2c077c) {
      console.log(_0x2c077c);
    } finally {
      return Promise.resolve(_0x4b082d);
    }
  }

  async savehelp(_0x8b5cc6) {
    let _0x5a03b4 = {};

    try {
      const _0x42c290 = {
        enc: false,
        sponsorMemberId: _0x8b5cc6.memberId,
        memberid: this.memberid,
        token: this.token,
        unionid: this.unionid,
        headUrl: this.headUrl,
        nickName: "",
        fromId: _0x27af3e,
        platform: _0x355f6c,
        mobile: "",
        verifyCode: "",
        deviceId: ""
      };
      const _0x158a35 = {
        fn: "savehelp",
        method: "post",
        url: "https://m.tk.cn/activity_execute/rest/membergoldbean/savehelp",
        body: _0x42c290
      };
      _0x5a03b4 = Object.assign({}, await this.taskApi(_0x158a35));

      if (typeof _0x5a03b4?.["result"] === "object") {
        let _0x420e0f = _0x5a03b4.result;
        _0x420e0f.error_code == 0 ? console.log("助力[" + _0x8b5cc6 + "]: " + _0x420e0f.data.message) : console.log("助力[" + _0x8b5cc6 + "]失败：" + _0x420e0f.error_message);
      }
    } catch (_0x5d1521) {
      console.log(_0x5d1521);
    } finally {
      return Promise.resolve(_0x5a03b4);
    }
  }

  async mainPage() {
    let _0x3940cf = {};

    try {
      const _0x1596dd = {
        enc: false,
        memberid: this.memberid,
        token: this.token,
        coordinate: "",
        platform: _0x355f6c,
        nickName: "",
        openId: "",
        fromid: _0x27af3e,
        deviceId: ""
      };
      const _0x160a5d = {
        fn: "mainPage",
        method: "post",
        url: "https://m.tk.cn/activity_execute/rest/membergoldbean/mainPage",
        body: _0x1596dd
      };
      _0x3940cf = Object.assign({}, await this.taskApi(_0x160a5d));

      if (typeof _0x3940cf?.["result"] === "object") {
        let _0x299ff2 = _0x3940cf.result;
        _0x299ff2.error_code == 0 ? _0x2f0914.logAndNotify("账号" + this.index + "[" + this.mobile + "]金币: " + _0x299ff2.data.allbeans) : console.log("查询金币失败：" + _0x299ff2.error_message);
      }
    } catch (_0x406014) {
      console.log(_0x406014);
    } finally {
      return Promise.resolve(_0x3940cf);
    }
  }

  async userTask() {
    let _0x606492 = {};

    try {
      console.log("\n============= 账号[" + this.index + "] =============");
      await this.getUserInfo();

      if (!this.valid) {
        return;
      }

      await this.getMemberGoldbeanNickName();
      await this.doSign();
      await this.queryTask();
      await this.mainPage();
    } catch (_0xb03288) {
      console.log(_0xb03288);
    } finally {
      return Promise.resolve(_0x606492);
    }
  }

}

!(async () => {
  if (typeof $request !== "undefined") {
    await _0x14359e();
  } else {
    //if (!(await _0x502d7b())) {
    //  return;
    //}

    if (!_0xcbeb3f()) {
      return;
    }

    console.log("----------------------");

    for (let _0x3d63d of _0x3780ca) {
      await _0x3d63d.userTask();
    }
  }
})().catch(_0x483acb => console.log(_0x483acb)).finally(() => _0x2f0914.done());

async function _0x14359e() {
  if ($request.url.indexOf("wechat_item/rest/xcx/login") > -1) {
    try {
      let _0x16e4ce = JSON.parse($response.body);

      if (!_0x16e4ce?.["data"]?.["unionid"]) {
        return;
      }

      let _0x29be0e = _0x16e4ce.data.unionid;

      if (!_0x3cc587?.["includes"](_0x29be0e)) {
        let _0xe22135 = _0x29c811[0];

        for (let _0x3c9947 of _0x29c811) {
          if (_0x3cc587?.["includes"](_0x3c9947)) {
            _0xe22135 = _0x3c9947;
            break;
          }
        }

        let _0x31b963 = _0x3cc587 ? _0x3cc587.split(_0xe22135) : [];

        _0x31b963.push(_0x29be0e);

        _0x3cc587 = _0x31b963.join(_0xe22135);

        _0x2f0914.setdata(_0x3cc587, _0xbce4e);

        _0x2f0914.msg("获取第" + _0x31b963.length + "个账户CK成功，保存到变量[" + _0xbce4e + "]: " + _0x29be0e);
      }
    } catch (_0x3af229) {}
  }
}

function _0xcbeb3f() {
  if (_0x3cc587) {
    let _0x608386 = _0x29c811[0];

    for (let _0x13356e of _0x29c811) {
      if (_0x3cc587.indexOf(_0x13356e) > -1) {
        _0x608386 = _0x13356e;
        break;
      }
    }

    for (let _0x32651e of _0x3cc587.split(_0x608386)) {
      if (_0x32651e) {
        _0x3780ca.push(new _0x38d737(_0x32651e));
      }
    }

    _0xf37264 = _0x3780ca.length;
  } else {
    console.log("未找到CK: " + _0xbce4e);
    return false;
  }

  console.log("共找到" + _0xf37264 + "个账号");
  return true;
}

async function _0x502d7b(_0x287636 = 0) {
  let _0x48d804 = false;

  try {
    const _0x5ea537 = {
      url: _0x57bc49,
      timeout: 5000
    };

    let _0x5c305d = null,
        _0x277af2 = await _0x2d8d3d("get", _0x5ea537);

    if (_0x277af2.err) {
      console.log("服务器错误[" + _0x277af2?.["resp"]?.["statusCode"] + "]，重试...");
    } else {
      try {
        _0x5c305d = JSON.parse(_0x277af2.resp.body);
        _0x5c305d?.["code"] == 0 && (_0x5c305d = JSON.parse(_0x5c305d.data.file.data));
      } catch (_0x48f52e) {}
    }

    if (!_0x5c305d) {
      if (_0x287636 < _0x2332fc) {
        _0x48d804 = await _0x502d7b(++_0x287636);
      }
    } else {
      _0x5c305d?.["commonNotify"] && _0x5c305d.commonNotify.length > 0 && _0x2f0914.logAndNotify(_0x5c305d.commonNotify.join("\n") + "\n");
      _0x5c305d?.["commonMsg"] && _0x5c305d.commonMsg.length > 0 && console.log(_0x5c305d.commonMsg.join("\n") + "\n");

      if (_0x5c305d[_0x534b61]) {
        let _0x38abff = _0x5c305d[_0x534b61];

        if (_0x38abff.status == 0) {
          if (_0x2ad931 >= _0x38abff.version) {
            _0x48d804 = true;
            _0x7e44fa = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x534b61 + ".json";
            console.log(_0x38abff.msg[_0x38abff.status]);
            console.log(_0x38abff.updateMsg);
            console.log("现在运行的脚本版本是：" + _0x2ad931 + "，最新脚本版本：" + _0x38abff.latestVersion);
          } else {
            console.log(_0x38abff.versionMsg);
          }
        } else {
          console.log(_0x38abff.msg[_0x38abff.status]);
        }
      } else {
        console.log(_0x5c305d.errorMsg);
      }
    }
  } catch (_0x28e411) {
    console.log(_0x28e411);
  } finally {
    return Promise.resolve(_0x48d804);
  }
}

async function _0x1621db(_0x2b3779 = 0) {
  try {
    const _0x5acd0d = {
      url: _0x7e44fa,
      timeout: 5000
    };

    let _0x188b40 = null,
        _0x4407fe = await _0x2d8d3d("get", _0x5acd0d);

    if (_0x4407fe.err) {
      console.log("服务器错误[" + _0x4407fe?.["resp"]?.["statusCode"] + "]，重试");
    } else {
      try {
        _0x188b40 = JSON.parse(_0x4407fe.resp.body);
        _0x188b40?.["code"] == 0 && (_0x188b40 = JSON.parse(_0x188b40.data.file.data));
      } catch (_0x360bfd) {}
    }

    if (!_0x188b40) {
      if (_0x2b3779 < _0x2332fc) {
        await _0x1621db(++_0x2b3779);
      }
    }
  } catch (_0x306560) {
    console.log(_0x306560);
  } finally {
    return Promise.resolve();
  }
}

async function _0x2d8d3d(_0x4715f1, _0x144f19) {
  return new Promise(_0x2b9f75 => {
    _0x2f0914.send(_0x4715f1, _0x144f19, async (_0x2513ac, _0x4b968f, _0x80b2be) => {
      const _0x3e4fd8 = {
        err: _0x2513ac,
        req: _0x4b968f,
        resp: _0x80b2be
      };

      _0x2b9f75(_0x3e4fd8);
    });
  });
}

function _0x5d5158(_0x206799, _0x5640f8) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x53c7f5, _0x154e48) {
      this.name = _0x53c7f5;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x154e48);
      console.log(this.name + " 开始运行：\n");
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }

    isQuanX() {
      return "undefined" != typeof $task;
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    isLoon() {
      return "undefined" != typeof $loon;
    }

    getdata(_0x13c7f1) {
      let _0x47544a = this.getval(_0x13c7f1);

      if (/^@/.test(_0x13c7f1)) {
        const [, _0x3e018f, _0x18fc01] = /^@(.*?)\.(.*?)$/.exec(_0x13c7f1),
              _0x157e68 = _0x3e018f ? this.getval(_0x3e018f) : "";

        if (_0x157e68) {
          try {
            const _0x38289f = JSON.parse(_0x157e68);

            _0x47544a = _0x38289f ? this.lodash_get(_0x38289f, _0x18fc01, "") : _0x47544a;
          } catch (_0x388be1) {
            _0x47544a = "";
          }
        }
      }

      return _0x47544a;
    }

    setdata(_0xa50ca5, _0x2cb331) {
      let _0x2a8484 = !1;

      if (/^@/.test(_0x2cb331)) {
        const [, _0x2e23a9, _0x50a44f] = /^@(.*?)\.(.*?)$/.exec(_0x2cb331),
              _0x1401c7 = this.getval(_0x2e23a9),
              _0x2051b4 = _0x2e23a9 ? "null" === _0x1401c7 ? null : _0x1401c7 || "{}" : "{}";

        try {
          const _0x395fa9 = JSON.parse(_0x2051b4);

          this.lodash_set(_0x395fa9, _0x50a44f, _0xa50ca5);
          _0x2a8484 = this.setval(JSON.stringify(_0x395fa9), _0x2e23a9);
        } catch (_0x5a7463) {
          const _0x5b8406 = {};
          this.lodash_set(_0x5b8406, _0x50a44f, _0xa50ca5);
          _0x2a8484 = this.setval(JSON.stringify(_0x5b8406), _0x2e23a9);
        }
      } else {
        _0x2a8484 = this.setval(_0xa50ca5, _0x2cb331);
      }

      return _0x2a8484;
    }

    getval(_0x551c67) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x551c67) : this.isQuanX() ? $prefs.valueForKey(_0x551c67) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x551c67]) : this.data && this.data[_0x551c67] || null;
    }

    setval(_0x33ab76, _0x2923ed) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x33ab76, _0x2923ed) : this.isQuanX() ? $prefs.setValueForKey(_0x33ab76, _0x2923ed) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2923ed] = _0x33ab76, this.writedata(), !0) : this.data && this.data[_0x2923ed] || null;
    }

    send(_0x53c480, _0x2733ac, _0x44e227 = () => {}) {
      if ("get" == _0x53c480 || "post" == _0x53c480 || "put" == _0x53c480 || "delete" == _0x53c480) {
        const _0x523fca = {
          hints: !1
        };

        if ("get" == _0x53c480 && _0x2733ac.headers ? (delete _0x2733ac.headers["Content-Type"], delete _0x2733ac.headers["Content-Length"]) : _0x2733ac.body && _0x2733ac.headers && (_0x2733ac.headers["Content-Type"] || (_0x2733ac.headers["Content-Type"] = "application/x-www-form-urlencoded")), this.isSurge() || this.isLoon()) {
          const _0x111092 = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (_0x2733ac.headers = _0x2733ac.headers || {}, Object.assign(_0x2733ac.headers, _0x111092));
          const _0x1580c6 = {
            method: _0x53c480,
            url: _0x2733ac.url,
            headers: _0x2733ac.headers,
            timeout: _0x2733ac.timeout,
            data: _0x2733ac.body
          };
          "get" == _0x53c480 && delete _0x1580c6.data;
          $axios(_0x1580c6).then(_0x4a0d66 => {
            const {
              status: _0x342f77,
              request: _0x48076a,
              headers: _0x10025b,
              data: _0x1dbf85
            } = _0x4a0d66,
                  _0x31772d = {
              statusCode: _0x342f77,
              headers: _0x10025b,
              body: _0x1dbf85
            };

            _0x44e227(null, _0x48076a, _0x31772d);
          }).catch(_0x234fd0 => console.log(_0x234fd0));
        } else {
          if (this.isQuanX()) {
            _0x2733ac.method = _0x53c480.toUpperCase();
            this.isNeedRewrite && (_0x2733ac.opts = _0x2733ac.opts || {}, Object.assign(_0x2733ac.opts, _0x523fca));
            $task.fetch(_0x2733ac).then(_0x3e3350 => {
              const {
                statusCode: _0x2617e0,
                request: _0x1733d7,
                headers: _0x28be6c,
                body: _0x10ba27
              } = _0x3e3350,
                    _0x31ff80 = {
                statusCode: _0x2617e0,
                headers: _0x28be6c,
                body: _0x10ba27
              };

              _0x44e227(null, _0x1733d7, _0x31ff80);
            }, _0x19a54d => _0x44e227(_0x19a54d));
          } else {
            if (this.isNode()) {
              this.got = this.got ? this.got : require("got");
              const {
                url: _0x51614a,
                ..._0x5c8391
              } = _0x2733ac,
                    _0x1396d2 = {
                followRedirect: !1
              };
              this.instance = this.got.extend(_0x1396d2);

              this.instance[_0x53c480](_0x51614a, _0x5c8391).then(_0x1b4eaa => {
                const {
                  statusCode: _0x53dcea,
                  request: _0x139679,
                  headers: _0x1d5758,
                  body: _0x3eeb8f
                } = _0x1b4eaa,
                      _0x22f5f9 = {
                  statusCode: _0x53dcea,
                  headers: _0x1d5758,
                  body: _0x3eeb8f
                };

                _0x44e227(null, _0x139679, _0x22f5f9);
              }, _0x197cfa => {
                const {
                  message: _0x223f3e,
                  request: _0x3887ad,
                  response: _0x1c821c
                } = _0x197cfa;

                _0x44e227(_0x223f3e, _0x3887ad, _0x1c821c);
              });
            }
          }
        }
      } else {
        console.log("无效的http方法：" + _0x53c480);
      }
    }

    time(_0x4d86ff, _0x50da00 = null) {
      let _0x5c3ec1 = _0x50da00 ? new Date(_0x50da00) : new Date(),
          _0x24cda5 = {
        "M+": _0x5c3ec1.getMonth() + 1,
        "d+": _0x5c3ec1.getDate(),
        "h+": _0x5c3ec1.getHours(),
        "m+": _0x5c3ec1.getMinutes(),
        "s+": _0x5c3ec1.getSeconds(),
        "q+": Math.floor((_0x5c3ec1.getMonth() + 3) / 3),
        S: _0x5c3ec1.getMilliseconds()
      };

      /(y+)/.test(_0x4d86ff) && (_0x4d86ff = _0x4d86ff.replace(RegExp.$1, (_0x5c3ec1.getFullYear() + "").substr(4 - RegExp.$1.length)));

      for (let _0x1790e3 in _0x24cda5) new RegExp("(" + _0x1790e3 + ")").test(_0x4d86ff) && (_0x4d86ff = _0x4d86ff.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x24cda5[_0x1790e3] : ("00" + _0x24cda5[_0x1790e3]).substr(("" + _0x24cda5[_0x1790e3]).length)));

      return _0x4d86ff;
    }

    async showmsg() {
      if (!this.notifyStr) {
        return;
      }

      let _0x30986f = this.name + " 运行通知\n\n" + this.notifyStr;

      if (_0x2f0914.isNode()) {
        var _0x60301d = require("./sendNotify");

        console.log("\n============== 推送 ==============");
        await _0x60301d.sendNotify(this.name, _0x30986f);
      } else {
        this.msg(_0x30986f);
      }
    }

    logAndNotify(_0x5402c9) {
      console.log(_0x5402c9);
      this.notifyStr += _0x5402c9;
      this.notifyStr += "\n";
    }

    logAndNotifyWithTime(_0x176a91) {
      let _0x132cb6 = "[" + this.time("hh:mm:ss.S") + "]" + _0x176a91;

      console.log(_0x132cb6);
      this.notifyStr += _0x132cb6;
      this.notifyStr += "\n";
    }

    logWithTime(_0x337f2b) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x337f2b);
    }

    msg(_0x594e16 = t, _0x290cb3 = "", _0x5cae95 = "", _0x1ad94f) {
      const _0x3bdb66 = _0x514d3b => {
        if (!_0x514d3b) {
          return _0x514d3b;
        }

        if ("string" == typeof _0x514d3b) {
          return this.isLoon() ? _0x514d3b : this.isQuanX() ? {
            "open-url": _0x514d3b
          } : this.isSurge() ? {
            url: _0x514d3b
          } : void 0;
        }

        if ("object" == typeof _0x514d3b) {
          if (this.isLoon()) {
            const _0x1571b7 = {
              openUrl: _0x514d3b.openUrl || _0x514d3b.url || _0x514d3b["open-url"],
              mediaUrl: _0x514d3b.mediaUrl || _0x514d3b["media-url"]
            };
            return _0x1571b7;
          }

          if (this.isQuanX()) {
            const _0x2bb13b = {
              "open-url": _0x514d3b["open-url"] || _0x514d3b.url || _0x514d3b.openUrl,
              "media-url": _0x514d3b["media-url"] || _0x514d3b.mediaUrl
            };
            return _0x2bb13b;
          }

          if (this.isSurge()) {
            const _0x605cf0 = {
              url: _0x514d3b.url || _0x514d3b.openUrl || _0x514d3b["open-url"]
            };
            return _0x605cf0;
          }
        }
      };

      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x594e16, _0x290cb3, _0x5cae95, _0x3bdb66(_0x1ad94f)) : this.isQuanX() && $notify(_0x594e16, _0x290cb3, _0x5cae95, _0x3bdb66(_0x1ad94f)));
      let _0x15974a = ["", "============== 系统通知 =============="];

      _0x15974a.push(_0x594e16);

      _0x290cb3 && _0x15974a.push(_0x290cb3);
      _0x5cae95 && _0x15974a.push(_0x5cae95);
      console.log(_0x15974a.join("\n"));
    }

    getMin(_0x2dd630, _0x69b740) {
      return _0x2dd630 < _0x69b740 ? _0x2dd630 : _0x69b740;
    }

    getMax(_0xdd5bd9, _0x5c2c77) {
      return _0xdd5bd9 < _0x5c2c77 ? _0x5c2c77 : _0xdd5bd9;
    }

    padStr(_0x54607c, _0xf6cb72, _0x2a1257 = "0") {
      let _0x20bc3d = String(_0x54607c),
          _0x2c76fe = _0xf6cb72 > _0x20bc3d.length ? _0xf6cb72 - _0x20bc3d.length : 0,
          _0x22ae7 = "";

      for (let _0x35b2a5 = 0; _0x35b2a5 < _0x2c76fe; _0x35b2a5++) {
        _0x22ae7 += _0x2a1257;
      }

      return _0x22ae7 += _0x20bc3d;
    }

    json2str(_0xb200ba, _0xd56c4a, _0x3466ed = !1) {
      let _0x5efaed = [];

      for (let _0x34f839 of Object.keys(_0xb200ba).sort()) {
        let _0x287ba6 = _0xb200ba[_0x34f839];
        _0x287ba6 && _0x3466ed && (_0x287ba6 = encodeURIComponent(_0x287ba6));

        _0x5efaed.push(_0x34f839 + "=" + _0x287ba6);
      }

      return _0x5efaed.join(_0xd56c4a);
    }

    str2json(_0x136a21, _0x2e74fe = !1) {
      let _0x9fafc1 = {};

      for (let _0x471f53 of _0x136a21.split("&")) {
        if (!_0x471f53) {
          continue;
        }

        let _0x4c8126 = _0x471f53.indexOf("=");

        if (-1 == _0x4c8126) {
          continue;
        }

        let _0x5a2ed8 = _0x471f53.substr(0, _0x4c8126),
            _0x8b05fe = _0x471f53.substr(_0x4c8126 + 1);

        _0x2e74fe && (_0x8b05fe = decodeURIComponent(_0x8b05fe));
        _0x9fafc1[_0x5a2ed8] = _0x8b05fe;
      }

      return _0x9fafc1;
    }

    randomPattern(_0x28447, _0x37e8fd = "abcdef0123456789") {
      let _0x26ce5f = "";

      for (let _0x3b55a3 of _0x28447) _0x26ce5f += "x" == _0x3b55a3 ? _0x37e8fd.charAt(Math.floor(Math.random() * _0x37e8fd.length)) : "X" == _0x3b55a3 ? _0x37e8fd.charAt(Math.floor(Math.random() * _0x37e8fd.length)).toUpperCase() : _0x3b55a3;

      return _0x26ce5f;
    }

    randomString(_0x2f1085, _0x4ff144 = "abcdef0123456789") {
      let _0x3df444 = "";

      for (let _0x434629 = 0; _0x434629 < _0x2f1085; _0x434629++) {
        _0x3df444 += _0x4ff144.charAt(Math.floor(Math.random() * _0x4ff144.length));
      }

      return _0x3df444;
    }

    randomList(_0x4a49b6) {
      return _0x4a49b6[Math.floor(Math.random() * _0x4a49b6.length)];
    }

    wait(_0x407b43) {
      return new Promise(_0x52c30c => setTimeout(_0x52c30c, _0x407b43));
    }

    async done(_0x4cdcde = {}) {
      await this.showmsg();

      const _0x2728fc = (new Date().getTime() - this.startTime) / 1000;

      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x2728fc + " 秒！");
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4cdcde);
    }

  }(_0x206799, _0x5640f8);
}