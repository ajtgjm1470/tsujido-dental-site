# 藤沢辻堂歯科 ホームページ

藤沢市辻堂の歯科医院ホームページです。

## 📁 プロジェクト構成

```
tsujido-dental-site/
├── index.html                 # トップページ
├── about/                     # 医院紹介
├── doctor/                    # 院長紹介
├── menu/                      # 診療内容
│   ├── index.html            # 診療内容総合
│   ├── general.html          # 一般歯科
│   ├── child.html            # 小児歯科
│   ├── preventive.html       # 予防歯科
│   ├── esthetic.html         # 審美歯科
│   └── visit.html            # 訪問診療
├── first-visit/              # 初めての方へ
├── price/                    # 料金案内
├── faq/                      # よくある質問
├── access/                   # アクセス
├── blog/                     # お知らせ・ブログ
│   ├── index.html            # ブログ一覧
│   ├── post-001.html ~ post-010.html  # 記事（10本）
│   └── template-post.html    # 記事テンプレート
├── assets/
│   ├── css/
│   │   ├── common.css       # 共通スタイル
│   │   └── components.css  # コンポーネント
│   ├── js/
│   │   └── main.js          # 共通JS
│   └── images/              # 画像ファイル
├── sitemap.xml               # サイトマップ
└── robots.txt                # ロボット設定
```

## 🎨 デザインシステム

### カラーパレット
- **深みのあるグリーン系**: `#1a4d3e`, `#2d6b5a`, `#4a8b78`
- **ベージュ系**: `#f5f2ed`, `#e8e4dd`, `#faf9f7`
- **グレー系**: `#2c3e3a`, `#5a6b67`, `#8a9a96`

### 特徴
- 高級感のあるデザイン
- 余白を広く取ったレイアウト
- カードUI + 軽いシャドウ
- スクロールアニメーション
- フォントウェイトの明確な使い分け

## 📄 ページ一覧（全14ページ）

1. **トップページ** (`/`)
2. **医院紹介** (`/about/`)
3. **院長紹介** (`/doctor/`)
4. **診療内容総合** (`/menu/`)
5. **一般歯科** (`/menu/general.html`)
6. **小児歯科** (`/menu/child.html`)
7. **予防歯科** (`/menu/preventive.html`)
8. **審美歯科** (`/menu/esthetic.html`)
9. **訪問診療** (`/menu/visit.html`)
10. **初めての方へ** (`/first-visit/`)
11. **料金案内** (`/price/`)
12. **よくある質問** (`/faq/`)
13. **アクセス** (`/access/`)
14. **お知らせ（ブログ）** (`/blog/`) + 10記事

## 🔧 セットアップ

1. 画像ファイルを配置
   - `assets/images/hero/main.jpg` - ヒーロー画像
   - `assets/images/doctor/doctor.jpg` - 院長写真
   - `assets/images/clinic/` - 医院外観など

2. 連絡先情報を更新
   - LINE URL: `https://lin.ee/xxxxxxxx` を実際のURLに変更
   - 電話番号: `0466-00-0000` を実際の番号に変更
   - Googleマップ埋め込みURLを実際の座標に更新

3. ドメイン設定
   - `sitemap.xml` の `https://example.com` を実際のドメインに変更
   - 各ページの `canonical` URLを更新

## 📝 ブログ更新方法

月1回の更新には、`blog/template-post.html` をコピーして新しい記事を作成してください。

```bash
cp blog/template-post.html blog/post-011.html
```

その後、以下の項目を編集：
- タイトル（`<title>` と `<h1>`）
- 公開日
- 本文（200-300文字）
- ファイル名とパンくずリスト

## 🎯 SEO対策

- ✅ titleタグ最適化
- ✅ meta description記載
- ✅ h1は各ページ1つ
- ✅ 構造化データ（Dentist, FAQPage）
- ✅ sitemap.xml生成
- ✅ robots.txt生成
- ✅ 全画像alt属性記載
- ✅ 内部リンク構造設計

## 📱 レスポンシブ対応

- デスクトップ: 1200px幅
- タブレット: 1024px以下で2カラム
- モバイル: 768px以下で1カラム

## 🚀 デプロイ

静的HTMLサイトのため、どのホスティングサービスでも動作します。

推奨：
- Netlify
- Vercel
- GitHub Pages
- レンタルサーバー（HTMLアップロード）

## 📞 予約導線

- 固定フッターCTA（電話・LINE）
- 右下固定LINEボタン
- 各ページのCTAセクション

## 📊 医療広告ガイドライン

- 誇大表現を避け、事実に基づいた内容
- 具体的な治療効果の保証は記載していません
- 費用については「診察時にご説明」と記載

## 🔄 今後の拡張

- CMS化（WordPress、Headless CMSなど）
- 予約フォームの実装
- オンライン予約システム連携

---

© 2025 藤沢辻堂歯科 All Rights Reserved.
