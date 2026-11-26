/* YesPlayMusic i18n — zero-dependency, file:// safe.
 * Embedded dictionary is the source of truth; fetching locales/*.json is an
 * optional progressive enhancement that only runs over http(s). */
(function () {
  'use strict';

  var EMBEDDED = {
    en: {
      navDownload: 'Download',
      navDemo: 'Open demo',
      navAbout: 'About',
      heroEyebrow: 'Free · No ads · No account, ever',
      heroHeadline: 'Every song.\nNothing in the way.',
      heroCtaDownload: 'Get YesPlayMusic',
      heroCtaDemo: 'Open the player',
      frame1Title: 'Lossless & Dolby Atmos',
      frame2Title: 'Lyrics, word by word',
      frame3Title: 'Sing',
      frame4Title: 'AutoMix',
      platformWindows: 'Windows',
      platformMacos: 'macOS',
      platformLinux: 'Linux'
    },
    'zh-CN': {
      navDownload: '下载',
      navDemo: '在线体验',
      navAbout: '关于',
      heroEyebrow: '免费 · 无广告 · 无需账号，永久',
      heroHeadline: '每一首歌。\n畅听无阻碍。',
      heroCtaDownload: '获取 YesPlayMusic',
      heroCtaDemo: '打开播放器',
      frame1Title: '无损与杜比全景声',
      frame2Title: '逐字歌词',
      frame3Title: '跟唱',
      frame4Title: '自动混音',
      platformWindows: 'Windows',
      platformMacos: 'macOS',
      platformLinux: 'Linux'
    }
  };

  var dict = {};
  Object.keys(EMBEDDED).forEach(function (l) {
    dict[l] = {};
    Object.keys(EMBEDDED[l]).forEach(function (k) { dict[l][k] = EMBEDDED[l][k]; });
  });

  function normalize(l) {
    if (typeof l === 'string' && l.toLowerCase().indexOf('zh') === 0) return 'zh-CN';
    return 'en';
  }

  function detect() {
    try {
      var saved = window.localStorage.getItem('ypm_lang');
      if (saved) return normalize(saved);
    } catch (e) {}
    var nav = (window.navigator && window.navigator.language) || 'en';
    return normalize(nav);
  }

  var lang = detect();

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function apply() {
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute('data-i18n');
      var val = dict[lang] && dict[lang][key];
      if (val == null && dict.en) val = dict.en[key];
      if (val == null) continue;
      if (String(val).indexOf('\n') !== -1) {
        el.innerHTML = escapeHtml(val).split('\n').join('<br/>');
      } else {
        el.textContent = val;
      }
    }
    var btns = document.querySelectorAll('[data-lang]');
    for (var j = 0; j < btns.length; j++) {
      var on = btns[j].getAttribute('data-lang') === lang;
      btns[j].setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) btns[j].classList.add('is-active'); else btns[j].classList.remove('is-active');
    }
  }

  function enhance(l) {
    var protocol = (window.location && window.location.protocol) || '';
    if (protocol !== 'http:' && protocol !== 'https:') return;
    try {
      fetch('locales/' + l + '.json', { cache: 'no-cache' })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data) return;
          var target = dict[l] || (dict[l] = {});
          Object.keys(data).forEach(function (k) {
            if (target[k] == null) target[k] = data[k];
          });
          apply();
        })
        .catch(function () {});
    } catch (e) {}
  }

  function setLang(l) {
    lang = normalize(l);
    try { window.localStorage.setItem('ypm_lang', lang); } catch (e) {}
    if (document.documentElement) document.documentElement.lang = lang;
    apply();
    try {
      document.dispatchEvent(new CustomEvent('ypm:langchange', { detail: { lang: lang } }));
    } catch (e) {
      try {
        var ev = document.createEvent('CustomEvent');
        ev.initCustomEvent('ypm:langchange', true, true, { lang: lang });
        document.dispatchEvent(ev);
      } catch (e2) {}
    }
    enhance(lang);
    api.lang = lang;
    return lang;
  }

  function t(key) {
    if (dict[lang] && dict[lang][key] != null) return dict[lang][key];
    if (dict.en && dict.en[key] != null) return dict.en[key];
    return key;
  }

  var api = {
    lang: lang,
    t: t,
    setLang: setLang
  };
  window.YPM_I18N = api;

  if (document.documentElement) document.documentElement.lang = lang;
  apply();
  enhance(lang);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { apply(); });
  }
})();
