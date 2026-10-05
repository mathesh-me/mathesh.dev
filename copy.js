(function () {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }

  document.querySelectorAll('pre').forEach(function (pre) {
    var code = pre.querySelector('code');
    if (!code) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'copy-btn';
    btn.textContent = 'Copy';
    btn.setAttribute('aria-label', 'Copy to clipboard');
    pre.appendChild(btn);
    btn.addEventListener('click', function () {
      copyText(code.innerText).then(
        function () {
          btn.textContent = 'Copied';
          setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
        },
        function () {
          btn.textContent = 'Failed';
          setTimeout(function () { btn.textContent = 'Copy'; }, 1500);
        }
      );
    });
  });
})();
