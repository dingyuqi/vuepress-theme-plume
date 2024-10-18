import{_ as d,c as o,b as h,d as l,w as e,r as k,o as c,a as s,e as a}from"./app-BErxIL1v.js";const g={};function y(D,i){const p=k("VPIcon"),r=k("CodeTabs");return c(),o("div",null,[i[4]||(i[4]=h(`<p>近期的这几个版本主要围绕 <strong>实现单独的主题配置文件</strong> ，监听并支持热更新。</p><h2 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes"><span>Breaking Changes</span></a></h2><p>以下内置插件被移除：</p><ul><li>移除 <code>@vuepress-plume/plugin-blog-data</code> 插件</li><li>移除 <code>@vuepress-plume/plugin-notes-data</code> 插件</li><li>移除 <code>@vuepress-plume/plugin-auto-frontmatter</code> 插件</li></ul><p>以上插件的功能全部移动到 <code>vuepress-theme-plume</code> 主题包内部重新实现。原因是，单独的主题配置文件， 在异步加载完配置、以及配置热更新时，需要对这些插件所实现的功能进行重载，为了使流程更加清晰可控， 在主题内重新实现了这些功能，并移除了相关插件。</p><p><strong>但相关的配置项并没有发生变更，因此版本更新后用户无需修改配置。</strong></p><h2 id="主要更新" tabindex="-1"><a class="header-anchor" href="#主要更新"><span>主要更新</span></a></h2><h3 id="新增-主题配置文件" tabindex="-1"><a class="header-anchor" href="#新增-主题配置文件"><span>新增 主题配置文件</span></a></h3><p>一般我们在使用 <code>VuePress</code> 构建站点时，通常会在 <code>.vuepress/config.js</code> 中引入主题并进行主题配置：</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineUserConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  theme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">plumeTheme</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 主题配置</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>主题配置 通常会包括 如 导航栏、侧边导航栏、多语言相关等的配置。 当我们启动了 VuePress 服务后，对 <code>.vuepress/config.js</code> 的修改会引起 VuePress 服务的重启， 这对于 VuePress 相关的配置而言是合理的行为。</p><p>但对于 主题相关的配置而言，大部分的配置更新是没有必要 重启 VuePress 服务的。 特别是当我们频繁的更新主题配置时，还可能引起 VuePress 服务崩溃， 这对于我们在编写站点内容时带来的体验是非常糟糕的。</p><p>因此，主题新增了一个 <code>plume.config.js</code> 的主题配置文件，将主题配置进行单独的维护。 该配置文件主要用于管理主题配置中与 构建流无关的配置。你对他的任意修改，都将以热更新的方式， 更新主题，并同步到 客户端站点实现无刷新更新，完全避免了 VuePress 服务多次重启的问题。</p><p>你可以直接在 VuePress 配置文件的相同目录下直接创建 <code>plume.config.js</code> ，主题会自动加载该文件， 也可以使用 <code>plume.config.ts</code> 文件，以获取更好的类型提示。</p>`,14)),l(r,{id:"54",data:[{id:".vuepress/config.ts"},{id:".vuepress/plume.config.ts"}]},{title0:e(({value:n,isActive:t})=>[l(p,{name:"vscode-icons:file-type-typescript"}),i[0]||(i[0]=s("span",null,".vuepress/config.ts",-1))]),title1:e(({value:n,isActive:t})=>[l(p,{name:"vscode-icons:file-type-typescript"}),i[1]||(i[1]=s("span",null,".vuepress/plume.config.ts",-1))]),tab0:e(({value:n,isActive:t})=>i[2]||(i[2]=[s("div",{class:"language-ts","data-ext":"ts","data-title":"ts"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," defineUserConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," plumeTheme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress-theme-plume"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineUserConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  theme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"plumeTheme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"()")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])],-1)])),tab1:e(({value:n,isActive:t})=>i[3]||(i[3]=[s("div",{class:"language-ts","data-ext":"ts","data-title":"ts"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," defineThemeConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress-theme-plume"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineThemeConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"  // 主题配置")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])],-1)])),_:1}),i[5]||(i[5]=h(`<h3 id="新增-编译缓存" tabindex="-1"><a class="header-anchor" href="#新增-编译缓存"><span>新增 编译缓存</span></a></h3><p>VuePress 在每次启动时，都需要全量编译所有的 <code>markdown</code> 文件，在站点内容比较少，且内容不复杂时， 这一过程不算特别耗时，但是当 站点的内容越来越多，内容越来越复杂时，启动等待的时间就会变得越来越久。</p><p>以本主题的文档站点为例，虽然主题文档的内容并不算特别多，但是由于使用了 <code>shiki</code> 语法高亮，并支持了 <code>twoslash</code> 功能，由于 <code>twoslash</code> 需要对代码块进行类型编译，非常耗时，这导致 主题文档站点的启动时间 达到了夸张的 <code>15s</code> 以上！</p><p>为了缓解这一问题，主题对 <code>markdown</code> 文件的编译做了一层缓存，在首次启用 <code>VuePress</code> 服务时，主题会 对所有的 <code>markdown</code> 文件的编译结果进行缓存，在二次启动时，直接从缓存中读取 <code>markdown</code> 文件的编译结果。 且仅在 <code>markdown</code> 文件有发生变更时，才会重新编译。</p><p><strong>通过编译缓存，主题文档站点的启动耗时，从 <code>15s</code> 降低到了 <code>1.2s</code> 左右 ！</strong></p><p>另一方面， markdown 编译过程中耗时较为严重的是对 <strong>代码块</strong> 的编译，特别是 代码块使用了 <code>twoslash</code> 时。 主题原来的 <code>15s</code> 耗时主要就是由于 <code>twoslash</code> 的编译时间过长导致的。</p><p>主题同样对 代码块 进行了特殊的缓存处理，只有当 代码块 发生变化时，才会重新编译当前的代码块。</p><h3 id="新增-autofrontmatter-配置" tabindex="-1"><a class="header-anchor" href="#新增-autofrontmatter-配置"><span>新增 autoFrontmatter 配置</span></a></h3><p>在过去的版本，主题会自动为每个 <code>markdown</code> 文件添加了 <code>frontmatter</code> 配置，用户无法更改这个行为， 但部分用户可能不喜欢这一行为、或者只想给 部分 markdown 文件添加 <code>frontmatter</code> 配置、或者 只生成 部分的 <code>frontmatter</code> 配置。</p><p>为此，主题添加 <code>autoFrontmatter</code> 配置，用于控制是否自动为每个 <code>markdown</code> 文件添加 <code>frontmatter</code> 配置。 包括可以通过 <code>glob</code> 模式匹配过滤 <code>markdown</code> 文件，控制自动生成哪些 字段。</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> AutoFrontmatter</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * glob 匹配，被匹配的文件将会自动生成 frontmatter</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> [&#39;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">**\\/*.md&#39;]</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  include</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * glob 匹配，被匹配的文件将不会自动生成 frontmatter</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  exclude</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否自动生成 permalink</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">default</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> true</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  permalink</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否自动生成 createTime</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 默认读取 文件创建时间，\`createTitme\` 比 vuepress 默认的 \`date\` 时间更精准到秒</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  createTime</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">  /**</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 是否自动生成 title</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   *</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   * 默认读取文件名作为标题</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   */</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre></div>`,11))])}const m=d(g,[["render",y],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/article/5vjshyi9/","title":"1.0.0-rc.73 至 rc.77 更新说明","lang":"zh-CN","frontmatter":{"title":"1.0.0-rc.73 至 rc.77 更新说明","createTime":"2024/07/11 09:18:48","permalink":"/article/5vjshyi9/","description":"近期的这几个版本主要围绕 实现单独的主题配置文件 ，监听并支持热更新。 Breaking Changes 以下内置插件被移除： 移除 @vuepress-plume/plugin-blog-data 插件 移除 @vuepress-plume/plugin-notes-data 插件 移除 @vuepress-plume/plugin-auto-fro...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/article/5vjshyi9/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"1.0.0-rc.73 至 rc.77 更新说明"}],["meta",{"property":"og:description","content":"近期的这几个版本主要围绕 实现单独的主题配置文件 ，监听并支持热更新。 Breaking Changes 以下内置插件被移除： 移除 @vuepress-plume/plugin-blog-data 插件 移除 @vuepress-plume/plugin-notes-data 插件 移除 @vuepress-plume/plugin-auto-fro..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T16:14:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T16:14:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1.0.0-rc.73 至 rc.77 更新说明\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-25T16:14:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Breaking Changes","slug":"breaking-changes","link":"#breaking-changes","children":[]},{"level":2,"title":"主要更新","slug":"主要更新","link":"#主要更新","children":[{"level":3,"title":"新增 主题配置文件","slug":"新增-主题配置文件","link":"#新增-主题配置文件","children":[]},{"level":3,"title":"新增 编译缓存","slug":"新增-编译缓存","link":"#新增-编译缓存","children":[]},{"level":3,"title":"新增 autoFrontmatter 配置","slug":"新增-autofrontmatter-配置","link":"#新增-autofrontmatter-配置","children":[]}]}],"readingTime":{"minutes":4.24,"words":1272},"git":{"createdTime":1720722779000,"updatedTime":1727280846000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":4}]},"autoDesc":true,"filePathRelative":"3.更新说明/73-77.md","categoryList":[{"id":"7a3973","sort":3,"name":"更新说明"}]}');export{m as comp,u as data};
