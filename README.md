# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 💼 Job Application Tracker

A modern, responsive web application built with **React**, **Redux Toolkit**, and **React Router** to help job seekers seamlessly track, organize, and manage their job applications across desktop and mobile devices.

---

## 🌟 Key Features

* **📊 Interactive Dashboard:** Real-time analytics displaying application counts broken down by status (*Processing*, *Interview*, *Offered*).
* **📋 Application Management:** Add, edit, and delete job applications with automatic timestamp tracking (`createdAt`).
* **🔍 Search & Filter:** Instantly filter applications by company name or role, and narrow down views using status-based dropdown filters.
* **📱 Mobile-First Responsive Design:** Clean layout built with flexible CSS Grid and Flexbox, featuring touch-friendly UI controls for mobile devices.
* **⚡ Global State Management:** Powered by Redux Toolkit for clean data flow and predictable updates.

---

## 🛠️ Tech Stack

* **Frontend:** React 18, React Router v6
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`), React Redux
* **Styling:** Custom CSS3 (Mobile-First Responsive Design, CSS Grid, Flexbox)
* **Build Tool & Utilities:** Vite, `uuid`

## Clone the repository:
    git clone https://github.com/mishrasweta-0503/Job_Application_Tracker.git
    cd job-application-tracker
    npm install
    npm run dev