<script setup>
const colorMode = useColorMode()
colorMode.preference = 'dark'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' }
  ],
  script: [
    {
      children: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1423255069160679');
fbq('track', 'PageView');`
    },
    {
      src: 'https://cdn.utmify.com.br/scripts/utms/latest.js',
      async: true,
      defer: true,
      'data-utmify-prevent-xcod-sck': true,
      'data-utmify-prevent-subids': true
    }
  ],
  noscript: [
    {
      innerHTML: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1423255069160679&ev=PageView&noscript=1"
/>`
    }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' }
  ],
  style: [
    { children: 'body { background-color: #0B0B0E; color: #C7C7D1; font-family: "Inter", system-ui, sans-serif; }' }
  ],
  htmlAttrs: {
    lang: 'pt-BR',
    class: 'dark'
  },
  bodyAttrs: {
    class: 'bg-[#0B0B0E] text-[#C7C7D1] antialiased',
    style: 'background-color: #0B0B0E; color: #C7C7D1;'
  }
})

const title = 'Stalkea.AI - Descubra a Verdade'
const description = 'O que seu cônjuge faz quando está no Instagram? Descubra agora de forma 100% anônima.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
