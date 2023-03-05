open('https://chat.openai.com/chat')
setInterval(() => {
  if (document.getElementsByClassName('text-3xl font-medium')[0].innerHTML='ChatGPT is at capacity right now'
) {
  window.reload()
}
}, 1000);
