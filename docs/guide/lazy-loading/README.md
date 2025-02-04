# Lazy loading

The dictionaries are sizable, so it is recommended to use lazy loading.

## Webpack

Webpack supports lazy-loading with some configuration; check out the [documentation](https://webpack.js.org/guides/lazy-loading/).

Here's how you import it:

```js
import { ZxcvbnFactory } from '@zxcvbn-ts/core'
```

This is how you lazy load dictionaries:

```js
const loadOptions = async () => {
  const { dictionary: commonDict, adjacencyGraphs } = await import(
    /* webpackChunkName: "zxcvbnCommonPackage" */ '@zxcvbn-ts/language-common'
  )
  const { dictionary: enDict, translations } = await import(
    /* webpackChunkName: "zxcvbnEnPackage" */ '@zxcvbn-ts/language-en'
  )

  return {
    dictionary: {
      ...commonDict,
      ...enDict,
    },
    graphs: adjacencyGraphs,
    translations: translations,
  }
}
```

Somewhere in your application you can call the "loadOptions" function, then the dictionary load is executed.

```js
//
// [your other code]
//
const run = async () => {
  const password = 'asdnlja978o'
  const options = await loadOptions()

  const zxcvbn = new ZxcvbnFactory(options)
  const results = zxcvbn.check(password)
  console.log(results)
}
```

## Fetch

If you don't use a bundler like webpack, you could fetch the dictionaries from GitHub or a hosted website:

```js
const packages = [
  'https://yourWebsite/zxcvbn-ts-language-common/passwords.json',
  'https://yourWebsite/zxcvbn-ts-language-en/commonWords.json',
  'https://yourWebsite/zxcvbn-ts-language-en/firstnames.json',
  'https://yourWebsite/zxcvbn-ts-language-en/lastnames.json',
]

const loadDictionaries = async () => {
  const promises = packages.map(async (url) => {
    const response = await fetch(url)

    return response.json()
  })

  return Promise.all(promises)
}
```
