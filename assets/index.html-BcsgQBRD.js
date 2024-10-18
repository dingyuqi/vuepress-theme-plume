import{_ as s,c as a,b as e,o as l}from"./app-BErxIL1v.js";const t={};function n(h,i){return l(),a("div",null,i[0]||(i[0]=[e(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>主题通过 <code>&lt;Layout /&gt;</code> 和 <code>&lt;NotFound /&gt;</code> 提供了 丰富的 布局插槽，可以通过这些插槽，在 页面 的不同位置注入内容。 以便用户可以个性化的使用主题。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>以 <code>&lt;Layout /&gt;</code> 为例，首先，需要创建一个 客户端配置文件： <code>.vuepress/client.ts</code>:</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Layout</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./layouts/Layout.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  layouts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><p>然后，创建一个 <code>.vuepress/layouts/Layout.vue</code>，作为布局插槽的默认组件，在该组件中引入 当前主题的 <code>&lt;Layout /&gt;</code> 组件。</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> setup</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> #</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">page-bottom</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      &lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> class</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">custom-content</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">        自定义内容</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  &lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">custom-content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">%</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">style</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用 渲染函数 实现注入内容，在 <code>.vuepress/client.ts</code> 中：</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-theme-plume/client</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> CustomContent</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">./components/CustomContent.vue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> default</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> defineClientConfig</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  layouts</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Layout</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">null</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, {</span></span>
<span class="line"><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">      &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">page-bottom</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">CustomContent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span>插槽</span></a></h2><h3 id="layout-插槽" tabindex="-1"><a class="header-anchor" href="#layout-插槽"><span><code>&lt;Layout /&gt;</code> 插槽</span></a></h3><ul><li><p>当 <code>pageLayout: doc</code> 时：</p><ul><li><code>doc-top</code></li><li><code>doc-bottom</code></li><li><code>doc-footer-before</code></li><li><code>doc-before</code></li><li><code>doc-after</code></li><li><code>sidebar-nav-before</code></li><li><code>sidebar-nav-after</code></li><li><code>aside-top</code></li><li><code>aside-bottom</code></li><li><code>aside-outline-before</code></li><li><code>aside-outline-after</code></li></ul></li><li><p>当 <code>pageLayout: page</code> 时：</p><ul><li><code>page-top</code></li><li><code>page-bottom</code></li></ul></li><li><p>在 博客页 中 （包括 文章列表页、标签页、归档页 均适用）：</p><ul><li><code>blog-top</code></li><li><code>blog-bottom</code></li><li><code>blog-aside-top</code></li><li><code>blog-aside-bottom</code></li><li><code>blog-extract-before</code></li><li><code>blog-extract-after</code></li></ul></li><li><p>在 博客文章列表页 中：</p><ul><li><code>blog-post-list-before</code></li><li><code>blog-post-list-after</code></li><li><code>blog-post-list-pagination-after</code></li></ul></li><li><p>在 博客标签页 中：</p><ul><li><code>blog-tags-before</code></li><li><code>blog-tags-title-after</code></li><li><code>blog-tags-content-before</code></li><li><code>blog-tags-after</code></li></ul></li><li><p>在 博客归档页 中：</p><ul><li><code>blog-archives-before</code></li><li><code>blog-archives-after</code></li></ul></li><li><p>在 博客分类页 中：</p><ul><li><code>blog-categories-before</code></li><li><code>blog-categories-content-before</code></li><li><code>blog-categories-after</code></li></ul></li></ul><h3 id="notfound-插槽" tabindex="-1"><a class="header-anchor" href="#notfound-插槽"><span><code>&lt;NotFound /&gt;</code> 插槽</span></a></h3><ul><li><code>not-found</code></li></ul><h3 id="通用插槽" tabindex="-1"><a class="header-anchor" href="#通用插槽"><span>通用插槽</span></a></h3><p>以下插槽在 <code>&lt;Layout /&gt;</code> 和 <code>&lt;NotFound /&gt;</code> 中都支持：</p><ul><li><code>layout-top</code></li><li><code>layout-bottom</code></li><li><code>nav-bar-title-before</code></li><li><code>nav-bar-title-after</code></li><li><code>nav-bar-content-before</code></li><li><code>nav-bar-content-after</code></li><li><code>nav-screen-content-before</code></li><li><code>nav-screen-content-after</code></li></ul>`,17)]))}const k=s(t,[["render",n],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/guide/layout-slots/","title":"布局插槽","lang":"zh-CN","frontmatter":{"title":"布局插槽","icon":"ph:layout-duotone","author":"Plume Theme","createTime":"2024/06/17 16:19:43","permalink":"/guide/layout-slots/","description":"概述 主题通过 <Layout /> 和 <NotFound /> 提供了 丰富的 布局插槽，可以通过这些插槽，在 页面 的不同位置注入内容。 以便用户可以个性化的使用主题。 使用 以 <Layout /> 为例，首先，需要创建一个 客户端配置文件： .vuepress/client.ts: 然后，创建一个 .vuepress/layouts/Layo...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/layout-slots/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"布局插槽"}],["meta",{"property":"og:description","content":"概述 主题通过 <Layout /> 和 <NotFound /> 提供了 丰富的 布局插槽，可以通过这些插槽，在 页面 的不同位置注入内容。 以便用户可以个性化的使用主题。 使用 以 <Layout /> 为例，首先，需要创建一个 客户端配置文件： .vuepress/client.ts: 然后，创建一个 .vuepress/layouts/Layo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-10T16:03:13.000Z"}],["meta",{"property":"article:author","content":"Plume Theme"}],["meta",{"property":"article:modified_time","content":"2024-09-10T16:03:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"布局插槽\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-10T16:03:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Plume Theme\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"插槽","slug":"插槽","link":"#插槽","children":[{"level":3,"title":"<Layout /> 插槽","slug":"layout-插槽","link":"#layout-插槽","children":[]},{"level":3,"title":"<NotFound /> 插槽","slug":"notfound-插槽","link":"#notfound-插槽","children":[]},{"level":3,"title":"通用插槽","slug":"通用插槽","link":"#通用插槽","children":[]}]}],"readingTime":{"minutes":1.45,"words":436},"git":{"createdTime":1718618201000,"updatedTime":1725984193000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":4}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/布局插槽.md"}');export{k as comp,d as data};
