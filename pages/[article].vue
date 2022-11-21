<script setup>
import prism from "markdown-it-prism"
import markdownIt from "markdown-it"
import markdownItAnchor from "markdown-it-anchor"
import { htmlToToc } from "~~/utils/htmlToToc";
 
const md = new markdownIt({
    linkify: true,
    typographer: true,
})

md.use(markdownItAnchor)
md.use(prism)

const { $sanity } = useNuxtApp();
const route = useRoute()

const query = "*[_type == 'article' && slug.current == $slug]";
const params = { slug: route.params.article }
const contentData = await $sanity.fetch(query, params)
const content = contentData[0]

const article = md.render(content.body)
const articleToc = htmlToToc(article)
</script>

<template>
    <div>
        <header class="mb-4 h-[8%] p-4 flex justify-between items-end">
            <NuxtLink to="/">
                <img src="@/assets/logos/falestiodev_logosvg_light.svg" alt="logo" class="w-96">
            </NuxtLink>
            <SearchField></SearchField>
        </header>

        <main class="mb-20">
            <!-- Jumbotron -->
            <div class="w-full bg-slate-800 py-16 mb-16">
                <div class="cc">
                    <!-- <ul class="flex gap-2 items-center mb-4">
                        <li>This is breadcrumb1 ></li>
                        <li>This is breadcrumb2</li>
                        <li>This is breadcrumb3</li>
                    </ul> -->
                    <h1 class="text-5xl">{{ content.title }}</h1>
                    <span class="text-xl">{{ content.secondTitle }}</span>
                </div>
            </div>

            <!-- Content -->
            <div class="cc grid grid-cols-12 gap-8">
                <article class="col-span-9 article" v-html="article"></article>
                <!-- Sidebar -->
                <aside class="col-span-3">
                    <div class="sticky top-4">
                        <h2 class="text-2xl font-bold mb-4">Table of Contents</h2>
                        <ul class="flex flex-col gap-4">
                            <template v-for="toc in articleToc" :key="toc.slug">
                                <li v-if="toc.lvl == 3" class="p-2 hover:bg-slate-500 rounded ml-4">
                                    <NuxtLink :to="`#${toc.slug}`">
                                        {{ toc.content }}
                                    </NuxtLink>
                                </li>

                                <li v-else class="p-2 hover:bg-slate-500 rounded">
                                    <NuxtLink :to="`#${toc.slug}`">
                                        {{ toc.content }}
                                    </NuxtLink>
                                </li>
                            </template>
                        </ul>
                    </div>
                </aside>
            </div>
        </main>

        <the-footer></the-footer>

    </div>
</template>

<style>
code[class*=language-],pre[class*=language-]{color:#f8f8f2;background:0 0;text-shadow:0 1px rgba(0,0,0,.3);font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;font-size:1em;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border-radius:.3em}:not(pre)>code[class*=language-],pre[class*=language-]{background:#272822}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#8292a2}.token.punctuation{color:#f8f8f2}.token.namespace{opacity:.7}.token.constant,.token.deleted,.token.property,.token.symbol,.token.tag{color:#f92672}.token.boolean,.token.number{color:#ae81ff}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#a6e22e}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f8f8f2}.token.atrule,.token.attr-value,.token.class-name,.token.function{color:#e6db74}.token.keyword{color:#66d9ef}.token.important,.token.regex{color:#fd971f}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}
</style>