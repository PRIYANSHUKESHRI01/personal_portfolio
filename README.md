# Personal Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**. Showcases my work, experience, and skills as a software engineer.

---

## 🌐 Live Demo

> Coming soon — deploy URL will be added here.

---

## ✨ Features

- **Hero Section** — Animated introduction with skills marquee and social links
- **About Section** — Brief overview of who I am and what I do
- **Experience Section** — Timeline of professional experience
- **Projects Section** — Featured work with project details
- **Testimonials Section** — What people say about working with me
- **Contact Section** — Get in touch form powered by EmailJS
- Fully **responsive** design for all screen sizes
- Smooth animations and modern glassmorphism UI

---

## 🛠️ Tech Stack

| Category    | Technologies                        |
|-------------|-------------------------------------|
| Framework   | React 19, Vite (Rolldown)           |
| Styling     | Tailwind CSS v4                     |
| Icons       | Lucide React                        |
| Email       | EmailJS Browser                     |
| Linting     | ESLint with React Hooks plugin      |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── hero-bg.jpg
│   └── profile-photo.jpg
└── src/
    ├── components/       # Reusable UI components
    ├── layout/           # Header, Footer
    ├── sections/         # Page sections (Hero, About, Projects, ...)
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

---

## ⚙️ Configuration

### EmailJS (Contact Form)

To enable the contact form, create an account at [emailjs.com](https://www.emailjs.com/) and update the EmailJS credentials in the `Contact` component:

```js
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { ...formData },
  "YOUR_PUBLIC_KEY"
);
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ❤️ using React + Vite
