# CardTree - Onboarding Flow (Assignment)

This project is a simple working prototype of **CardTree’s onboarding flow**, created as part of an interview exercise.  
It replicates the Figma design screens provided and implements a multi-step onboarding form.

---

## 🚀 Demo & Repository

- **Live Demo:** [CardTree on Vercel](https://card-tree.vercel.app/)  
- **GitHub Repo:** [CardTree Repository](https://github.com/Manish123Sharma/CardTree)

---

## 📌 Features

- Built with **Next.js** and **TypeScript**.
- State management using **Context API**.
- Form handling & validation with **Formik + Yup**.
- Multi-step onboarding:
  1. **About** – User basic info form.
  2. **Contact Info** – Email & Phone form.
  3. **Template Selection** – Console log when a template is selected.
- Reusable **Right Panel** component (common UI across steps).
- Responsive and clean UI (CSS Modules).

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **React Context API**
- **Formik + Yup**
- **CSS Modules**

---

## 📂 Project Structure

    ├── public # Static assets
    ├── src
    │ ├── app
    │ │ ├── page.tsx # Step 1 - About
    │ │ ├── contact/page.tsx # Step 2 - Contact Info
    │ │ └── template/page.tsx # Step 3 - Template Selection
    │ ├── component
    │ │ ├── rightPanel.tsx # Common right-side component
    │ │ └── rightPanel.module.css
    │ ├── context
    │ │ └── FormContext.tsx # Context API for global form data
    │ └── styles
    │ ├── AboutForm.module.css # Scoped CSS for About form
    │ └── form.css

---

## ⚡ Getting Started

### 1. Clone the repository
     ```bash
        git clone https://github.com/Manish123Sharma/CardTree.git
        cd CardTree

### 2. Install dependencies
    ```bash
      npm install

### 2. Run the development server
    ```bash
      npm run dev

---

## 🤝 Contributing

- Contributions are welcome!
- Feel free to fork this repo, create a new branch, and submit a PR.

---

## **👨‍💻** **Author**

Manish Kumar Sharma

[📧 Email](mailto:your-mksharma256001@gmail.com) | [💼 LinkedIn](https://www.linkedin.com/in/mks001/) | [🌐 GitHub](https://github.com/Manish123Sharma)

---

##  📜 License

✅ This README includes:
- Features  
- Tech stack  
- Screenshots section (you can replace with your actual images later)  
- Setup steps  
- API reference  
- Future improvements  
