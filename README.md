# test-vue-vite-app
I created this test app because of an issue I found during migration from vue-cli to Vite in the real project.

Description:

In my real case, I have a few Vue projects in one repo. 
All these projects are part of one web platform. 
So they are using the same components and styles. 
These components and styles are held in separate folders inside this repo but outside of any project. 

In this test repo, I created one test project app-1/ui folder which has one page, and used components from ui-common/src folder. That component used ElNotification from  "element-plus". 
So I provided some additional configuration for the app in `vite.config.js`
```
  build: {
    rollupOptions: {
      external: [vue, 'element-plus'] 
    }
  }
```

But I received the next error in the production
`Uncaught TypeError: Failed to resolve module specifier "element-plus". Relative references must start with either "/", "./", or "../"." Send you my vite.config and package.json`


Steps to reproduce
- go to `app-1/ui`
- run `npm install`
- `npm run dev` // should work great

- run `npm run build` // will go without errors
- run `npm run preview` // --> open page --> page is empty and check console
- console error `Uncaught TypeError: Failed to resolve module specifier "element-plus". Relative references must start with either "/", "./", or "../"." Send you my vite.config and package.json`
