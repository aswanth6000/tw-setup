# tw-setup

A CLI to instantly configure **Tailwind CSS v5** in your **Vite** or **Next.js** projects with zero hassle.

## 🚀 Features

* ⚡ Installs Tailwind CSS v5
* 🔧 Configures `vite.config.ts` or `vite.config.js`
* 🧼 Cleans up old `App.css` and inserts a beautiful `App.tsx`
* 📦 Adds `@/*` path alias in `tsconfig.json`
* 🧠 Smart detection of TypeScript support
* 📘 Adds helpful links to Tailwind docs and GitHub star

---

## 🛠️ Installation & Usage

### Option 1: Run Instantly with NPX

```bash
npx tw-setup
```

### Option 2: Install Globally

```bash
npm install -g tw-setup

tw-setup
```

---

## 📁 What It Does

* Installs:

  ```bash
  npm install tailwindcss @tailwindcss/vite
  npm install -D @types/node
  ```

* Creates or updates:

  * `src/index.css` with `@import "tailwindcss";`
  * `tsconfig.json` or `tsconfig.app.json` with `baseUrl` and `@/*` alias
  * `vite.config.ts` or `vite.config.js` with Tailwind and path aliases
  * `App.tsx` with a nice styled component
  * `main.tsx` with root render + Tailwind CSS import

* Removes legacy `App.css`

---

## 📘 Learn More

* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [GitHub Repo](https://github.com/aswanth6000/tw-setup) — ⭐ Give it a star!

---

## 📸 Preview Output UI

The generated app will show:

```
🚀 Tailwind Setup Complete!
You're now ready to build with Tailwind CSS in your Vite project.
```

Styled with Tailwind classes and includes buttons linking to Docs and GitHub.

---

## 🙌 Contributing

Pull requests and issues are welcome!

```bash
git clone https://github.com/aswanth6000/tw-setup
cd tw-setup
npm install
```

---

## 📄 License

[MIT](./LICENSE)
