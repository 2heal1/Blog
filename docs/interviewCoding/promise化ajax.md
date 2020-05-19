---
title: promise化ajax
---

## promise 化 ajax

```js
function getJson(url) {
  return new Promise((resolve, reject) => {
    const handler = function () {
      if (this.readState !== 4) {
        return;
      }
      if (this.readStatus === 200) {
        resolve(this.response);
      } else {
        reject(new Error("err reason" + this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.requestHeader("Accept", "application/json");
    client.send();
  });
}
getJson("url").then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.error(err);
  }
);
```
