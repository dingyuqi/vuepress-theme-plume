import{_ as r,c,b as d,d as n,w as e,a as i,e as t,r as l,o as h}from"./app-BErxIL1v.js";const u={},m={class:"hint-container info"};function k(v,s){const a=l("VPCard"),p=l("VPCardGrid"),o=l("RouteLink");return h(),c("div",null,[s[7]||(s[7]=d(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>对于想要突出显示的内容，可以将其放在 卡片容器 <code>::: card</code> 中。</p><p>当需要在空间足够时并排显示多个卡片，可以使用 <code>card-grid</code> 容器，包裹 多个卡片。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 单个卡片 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;标题&quot; icon=&quot;twemoji:astonished-face&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 多个卡片 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::: card-grid</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片标题 1&quot; icon=&quot;twemoji:astonished-face&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片标题 2&quot; icon=&quot;twemoji:astonished-face&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卡片 支持 可选的 <code>title</code> 和 <code>icon</code>。 其中， icon 支持传入 图片链接，也可以传入 iconify 图标名。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片标题&quot; icon=&quot;twemoji:astonished-face&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span></code></pre></div><p><strong>输出：</strong></p>`,10)),n(a,{title:"卡片标题",icon:"twemoji:astonished-face"},{default:e(()=>s[0]||(s[0]=[i("p",null,"这里是卡片内容。",-1)])),_:1}),s[8]||(s[8]=d(`<p><strong>输入：</strong></p><div class="language-md line-numbers-mode" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::: card-grid</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片标题 1&quot; icon=&quot;twemoji:astonished-face&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::: card title=&quot;卡片标题 2&quot; icon=&quot;twemoji:astonished-face&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">这里是卡片内容。</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">:::</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">::::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p>`,3)),n(p,null,{default:e(()=>[n(a,{title:"卡片标题 1",icon:"twemoji:astonished-face"},{default:e(()=>s[1]||(s[1]=[i("p",null,"这里是卡片内容。",-1)])),_:1}),n(a,{title:"卡片标题 2",icon:"twemoji:astonished-face"},{default:e(()=>s[2]||(s[2]=[i("p",null,"这里是卡片内容。",-1)])),_:1})]),_:1}),i("div",m,[s[6]||(s[6]=i("p",{class:"hint-container-title"},"相关信息",-1)),i("p",null,[s[4]||(s[4]=t("如果你更喜欢通过组件的方式使用 卡片，你可以查看 ")),n(o,{to:"/guide/features/component/#card"},{default:e(()=>s[3]||(s[3]=[t("卡片组件")])),_:1}),s[5]||(s[5]=t(" 。"))])])])}const b=r(u,[["render",k],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/guide/markdown/card/","title":"卡片","lang":"zh-CN","frontmatter":{"title":"卡片","createTime":"2024/09/30 14:37:40","icon":"solar:card-broken","permalink":"/guide/markdown/card/","description":"概述 对于想要突出显示的内容，可以将其放在 卡片容器 ::: card 中。 当需要在空间足够时并排显示多个卡片，可以使用 card-grid 容器，包裹 多个卡片。 语法 卡片 支持 可选的 title 和 icon。 其中， icon 支持传入 图片链接，也可以传入 iconify 图标名。 示例 输入： 输出： 输入： 输出： 相关信息 如果你更...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/markdown/card/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"卡片"}],["meta",{"property":"og:description","content":"概述 对于想要突出显示的内容，可以将其放在 卡片容器 ::: card 中。 当需要在空间足够时并排显示多个卡片，可以使用 card-grid 容器，包裹 多个卡片。 语法 卡片 支持 可选的 title 和 icon。 其中， icon 支持传入 图片链接，也可以传入 iconify 图标名。 示例 输入： 输出： 输入： 输出： 相关信息 如果你更..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T17:26:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-30T17:26:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"卡片\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T17:26:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"readingTime":{"minutes":1.05,"words":315},"git":{"createdTime":1727717214000,"updatedTime":1727717214000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/markdown/卡片.md"}');export{b as comp,A as data};
