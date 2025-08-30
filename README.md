# 💻 AshikurDevX Portfolio - Web Developer Showcase (React)

## 🌐 Live Site

- **Frontend:** [https://ashikurdevx.web.app/](https://ashikurdevx.web.app/)

---

## 🚀 Project Overview

**AshikurDevX Portfolio** is a modern, full-featured portfolio website built with **React**, **Vite**, and **Tailwind CSS**.  
It showcases my skills, projects, services, blogs, and professional journey in a visually appealing and interactive way.  
The website is fully responsive and optimized for both web and mobile experiences.

---

## 🖼️ Key Features

- **Home / Landing Page:**  
  - Engaging Hero section with dynamic animation  
  - Overview of projects, skills, and services  
  - FAQ and contact preview
- **About Me:**  
  - My Story, experience timeline, tech stack  
  - Social links and YouTube Shorts integration
- **Portfolio:**  
  - Grid of featured projects with details and live/demo links  
  - Dynamic project filters and categories
- **Services:**  
  - Detailed breakdown of services offered  
  - Mega menu and interactive sections
- **Blog:**  
  - Public blog posts with category filter  
  - Individual blog details pages
- **Contact / Reviews:**  
  - Contact form with validation and login check  
  - Testimonials and collaboration prompts
- **Modern UI & UX:**  
  - Clean, rounded, responsive layout  
  - Framer Motion animations & Lottie icons  
  - Light/Dark mode support
- **Reusable Components:**  
  - Buttons, Cards, Modals, Navbar, Footer, Marquee  
  - Section-based layout for easy maintenance

---

## 🗂️ File Structure (Key Folders)

```
portfolio-project/
├─ public/                        # Static assets
│  ├─ assets/
│  │  ├─ images/
│  │  └─ icons/
│  └─ AshikurRahamanResume.pdf
├─ src/
│  ├─ components/                 # Atomic / reusable components
│  │  ├─ ui/                      # Atomic UI components
│  │  │  ├─ Button.jsx
│  │  │  ├─ Input.jsx
│  │  │  ├─ Badge.jsx
│  │  │  ├─ ToggleDark.jsx
│  │  │  ├─ Modal.jsx
│  │  │  ├─ Table.jsx
│  │  │  ├─ Section.jsx
│  │  │  ├─ SectionTight.jsx
│  │  │  └─ SectionWide.jsx
│  │  ├─ layout/                  # Layout components
│  │  │  ├─ Navbar.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Sidebar.jsx
│  │  │  └─ Topbar.jsx
│  │  └─ icons/                   # Icon components
│  │     └─ IconLibrary.jsx
│  │
│  ├─ sections/                   # Page-specific or shared sections
│  │  ├─ public/                  # Sections used in public pages
│  │  │  ├─ home/
│  │  │  │  ├─ HeroSection.jsx
│  │  │  │  ├─ ProjectsGrid.jsx
│  │  │  │  └─ Testimonials.jsx
│  │  │  ├─ about/
│  │  │  │  ├─ AboutTimeline.jsx
│  │  │  │  ├─ SkillsSection.jsx
│  │  │  │  └─ TeamSection.jsx
│  │  │  ├─ projects/
│  │  │  │  ├─ ProjectFilter.jsx
│  │  │  │  ├─ ProjectList.jsx
│  │  │  │  └─ FeaturedProjects.jsx
│  │  │  └─ contact/
│  │  │     ├─ ContactForm.jsx
│  │  │     └─ MapSection.jsx
│  │  ├─ dashboard/               # Sections used in dashboard pages
│  │  │  ├─ DashboardHome/
│  │  │  │  ├─ StatsCardsSection.jsx
│  │  │  │  └─ RecentActivitySection.jsx
│  │  │  ├─ ManageProjects/
│  │  │  │  ├─ ProjectTableSection.jsx
│  │  │  │  └─ ProjectFormSection.jsx
│  │  │  ├─ ManageBlogs/
│  │  │  │  ├─ index.jsx               # Main section that assembles sub-sections
│  │  │  │  ├─ BlogTable.jsx
│  │  │  │  ├─ BlogForm.jsx
│  │  │  │  ├─ BlogFilters.jsx
│  │  │  │  └─ BlogStatsCard.jsx
│  │  │  └─ Settings/
│  │  │     └─ ProfileSettingsSection.jsx
│  │  └─ shared/                  # Sections reused across multiple pages
│  │     ├─ CallToAction.jsx
│  │     └─ Testimonials.jsx
│  │
│  ├─ pages/
│  │  ├─ public/                  # Public pages
│  │  │  ├─ Home.jsx
│  │  │  ├─ About.jsx
│  │  │  ├─ Projects.jsx
│  │  │  ├─ ProjectDetails.jsx
│  │  │  ├─ Blog.jsx
│  │  │  ├─ BlogPost.jsx
│  │  │  └─ Contact.jsx
│  │  ├─ dashboard/               # Dashboard pages (private)
│  │  │  ├─ DashboardHome.jsx
│  │  │  ├─ ManageProjects.jsx
│  │  │  ├─ ManageBlogs.jsx
│  │  │  ├─ ManageSkills.jsx
│  │  │  └─ Settings.jsx
│  │  └─ protected/
│  │     └─ PrivateRoute.jsx      # Protects dashboard routes
│  │
│  ├─ data/                        # Mock/static data
│  │  ├─ homeData.js
│  │  ├─ aboutData.js
│  │  ├─ projectsData.js
│  │  ├─ blogData.js
│  │  └─ testimonialsData.js
│  │
│  ├─ layouts/                     # Layout wrappers
│  │  ├─ PublicLayout.jsx
│  │  └─ DashboardLayout.jsx
│  │
│  ├─ hooks/                       # Custom hooks
│  │  ├─ useAuth.jsx
│  │  ├─ useFetch.jsx
│  │  └─ useDarkMode.jsx
│  │
│  ├─ context/                     # Global context providers
│  │  ├─ AuthProvider.jsx
│  │  └─ ThemeProvider.jsx
│  │
│  ├─ services/                    # API / Firebase / Axios functions
│  │  └─ firebase.config.js
│  │
│  ├─ utils/                       # Helper functions, constants
│  │  └─ formatters.js
│  │
│  ├─ App.jsx
│  └─ main.jsx
│
├─ tailwind.config.js
├─ vite.config.js
├─ package.json
├─ package-lock.json / yarn.lock
└─ README.md


```


## 🔑 Technologies Used

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Framer Motion, Lottie  
- **Authentication (if any):** Firebase Auth  
- **API Calls:** Axios, React Query  
- **Deployment:** Firebase Hosting

---

## 🛠️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/ashikurdevx-portfolio.git

# Navigate to project directory
cd ashikurdevx-portfolio

# Install dependencies
npm install

# Create .env file and add any required configs

# Start the development server
npm run dev
````

---

## 📂 Main Pages

* `/` - Home (Hero, Features, FAQ, Blog preview, Contact CTA)
* `/about` - About Me (Story, Experience, Tech Stack, Social Links)
* `/portfolio` - Portfolio grid & project details
* `/services` - Services offered with breakdown
* `/blog` - Blog listing & details
* `/contact` - Contact form & collaboration CTA

---

## 🔐 Authentication (Optional)

* Firebase Auth (email/password, Google)
* Protected routes for dashboard or admin sections

---

## 💡 Highlights

* Fully responsive and mobile-friendly
* Smooth animations with Framer Motion & Lottie
* Clean, modern UI with rounded cards & sections
* Modular and maintainable code structure
* Easy to expand with new projects, blogs, or services

---

## 📫 Connect With Me

* **Portfolio:** [ashikurdevx.web.app](https://ashikurdevx.web.app/)
* **Email:** [mdaashikur@gmail.com](mailto:mdaashikur@gmail.com)
* **LinkedIn:** [https://www.linkedin.com/in/mdaashikur/](https://www.linkedin.com/in/mdaashikur/)
* **GitHub:** [https://github.com/aashikur](https://github.com/aashikur)

