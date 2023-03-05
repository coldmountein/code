function name(params) {
      let i=0
      setInterval(() => {
        document.getElementsByClassName('translate-input-content')[0].value=i++
      }, 500);
}