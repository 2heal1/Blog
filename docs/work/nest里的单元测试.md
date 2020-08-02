---
title: nest里的单元测试
---

# nest 里的单元测试

随着每个工程的复杂化、代码的高复用性要求和前端代码模块之间的高内聚低耦合的需求，前端工程中的单元测试流程显得越来越重要。

## 测试是什么

对于前端开发过程来说，这里的特定目标就是指我们写的代码，而工具就是我们需要用到的测试框架(库)、测试用例等。

检测处的结果就是展示测试是否通过或者给出测试报告，这样才能方便问题的排查和后期的修正。

基于测试“是什么”的说法，为便于像我一样的新手理解，列出单元测试它“不是什么”

- 需要访问数据库的测试不是单元测试（对数据库的增删改查）
- 需要网络的测试不是单元测试（调用 api）
- 需要访问文件系统的测试不是单元测试
  上面说的这些，都可以通过 mock 来进行。

## 例子

接下里写一个简单例子来示范 jest 里如何写一个简单的单元测试。

`user.service.ts`

```js
export class UserService {
  async getUserById(id: number) {
    const user = await User.findOne({ id });
    return user;
  }
}
```

这个 service 就只有一个查询人员信息的方法，接下来我们写测试用例。

在 nest 里，保持你的测试文件测试类附近。测试文件必须以 .spec 或 .test 结尾。

`user.service.spec.ts`

```js
import { Test, TestingModule } from "@nestjs/testing";
import { UserService } from "./user.service";
import { User } from "./user.entity";

jest.mock("./../user/user.entity");

let user = new User();
user.id = 1;

let id;
describe("UserService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserService],
      providers: [UserService],
    }).compile();
    service = module.get < UserService > UserService;
  });

  describe("getUserById", () => {
    //code
  });
});
```

Test 类有一个 createTestingModule() 方法，该方法将模块的元数据（与在 @Module() 装饰器中传递的对象相同的对象）作为参数。这个方法创建了一个 TestingModule 实例，可以理解为创建一个 module，与你自己写的 user.module.ts 类似，该实例提供了一些方法，但是当涉及到单元测试时，这些方法中只有 compile() 是有用的。这个方式是异步的，因此必须等待执行完成。一旦模块编译完成，您可以使用 get() 方法检索任何实例，例如获取 service。

之前提过，我们的 user.service.ts 只有一个查询数据库的方法，但是单元测试不会真的去查，这里我们 mock 一下我们的数据库，并创建一个新的用户。

接下来是方法的具体实现。

`user.service.ts`

```js
describe("	getUserById", () => {
  it("getUserById", async () => {
    id = 1;
    User.findOne = jest.fn().mockImplementationOnce((id) => {
      if (user.id === id) {
        return id;
      }
    });
    try {
      await service.getUserById(id);
    } catch (error) {
      expect(typeof error.message).toBe("string");
    }
  });
});
```

这里我们 mock 了数据库的 findOne 这个方法，当 id 和查询的 id 一致，那么正确。当执行 service.getUserById(id) 这个方法时，里面的 findOne 方法就会替换成我们 mock 的方法。

下面在写一个带 http 请求的单元测试。

`auth.service.ts`

```js
import { Injectable, HttpService } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) { }

  async getUserInfo(token: string) {
    const url = `${process.env.TEST_URL}/api/v6/token/${token}?orgId=${process.env.TEST_ORG_ID}`;
    try {
      const response = await this.httpService.get(url).toPromise();
      return response.data.user;
    } catch (err) {
      throw new Error(err);
  }
  }

  async generateToken(id) {
    try {
      const payload = { id };
      const token = this.jwtService.sign(payload);
      return token;
    } catch (err) {
      throw new Error(err);
    }
  }

  async validateUser(staffId) {
    const user = await this.userService.getUserById(id);
    return user;
  }
}
```

这里面有 3 个方法：

- getUserInfo 发送 http 请求获取用户信息
- generateToken 生成 token
- validateUser 验证用户
  这里不仅用了 httpService 还有 jwtService，比较复杂。

`auth.service.spec.ts`

```js
import { HttpService } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { User } from "./../user/user.entity";
import { AxiosResponse } from "axios";
import { of } from "rxjs";

jest.mock("./../user/user.entity");

let user = new User();
user.id = 1;
let result: AxiosResponse<any> = {
  data: {
    id: 1,
  },
  status: 1,
  statusText: "",
  headers: {},
  config: {},
};

let id = 1;
describe("AuthService", () => {
  let authService: AuthService;
  let jwtService: JwtService;
  let httpService: HttpService;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
        {
          provide: UserService,
          useValue: {
            getUserById: jest.fn(),
          },
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
        AuthService,
      ],
    }).compile();
    authService = module.get < AuthService > AuthService;
    jwtService = module.get < JwtService > JwtService;
    httpService = module.get < HttpService > HttpService;
    userService = module.get < UserService > UserService;
  });

  describe("getUserInfo", () => {
    it("getUserInfo", async () => {
      //code here
    });
  });

  describe("generateToken", () => {
    it("generateToken", async () => {
      //code here
    });
  });
  describe("validateUser", () => {
    it("validateUser", async () => {
      //code here
    });
  });
});
```

在单元测试中，我们不需要真的进行 http 请求、jwt 签证等操作，因此在 providers 中，我们对相应的 service 进行了 mock，mock 相应的方法。

接下来对每个方法进行详细的解释。

`getUserInfo`

```js
describe("getUserInfo", () => {
  it("getUserInfo", async () => {
    let token = "e62abf0d-cc84-11ea-a7d5-ba49bd613097";
    let testUrl = "";
    let res = Object.assign({}, result, {
      data: {
        ...user,
      },
    });
    jest.spyOn(httpService, "get").mockImplementation((url) => {
      testUrl = url;
      return of(res);
    });
    let userInfo = await authService.getUserInfo(token);
    expect(testUrl).toStrictEqual(
      `${process.env.TEST_URL}/api/v6/token/${token}?orgId=${process.env.TEST_ORG_ID}`
    );
    expect(userInfo).toMatchObject(user);
  });
});
```

在 getUserInfo 这个方法中，传入一个 token，然后会进行 http 请求，其中这个请求的 url 是要拼接而成，因此这里需要进行验证 url 是否正确，然后对返回的数据是否匹配我们所需要的格式。

`generateToken`

```js
describe("generateToken", () => {
  it("generateToken", async () => {
    id = user.id;
    let jwtPayload: object;
    jest
      .spyOn(jwtService, "sign")
      .mockImplementation((payload: object): string => {
        jwtPayload = payload;
        return "token";
      });
    let token = await authService.generateToken(id);
    expect(jwtPayload).toStrictEqual({ id });
    expect(token).toBe("token");
  });
});
```

在生成 token 这个方法中，我们调用了 jwtService 里的 sign 这个方法，因此我们对其进行 mock。然后这里只要测试 payload 是否是我们所期望的结构。对于 token，因为生成的是一个随机的，因此只需进行相应的判断即可。

`validateUser`

```js
describe("validateUser", () => {
  it("validateUser", async () => {
    jest.spyOn(userService, "getUserById").mockImplementation(async (id) => {
      if (id == user.id) return user;
    });
    try {
      await userService.getUserById(id);
    } catch (error) {
      expect(typeof error.message).toBe("string");
    }
  });
});
```

在 validateUser 中，我们主要是调用 userService 获取用户信息，以判断是否是正确 id。这里和 userService 里调用数据库不一样，我们只需要 mock userService 的方法即可，不用过深。

以上是最近写单元测试用例的一些总结，还不够完善，可能存在问题，后续在进行相应研究。
