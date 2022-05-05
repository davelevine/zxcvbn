import{f as p,o as e,c as t,a as n,i as o,F as c,d as s,j as l}from"./app.9876a7f9.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"lazy-loading",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lazy-loading","aria-hidden":"true"},"#"),s(" Lazy loading")],-1),k=n("p",null,"The dictionaries are sizable, so it is recommended to use lazy loading.",-1),b=n("h2",{id:"webpack",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webpack","aria-hidden":"true"},"#"),s(" Webpack")],-1),d=s("Webpack supports lazy-loading with some configuration; check out the "),m={href:"https://webpack.js.org/guides/lazy-loading/",target:"_blank",rel:"noopener noreferrer"},g=s("documentation"),h=s("."),y=l(`<p>Here&#39;s how you import it:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> zxcvbn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@zxcvbn-ts/core&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This is how you lazy load dictionaries:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">loadOptions</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> zxcvbnCommonPackage <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token comment">/* webpackChunkName: &quot;zxcvbnCommonPackage&quot; */</span> <span class="token string">&#39;@zxcvbn-ts/language-common&#39;</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> zxcvbnEnPackage <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span>
    <span class="token comment">/* webpackChunkName: &quot;zxcvbnEnPackage&quot; */</span> <span class="token string">&#39;@zxcvbn-ts/language-en&#39;</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dictionary</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>zxcvbnCommonPackage<span class="token punctuation">.</span>default<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
      <span class="token operator">...</span>zxcvbnEnPackage<span class="token punctuation">.</span>default<span class="token punctuation">.</span>dictionary<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">graphs</span><span class="token operator">:</span> zxcvbnCommonPackage<span class="token punctuation">.</span>adjacencyGraphs<span class="token punctuation">,</span>
    <span class="token literal-property property">translations</span><span class="token operator">:</span> zxcvbnEnPackage<span class="token punctuation">.</span>default<span class="token punctuation">.</span>translations<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Somewhere in your application you can call the &quot;loadOptions&quot; function, then the dictionary load is executed.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//</span>
<span class="token comment">// [your other code]</span>
<span class="token comment">//</span>
<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> password <span class="token operator">=</span> <span class="token string">&#39;asdnlja978o&#39;</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  zxcvbnOptions<span class="token punctuation">.</span><span class="token function">setOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token function">zxcvbn</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> Fetch</h2><p>If you don&#39;t use a bundler like webpack, you could fetch the dictionaries from GitHub or a hosted website:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> packages <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;https://yourWebsite/zxcvbn-ts-language-common/passwords.json&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://yourWebsite/zxcvbn-ts-language-en/commonWords.json&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://yourWebsite/zxcvbn-ts-language-en/firstnames.json&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://yourWebsite/zxcvbn-ts-language-en/lastnames.json&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">loadDictionaries</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> promises <span class="token operator">=</span> packages<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>

    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,9);function v(w,f){const a=p("ExternalLinkIcon");return e(),t(c,null,[u,k,b,n("p",null,[d,n("a",m,[g,o(a)]),h]),y],64)}var z=r(i,[["render",v]]);export{z as default};
