// Poogle Ecosystem Application Logic — Engineered by Mr. Doo-doo
(function () {
  'use strict';

  // --- Application State ---
  const state = {
    activePlatform: 'poogle', // 'poogle' | 'stool' | 'poop' | 'shitmini' | 'crap'
    poogleSubView: 'home',    // 'home' | 'serp'
    serpTab: 'all',           // 'all' | 'aimode' | 'images' | 'news' | 'videos'
    searchQuery: '',
    darkMode: false,
    waffleOpen: false,
    profileOpen: false,
    settingsOpen: false,
    voiceModalOpen: false,
    lensModalOpen: false,
    aboutModalOpen: false,
    // Poogle Stool (Google Cloud clone)
    stoolSection: 'dashboard', // 'dashboard' | 'vertex' | 'compute' | 'storage' | 'iam'
    stoolTimeframe: '24H',
    stoolShellOpen: true,
    stoolShellLogs: [
      'Welcome to Poogle Stool Cloud Shell! Type "help" for available commands.',
      'mr_doodoo@cloudshell:~ (poogle-enterprise-prod-01)$ gcloud config list',
      '[core]\naccount = mr.doodoo@poogle.dev\nproject = poogle-enterprise-prod-01\nregion = asia-south1 (Howrah-East)'
    ],
    stoolApiKey: 'AIzaSyPoogleStool-99xDooDooEnterpriseKey2026',
    stoolModels: [
      { id: 'shitmini-2.5-ultra', name: 'Shitmini 2.5 Ultra Enterprise', rpm: '10,000 RPM', context: '2M Tokens', status: 'Deployed', latency: '142 ms' },
      { id: 'stool-code-bison', name: 'StoolCode Gecko & Bison v4', rpm: '15,000 RPM', context: '512K Tokens', status: 'Deployed', latency: '88 ms' },
      { id: 'imagen-flush-3', name: 'Poogle Imagen Flush 3.0 HD', rpm: '2,500 RPM', context: 'Multimodal', status: 'Ready', latency: '620 ms' },
      { id: 'veo-plunge-2', name: 'Poogle Veo Plunge Video Gen', rpm: '800 RPM', context: '4K 60fps', status: 'Preview', latency: '1.4 s' }
    ],
    // Poogle Poop (Google Antigravity clone)
    poopMode: 'standalone', // 'standalone' | 'canary'
    poopMobilePane: 'editor', // 'agents' | 'editor' | 'preview'
    poopActiveFile: 'AgentWorkflow.ts',
    poopDiffAccepted: false,
    poopAgentRunning: false,
    poopAgents: [
      { id: 'ag-1', role: 'Planner Agent', model: 'Shitmini 2.5 Ultra', status: 'Completed', task: 'Decomposed multi-platform Poogle architecture & responsive layout constraints' },
      { id: 'ag-2', role: 'Architect Agent', model: 'Antigravity Core v3', status: 'Completed', task: 'Synthesized Android Studio Canary bridge & state bindings' },
      { id: 'ag-3', role: 'Code Synthesis Agent', model: 'Shitmini Coding Pro', status: 'Active', task: 'Injecting self-healing responsive flex/grid guards across 320px-4K viewports' },
      { id: 'ag-4', role: 'Canary Verifier Agent', model: 'Android Studio 2026.2.1', status: 'Ready', task: 'Awaiting live instrumentation test run on Pixel 9 Pro Fold Emulator' }
    ],
    poopFiles: {
      'AgentWorkflow.ts': `// Poogle Poop — Antigravity Agentic Development Platform
// Subscriber Tier: Google AI Ultra | Architect: Mr. Doo-doo

import { AgentOrchestrator, CanaryBridge, UltraModel } from '@poogle/poop-sdk';

export const poogleAgenticPipeline = new AgentOrchestrator({
  project: 'poogle-super-app',
  author: 'Mr. Doo-doo',
  tier: 'GOOGLE_AI_ULTRA_SUBSCRIBER',
  ideTarget: ['STANDALONE_STUDIO', 'ANDROID_STUDIO_CANARY_2026'],
  agents: [
    new UltraModel('shitmini-2.5-ultra-agentic', {
      autonomousRefactoring: true,
      zeroBreakResponsiveGuard: true,
      maxConcurrency: 8
    })
  ]
});

export async function executeMission(goal: string) {
  const plan = await poogleAgenticPipeline.plan(goal);
  const patch = await poogleAgenticPipeline.synthesizeDiff(plan);
  return CanaryBridge.hotReload(patch);
}`,
      'MainActivity.kt': `// Android Studio Canary (2026.2.1 Canary 4) — Poogle Poop Agentic Plugin
package dev.mrdoodoo.poogle.poop

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import dev.mrdoodoo.poogle.ui.PoogleResponsiveScaffold

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Verified by Poogle Poop Agentic Verifier
        setContent {
            PoogleResponsiveScaffold(
                appName = "Poogle Ecosystem",
                developerCredit = "Mr. Doo-doo",
                ultraAgentEnabled = true
            )
        }
    }
}`,
      'poogle_config.json': `{
  "platform": "Poogle Poop (Google Antigravity Clone)",
  "subscriptionRequired": "Google AI Ultra",
  "environments": ["Standalone Agentic IDE", "Android Studio Canary"],
  "leadDeveloper": "Mr. Doo-doo",
  "responsiveBreakpoints": ["320px", "480px", "768px", "1024px", "1440px", "2560px"],
  "selfHealingUI": true
}`
    },
    // Shitmini App & Search (Gemini App & AI Mode in Search clone)
    shitminiMode: 'app', // 'app' | 'search_ai'
    shitminiTier: 'AI Ultra', // 'AI Pro' | 'AI Ultra'
    shitminiModel: 'Shitmini 2.5 Pro',
    shitminiSidebarOpen: false,
    shitminiCanvasOpen: false,
    shitminiMessages: [
      {
        sender: 'ai',
        title: 'Welcome to Shitmini App & Search',
        text: 'Hi! I am **Shitmini**, available for Poogle AI Pro and Ultra subscribers inside the Shitmini app and AI Mode in Search. Engineered by **Mr. Doo-doo**, I can help you write code, analyze enterprise cloud metrics on **Poogle Stool**, orchestrate autonomous agents in **Poogle Poop**, or answer quick queries inside **Poogle Crap**.',
        sources: ['Poogle AI Pro & Ultra Docs', 'Mr. Doo-doo Engineering Blog', 'Poogle Search AI Mode']
      }
    ],
    // Poogle Crap (Google Chrome clone)
    crapTabs: [
      { id: 'tab-new', title: 'New Tab - Poogle Crap', url: 'crap://newtab', type: 'newtab' },
      { id: 'tab-wiki', title: 'Poogle Ecosystem — Built by Mr. Doo-doo', url: 'https://poogle.dev/ecosystem', type: 'ecosystem' },
      { id: 'tab-store', title: 'Poogle Crap Web Store', url: 'https://crapstore.poogle.dev/extensions', type: 'store' }
    ],
    crapActiveTab: 'tab-new',
    crapSidePanelOpen: true,
    crapDevToolsOpen: false,
    crapOmniboxInput: 'crap://newtab',
    crapQuickQueryHistory: [
      { q: 'What is Poogle Crap?', a: 'Poogle Crap is the high-speed browser clone of Google Chrome, accessible directly inside the omnibox and side panel for instant quick queries powered by Shitmini AI and crafted by Mr. Doo-doo.' }
    ]
  };

  // --- Sample Search Database for Poogle SERP & Autocomplete ---
  const SEARCH_INDEX = [
    {
      title: 'Poogle Stool — Enterprise Cloud Platform for Builders',
      url: 'https://stool.poogle.dev/console',
      breadcrumb: 'https://stool.poogle.dev › console › enterprise',
      platformTarget: 'stool',
      badge: 'Google Cloud Clone',
      snippet: 'Available on Poogle Stool (Google Cloud clone) for enterprise developers and builders. Deploy Shitmini 2.5 models in Vertex AI, manage Kubernetes clusters, and run interactive Cloud Shell commands. Engineered by Mr. Doo-doo.'
    },
    {
      title: 'Poogle Poop — Agentic Development Platform (AI Ultra)',
      url: 'https://poop.poogle.dev/studio',
      breadcrumb: 'https://poop.poogle.dev › antigravity › android-canary',
      platformTarget: 'poop',
      badge: 'Google Antigravity Clone',
      snippet: 'Available for Google AI Ultra subscribers inside Poogle\'s agentic development platform — run standalone or via Android Studio Canary. Orchestrate multi-agent coding workflows created by Mr. Doo-doo.'
    },
    {
      title: 'Shitmini App & Search — AI Pro & Ultra Assistant + AI Mode',
      url: 'https://shitmini.poogle.dev/app',
      breadcrumb: 'https://shitmini.poogle.dev › app › ai-mode',
      platformTarget: 'shitmini',
      badge: 'Gemini App & Search Clone',
      snippet: 'Available for Google AI Pro and Ultra subscribers inside the Shitmini app and AI Mode in Search. Experience Deep Research, live code canvas, and multi-step reasoning.'
    },
    {
      title: 'Poogle Crap Browser — Instant Omnibox Quick Queries',
      url: 'https://www.poogle.dev/crap-browser',
      breadcrumb: 'https://www.poogle.dev › crap › browser',
      platformTarget: 'crap',
      badge: 'Google Chrome Clone',
      snippet: 'Accessible directly inside Poogle Crap (Chrome clone) for quick queries. Use the @shitmini omnibox shortcut, multi-tab workspace, side panel AI, and built-in DevTools.'
    },
    {
      title: 'Mr. Doo-doo — Principal Architect & Creator of Poogle',
      url: 'https://mrdoodoo.poogle.dev/about',
      breadcrumb: 'https://mrdoodoo.poogle.dev › profile › architect',
      platformTarget: 'about',
      badge: 'Developer Credit',
      snippet: 'Meet Mr. Doo-doo, the visionary developer behind the responsive Poogle super-app uniting Poogle Stool, Poogle Poop, Shitmini App & Search, and Poogle Crap into one seamless Netlify-ready web application.'
    }
  ];

  const AUTOCOMPLETE_SUGGESTIONS = [
    'Poogle Stool enterprise cloud console',
    'Poogle Poop Android Studio Canary agentic IDE',
    'Shitmini App & Search AI Pro and Ultra features',
    'Poogle Crap browser quick queries omnibox',
    'Who is Mr. Doo-doo developer of Poogle?',
    'How to deploy Poogle on Netlify'
  ];

  const FEELING_FLUSH_QUOTES = [
    'Poogle Stool enterprise cloud clusters running at 99.999% flush efficiency!',
    'Poogle Poop autonomous agents just refactored 1,420 lines of Kotlin in 0.4s!',
    'Shitmini App & Search synthesized 48 research papers into a single crystal-clear summary!',
    'Poogle Crap answered your quick query in 18 milliseconds right from the address bar!',
    'Crafted with pixel-level precision by Mr. Doo-doo!'
  ];

  // --- Helper: Toast Notification (Never use alert/confirm/prompt) ---
  function showToast(message, badgeText) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'flex items-center gap-2.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2.5 rounded-full shadow-xl text-xs sm:text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100 border border-gray-700 dark:border-gray-300';
    toast.innerHTML = (badgeText ? '<span class="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">' + escapeHtml(badgeText) + '</span>' : '') +
      '<span>' + escapeHtml(message) + '</span>';
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3200);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function copyTextToClipboard(text, label) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          showToast((label || 'Content') + ' copied to clipboard!', 'Copied');
        }).catch(function () {
          fallbackCopy(text, label);
        });
      } else {
        fallbackCopy(text, label);
      }
    } catch (e) {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast((label || 'Content') + ' copied to clipboard!', 'Copied');
    } catch (err) {
      showToast('Ready to copy: ' + text.slice(0, 32), 'Info');
    }
    document.body.removeChild(ta);
  }

  // --- Platform Navigation & Switching ---
  function switchPlatform(platform, options) {
    options = options || {};
    state.activePlatform = platform;
    state.waffleOpen = false;
    state.profileOpen = false;
    state.settingsOpen = false;

    const views = ['poogle', 'stool', 'poop', 'shitmini', 'crap'];
    views.forEach(function (v) {
      const el = document.getElementById('platform-view-' + v);
      if (el) {
        if (v === platform) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      }
    });

    // Update top ecosystem switcher pills
    document.querySelectorAll('[data-platform-tab]').forEach(function (btn) {
      const target = btn.getAttribute('data-platform-tab');
      if (target === platform) {
        btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
        btn.classList.remove('text-gray-600', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-800');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
        btn.classList.add('text-gray-600', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-800');
      }
    });

    if (platform === 'poogle') {
      if (options.subView) {
        state.poogleSubView = options.subView;
      }
      renderPoogleView();
    } else if (platform === 'stool') {
      renderStoolView();
    } else if (platform === 'poop') {
      renderPoopView();
    } else if (platform === 'shitmini') {
      if (options.mode) {
        state.shitminiMode = options.mode;
      }
      renderShitminiView();
    } else if (platform === 'crap') {
      renderCrapView();
    }

    closePopovers();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function closePopovers() {
    const waffle = document.getElementById('waffle-menu-popover');
    const profile = document.getElementById('profile-menu-popover');
    const settings = document.getElementById('settings-menu-popover');
    const acHome = document.getElementById('home-autocomplete-dropdown');
    if (waffle) waffle.classList.add('hidden');
    if (profile) profile.classList.add('hidden');
    if (settings) settings.classList.add('hidden');
    if (acHome) acHome.classList.add('hidden');
  }

  // --- Theme Management ---
  function toggleDarkMode() {
    state.darkMode = !state.darkMode;
    const root = document.documentElement;
    if (state.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('poogle_dark_mode', state.darkMode ? '1' : '0');
    } catch (e) {}
    updateThemeButtons();
    showToast('Switched to ' + (state.darkMode ? 'Dark' : 'Light') + ' theme', 'Appearance');
  }

  function updateThemeButtons() {
    const labelEls = document.querySelectorAll('.theme-mode-label');
    labelEls.forEach(function (el) {
      el.textContent = state.darkMode ? 'Dark theme: On' : 'Dark theme: Off';
    });
  }

  // --- Poogle Home & SERP Rendering ---
  function renderPoogleView() {
    const homeSec = document.getElementById('poogle-home-section');
    const serpSec = document.getElementById('poogle-serp-section');
    if (!homeSec || !serpSec) return;

    if (state.poogleSubView === 'serp') {
      homeSec.classList.add('hidden');
      serpSec.classList.remove('hidden');
      const serpInput = document.getElementById('serp-search-input');
      if (serpInput) serpInput.value = state.searchQuery || 'Poogle ecosystem platforms';
      renderSerpResults();
    } else {
      serpSec.classList.add('hidden');
      homeSec.classList.remove('hidden');
      const homeInput = document.getElementById('home-search-input');
      if (homeInput) homeInput.value = state.searchQuery;
      toggleClearButton('home');
    }
  }

  function executePoogleSearch(query, serpTab) {
    const q = (query !== undefined ? query : state.searchQuery).trim() || 'Poogle Unified Ecosystem';
    state.searchQuery = q;
    state.poogleSubView = 'serp';
    if (serpTab) state.serpTab = serpTab;
    state.activePlatform = 'poogle';
    switchPlatform('poogle', { subView: 'serp' });
  }

  function renderSerpResults() {
    const q = state.searchQuery || 'Poogle Ecosystem';
    const container = document.getElementById('serp-results-container');
    if (!container) return;

    // Update SERP filter tabs
    document.querySelectorAll('[data-serp-tab]').forEach(function (btn) {
      const t = btn.getAttribute('data-serp-tab');
      if (t === state.serpTab) {
        btn.classList.add('border-blue-600', 'text-blue-600', 'dark:text-blue-400', 'dark:border-blue-400', 'font-semibold');
        btn.classList.remove('border-transparent', 'text-gray-600', 'dark:text-gray-400');
      } else {
        btn.classList.remove('border-blue-600', 'text-blue-600', 'dark:text-blue-400', 'dark:border-blue-400', 'font-semibold');
        btn.classList.add('border-transparent', 'text-gray-600', 'dark:text-gray-400');
      }
    });

    // Filter results or show specialized view
    const qLower = q.toLowerCase();
    let matched = SEARCH_INDEX.filter(function (item) {
      return item.title.toLowerCase().indexOf(qLower) !== -1 ||
             item.snippet.toLowerCase().indexOf(qLower) !== -1 ||
             item.badge.toLowerCase().indexOf(qLower) !== -1;
    });
    if (matched.length === 0) {
      matched = SEARCH_INDEX.slice();
    }

    let html = '';

    // AI Overview Card (Shitmini AI Mode in Search integration)
    html += '<div class="shitmini-pill-gradient rounded-2xl p-4 sm:p-6 mb-6 transition-all">' +
      '<div class="flex flex-wrap items-center justify-between gap-2 mb-3">' +
        '<div class="flex items-center gap-2">' +
          '<span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-red-500 text-white text-xs font-bold">✦</span>' +
          '<span class="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100">AI Overview</span>' +
          '<span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-medium">Powered by Shitmini App &amp; Search</span>' +
        '</div>' +
        '<button type="button" data-launch-platform="shitmini" data-launch-mode="search_ai" class="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">' +
          'Open in AI Mode &rarr;' +
        '</button>' +
      '</div>' +
      '<p class="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-4">' +
        'For your query <strong>"' + escapeHtml(q) + '"</strong>, the <strong>Poogle</strong> ecosystem (architected by <strong>Mr. Doo-doo</strong>) integrates four flagship platforms: ' +
        '<strong>Poogle Stool</strong> (enterprise cloud infrastructure for builders), ' +
        '<strong>Poogle Poop</strong> (agentic development platform for Google AI Ultra subscribers standalone or via Android Studio Canary), ' +
        '<strong>Shitmini App &amp; Search</strong> (AI Pro &amp; Ultra assistant and AI Mode in Search), and ' +
        '<strong>Poogle Crap</strong> (Chrome browser clone for instant omnibox quick queries).' +
      '</p>' +
      '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">' +
        '<button type="button" data-launch-platform="stool" class="text-left p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition">' +
          '<div class="text-xs font-bold text-blue-600 dark:text-blue-400">☁️ Poogle Stool</div>' +
          '<div class="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">Enterprise Cloud &amp; Vertex AI</div>' +
        '</button>' +
        '<button type="button" data-launch-platform="poop" class="text-left p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition">' +
          '<div class="text-xs font-bold text-purple-600 dark:text-purple-400">🚀 Poogle Poop</div>' +
          '<div class="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">Antigravity IDE &amp; Canary</div>' +
        '</button>' +
        '<button type="button" data-launch-platform="shitmini" class="text-left p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition">' +
          '<div class="text-xs font-bold text-pink-600 dark:text-pink-400">✦ Shitmini App</div>' +
          '<div class="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">AI Pro &amp; Ultra Workspace</div>' +
        '</button>' +
        '<button type="button" data-launch-platform="crap" class="text-left p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 transition">' +
          '<div class="text-xs font-bold text-green-600 dark:text-green-400">🌐 Poogle Crap</div>' +
          '<div class="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">Chrome Quick Queries</div>' +
        '</button>' +
      '</div>' +
    '</div>';

    if (state.serpTab === 'images') {
      html += '<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">' +
        matched.map(function (item, idx) {
          const colors = ['from-blue-500 to-indigo-600', 'from-purple-600 to-pink-500', 'from-emerald-500 to-teal-600', 'from-amber-500 to-red-500', 'from-sky-500 to-blue-700'];
          const grad = colors[idx % colors.length];
          return '<div class="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition cursor-pointer" data-launch-platform="' + item.platformTarget + '">' +
            '<div class="h-36 bg-gradient-to-br ' + grad + ' flex flex-col items-center justify-center p-4 text-white text-center">' +
              '<span class="text-xs uppercase tracking-widest opacity-80">' + escapeHtml(item.badge) + '</span>' +
              '<span class="font-bold text-base mt-1">' + escapeHtml(item.title.split('—')[0]) + '</span>' +
            '</div>' +
            '<div class="p-3">' +
              '<div class="text-xs font-medium text-gray-900 dark:text-gray-100 truncate">' + escapeHtml(item.title) + '</div>' +
              '<div class="text-[11px] text-gray-500 dark:text-gray-400 truncate mt-0.5">' + escapeHtml(item.url) + '</div>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>';
    } else {
      // Standard Organic Results
      html += '<div class="space-y-6">';
      matched.forEach(function (item) {
        html += '<div class="group">' +
          '<div class="flex items-center gap-2.5 text-xs text-gray-600 dark:text-gray-400 mb-1">' +
            '<span class="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-bold text-blue-600 border border-gray-200 dark:border-gray-700">P</span>' +
            '<div class="truncate">' +
              '<div class="font-medium text-gray-800 dark:text-gray-200 leading-tight">' + escapeHtml(item.badge) + '</div>' +
              '<div class="text-[11px] text-gray-500 dark:text-gray-400 truncate">' + escapeHtml(item.breadcrumb) + '</div>' +
            '</div>' +
          '</div>' +
          '<button type="button" data-launch-platform="' + item.platformTarget + '" class="text-left block">' +
            '<h3 class="text-lg sm:text-xl text-blue-700 dark:text-blue-400 group-hover:underline font-normal leading-snug">' + escapeHtml(item.title) + '</h3>' +
          '</button>' +
          '<p class="text-sm text-gray-700 dark:text-gray-300 mt-1 leading-relaxed max-w-2xl">' + escapeHtml(item.snippet) + '</p>' +
        '</div>';
      });
      html += '</div>';
    }

    container.innerHTML = html;
  }

  function toggleClearButton(prefix) {
    const input = document.getElementById(prefix + '-search-input');
    const clearBtn = document.getElementById(prefix + '-clear-btn');
    if (input && clearBtn) {
      if (input.value.trim().length > 0) {
        clearBtn.classList.remove('hidden');
      } else {
        clearBtn.classList.add('hidden');
      }
    }
  }

  // --- Platform 1: Poogle Stool (Google Cloud Clone) ---
  function renderStoolView() {
    // Update active sidebar tab
    document.querySelectorAll('[data-stool-nav]').forEach(function (btn) {
      const sec = btn.getAttribute('data-stool-nav');
      if (sec === state.stoolSection) {
        btn.classList.add('bg-blue-50', 'dark:bg-blue-900/30', 'text-blue-600', 'dark:text-blue-400', 'font-semibold');
      } else {
        btn.classList.remove('bg-blue-50', 'dark:bg-blue-900/30', 'text-blue-600', 'dark:text-blue-400', 'font-semibold');
      }
    });

    // Render Models Table
    const modelsBody = document.getElementById('stool-models-tbody');
    if (modelsBody) {
      modelsBody.innerHTML = state.stoolModels.map(function (m, idx) {
        const badgeClass = m.status === 'Deployed'
          ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
          : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300';
        return '<tr class="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/80 dark:hover:bg-gray-800/50 transition">' +
          '<td class="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">' + escapeHtml(m.name) + '<div class="text-[11px] text-gray-400 font-mono">' + escapeHtml(m.id) + '</div></td>' +
          '<td class="py-3 px-4 text-gray-600 dark:text-gray-300">' + escapeHtml(m.context) + '</td>' +
          '<td class="py-3 px-4 text-gray-600 dark:text-gray-300">' + escapeHtml(m.rpm) + '</td>' +
          '<td class="py-3 px-4 text-gray-600 dark:text-gray-300 font-mono text-xs">' + escapeHtml(m.latency) + '</td>' +
          '<td class="py-3 px-4"><span class="px-2.5 py-0.5 rounded-full text-xs font-medium ' + badgeClass + '">' + escapeHtml(m.status) + '</span></td>' +
          '<td class="py-3 px-4 text-right">' +
            '<button type="button" data-stool-deploy="' + idx + '" class="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium transition">' +
              (m.status === 'Deployed' ? 'Test Endpoint' : 'Deploy Now') +
            '</button>' +
          '</td>' +
        '</tr>';
      }).join('');
    }

    // Render Cloud Shell logs
    const shellOut = document.getElementById('stool-shell-output');
    if (shellOut) {
      shellOut.innerHTML = state.stoolShellLogs.map(function (line) {
        return '<div class="whitespace-pre-wrap font-mono text-xs leading-relaxed">' + escapeHtml(line) + '</div>';
      }).join('');
      shellOut.scrollTop = shellOut.scrollHeight;
    }

    const shellPanel = document.getElementById('stool-cloud-shell-drawer');
    if (shellPanel) {
      if (state.stoolShellOpen) {
        shellPanel.classList.remove('hidden');
      } else {
        shellPanel.classList.add('hidden');
      }
    }
  }

  function runStoolShellCommand(rawCmd) {
    const cmd = (rawCmd || '').trim();
    if (!cmd) return;
    state.stoolShellLogs.push('mr_doodoo@cloudshell:~ (poogle-enterprise-prod-01)$ ' + cmd);
    const lower = cmd.toLowerCase();
    if (lower === 'help') {
      state.stoolShellLogs.push('Available Poogle Stool Cloud Shell commands:\n  gcloud info        — View enterprise project & region details\n  gcloud app deploy  — Deploy current service to Poogle Stool Edge\n  stool status       — Check Vertex AI & BigStool cluster health\n  whoami             — Display active IAM principal\n  clear              — Clear terminal output');
    } else if (lower === 'clear') {
      state.stoolShellLogs = ['Cloud Shell cleared. Type "help" for commands.'];
    } else if (lower === 'whoami') {
      state.stoolShellLogs.push('Mr. Doo-doo (Principal Cloud Architect • Owner @ poogle-enterprise-prod-01)');
    } else if (lower.indexOf('deploy') !== -1) {
      state.stoolShellLogs.push('Deploying service [default] to [poogle-enterprise-prod-01]...\n✓ Building container image...\n✓ Routing 100% traffic to https://poogle-enterprise-prod-01.stool.poogle.dev\nDeployed cleanly in 1.8s!');
      showToast('Service deployed on Poogle Stool Cloud!', 'Cloud Deploy');
    } else if (lower.indexOf('status') !== -1 || lower.indexOf('info') !== -1) {
      state.stoolShellLogs.push('Project: poogle-enterprise-prod-01 | Lead Architect: Mr. Doo-doo\nVertex AI Endpoints: 4 Healthy | Uptime: 99.999% | Billing Tier: Enterprise Unlimited');
    } else {
      state.stoolShellLogs.push('Executed "' + cmd + '" on Poogle Stool cluster [asia-south1]. Exit code 0.');
    }
    renderStoolView();
  }

  // --- Platform 2: Poogle Poop (Google Antigravity Clone) ---
  function renderPoopView() {
    // Update mode toggle (Standalone vs Android Studio Canary)
    document.querySelectorAll('[data-poop-mode]').forEach(function (btn) {
      const m = btn.getAttribute('data-poop-mode');
      if (m === state.poopMode) {
        btn.classList.add('bg-purple-600', 'text-white');
        btn.classList.remove('text-gray-300', 'hover:bg-gray-800');
      } else {
        btn.classList.remove('bg-purple-600', 'text-white');
        btn.classList.add('text-gray-300', 'hover:bg-gray-800');
      }
    });

    const modeBanner = document.getElementById('poop-ide-mode-label');
    if (modeBanner) {
      modeBanner.textContent = state.poopMode === 'canary'
        ? 'Android Studio Canary (2026.2.1 Canary 4) • Integrated Antigravity Plugin • Google AI Ultra'
        : 'Poogle Poop Standalone Agentic Studio • Google AI Ultra Subscriber Edition';
    }

    // Update file tabs
    document.querySelectorAll('[data-poop-file]').forEach(function (btn) {
      const f = btn.getAttribute('data-poop-file');
      if (f === state.poopActiveFile) {
        btn.classList.add('bg-gray-900', 'text-purple-400', 'border-b-2', 'border-purple-500');
        btn.classList.remove('text-gray-400');
      } else {
        btn.classList.remove('bg-gray-900', 'text-purple-400', 'border-b-2', 'border-purple-500');
        btn.classList.add('text-gray-400');
      }
    });

    // Update code editor content
    const codeEl = document.getElementById('poop-code-editor');
    if (codeEl) {
      codeEl.value = state.poopFiles[state.poopActiveFile] || '';
    }

    // Update agent cards
    const agentList = document.getElementById('poop-agent-list');
    if (agentList) {
      agentList.innerHTML = state.poopAgents.map(function (ag) {
        const badgeColor = ag.status === 'Completed'
          ? 'bg-emerald-900/60 text-emerald-300 border-emerald-700'
          : (ag.status === 'Active' ? 'bg-purple-900/60 text-purple-300 border-purple-700 animate-pulse' : 'bg-gray-800 text-gray-300 border-gray-700');
        return '<div class="p-3 rounded-xl bg-gray-800/90 border border-gray-700/80">' +
          '<div class="flex items-center justify-between gap-2 mb-1">' +
            '<span class="font-semibold text-xs text-white">' + escapeHtml(ag.role) + '</span>' +
            '<span class="text-[10px] px-2 py-0.5 rounded-full border ' + badgeColor + '">' + escapeHtml(ag.status) + '</span>' +
          '</div>' +
          '<div class="text-[11px] text-purple-300 font-mono mb-1">' + escapeHtml(ag.model) + '</div>' +
          '<p class="text-xs text-gray-300 leading-snug">' + escapeHtml(ag.task) + '</p>' +
        '</div>';
      }).join('');
    }

    // Mobile responsive pane switcher for Poogle Poop IDE
    const panes = ['agents', 'editor', 'preview'];
    panes.forEach(function (p) {
      const paneEl = document.getElementById('poop-pane-' + p);
      if (paneEl) {
        if (p === state.poopMobilePane) {
          paneEl.classList.remove('hidden');
          paneEl.classList.add('flex');
        } else {
          paneEl.classList.add('hidden', ' lg:flex');
          paneEl.classList.remove('flex');
        }
      }
    });
  }

  function dispatchPoopAgentTask(promptText) {
    const task = (promptText || '').trim();
    if (!task) {
      showToast('Enter an agentic mission prompt first!', 'Poogle Poop');
      return;
    }
    state.poopAgents.unshift({
      id: 'ag-' + Date.now(),
      role: 'Ultra Autonomous Agent',
      model: state.poopMode === 'canary' ? 'Android Canary Agent v4' : 'Antigravity Ultra 2.5',
      status: 'Completed',
      task: 'Executed mission: "' + task + '" — verified across all screen resolutions.'
    });
    const logEl = document.getElementById('poop-emulator-status');
    if (logEl) {
      logEl.textContent = '✓ Hot-reloaded mission "' + task.slice(0, 36) + '" on Pixel 9 Pro Fold Canary Emulator (0 errors)';
    }
    renderPoopView();
    showToast('Autonomous Agent completed mission in Poogle Poop!', 'AI Ultra Agent');
  }

  // --- Platform 3: Shitmini App & Search (Gemini App & AI Mode Clone) ---
  function renderShitminiView() {
    // Update mode toggle (Shitmini App vs AI Mode in Search)
    document.querySelectorAll('[data-shitmini-mode]').forEach(function (btn) {
      const m = btn.getAttribute('data-shitmini-mode');
      if (m === state.shitminiMode) {
        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('text-gray-600', 'dark:text-gray-300');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('text-gray-600', 'dark:text-gray-300');
      }
    });

    // Update Tier badge
    const tierBtn = document.getElementById('shitmini-tier-badge');
    if (tierBtn) {
      tierBtn.textContent = 'Google ' + state.shitminiTier + ' Subscriber';
    }

    // Render conversation feed
    const feed = document.getElementById('shitmini-chat-feed');
    if (feed) {
      feed.innerHTML = state.shitminiMessages.map(function (msg) {
        if (msg.sender === 'user') {
          return '<div class="flex justify-end">' +
            '<div class="max-w-xl rounded-2xl rounded-tr-sm bg-blue-600 text-white px-4 py-3 text-sm shadow-sm">' +
              escapeHtml(msg.text) +
            '</div>' +
          '</div>';
        }
        // Format basic markdown bold
        const formatted = escapeHtml(msg.text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        const sourcesHtml = (msg.sources || []).map(function (s) {
          return '<span class="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">🔗 ' + escapeHtml(s) + '</span>';
        }).join('');
        return '<div class="flex gap-3 items-start">' +
          '<div class="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-red-500 flex items-center justify-center text-white font-bold text-sm shrink-0">✦</div>' +
          '<div class="flex-1 min-w-0 bg-white dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm">' +
            '<div class="flex flex-wrap items-center justify-between gap-2 mb-1.5">' +
              '<span class="font-semibold text-xs sm:text-sm text-gray-900 dark:text-gray-100">' + escapeHtml(msg.title || state.shitminiModel) + '</span>' +
              '<span class="text-[11px] text-purple-600 dark:text-purple-400 font-medium">' + escapeHtml(state.shitminiMode === 'search_ai' ? 'AI Mode in Search' : state.shitminiTier + ' Workspace') + '</span>' +
            '</div>' +
            '<p class="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">' + formatted + '</p>' +
            (sourcesHtml ? '<div class="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-700/60">' + sourcesHtml + '</div>' : '') +
          '</div>' +
        '</div>';
      }).join('');
      feed.scrollTop = feed.scrollHeight;
    }
  }

  function sendShitminiPrompt(promptText) {
    const q = (promptText || '').trim();
    if (!q) return;
    state.shitminiMessages.push({ sender: 'user', text: q });

    let replyTitle = state.shitminiMode === 'search_ai'
      ? 'AI Mode in Search • Multi-Step Synthesis'
      : state.shitminiModel + ' (' + state.shitminiTier + ')';

    let replyText = 'Based on **' + q + '**, here is your synthesized response from **Shitmini App & Search** (engineered by **Mr. Doo-doo**): ';
    if (q.toLowerCase().indexOf('cloud') !== -1 || q.toLowerCase().indexOf('stool') !== -1) {
      replyText += '**Poogle Stool** provides enterprise developers and builders with dedicated Vertex AI endpoints, Cloud Shell automation, and 99.999% SLA guarantees.';
    } else if (q.toLowerCase().indexOf('agent') !== -1 || q.toLowerCase().indexOf('poop') !== -1 || q.toLowerCase().indexOf('canary') !== -1) {
      replyText += '**Poogle Poop** empowers Google AI Ultra subscribers with an autonomous multi-agent IDE available standalone or directly inside Android Studio Canary.';
    } else if (q.toLowerCase().indexOf('chrome') !== -1 || q.toLowerCase().indexOf('crap') !== -1) {
      replyText += '**Poogle Crap** embeds quick query intelligence directly into the Chrome omnibox and side panel so you can get instant answers without leaving your tab.';
    } else {
      replyText += 'Every module across the **Poogle** parent platform — **Poogle Stool**, **Poogle Poop**, **Shitmini App & Search**, and **Poogle Crap** — is responsive across mobile, tablet, laptop, and 4K displays.';
    }

    state.shitminiMessages.push({
      sender: 'ai',
      title: replyTitle,
      text: replyText,
      sources: ['Poogle Knowledge Graph', 'Shitmini 2.5 Deep Research', 'Developer: Mr. Doo-doo']
    });
    renderShitminiView();
  }

  // --- Platform 4: Poogle Crap (Google Chrome Clone) ---
  function renderCrapView() {
    // Render Chrome Tabs
    const tabBar = document.getElementById('crap-tabs-container');
    if (tabBar) {
      tabBar.innerHTML = state.crapTabs.map(function (t) {
        const isActive = t.id === state.crapActiveTab;
        const activeClasses = isActive
          ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm border-t border-x border-gray-200 dark:border-gray-700'
          : 'bg-gray-200/70 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800';
        return '<div class="group flex items-center gap-2 px-3 py-2 rounded-t-xl text-xs font-medium cursor-pointer max-w-[200px] sm:max-w-[220px] shrink-0 transition ' + activeClasses + '" data-crap-tab="' + t.id + '">' +
          '<span class="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-400 shrink-0"></span>' +
          '<span class="truncate flex-1">' + escapeHtml(t.title) + '</span>' +
          (state.crapTabs.length > 1 ? '<button type="button" data-crap-close-tab="' + t.id + '" class="opacity-60 hover:opacity-100 px-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700" title="Close tab">×</button>' : '') +
        '</div>';
      }).join('');
    }

    const activeTabObj = state.crapTabs.find(function (t) { return t.id === state.crapActiveTab; }) || state.crapTabs[0];
    const omni = document.getElementById('crap-omnibox-input');
    if (omni && activeTabObj) {
      omni.value = activeTabObj.url;
    }

    // Render active tab viewport
    const viewport = document.getElementById('crap-browser-viewport');
    if (viewport && activeTabObj) {
      if (activeTabObj.type === 'newtab') {
        viewport.innerHTML = '<div class="flex flex-col items-center justify-center py-8 sm:py-12 px-4 text-center">' +
          '<div class="text-4xl sm:text-5xl font-bold tracking-tight mb-2">' +
            '<span class="text-[#4285F4]">P</span><span class="text-[#EA4335]">o</span><span class="text-[#FBBC05]">o</span><span class="text-[#4285F4]">g</span><span class="text-[#34A853]">l</span><span class="text-[#EA4335]">e</span> ' +
            '<span class="text-gray-700 dark:text-gray-200 font-light">Crap</span>' +
          '</div>' +
          '<p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">Accessible directly inside Chrome for quick queries • Engineered by <strong>Mr. Doo-doo</strong></p>' +
          '<div class="w-full max-w-xl flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2.5 shadow-sm mb-8">' +
            '<span class="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/40 px-2.5 py-1 rounded-full mr-2 shrink-0">@shitmini</span>' +
            '<input type="text" id="crap-newtab-quick-input" placeholder="Ask a quick query right inside Poogle Crap..." class="w-full bg-transparent text-sm focus:outline-none text-gray-900 dark:text-gray-100" />' +
            '<button type="button" id="crap-newtab-quick-btn" class="ml-2 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium shrink-0">Ask</button>' +
          '</div>' +
          '<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl">' +
            '<button type="button" data-launch-platform="stool" class="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/70 hover:bg-blue-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-1.5 transition">' +
              '<span class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center font-bold">☁️</span>' +
              '<span class="text-xs font-medium">Poogle Stool</span>' +
            '</button>' +
            '<button type="button" data-launch-platform="poop" class="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/70 hover:bg-purple-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-1.5 transition">' +
              '<span class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 flex items-center justify-center font-bold">🚀</span>' +
              '<span class="text-xs font-medium">Poogle Poop</span>' +
            '</button>' +
            '<button type="button" data-launch-platform="shitmini" class="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/70 hover:bg-pink-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-1.5 transition">' +
              '<span class="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/40 text-pink-600 flex items-center justify-center font-bold">✦</span>' +
              '<span class="text-xs font-medium">Shitmini App</span>' +
            '</button>' +
            '<button type="button" data-launch-platform="poogle" class="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800/70 hover:bg-green-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center gap-1.5 transition">' +
              '<span class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 flex items-center justify-center font-bold">P</span>' +
              '<span class="text-xs font-medium">Poogle Search</span>' +
            '</button>' +
          '</div>' +
        '</div>';
      } else if (activeTabObj.type === 'ecosystem') {
        viewport.innerHTML = '<div class="p-6 max-w-3xl mx-auto">' +
          '<span class="text-xs font-bold uppercase tracking-wider text-blue-600">Poogle Official Documentation</span>' +
          '<h2 class="text-2xl font-bold mt-1 mb-3">Poogle Unified Web Platform — Created by Mr. Doo-doo</h2>' +
          '<p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">This browser tab is running inside <strong>Poogle Crap</strong>, our Google Chrome clone with built-in quick queries in the omnibox and side panel.</p>' +
          '<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">' +
            '<div class="p-4 rounded-xl border border-gray-200 dark:border-gray-700">' +
              '<h3 class="font-bold text-sm">1. Poogle Stool (Google Cloud)</h3>' +
              '<p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Available on Poogle Stool for enterprise developers and builders.</p>' +
            '</div>' +
            '<div class="p-4 rounded-xl border border-gray-200 dark:border-gray-700">' +
              '<h3 class="font-bold text-sm">2. Poogle Poop (Google Antigravity)</h3>' +
              '<p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Available for Google AI Ultra subscribers standalone or via Android Studio Canary.</p>' +
            '</div>' +
            '<div class="p-4 rounded-xl border border-gray-200 dark:border-gray-700">' +
              '<h3 class="font-bold text-sm">3. Shitmini App &amp; Search</h3>' +
              '<p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Available for Google AI Pro and Ultra subscribers inside the app and AI Mode in Search.</p>' +
            '</div>' +
            '<div class="p-4 rounded-xl border border-gray-200 dark:border-gray-700">' +
              '<h3 class="font-bold text-sm">4. Poogle Crap (Google Chrome)</h3>' +
              '<p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Accessible directly inside Chrome for quick queries.</p>' +
            '</div>' +
          '</div>' +
        '</div>';
      } else {
        viewport.innerHTML = '<div class="p-6 max-w-3xl mx-auto">' +
          '<h2 class="text-xl font-bold mb-2">Poogle Crap Web Store &amp; Quick Query Extensions</h2>' +
          '<p class="text-sm text-gray-600 dark:text-gray-300 mb-4">All official extensions verified by <strong>Mr. Doo-doo</strong> are pre-installed and active.</p>' +
          '<div class="space-y-3">' +
            '<div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between">' +
              '<div><div class="font-semibold text-sm">Shitmini Omnibox Quick Query</div><div class="text-xs text-gray-500">Type any question in the address bar or Side Panel for instant AI answers.</div></div>' +
              '<span class="px-2.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">Enabled</span>' +
            '</div>' +
            '<div class="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-between">' +
              '<div><div class="font-semibold text-sm">Poogle Poop Canary Bridge</div><div class="text-xs text-gray-500">Connects browser DevTools directly to Android Studio Canary &amp; Poogle Poop agents.</div></div>' +
              '<span class="px-2.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">Enabled</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      }
    }

    // Render Side Panel Quick Queries
    const sidePanel = document.getElementById('crap-side-panel');
    if (sidePanel) {
      if (state.crapSidePanelOpen) {
        sidePanel.classList.remove('hidden');
      } else {
        sidePanel.classList.add('hidden');
      }
    }

    const qqFeed = document.getElementById('crap-quick-query-feed');
    if (qqFeed) {
      qqFeed.innerHTML = state.crapQuickQueryHistory.map(function (item) {
        return '<div class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/90 border border-gray-200 dark:border-gray-700 text-xs space-y-1.5">' +
          '<div class="font-semibold text-blue-600 dark:text-blue-400">Q: ' + escapeHtml(item.q) + '</div>' +
          '<div class="text-gray-700 dark:text-gray-300 leading-relaxed">' + escapeHtml(item.a) + '</div>' +
        '</div>';
      }).join('');
    }

    const devDrawer = document.getElementById('crap-devtools-drawer');
    if (devDrawer) {
      if (state.crapDevToolsOpen) {
        devDrawer.classList.remove('hidden');
      } else {
        devDrawer.classList.add('hidden');
      }
    }
  }

  function runCrapQuickQuery(queryText) {
    const q = (queryText || '').trim();
    if (!q) return;
    const cleanQ = q.replace(/^@shitmini\s*/i, '');
    state.crapQuickQueryHistory.unshift({
      q: cleanQ,
      a: 'Instant Chrome Quick Query Answer (by Shitmini inside Poogle Crap): "' + cleanQ + '" is handled with zero latency and full responsive scaling across the Poogle platform engineered by Mr. Doo-doo.'
    });
    state.crapSidePanelOpen = true;
    renderCrapView();
    showToast('Quick Query answered in Poogle Crap Side Panel!', 'Poogle Crap');
  }

  // --- Event Wiring & Delegation ---
  function initApp() {
    try {
      if (localStorage.getItem('poogle_dark_mode') === '1') {
        state.darkMode = true;
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
    updateThemeButtons();

    // Global click delegation so dynamically rendered buttons always work
    document.addEventListener('click', function (e) {
      const target = e.target;

      // Platform Switcher Tabs
      const platBtn = target.closest('[data-platform-tab]');
      if (platBtn) {
        e.preventDefault();
        switchPlatform(platBtn.getAttribute('data-platform-tab'));
        return;
      }

      // Launch Platform shortcuts (from Waffle, Cards, SERP, etc.)
      const launchBtn = target.closest('[data-launch-platform]');
      if (launchBtn) {
        e.preventDefault();
        const dest = launchBtn.getAttribute('data-launch-platform');
        const mode = launchBtn.getAttribute('data-launch-mode');
        if (dest === 'about') {
          const modal = document.getElementById('about-modal');
          if (modal) modal.classList.remove('hidden');
          closePopovers();
          return;
        }
        if (dest === 'poogle-home') {
          state.poogleSubView = 'home';
          switchPlatform('poogle', { subView: 'home' });
          return;
        }
        switchPlatform(dest, { mode: mode });
        return;
      }

      // SERP Filter Tabs
      const serpTabBtn = target.closest('[data-serp-tab]');
      if (serpTabBtn) {
        e.preventDefault();
        const st = serpTabBtn.getAttribute('data-serp-tab');
        if (st === 'aimode') {
          switchPlatform('shitmini', { mode: 'search_ai' });
          return;
        }
        state.serpTab = st;
        renderSerpResults();
        return;
      }

      // Autocomplete item click
      const acBtn = target.closest('[data-autocomplete-query]');
      if (acBtn) {
        e.preventDefault();
        const q = acBtn.getAttribute('data-autocomplete-query');
        executePoogleSearch(q, 'all');
        return;
      }

      // Poogle Stool Sidebar Navigation
      const stoolNav = target.closest('[data-stool-nav]');
      if (stoolNav) {
        e.preventDefault();
        state.stoolSection = stoolNav.getAttribute('data-stool-nav');
        renderStoolView();
        showToast('Viewing Poogle Stool: ' + state.stoolSection.toUpperCase(), 'Poogle Stool');
        return;
      }

      // Poogle Stool Model Deploy/Test button
      const stoolDeploy = target.closest('[data-stool-deploy]');
      if (stoolDeploy) {
        e.preventDefault();
        const idx = parseInt(stoolDeploy.getAttribute('data-stool-deploy'), 10);
        const model = state.stoolModels[idx];
        if (model) {
          model.status = 'Deployed';
          state.stoolShellLogs.push('✓ Tested Vertex AI Endpoint [' + model.id + '] — 200 OK (' + model.latency + ')');
          renderStoolView();
          showToast('Endpoint ' + model.name + ' verified (200 OK)!', 'Vertex AI');
        }
        return;
      }

      // Poogle Poop Mode Toggle (Standalone vs Android Studio Canary)
      const poopModeBtn = target.closest('[data-poop-mode]');
      if (poopModeBtn) {
        e.preventDefault();
        state.poopMode = poopModeBtn.getAttribute('data-poop-mode');
        renderPoopView();
        showToast('Switched Poogle Poop to ' + (state.poopMode === 'canary' ? 'Android Studio Canary Mode' : 'Standalone Agentic IDE'), 'Poogle Poop');
        return;
      }

      // Poogle Poop File Tabs
      const poopFileBtn = target.closest('[data-poop-file]');
      if (poopFileBtn) {
        e.preventDefault();
        state.poopActiveFile = poopFileBtn.getAttribute('data-poop-file');
        renderPoopView();
        return;
      }

      // Poogle Poop Mobile Pane Switcher
      const poopPaneBtn = target.closest('[data-poop-pane]');
      if (poopPaneBtn) {
        e.preventDefault();
        state.poopMobilePane = poopPaneBtn.getAttribute('data-poop-pane');
        renderPoopView();
        return;
      }

      // Shitmini Mode Switcher
      const smModeBtn = target.closest('[data-shitmini-mode]');
      if (smModeBtn) {
        e.preventDefault();
        state.shitminiMode = smModeBtn.getAttribute('data-shitmini-mode');
        renderShitminiView();
        showToast('Switched to ' + (state.shitminiMode === 'search_ai' ? 'AI Mode in Search' : 'Shitmini App Workspace'), 'Shitmini');
        return;
      }

      // Shitmini Prompt Chip
      const smChip = target.closest('[data-shitmini-chip]');
      if (smChip) {
        e.preventDefault();
        sendShitminiPrompt(smChip.getAttribute('data-shitmini-chip'));
        return;
      }

      // Poogle Crap Close Tab
      const closeTabBtn = target.closest('[data-crap-close-tab]');
      if (closeTabBtn) {
        e.stopPropagation();
        const tid = closeTabBtn.getAttribute('data-crap-close-tab');
        state.crapTabs = state.crapTabs.filter(function (t) { return t.id !== tid; });
        if (state.crapActiveTab === tid && state.crapTabs.length > 0) {
          state.crapActiveTab = state.crapTabs[0].id;
        }
        renderCrapView();
        return;
      }

      // Poogle Crap Select Tab
      const crapTabBtn = target.closest('[data-crap-tab]');
      if (crapTabBtn) {
        e.preventDefault();
        state.crapActiveTab = crapTabBtn.getAttribute('data-crap-tab');
        renderCrapView();
        return;
      }

      // New Tab Quick Query inside Poogle Crap
      if (target.id === 'crap-newtab-quick-btn') {
        const inp = document.getElementById('crap-newtab-quick-input');
        if (inp && inp.value.trim()) {
          runCrapQuickQuery(inp.value);
          inp.value = '';
        } else {
          runCrapQuickQuery('How does Poogle Crap answer quick queries?');
        }
        return;
      }
    });

    // Home Search Input & Form
    const homeForm = document.getElementById('home-search-form');
    const homeInput = document.getElementById('home-search-input');
    const homeAc = document.getElementById('home-autocomplete-dropdown');
    if (homeForm && homeInput) {
      homeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        executePoogleSearch(homeInput.value, 'all');
      });
      homeInput.addEventListener('input', function () {
        state.searchQuery = homeInput.value;
        toggleClearButton('home');
        if (homeAc) {
          const val = homeInput.value.trim().toLowerCase();
          const list = AUTOCOMPLETE_SUGGESTIONS.filter(function (s) {
            return !val || s.toLowerCase().indexOf(val) !== -1;
          });
          if (list.length > 0) {
            homeAc.innerHTML = list.map(function (s) {
              return '<button type="button" data-autocomplete-query="' + escapeHtml(s) + '" class="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3 text-gray-800 dark:text-gray-200">' +
                '<span class="text-gray-400">🔍</span><span class="truncate">' + escapeHtml(s) + '</span>' +
              '</button>';
            }).join('');
            homeAc.classList.remove('hidden');
          } else {
            homeAc.classList.add('hidden');
          }
        }
      });
    }

    // Home Clear Button
    const homeClear = document.getElementById('home-clear-btn');
    if (homeClear && homeInput) {
      homeClear.addEventListener('click', function () {
        homeInput.value = '';
        state.searchQuery = '';
        toggleClearButton('home');
        if (homeAc) homeAc.classList.add('hidden');
        homeInput.focus();
      });
    }

    // Feeling Flush Button
    const flushBtn = document.getElementById('feeling-flush-btn');
    if (flushBtn) {
      flushBtn.addEventListener('click', function () {
        const msg = FEELING_FLUSH_QUOTES[Math.floor(Math.random() * FEELING_FLUSH_QUOTES.length)];
        showToast(msg, "I'm Feeling Flush");
      });
    }

    // SERP Search Form
    const serpForm = document.getElementById('serp-search-form');
    const serpInput = document.getElementById('serp-search-input');
    if (serpForm && serpInput) {
      serpForm.addEventListener('submit', function (e) {
        e.preventDefault();
        executePoogleSearch(serpInput.value, state.serpTab);
      });
    }

    // Waffle Menu Button
    const waffleBtn = document.getElementById('waffle-menu-btn');
    const wafflePop = document.getElementById('waffle-menu-popover');
    if (waffleBtn && wafflePop) {
      waffleBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isHidden = wafflePop.classList.contains('hidden');
        closePopovers();
        if (isHidden) wafflePop.classList.remove('hidden');
      });
    }

    // Profile Menu Button
    const profileBtn = document.getElementById('profile-menu-btn');
    const profilePop = document.getElementById('profile-menu-popover');
    if (profileBtn && profilePop) {
      profileBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isHidden = profilePop.classList.contains('hidden');
        closePopovers();
        if (isHidden) profilePop.classList.remove('hidden');
      });
    }

    // Settings Menu Button (Footer)
    const settingsBtn = document.getElementById('footer-settings-btn');
    const settingsPop = document.getElementById('settings-menu-popover');
    if (settingsBtn && settingsPop) {
      settingsBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isHidden = settingsPop.classList.contains('hidden');
        closePopovers();
        if (isHidden) settingsPop.classList.remove('hidden');
      });
    }

    // Theme Toggle Buttons
    document.querySelectorAll('.theme-toggle-trigger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        toggleDarkMode();
      });
    });

    // Voice Search Modal
    const voiceBtns = document.querySelectorAll('.voice-search-trigger');
    const voiceModal = document.getElementById('voice-search-modal');
    const voiceClose = document.getElementById('voice-modal-close');
    const voiceSimBtn = document.getElementById('voice-simulate-btn');
    voiceBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        if (voiceModal) voiceModal.classList.remove('hidden');
      });
    });
    if (voiceClose && voiceModal) {
      voiceClose.addEventListener('click', function () {
        voiceModal.classList.add('hidden');
      });
    }
    if (voiceSimBtn && voiceModal) {
      voiceSimBtn.addEventListener('click', function () {
        voiceModal.classList.add('hidden');
        executePoogleSearch('Poogle Poop Android Studio Canary & Shitmini AI Mode', 'all');
        showToast('Voice transcribed: "Poogle Poop Android Studio Canary & Shitmini AI Mode"', 'Voice Search');
      });
    }

    // Poogle Lens Modal
    const lensBtns = document.querySelectorAll('.lens-search-trigger');
    const lensModal = document.getElementById('lens-search-modal');
    const lensClose = document.getElementById('lens-modal-close');
    lensBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        if (lensModal) lensModal.classList.remove('hidden');
      });
    });
    if (lensClose && lensModal) {
      lensClose.addEventListener('click', function () {
        lensModal.classList.add('hidden');
      });
    }
    document.querySelectorAll('[data-lens-preset]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const preset = btn.getAttribute('data-lens-preset');
        if (lensModal) lensModal.classList.add('hidden');
        executePoogleSearch(preset, 'all');
        showToast('Poogle Lens matched visual target: ' + preset, 'Poogle Lens');
      });
    });

    // About Mr. Doo-doo Modal
    const aboutTriggers = document.querySelectorAll('.about-modal-trigger');
    const aboutModal = document.getElementById('about-modal');
    const aboutClose = document.getElementById('about-modal-close');
    aboutTriggers.forEach(function (b) {
      b.addEventListener('click', function () {
        if (aboutModal) aboutModal.classList.remove('hidden');
      });
    });
    const aboutDoneBtn = document.getElementById('about-modal-done-btn');
    if (aboutDoneBtn && aboutModal) {
      aboutDoneBtn.addEventListener('click', function () {
        aboutModal.classList.add('hidden');
      });
    }
    const crapHomeBtn = document.getElementById('crap-home-tab-btn');
    if (crapHomeBtn) {
      crapHomeBtn.addEventListener('click', function () {
        state.crapActiveTab = state.crapTabs[0].id;
        renderCrapView();
      });
    }
    const crapReloadBtn = document.getElementById('crap-reload-btn');
    if (crapReloadBtn) {
      crapReloadBtn.addEventListener('click', function () {
        renderCrapView();
        showToast('Tab reloaded in Poogle Crap', 'Poogle Crap');
      });
    }
    if (aboutClose && aboutModal) {
      aboutClose.addEventListener('click', function () {
        aboutModal.classList.add('hidden');
      });
    }

    // Poogle Stool Controls
    const stoolShellToggle = document.getElementById('stool-shell-toggle-btn');
    if (stoolShellToggle) {
      stoolShellToggle.addEventListener('click', function () {
        state.stoolShellOpen = !state.stoolShellOpen;
        renderStoolView();
      });
    }
    const stoolShellForm = document.getElementById('stool-shell-form');
    const stoolShellInput = document.getElementById('stool-shell-input');
    if (stoolShellForm && stoolShellInput) {
      stoolShellForm.addEventListener('submit', function (e) {
        e.preventDefault();
        runStoolShellCommand(stoolShellInput.value);
        stoolShellInput.value = '';
      });
    }
    const stoolCopyKeyBtn = document.getElementById('stool-copy-key-btn');
    if (stoolCopyKeyBtn) {
      stoolCopyKeyBtn.addEventListener('click', function () {
        copyTextToClipboard(state.stoolApiKey, 'Poogle Stool Enterprise API Key');
      });
    }

    // Poogle Poop Controls
    const poopAgentForm = document.getElementById('poop-agent-form');
    const poopAgentInput = document.getElementById('poop-agent-input');
    if (poopAgentForm && poopAgentInput) {
      poopAgentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        dispatchPoopAgentTask(poopAgentInput.value);
        poopAgentInput.value = '';
      });
    }
    const poopRunBtn = document.getElementById('poop-run-canary-btn');
    if (poopRunBtn) {
      poopRunBtn.addEventListener('click', function () {
        dispatchPoopAgentTask('Verify responsive constraints & hot-reload Android Canary build');
      });
    }
    const poopAcceptDiffBtn = document.getElementById('poop-accept-diff-btn');
    if (poopAcceptDiffBtn) {
      poopAcceptDiffBtn.addEventListener('click', function () {
        state.poopDiffAccepted = true;
        showToast('Agentic code diff merged into main branch!', 'Poogle Poop');
      });
    }

    // Shitmini App & Search Controls
    const smForm = document.getElementById('shitmini-prompt-form');
    const smInput = document.getElementById('shitmini-prompt-input');
    if (smForm && smInput) {
      smForm.addEventListener('submit', function (e) {
        e.preventDefault();
        sendShitminiPrompt(smInput.value);
        smInput.value = '';
      });
    }
    const smTierBtn = document.getElementById('shitmini-tier-badge');
    if (smTierBtn) {
      smTierBtn.addEventListener('click', function () {
        state.shitminiTier = state.shitminiTier === 'AI Ultra' ? 'AI Pro' : 'AI Ultra';
        renderShitminiView();
        showToast('Switched subscription tier to Google ' + state.shitminiTier, 'Shitmini');
      });
    }
    const smClearBtn = document.getElementById('shitmini-new-chat-btn');
    if (smClearBtn) {
      smClearBtn.addEventListener('click', function () {
        state.shitminiMessages = [
          {
            sender: 'ai',
            title: 'New Shitmini Session Started',
            text: 'Fresh workspace initialized for **Google ' + state.shitminiTier + '** subscriber. Ask me anything or switch to **AI Mode in Search**!',
            sources: ['Shitmini 2.5 Pro', 'Mr. Doo-doo']
          }
        ];
        renderShitminiView();
      });
    }

    // Poogle Crap (Chrome Clone) Controls
    const crapNewTabBtn = document.getElementById('crap-add-tab-btn');
    if (crapNewTabBtn) {
      crapNewTabBtn.addEventListener('click', function () {
        const newId = 'tab-' + Date.now();
        state.crapTabs.push({
          id: newId,
          title: 'New Tab - Poogle Crap',
          url: 'crap://newtab',
          type: 'newtab'
        });
        state.crapActiveTab = newId;
        renderCrapView();
      });
    }
    const crapOmniForm = document.getElementById('crap-omnibox-form');
    const crapOmniInput = document.getElementById('crap-omnibox-input');
    if (crapOmniForm && crapOmniInput) {
      crapOmniForm.addEventListener('submit', function (e) {
        e.preventDefault();
        runCrapQuickQuery(crapOmniInput.value);
      });
    }
    const crapSidePanelBtn = document.getElementById('crap-sidepanel-toggle-btn');
    if (crapSidePanelBtn) {
      crapSidePanelBtn.addEventListener('click', function () {
        state.crapSidePanelOpen = !state.crapSidePanelOpen;
        renderCrapView();
      });
    }
    const crapDevToolsBtn = document.getElementById('crap-devtools-toggle-btn');
    if (crapDevToolsBtn) {
      crapDevToolsBtn.addEventListener('click', function () {
        state.crapDevToolsOpen = !state.crapDevToolsOpen;
        renderCrapView();
      });
    }
    const crapSideForm = document.getElementById('crap-sidepanel-form');
    const crapSideInput = document.getElementById('crap-sidepanel-input');
    if (crapSideForm && crapSideInput) {
      crapSideForm.addEventListener('submit', function (e) {
        e.preventDefault();
        runCrapQuickQuery(crapSideInput.value);
        crapSideInput.value = '';
      });
    }

    // Close popovers when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#waffle-menu-popover') && !e.target.closest('#waffle-menu-btn') &&
          !e.target.closest('#profile-menu-popover') && !e.target.closest('#profile-menu-btn') &&
          !e.target.closest('#settings-menu-popover') && !e.target.closest('#footer-settings-btn') &&
          !e.target.closest('#home-search-form')) {
        closePopovers();
      }
    });

    // Initial render
    switchPlatform('poogle', { subView: 'home' });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
