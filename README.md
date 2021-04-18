# History

Router utility for Vue Router 4 to track last address of route (e.g. redirect back to list from edit page and keep all filters)

## Installation

### CDN

this package published as `vHistory` module in umd.

```html
<script src="https://unpkg.com/@bardoui/vhistory"></script>
```

### NPM

```bash
npm i @bardoui/vhistory
```

```ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { installHistory } from "@bardoui/vhistory";

createApp(App)
  .use(router)
  .mount("#app");

installHistory(router);
```

## Define Route

To track route you must specify a key using meta `history` property of route. if history key not set route not tracked.

```ts
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      history: "home"
    }
  },
  {
    path: "/user-list",
    name: "UserList",
    component: UserList,
    meta: {
      history: "users"
    }
  },
  // This route not tracked
  {
    path: "/not-tracked-route",
    name: "About",
    component: About
  }
];
```

## Redirect

You can use `push` or `replace` method to redirect. Redirect methods accept a fallback address, router will redirect to fallback if no history track exists.

```ts
import { defineComponent } from "vue";
import { pushHistory, replaceHistory } from "@bardoui/vhistory";
export default defineComponent({
  setup() {
    function redirectToHome() {
      pushHistory("home", "/");
    }
    function redirectToUsers() {
      replaceHistory("users", { name: "UserList" });
    }
    return { redirectToHome, redirectToUsers };
  }
});
```
