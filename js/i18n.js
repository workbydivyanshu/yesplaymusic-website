/* YesPlayMusic i18n — zero-dependency, file:// safe.
 * Embedded dictionary is the source of truth; fetching locales/*.json is an
 * optional progressive enhancement that only runs over http(s). */
(function () {
  'use strict';

  var EMBEDDED = {
    en: {
      navFeatures: "Features",
      navDownload: "Download",
      navAbout: "About",
      heroEyebrow: "Free · No ads · No account, ever",
      heroHeadline: "Every song.\nNothing in the way.",
      heroCtaDownload: "Get YesPlayMusic",
      heroCtaExplore: "Explore the features",
      heroSub: "YesPlayMusic is a beautiful third-party desktop player for NetEase Cloud Music. Lossless audio, synced lyrics, and a library that feels like home — all free and open source.",
      frame1Title: "Lossless & Hi-Res Audio",
      frame1Body: "Bit-perfect playback through your own DAC, with FLAC, WAV and Hi-Res support up to 192kHz/24-bit.",
      frame2Title: "Synced lyrics, word by word",
      frame2Body: "Karaoke-style syllable highlighting keeps every line locked to the music, in any language.",
      frame3Title: "Dynamic ambient glow",
      frame3Body: "Album art drives a soft, ever-changing glow that bathes the whole interface in the mood of the music.",
      frame4Title: "Native desktop citizenship",
      frame4Body: "A true native window with system media keys, global shortcuts, and deep OS integration on macOS, Windows and Linux.",
      section05Title: "05 — Under the hood",
      section05Headline: "Built for the way you actually listen.",
      section05Body: "Eight thoughtful capabilities that turn a music player into a home for your collection.",
      feat1Title: "Local Library & Offline",
      feat1Body: "Import your own files and playlists, tag and organize them freely, and keep listening with zero connection.",
      feat2Title: "Karaoke Syllable Lyrics",
      feat2Body: "Word-by-word scrolling lyrics with translation and romanization, perfectly timed to the vocal.",
      feat3Title: "Sandboxed Plugins",
      feat3Body: "Extend the player with isolated plugins that can never touch the rest of your system.",
      feat4Title: "3D Coverflow",
      feat4Body: "Flip through your albums in a fluid three-dimensional coverflow that feels like flipping records.",
      feat5Title: "Rich Search & Metadata",
      feat5Body: "Find anything instantly with fuzzy search across titles, artists, albums, and even lyrics.",
      feat6Title: "In-App Song Comments",
      feat6Body: "Read and join the community conversation right beside each track, just like on the web.",
      feat7Title: "Bit-Perfect Audio Engine",
      feat7Body: "An exclusive-mode engine that sends audio to your DAC untouched, with no resampling or DSP in the way.",
      feat8Title: "Private & Free Forever",
      feat8Body: "No ads, no tracking, no account required. Your library stays yours, and the app stays free.",
      platformMacos: "macOS",
      platformWindows: "Windows",
      platformLinux: "Linux",
      downloadTitle: "Download YesPlayMusic",
      downloadWindows: "Download for Windows",
      downloadMacos: "Download for macOS",
      downloadLinux: "Download for Linux",
      downloadReqWin: "Windows 10 or later · 64-bit",
      downloadReqMac: "macOS 11 or later · Apple silicon & Intel",
      downloadReqLinux: "AppImage · Debian · RPM",
      downloadCopy: "Copy link",
      downloadCopied: "Copied!",
      footerPlayKeys: "Play the yesplaymusic.",
      footerSub: "Keyboard: A S D F G H J K · W E T Y U",
      footerCopyright: "© 2026 YesPlayMusic. Not affiliated with NetEase Cloud Music.",
      step1Title: "Download & install",
      step1Body: "Grab the build for your platform — macOS, Windows or Linux — and install it in seconds.",
      step2Title: "Sign in to your account",
      step2Body: "Log in with your NetEase Cloud Music account to bring your playlists and favorites along.",
      step3Title: "Press play",
      step3Body: "Browse, search and listen in lossless quality — everything else stays out of your way."
    },
    'zh-CN': {
      navFeatures: "功能",
      navDownload: "下载",
      navAbout: "关于",
      heroEyebrow: "免费 · 无广告 · 无需账号，永久",
      heroHeadline: "每一首歌。\n畅听无阻碍。",
      heroCtaDownload: "获取 YesPlayMusic",
      heroCtaExplore: "探索更多功能",
      heroSub: "YesPlayMusic 是一款精致的第三方桌面播放器，为网易云音乐而生。无损音质、逐字歌词，以及如家一般自在的曲库——全部免费开源。",
      frame1Title: "无损与高解析度音频",
      frame1Body: "通过自有 DAC 实现比特完美播放，支持 FLAC、WAV 及最高 192kHz/24-bit 的高解析度音频。",
      frame2Title: "逐字实时歌词",
      frame2Body: "卡拉OK式逐字高亮，每一句都与音乐精准同步，支持任意语言。",
      frame3Title: "随封面流动的沉浸色彩",
      frame3Body: "封面驱动柔和且不断变化的辉光，让整个界面沉浸在音乐的氛围之中。",
      frame4Title: "原生桌面级体验",
      frame4Body: "真正的原生窗口，支持系统媒体键、全局快捷键，并与 macOS、Windows、Linux 深度集成。",
      section05Title: "05 — 深入内核",
      section05Headline: "为你的真实聆听方式而生。",
      section05Body: "八项用心的能力，让一个播放器成为你曲库真正的归宿。",
      feat1Title: "本地曲库与离线",
      feat1Body: "导入自有文件与歌单，自由打标签、整理，即使离线也能继续聆听。",
      feat2Title: "卡拉OK逐字歌词",
      feat2Body: "逐字滚动歌词，附带翻译与罗马音，与演唱精准对时。",
      feat3Title: "沙盒化插件",
      feat3Body: "通过隔离插件扩展播放器，插件绝不会影响系统的其余部分。",
      feat4Title: "3D 封面流",
      feat4Body: "在流畅的三维封面流中翻动专辑，如同翻阅黑胶唱片。",
      feat5Title: "丰富搜索与元数据",
      feat5Body: "借助模糊搜索即时查找标题、艺人、专辑乃至歌词中的任何内容。",
      feat6Title: "应用内歌曲评论",
      feat6Body: "在每首歌旁阅读并参与社区讨论，如同在网页上一样。",
      feat7Title: "比特完美音频引擎",
      feat7Body: "独占模式引擎将音频原样送至 DAC，无重采样、无 DSP 干扰。",
      feat8Title: "永久私密与免费",
      feat8Body: "无广告、无追踪、无需账号。曲库永远属于你，应用永远免费。",
      platformMacos: "macOS",
      platformWindows: "Windows",
      platformLinux: "Linux",
      downloadTitle: "下载 YesPlayMusic",
      downloadWindows: "下载 Windows 版",
      downloadMacos: "下载 macOS 版",
      downloadLinux: "下载 Linux 版",
      downloadReqWin: "Windows 10 或更高版本 · 64 位",
      downloadReqMac: "macOS 11 或更高版本 · Apple 芯片与 Intel",
      downloadReqLinux: "AppImage · Debian · RPM",
      downloadCopy: "复制链接",
      downloadCopied: "已复制！",
      footerPlayKeys: "弹奏 yesplaymusic。",
      footerSub: "键盘：A S D F G H J K · W E T Y U",
      footerCopyright: "© 2026 YesPlayMusic。与网易云音乐无关联。",
      step1Title: "下载并安装",
      step1Body: "获取适合你平台的版本——macOS、Windows 或 Linux——数秒内完成安装。",
      step2Title: "登录你的账号",
      step2Body: "使用网易云音乐账号登录，带上你的歌单与收藏。",
      step3Title: "开始播放",
      step3Body: "浏览、搜索并以无损音质聆听——其余一切都不再打扰你。"
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

  function swapShots() {
    var imgs = document.querySelectorAll('img[data-shot-en][data-shot-zh]');
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      var src = lang === 'en' ? img.getAttribute('data-shot-en') : img.getAttribute('data-shot-zh');
      if (src && img.getAttribute('src') !== src) img.setAttribute('src', src);
    }
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
    swapShots();
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
