/* YesPlayMusic i18n — zero-dependency, file:// safe.
 * Embedded dictionary is the source of truth; fetching locales/*.json is an
 * optional progressive enhancement that only runs over http(s). */
(function () {
  'use strict';

  var EMBEDDED = {
  "en": {
    "navFeatures": "Features",
    "navDownload": "Download",
    "navAbout": "About",
    "navGetApp": "Get YesPlayMusic",
    "mobileMenuSub": "Free · Lossless · No ads, ever",
    "heroEyebrow": "Free · No ads · No account, ever",
    "heroHeadline": "Every song.\nNothing in the way.",
    "heroCtaDownload": "Download YesPlayMusic ↓",
    "heroCtaExplore": "Explore features →",
    "heroSub": "A music player that sounds like it costs something and doesn’t. Lyrics that sing along, a player that wears the album, and the whole catalogue, free.",
    "heroHoverRecord": "Hover a record",
    "sec1SideA": "Side A",
    "sec1Title": "01 — Liner notes",
    "sec1Text": "YesPlayMusic is a music player that doesn’t want anything from you. No ads between songs, no paywall, no cap on skips. Just every song you’ve ever loved and the ones you haven’t found yet.",
    "sec2Title": "02 — Lyrics",
    "sec2Scroll": "Scroll to play",
    "sec2Heading": "Lyrics that keep time.",
    "sec2Sub": "Word-by-word timing for millions of songs, following the singer syllable by syllable. Flip on Sing and the vocals step back.",
    "sec2PressPlay": "Press Play",
    "sec2Lossless": "LOSSLESS",
    "sec2Vocals": "Vocals",
    "sec2SampleLyric1": "Every song you ever loved, every word, right on time.",
    "sec2SampleLyric2": "No ads between the verses, no paywall on the chorus.",
    "sec2SampleLyric3": "Turn the vocal down and take the microphone yourself.",
    "sec3Title": "03 — Colour",
    "sec3Heading": "The whole app wears the record.",
    "sec3Sub": "YesPlayMusic pulls the colour out of whatever’s playing and repaints itself around it. Player, lyrics, everything. Scroll and watch.",
    "sec4Title": "04 — Sound",
    "sec4Pulse": "Pulse: PSR B1919+21 · with respect",
    "sec4Tier1Tag": "01 / 04 — Streams",
    "sec4Tier1Title": "Opus high quality",
    "sec4Tier1Body": "The whole catalogue, streamed through your own free worker. Guest — no key, no cap.",
    "sec4Tier2Tag": "02 / 04 — Local",
    "sec4Tier2Title": "bit-for-bit local files",
    "sec4Tier2Body": "Your files play straight off the disk. Nothing re-encoded, nothing uploaded.",
    "sec4Tier3Tag": "03 / 04 — Lyrics",
    "sec4Tier3Title": "synced karaoke-timed",
    "sec4Tier3Body": "LRCLIB for streams, .lrc sidecars for local files, word-by-word everywhere.",
    "sec4Tier4Tag": "04 / 04 — Audio",
    "sec4Tier4Title": "bit-perfect exclusive",
    "sec4Tier4Body": "Direct hardware access through your DAC. WASAPI / CoreAudio / PipeWire.",
    "sec5Eyebrow": "Side B · 8 tracks",
    "sec5Heading": "Eight notes.\nOne YesPlayMusic.",
    "sec5Sub": "Turn the sound on up top and each one plays its note.",
    "feat1Title": "Guest. No account.",
    "feat1Body": "Open the app and search the whole catalogue. No invite, no email, no human check.",
    "feat2Title": "Lyrics, word by word",
    "feat2Body": "Karaoke-timed lyrics that follow the singer syllable by syllable. Tap a line to jump.",
    "feat3Title": "Local import",
    "feat3Body": "Point it at a folder and it’s in your library. FLAC, ALAC, MP3, WAV, Opus.",
    "feat4Title": "Sandboxed plugins",
    "feat4Body": "Community engines run in isolated workers with a strict capability gate.",
    "feat5Title": "Offline downloads",
    "feat5Body": "Save songs, albums and playlists for flights, trains or spotty signal.",
    "feat6Title": "3D Coverflow",
    "feat6Body": "Flip through your collection in a physics-driven horizontal stage.",
    "feat7Title": "Last.fm scrobbling",
    "feat7Body": "Scrobble to Last.fm, ListenBrainz and Libre.fm with durable offline queues.",
    "feat8Title": "Bit-perfect DAC",
    "feat8Body": "Exclusive mode audio passing bit-for-bit to your external DAC.",
    "galleryHudTag": "Audiophile Core · 24-Bit / 96kHz FLAC",
    "galleryHudTitle": "05 — Desktop Showcase",
    "galleryIntroTag": "Visuals",
    "galleryIntroHeading": "The whole player,\nunfolded.",
    "galleryIntroBody": "A native Flutter desktop app engineered with care. From 3D Coverflow to syllable-timed karaoke lyrics, local music parsing, and sandboxed media servers.",
    "galleryRulerHint": "Scroll to Explore",
    "panel01Title": "Discovery & Charts",
    "panel02Title": "Dynamic Lyrics Stage",
    "panel03Title": "Cinematic 3D Coverflow",
    "panel04Title": "Record Shelf Spines",
    "panel05Title": "Local Audio Core",
    "panel06Title": "Album & Vinyl Art",
    "sec6Title": "06 — Tri-platform",
    "sec6Desktop": "Desktop",
    "sec6Heading": "One player. Three desktops.",
    "sec6Sub": "Native desktop builds for macOS, Windows, and Linux. No web wrapper overhead, no electron bloat.",
    "sec6MacTag": "Desktop macOS",
    "sec6MacDesc": "Dynamic Island / notch mini-player with live waveform · Touch Bar · Apple Silicon universal",
    "sec6WinTag": "Desktop Windows",
    "sec6WinDesc": "Windows 11 Snap layouts · DWM extended-frame title bar · working-set memory trim",
    "sec6LinuxTag": "Desktop Linux (Wayland)",
    "sec6LinuxDesc": "Wayland-native launch · MPRIS · -lgcc_s unwinder crash fix · discrete GPU rendering",
    "sec7Title": "07 — Membership",
    "sec7Free": "Free · always",
    "sec7Heading": "Get in.",
    "sec7Sub": "YesPlayMusic is open to everyone. No account, no invite, no email — the whole player is one link away, and it stays free because it runs on free tiers end to end.",
    "sec7Download": "Download YesPlayMusic →",
    "sec7Repo": "View on Repository ↗",
    "sec7SubNote": "Open to everyone · no account · no tracking",
    "step1Title": "Download for your OS",
    "step1Body": "Grab the installer or standalone bundle for Windows, macOS or Linux.",
    "step2Title": "Bring your own songs",
    "step2Body": "Open your local collection or connect your free streaming backend.",
    "step3Title": "Hit play",
    "step3Body": "Full lossless fidelity, word-by-word lyrics, and zero ads between tracks.",
    "footerPlayKeys": "Play the keys.",
    "footerSubDesktop": "Keyboard: A S D F G H J K · W E T Y U",
    "footerSubMobile": "Tap, or drag across the keys",
    "footerExplore": "Explore",
    "footerGetApp": "Get the app",
    "footerCommunity": "Community",
    "footerCopy": "© 2026 YesPlayMusic",
    "footerSource": "Source",
    "footerRepo": "Repo",
    "dlTitle": "Download YesPlayMusic",
    "dlEyebrow": "Download · v3.0.4 · Windows · macOS · Linux",
    "dlHeading": "Take it\nwith you.",
    "dlSub": "The native desktop app for Windows, macOS and Linux, or the web player right here. Free, and no store required.",
    "dlWindows": "Windows",
    "dlMacos": "macOS",
    "dlLinux": "Linux",
    "dlWinReq": "Windows 10/11 · 64-bit",
    "dlWinInstaller": "Installer",
    "dlWinPortable": "Portable",
    "dlMacReq": "macOS 11.0 Big Sur+",
    "dlMacArm": "Apple silicon",
    "dlMacIntel": "Intel",
    "dlLinuxReq": "AppImage · x86_64 · universal",
    "dlLinuxAppImage": "AppImage",
    "dlLinuxTar": "Tarball",
    "dlLinuxCopy": "COPY",
    "dlLinuxCopied": "COPIED",
    "dlSourceNote": "Every binary is published to repository releases and verified with a SHA-256 digest.",
    "aboutEyebrow": "About YesPlayMusic",
    "aboutHeadline": "Music should just feel good.",
    "aboutStory": "YesPlayMusic started as a simple idea: a music player that’s genuinely beautiful, completely free, and respects the person using it. No ads stitched between songs. No paywall on the parts that matter. Just your music, presented with care.",
    "aboutFeat1Title": "Built around the song",
    "aboutFeat1Body": "Every screen puts the music first. The player takes its colour from the album, lyrics keep time word by word, and it stays fast on a laptop or a phone. The kind of care you’d expect from an app you pay for.",
    "aboutFeat2Title": "Free, and staying that way",
    "aboutFeat2Body": "Listening shouldn’t cost anything, and there are no ads to make up for it. There are no accounts and nothing to join — your library, likes and playlists live in your browser and come with you.",
    "aboutFeat3Title": "Made by people who love music",
    "aboutFeat3Body": "YesPlayMusic is a small, independent project, rebuilt from the ground up in 2026 with a stubborn focus on craft, speed and design. The roadmap lives on the repository, in the open.",
    "aboutCard1Tag": "Made & hosted by",
    "aboutCard1Body": "Free software, built in the open. The native app, this site, and everything between.",
    "aboutCard2Tag": "Community",
    "aboutCard2Title": "Source",
    "aboutCard2Body": "Code, Flatpak manifest, issues and help.",
    "aboutCard2Cta": "Open ↗",
    "aboutCard3Tag": "Support YesPlayMusic",
    "aboutCard3Title": "Support YesPlayMusic",
    "aboutCard3Body": "YesPlayMusic is free forever — no ads, no paywalls, no tracking. If it’s made your day, a small tip keeps the lights on. Handled in the open — star the repo or say hello in issues.",
    "aboutReady": "Ready when you are.",
    "aboutDownloadBtn": "Download YesPlayMusic",
    "privacyTitle": "Privacy",
    "privacyUpdated": "Last updated: 2026",
    "privacyP1": "YesPlayMusic is built to be private by default. You don’t need an account to listen, and your library, likes, playlists and listening history are stored locally on your device — not on our servers.",
    "privacyH2Store": "What we store on your device",
    "privacyLi1": "Your playlists, liked songs and recently played tracks.",
    "privacyLi2": "Your playback preferences (audio quality, theming, volume).",
    "privacyLi3": "A small cache of artwork and audio so the app works offline.",
    "privacyH2Dont": "What we don’t do",
    "privacyLi4": "We don’t sell your data.",
    "privacyLi5": "We don’t require personal information to use the player.",
    "privacyLi6": "We don’t show ads.",
    "privacyH2Network": "Network requests",
    "privacyP2": "Music metadata and audio are provided by third-party catalog services. When optional cloud sync launches, it will be strictly opt-in and clearly explained before you enable it.",
    "privacyH2Open": "Open source",
    "privacyP3": "YesPlayMusic is open source. You can audit every line of networking code, build the app yourself, or run your own API mirror.",
    "termsTitle": "Terms of Use",
    "termsUpdated": "Last updated: 2026",
    "termsP1": "By using YesPlayMusic, you agree to these terms. YesPlayMusic is provided “as is”, for personal, non-commercial enjoyment of music.",
    "termsH2Use": "Acceptable use",
    "termsPUse": "Don’t misuse the service, attempt to disrupt it, or use it in violation of applicable law. Music content is owned by its respective rights holders and is provided through third-party catalog services.",
    "termsH2Avail": "Availability",
    "termsPAvail": "We work hard to keep YesPlayMusic fast and reliable, but we can’t guarantee uninterrupted availability. Features may change as the product evolves.",
    "termsH2Contact": "Contact",
    "termsPContact": "Questions about these terms? Reach out on GitHub.",
    "dlGetV3": "Get YesPlayMusic · v3.0.4",
    "dlSectionHeading": "Download",
    "dlPlatforms": "Windows · macOS · Linux",
    "dlReleasesNote": "Every binary is published to GitHub releases and verified with a SHA-256 digest.",
    "dlSourceReleasesBtn": "Source & releases",
    "footerPrivacy": "Privacy",
    "footerTerms": "Terms",
    "footerAbout": "About",
    "dlReleasesPrefix": "Every binary is published to",
    "dlReleasesLink": "GitHub releases",
    "dlReleasesSuffix": "and verified with a SHA-256 digest."
  },
  "zh-CN": {
    "navFeatures": "功能",
    "navDownload": "下载",
    "navAbout": "关于",
    "navGetApp": "获取 YesPlayMusic",
    "mobileMenuSub": "免费 · 无损 · 零广告，永久",
    "heroEyebrow": "免费 · 无广告 · 无需账号，永久",
    "heroHeadline": "每一首歌。\n畅听无阻碍。",
    "heroCtaDownload": "下载 YesPlayMusic ↓",
    "heroCtaExplore": "探索更多功能 →",
    "heroSub": "一款高颜值且体验卓越的免费开源音乐播放器。逐字动态歌词，随专辑流动的沉浸色彩，全部曲库免费畅享。",
    "heroHoverRecord": "悬停探索唱片",
    "sec1SideA": "A 面",
    "sec1Title": "01 — 唱片封套导言",
    "sec1Text": "YesPlayMusic 是一款对你毫无索取的音乐播放器。歌曲之间没有插播广告，没有付费门槛，没有切歌限制。只有你挚爱的每一首歌，以及那些尚未邂逅的美妙旋律。",
    "sec2Title": "02 — 动效歌词",
    "sec2Scroll": "滚动播放",
    "sec2Heading": "与音乐分秒同频的歌词。",
    "sec2Sub": "海量歌曲逐字对齐，精准跟随歌手的每一个音节。开启伴唱模式，人声瞬时后退，留给你沉浸舞台。",
    "sec2PressPlay": "点击播放",
    "sec2Lossless": "无损音质",
    "sec2Vocals": "伴唱人声",
    "sec2SampleLyric1": "你挚爱的每一首歌，每一个字，如约而至。",
    "sec2SampleLyric2": "主歌之间没有广告，副歌之处没有付费锁。",
    "sec2SampleLyric3": "调低原唱人声，握紧你的麦克风。",
    "sec3Title": "03 — 沉浸色彩",
    "sec3Heading": "整个界面，披上唱片的色彩。",
    "sec3Sub": "YesPlayMusic 从正在播放的唱片中提取色彩，并将整个应用重绘其中。播放器、歌词、氛围，浑然一体。滚动随心预览。",
    "sec4Title": "04 — 音质内核",
    "sec4Pulse": "脉冲星信号：PSR B1919+21 · 致敬经典",
    "sec4Tier1Tag": "01 / 04 — 流媒体",
    "sec4Tier1Title": "Opus 高品质传输",
    "sec4Tier1Body": "全曲库畅听，借助独立后端流畅串流。访客模式无需密钥、无切歌配额限制。",
    "sec4Tier2Tag": "02 / 04 — 本地播放",
    "sec4Tier2Title": "比特原样本地解析",
    "sec4Tier2Body": "音频直接从本地磁盘读取播放。无需二次转码，绝不上载云端，守护纯粹音质。",
    "sec4Tier3Tag": "03 / 04 — 歌词引擎",
    "sec4Tier3Title": "逐字卡拉OK同步",
    "sec4Tier3Body": "在线流媒体对接 LRCLIB，本地音乐读取同名 .lrc，全场景支持逐字动效与翻译。",
    "sec4Tier4Tag": "04 / 04 — 声学硬件",
    "sec4Tier4Title": "独占模式直通 DAC",
    "sec4Tier4Body": "直接接管声卡硬件输出。支持 Windows WASAPI 独占、macOS CoreAudio 及 Linux PipeWire。",
    "sec5Eyebrow": "B 面 · 8 首特质",
    "sec5Heading": "八枚音符。\n一个纯粹的 YesPlayMusic。",
    "sec5Sub": "开启顶栏声音，每一张卡片都拥有独特的琴音回响。",
    "feat1Title": "访客畅听，免账号登录",
    "feat1Body": "打开应用即可直接检索海量曲库。无需邀请码、无需绑定邮箱、没有繁琐验证。",
    "feat2Title": "逐字歌词，精准同步",
    "feat2Body": "卡拉OK动态歌词紧扣演唱者音节。轻点任意歌词行即可实现瞬时快进定位。",
    "feat3Title": "本地音乐直接导入",
    "feat3Body": "指定本地音乐文件夹即可纳为曲库。无缝支持 FLAC、ALAC、MP3、WAV、Opus。",
    "feat4Title": "安全沙盒化插件",
    "feat4Body": "社区扩展在严格隔离的子进程中安全运行，权限受控，确保系统与数据安全。",
    "feat5Title": "离线随身下载",
    "feat5Body": "一键离线保存歌曲、专辑与歌单，飞机、高铁或弱网环境依然陪伴左右。",
    "feat6Title": "3D 封面流与黑胶唱片架",
    "feat6Body": "在物理引擎驱动的三维横向展台翻动唱片，重温黑胶时代的沉浸翻阅乐趣。",
    "feat7Title": "多平台音乐记录同步",
    "feat7Body": "支持 Last.fm、ListenBrainz 和 Libre.fm，内置持久化离线队列，断网自动补记。",
    "feat8Title": "比特完美 DAC 直通",
    "feat8Body": "音频以比特级纯净直接传输至外置 DAC 解码器，杜绝重采样劣化。",
    "galleryHudTag": "发烧级音频内核 · 24-Bit / 96kHz 无损",
    "galleryHudTitle": "05 — 桌面端交互全貌",
    "galleryIntroTag": "视觉与质感",
    "galleryIntroHeading": "每一个界面，\n精雕细琢。",
    "galleryIntroBody": "基于 Flutter 原生构建的高颜值音乐播放器。从 3D Coverflow 到逐字卡拉OK动效歌词、本地媒体库与插件流媒体支持。",
    "galleryRulerHint": "滚动探索",
    "panel01Title": "探索与推荐歌单",
    "panel02Title": "动态歌词全屏视窗",
    "panel03Title": "沉浸式 3D Coverflow",
    "panel04Title": "唱片架黑胶书脊",
    "panel05Title": "本地音乐文件引擎",
    "panel06Title": "专辑详情与黑胶徽标",
    "sec6Title": "06 — 三端原生",
    "sec6Desktop": "桌面平台",
    "sec6Heading": "同一款播放器。三端原生适配。",
    "sec6Sub": "针对 macOS、Windows 与 Linux 深度构建的原生桌面端。告别网页套壳开销与臃肿体积。",
    "sec6MacTag": "桌面端 macOS",
    "sec6MacDesc": "灵动岛与刘海屏实时波形微型控制器 · Touch Bar · 原生支持 Apple 芯片与 Intel",
    "sec6WinTag": "桌面端 Windows",
    "sec6WinDesc": "Windows 11 贴靠布局 · DWM 沉浸式标题栏 · 自动整理工作集内存极低占用",
    "sec6LinuxTag": "桌面端 Linux (Wayland)",
    "sec6LinuxDesc": "Wayland 原生启动 · MPRIS 系统媒体集成 · 消除崩溃 · 独立显卡平滑渲染",
    "sec7Title": "07 — 永久免费",
    "sec7Free": "免费 · 始终如一",
    "sec7Heading": "即刻启程。",
    "sec7Sub": "YesPlayMusic 面向所有人完全开放。无需注册、无需邀请码、无需邮箱——点击即可畅享完整播放器，全流程开源免费。",
    "sec7Download": "下载 YesPlayMusic →",
    "sec7Repo": "前往代码仓库 ↗",
    "sec7SubNote": "开放畅听 · 免账号 · 零追踪",
    "step1Title": "下载对应系统的安装包",
    "step1Body": "获取适用于 Windows、macOS 或 Linux 的安装程序或免安装便携包。",
    "step2Title": "带上你钟爱的音乐",
    "step2Body": "打开本地音乐文件夹，或者直连你的云端流媒体曲库。",
    "step3Title": "开启纯粹聆听",
    "step3Body": "全无损高清音频、逐字同步歌词，曲目之间绝无广告打扰。",
    "footerPlayKeys": "弹奏黑白琴键。",
    "footerSubDesktop": "键盘快捷键：A S D F G H J K · W E T Y U",
    "footerSubMobile": "点击或在琴键上滑动演奏",
    "footerExplore": "探索",
    "footerGetApp": "获取应用",
    "footerCommunity": "社区与开源",
    "footerCopy": "© 2026 YesPlayMusic",
    "footerSource": "源码",
    "footerRepo": "仓库",
    "dlTitle": "下载 YesPlayMusic",
    "dlEyebrow": "下载 · v3.0.4 · Windows · macOS · Linux",
    "dlHeading": "随身携带，\n畅听无界。",
    "dlSub": "适用于 Windows、macOS 与 Linux 的原生桌面端，亦可直接使用网页端。完全免费，无需应用商店审核约束。",
    "dlWindows": "Windows",
    "dlMacos": "macOS",
    "dlLinux": "Linux",
    "dlWinReq": "Windows 10/11 · 64 位",
    "dlWinInstaller": "安装包",
    "dlWinPortable": "便携版",
    "dlMacReq": "macOS 11.0 Big Sur 或更高版本",
    "dlMacArm": "Apple 芯片版",
    "dlMacIntel": "Intel 芯片版",
    "dlLinuxReq": "AppImage · x86_64 · 通用便携包",
    "dlLinuxAppImage": "AppImage 通用版",
    "dlLinuxTar": "压缩归档包",
    "dlLinuxCopy": "复制",
    "dlLinuxCopied": "已复制",
    "dlSourceNote": "每个发布版本均同步至官方代码仓库，并附带完整 SHA-256 校验摘要。",
    "aboutEyebrow": "关于 YesPlayMusic",
    "aboutHeadline": "音乐本该让人心情愉悦。",
    "aboutStory": "YesPlayMusic 始于一个单纯的初衷：打造一款真正优雅美观、彻底免费且尊重听众的音乐播放器。歌曲间没有见缝插针的广告，重要功能从不设付费墙。唯有你深爱的音乐，以极尽细腻的形式呈现眼前。",
    "aboutFeat1Title": "以音乐为核心的设计",
    "aboutFeat1Body": "每个界面都将音乐置于首位。播放器吸取专辑封面的灵动色彩，歌词逐字精确跟唱，无论在轻薄本还是桌面设备上都极为轻快。拥有媲美高昂付费软件的匠心打磨。",
    "aboutFeat2Title": "永久免费，初心不改",
    "aboutFeat2Body": "聆听不应背负门槛，更无需以广告作为代价。无需繁琐注册账号——你的曲库、收藏与歌单随心而行，永久自由。",
    "aboutFeat3Title": "由纯粹的热爱者倾心铸就",
    "aboutFeat3Body": "YesPlayMusic 是一项秉承独立精神的项目，在 2026 年历经从内到外的现代化重构，专注速度、工程美学与精致设计。未来路线图在官方仓库向所有人公开。",
    "aboutCard1Tag": "独立开发与托管",
    "aboutCard1Body": "开源自由软件，全程公开构建。原生应用、展示官网与所有配套组件皆完全开源。",
    "aboutCard2Tag": "社区互动",
    "aboutCard2Title": "源码仓库",
    "aboutCard2Body": "源码实现、Flatpak 清单、问题反馈与社区互助。",
    "aboutCard2Cta": "查看源码 ↗",
    "aboutCard3Tag": "支持 YesPlayMusic",
    "aboutCard3Title": "支持 YesPlayMusic",
    "aboutCard3Body": "YesPlayMusic 永久免费——零广告、零付费墙、零隐私追踪。如果它为你的生活增添了美好，欢迎为仓库加星或在 issue 中问声好。",
    "aboutReady": "随时静候，为你启程。",
    "aboutDownloadBtn": "下载 YesPlayMusic",
    "privacyTitle": "隐私政策",
    "privacyUpdated": "最后更新：2026年",
    "privacyP1": "YesPlayMusic 始终以隐私优先为准则。您无需注册账号即可畅听音乐；您的本地曲库、红心收藏、歌单及播放历史均完全保存在本地设备上，不经过我们的服务器。",
    "privacyH2Store": "我们在您的设备上存储的内容",
    "privacyLi1": "您的歌单、喜爱的歌曲以及最近播放记录。",
    "privacyLi2": "您的播放偏好设置（音质规格、外观主题、音量大小）。",
    "privacyLi3": "必要的专辑封面与音频离线缓存，保证离线可用。",
    "privacyH2Dont": "我们绝不会做的事",
    "privacyLi4": "我们绝不出售您的任何数据。",
    "privacyLi5": "我们绝不强制收集个人身份信息即可使用播放器。",
    "privacyLi6": "我们绝不插入任何广告。",
    "privacyH2Network": "网络请求说明",
    "privacyP2": "音乐元数据与音频流由第三方开放曲库服务提供。未来若推出可选的云端同步功能，将严格遵循主动授权原则，并在启用前详尽说明。",
    "privacyH2Open": "开源与透明度",
    "privacyP3": "YesPlayMusic 完全开源。您可以自由审查每一行网络通信代码、自行构建应用，或搭建专属镜像节点。",
    "termsTitle": "使用条款",
    "termsUpdated": "最后更新：2026年",
    "termsP1": "使用 YesPlayMusic 即表示您同意本条款。YesPlayMusic 按“现状”免费提供，仅供个人非商业性音乐欣赏使用。",
    "termsH2Use": "合理使用规范",
    "termsPUse": "请勿滥用或尝试破坏本服务，亦不得将其用于违反法律法规之目的。音乐音频及版权归原权利人所有，由第三方公共曲库提供支持。",
    "termsH2Avail": "服务可用性",
    "termsPAvail": "我们竭力维护 YesPlayMusic 的流畅与稳定性，但无法保证服务绝对永续无间断。功能可能会随软件迭代不断改进。",
    "termsH2Contact": "联系与反馈",
    "termsPContact": "对条款有任何疑问？欢迎通过 GitHub 提出反馈。",
    "dlGetV3": "获取 YesPlayMusic · v3.0.4",
    "dlSectionHeading": "下载客户端",
    "dlPlatforms": "Windows · macOS · Linux",
    "dlReleasesNote": "每个发布版本均已在 GitHub Releases 发布，并附带 SHA-256 校验和。",
    "dlSourceReleasesBtn": "源码与发布列表",
    "footerPrivacy": "隐私政策",
    "footerTerms": "使用条款",
    "footerAbout": "关于我们",
    "dlReleasesPrefix": "每个发布版本均已在",
    "dlReleasesLink": "GitHub Releases 发布",
    "dlReleasesSuffix": "，并附带 SHA-256 校验和。"
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

  function setShotSrc(img, target, fallback) {
    if (img.getAttribute('src') === target) return;
    if (target !== fallback) {
      img.onerror = function () {
        img.onerror = null;
        img.src = fallback;
      };
    } else {
      img.onerror = null;
    }
    img.setAttribute('src', target);
  }

  function swapLocalized() {
    var imgs = document.querySelectorAll('img[data-localized]');
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      var base = img.getAttribute('data-localized');
      if (!base) continue;
      var fallback = 'assets/' + base;
      var target = lang === 'en' ? 'assets/shots/en/' + base.replace(/^shots\//, '') : fallback;
      setShotSrc(img, target, fallback);
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
      var str = String(val);
      if (str.indexOf('\n') !== -1 || str.indexOf('<br') !== -1) {
        var clean = str.replace(/<br\s*\/?>/gi, '\n');
        el.innerHTML = clean.split('\n').map(escapeHtml).join('\n');
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
    swapLocalized();
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
