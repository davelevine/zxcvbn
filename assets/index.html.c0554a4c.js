import{f as t,o as p,c,a as n,i as e,F as r,j as o,d as s}from"./app.9876a7f9.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=o(`<h1 id="migration" tabindex="-1"><a class="header-anchor" href="#migration" aria-hidden="true">#</a> Migration</h1><h2 id="zxcvbn-ts-1-2-x-to-zxcvbn-ts-2-x-x" tabindex="-1"><a class="header-anchor" href="#zxcvbn-ts-1-2-x-to-zxcvbn-ts-2-x-x" aria-hidden="true">#</a> <code>zxcvbn-ts 1.2.x</code> to <code>zxcvbn-ts 2.x.x</code></h2><p>To fix the typing for async and non async matcher we separated the matcher into two functions. The non async original will be kept as <code>zxcvbn</code> and the async function will be named to <code>zxcvbnAsync</code>. If you try to use an async matcher with the original function name it will throw an error. This means if you don&#39;t have any async matcher in use you don&#39;t have to do anything. Maybe you can fix some types that were broken.</p><p>There is a new option for levenshtein calculation which can be activated to be stricter with the dictionary matcher.</p><ul><li>If you are using async matcher you need to move from <code>zxcvbn</code> to <code>zxcvnAsync</code>.</li><li><code>ZxcvbnOptions</code> export renamed to <code>zxcvbnOptions</code></li><li><code>@zxcvbn-ts/matcher-pwned</code> needs <code>zxcvbnOptions</code> as the second parameter</li></ul><h2 id="zxcvbn-ts-0-3-x-to-zxcvbn-ts-1-x-x" tabindex="-1"><a class="header-anchor" href="#zxcvbn-ts-0-3-x-to-zxcvbn-ts-1-x-x" aria-hidden="true">#</a> <code>zxcvbn-ts 0.3.x</code> to <code>zxcvbn-ts 1.x.x</code></h2><p>To decrease the bundle size of the core package the keyboard layout are now optional and can be customized. This means that if you want to have the recommended scoring you need to add it to your <code>setOptions</code> call.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> zxcvbn<span class="token punctuation">,</span> zxcvbnOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/core&#39;</span>
<span class="token keyword">import</span> zxcvbnCommonPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-common&#39;</span>
<span class="token keyword">import</span> zxcvbnEnPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-en&#39;</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;somePassword&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">translations</span><span class="token operator">:</span> zxcvbnEnPackage<span class="token punctuation">.</span>translations<span class="token punctuation">,</span>
  <span class="token literal-property property">dictionary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>zxcvbnCommonPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
    <span class="token operator">...</span>zxcvbnEnPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> 
  <span class="token comment">// The next line is now recommended to get a good scoring.</span>
  <span class="token literal-property property">graphs</span><span class="token operator">:</span> zxcvbnCommonPackage<span class="token punctuation">.</span>adjacencyGraphs<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

zxcvbnOptions<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

<span class="token function">zxcvbn</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="zxcvbn-ts-0-2-x-to-zxcvbn-ts-0-3-x" tabindex="-1"><a class="header-anchor" href="#zxcvbn-ts-0-2-x-to-zxcvbn-ts-0-3-x" aria-hidden="true">#</a> <code>zxcvbn-ts 0.2.x</code> to <code>zxcvbn-ts 0.3.x</code></h2><p>We moved the options handling out of the <strong>zxcvbn</strong> call to improve performance.</p>`,10),b=s("Related "),d={href:"https://github.com/zxcvbn-ts/zxcvbn/issues/31",target:"_blank",rel:"noopener noreferrer"},k=s("issue"),m=o(`<ul><li>@zxcvbn-ts/core has only named exports</li><li>options need to be set by <code>zxcvbnOptions.setOptions</code></li></ul><p>Old</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> zxcvbn <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/core&#39;</span>
<span class="token keyword">import</span> zxcvbnCommonPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-common&#39;</span>
<span class="token keyword">import</span> zxcvbnEnPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-en&#39;</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;somePassword&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">translations</span><span class="token operator">:</span> zxcvbnEnPackage<span class="token punctuation">.</span>translations<span class="token punctuation">,</span>
  <span class="token literal-property property">dictionary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>zxcvbnCommonPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
    <span class="token operator">...</span>zxcvbnEnPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">zxcvbn</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>New</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> zxcvbn<span class="token punctuation">,</span> zxcvbnOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/core&#39;</span>
<span class="token keyword">import</span> zxcvbnCommonPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-common&#39;</span>
<span class="token keyword">import</span> zxcvbnEnPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-en&#39;</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;somePassword&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">translations</span><span class="token operator">:</span> zxcvbnEnPackage<span class="token punctuation">.</span>translations<span class="token punctuation">,</span>
  <span class="token literal-property property">dictionary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>zxcvbnCommonPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
    <span class="token operator">...</span>zxcvbnEnPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

zxcvbnOptions<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

<span class="token function">zxcvbn</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>The <code>zxcvbnOptions.setOptions</code> should be in another place as the <strong>zxcvbn</strong> call for example directly after you load your options.</p><h2 id="zxcvbn-4-4-2-to-zxcvbn-ts-0-1-0" tabindex="-1"><a class="header-anchor" href="#zxcvbn-4-4-2-to-zxcvbn-ts-0-1-0" aria-hidden="true">#</a> <code>zxcvbn 4.4.2</code> to <code>zxcvbn-ts 0.1.0</code></h2><ul><li>Everything is written in TypeScript, this should make it easier for other people to contribute, and it will generate types that everybody can use.</li><li>There are now some more options. This is how it changed:</li></ul><p>Old</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> zxcvbn <span class="token keyword">from</span> <span class="token string">&#39;zxcvbn&#39;</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;somePassword&#39;</span>
<span class="token function">zxcvbn</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>New</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> zxcvbn <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/core&#39;</span>
<span class="token keyword">import</span> zxcvbnCommonPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-common&#39;</span>
<span class="token keyword">import</span> zxcvbnEnPackage <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/language-en&#39;</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;somePassword&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">translations</span><span class="token operator">:</span> zxcvbnEnPackage<span class="token punctuation">.</span>translations<span class="token punctuation">,</span>
  <span class="token literal-property property">dictionary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>zxcvbnCommonPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
    <span class="token operator">...</span>zxcvbnEnPackage<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">zxcvbn</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>It is a lot more but this is the configuration to improve the handling. This way you could add some more dictionaries. E.g. if you are from Germany you could also include the German package to improve efficacy. You can even generate your own dictionaries and include them.</p><ul><li>the userInputs options from before is now just a dictionary in the dictionary part of options with specific sanitizing. If you are using it you need to move the parameter into the options like this:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> zxcvbn <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/core&#39;</span>

<span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;somePassword&#39;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">dictionary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userInputs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;someEmail@email.de&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token function">zxcvbn</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,15),v=s("there are a few things that will slightly change the password crack estimation: "),h=n("li",null,"the password list is newly generated: this means that some passwords are in a different rank.",-1),x=n("li",null,"dates should be recognized better",-1),g=s("passwords as single tokens are now consistently ranked better for capitalization like in "),y={href:"https://github.com/dropbox/zxcvbn/issues/232",target:"_blank",rel:"noopener noreferrer"},z=s("#232"),w=s(" described."),f=n("li",null,"there are new keyboard layouts.",-1),_=n("li",null,"the german language package should not be used without the english and common language package because it is not matured yet",-1);function P(j,E){const a=t("ExternalLinkIcon");return p(),c(r,null,[u,n("p",null,[b,n("a",d,[k,e(a)])]),m,n("ul",null,[n("li",null,[v,n("ul",null,[h,x,n("li",null,[g,n("a",y,[z,e(a)]),w]),f])]),_])],64)}var C=l(i,[["render",P]]);export{C as default};
