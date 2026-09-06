// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives';

// Lesson callouts are authored in GitHub admonition syntax (`> [!NOTE]`). This
// remark plugin rewrites them into Starlight aside directives before Starlight
// renders them, so the same syntax used in the repo's READMEs and on github.com
// also produces styled callouts on the published site. The mapping targets
// Starlight's aside types (note / tip / caution / danger).
const githubAdmonitionMapping = {
  NOTE: 'note',
  TIP: 'tip',
  IMPORTANT: 'note',
  WARNING: 'caution',
  CAUTION: 'caution',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://github-samples.github.io',
  base: '/copilot-workshops',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [
      [remarkGithubAdmonitionsToDirectives, { mapping: githubAdmonitionMapping }],
    ],
  },
  integrations: [
    starlight({
      title: 'Copilot ワークショップ',
      description:
        'VS Code、Copilot CLI、GitHub Copilot アプリ、Copilot クラウドエージェントにわたって GitHub Copilot のエージェントを体験するハンズオンワークショップです。',
      customCss: ['./src/styles/avanade.css'],
      defaultLocale: 'ja-jp',
      locales: {
        root: { label: 'English', lang: 'en' },
        'es-es': { label: 'Español', lang: 'es-ES' },
        'ja-jp': { label: '日本語', lang: 'ja-JP' },
        'ko-kr': { label: '한국어', lang: 'ko-KR' },
        'pt-br': { label: 'Português (Brasil)', lang: 'pt-BR' },
        'zh-cn': { label: '简体中文', lang: 'zh-CN' },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/github-samples/copilot-workshops',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/github-samples/copilot-workshops/edit/main/docs/',
      },
      sidebar: [
        { label: 'ホーム', link: '/' },
        {
          label: 'VS Code',
          items: [
            { label: '概要', link: '/vscode/' },
            { label: '0. 前提条件', link: '/vscode/0-prerequisites/' },
            { label: '1. カスタムインストラクション', link: '/vscode/1-custom-instructions/' },
            { label: '2. エージェントモード', link: '/vscode/2-agent-mode/' },
            { label: '3. Playwright MCP でのテスト', link: '/vscode/3-mcp/' },
            { label: '4. カスタムエージェント', link: '/vscode/4-custom-agents/' },
            { label: '5. エージェントの管理', link: '/vscode/5-managing-agents/' },
            { label: '6. 反復して改善する', link: '/vscode/6-iterating/' },
          ],
        },
        {
          label: 'Copilot CLI',
          items: [
            { label: '概要', link: '/cli/' },
            { label: '0. 前提条件', link: '/cli/0-prerequisites/' },
            { label: '1. Copilot CLI のインストール', link: '/cli/1-install-copilot-cli/' },
            { label: '2. カスタムインストラクション', link: '/cli/2-custom-instructions/' },
            { label: '3. コードの生成', link: '/cli/3-generating-code/' },
            { label: '4. Playwright MCP でのテスト', link: '/cli/4-mcp/' },
            { label: '5. エージェントスキル', link: '/cli/5-agent-skills/' },
            { label: '6. カスタムエージェント', link: '/cli/6-custom-agents/' },
            { label: '7. スラッシュコマンド', link: '/cli/7-slash-commands/' },
            { label: '8. レビュー', link: '/cli/8-review/' },
          ],
        },
        {
          label: 'Copilot アプリ',
          items: [
            { label: '概要', link: '/app/' },
            { label: '0. 前提条件', link: '/app/0-prerequisites/' },
            { label: '1. Copilot アプリのインストール', link: '/app/1-install-copilot-app/' },
            { label: '2. 初めてのエージェントセッションを実行する', link: '/app/2-add-star-rating/' },
            { label: '3. カスタムインストラクションで Copilot を導く', link: '/app/3-custom-instructions/' },
            { label: '4. Autopilot で機能を構築する', link: '/app/4-build-filtering/' },
            { label: '5. Playwright MCP でのテスト', link: '/app/5-mcp-playwright/' },
            { label: '6. Agent Merge でマージする', link: '/app/6-agent-merge/' },
            { label: '7. キャンバスで計画する', link: '/app/7-canvases/' },
            { label: '8. レビュー', link: '/app/8-review/' },
          ],
        },
        {
          label: 'Copilot クラウドエージェント',
          items: [
            { label: '概要', link: '/cloud/' },
            { label: '0. 前提条件', link: '/cloud/0-prerequisites/' },
            { label: '1. カスタムインストラクション', link: '/cloud/1-custom-instructions/' },
            { label: '2. クラウドエージェント', link: '/cloud/2-cloud-agent/' },
            { label: '3. カスタムエージェント', link: '/cloud/3-custom-agents/' },
            { label: '4. エージェントの管理', link: '/cloud/4-managing-agents/' },
            { label: '5. 反復して改善する', link: '/cloud/5-iterating/' },
          ],
        },
      ],
    }),
  ],
});
