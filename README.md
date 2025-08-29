# 🩸 BloodAid Client - Blood Donation Platform (React)

## 🚀 Live Site

- **Frontend:** [https://blood-aid-now.web.app/](https://blood-aid-now.web.app/)
- **API:** [https://blood-lagbe-server.vercel.app/](https://blood-lagbe-server.vercel.app/)

---

## 🌟 Project Overview

**BloodAid** is a modern, full-stack blood donation platform built with React, Tailwind CSS, Firebase Auth, Stripe, and a Node.js/Express/MongoDB backend.  
It enables users to request and donate blood, manage their profiles, fund the organization, and access a rich dashboard experience based on their role (admin, volunteer, donor).

---

## 🖼️ Key Features

- **Role-based Dashboard:**  
  - Admin, Volunteer, Donor—each with their own dashboard, sidebar, and features
- **Blood Donation Requests:**  
  - Create, view, edit, delete, and respond to blood requests
  - Public search for donors by blood group, district, upazila
- **Funding (Stripe):**  
  - Anyone can donate funds via Stripe
  - Admin/volunteer can view all funding, total funding stats
- **Blog System:**  
  - Add, manage, and view blogs (admin/volunteer)
  - Public blog page with details and category filter
- **Contact/FAQ:**  
  - Contact form with subject, message, and login check
  - FAQ/Accordion section on home page
- **Authentication & Security:**  
  - Firebase Auth (email/password, Google)
  - JWT-protected private routes
  - Block/unblock user, role management (admin only)
- **Modern UI:**  
  - Responsive, rounded, clean, and trustful BloodAid theme
  - Framer Motion animations, Lottie icons, and more

---

## 🗂️ File Structure (Key Folders)



---

## 🔑 How to Use

- **Home, Blog, Funding, Contact:**  
  - Publicly accessible, no login required
- **Dashboard:**  
  - Login required (role-based access)
  - Admin/volunteer/donor see different features
- **Funding:**  
  - Anyone can donate from the public funding page
  - Dashboard shows personal funding history (My Funding)
- **Contact:**  
  - Only logged-in users can send messages (Swal alert if not logged in)

---

## 📝 Main Pages & Components

- `/` - Home (Banner, Features, FAQ, Contact, Blog preview)
- `/blog` - Public blog list and details
- `/funding` - Public funding page (Stripe payment + funding table)
- `/contact` - Contact form (subject, message, login check)
- `/search` - Donor search (option-based & dynamic)
- `/dashboard` - Role-based dashboard (admin, volunteer, donor)
- `/dashboard/contacts` - Admin/volunteer contact message view (grid)
- `/dashboard/funding` - All funding (admin/volunteer), My funding (donor)
- `/dashboard/my-donation-requests` - My blood requests (donor)
- `/dashboard/all-blood-donation-request` - All requests (admin/volunteer)
- `/dashboard/profile` - Profile view/edit

---

## 🔐 Authentication

- Firebase Auth (email/password, Google)
- JWT token for private API calls
- Role-based access (admin, volunteer, donor)
- Block/unblock user, role change (admin only)

---

## 💡 Technologies Used

- React, Vite, Tailwind CSS, DaisyUI, Framer Motion, Lottie
- Firebase Auth
- Stripe (payment)
- Axios, React Query
- Node.js, Express, MongoDB (backend)

---

## 🛠️ How to Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/blood-aid-client.git

# Navigate to project directory
cd blood-aid-client

# Install dependencies
npm install

# Create .env file and add your Firebase/Stripe config

# Start the development server
npm run dev

## Directory Structure
src/
│
├── assets/                      # Static files
│   ├── images/                  # All images (logos, project thumbnails, banners)
│   ├── icons/                   # SVG or icon sets
│   └── fonts/                   # Custom fonts (if any)
│
├── components/                  # Reusable React components
│   ├── common/                  # Common UI components used everywhere
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── CTA.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Marquee.jsx
│   │
│   ├── frontend/                # Components exclusive to frontend pages
│   │   ├── HeroSection.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── PricingCard.jsx
│   │   └── WhatsAppCTA.jsx
│   │
│   └── dashboard/               # Components exclusive to dashboard/admin
│       ├── Sidebar.jsx
│       ├── UserTable.jsx
│       ├── StatsCard.jsx
│       └── Notification.jsx
│
├── context/                     # React Context Providers
│   ├── AuthContext.jsx
│   ├── ThemeContext.jsx
│   └── NotificationContext.jsx
│
├── hooks/                       # Custom React hooks
│   ├── useAuth.js
│   ├── useTheme.js
│   ├── useFetch.js
│   └── useDebounce.js
│
├── layouts/                     # Layout components wrapping pages
│   ├── FrontendLayout.jsx       # Header + Footer wrapper for frontend
│   └── DashboardLayout.jsx      # Sidebar + Header wrapper for dashboard
│
├── pages/                       # Page components grouped by frontend/dashboard
│   ├── frontend/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── sections/          # Smaller section components for Home page
│   │   │       ├── HeroSection.jsx
│   │   │       ├── AboutMeSection.jsx
│   │   │       ├── HowIWorkSection.jsx
│   │   │       ├── FeaturedProjectsSection.jsx
│   │   │       ├── PricingSection.jsx
│   │   │       ├── TestimonialsSection.jsx
│   │   │       ├── BlogPreviewSection.jsx
│   │   │       ├── CTAGetInTouch.jsx
│   │   │       └── WhatsAppCTA.jsx
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── sections/
│   │   │       ├── MyStory.jsx
│   │   │       ├── SocialLinks.jsx
│   │   │       ├── ExperienceTimeline.jsx
│   │   │       ├── YouTubeShorts.jsx
│   │   │       ├── TechStack.jsx
│   │   │       ├── FeaturedProjects.jsx
│   │   │       └── LetsWorkTogether.jsx
│   │   │
│   │   ├── Portfolio/
│   │   │   ├── Portfolio.jsx
│   │   │   └── PortfolioGrid.jsx
│   │   │
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceMegaMenu.jsx
│   │   │   └── ServiceBreakdowns.jsx
│   │   │
│   │   ├── Blog/
│   │   │   ├── Blog.jsx
│   │   │   └── BlogCard.jsx
│   │   │
│   │   └── Reviews/
│   │       ├── Reviews.jsx
│   │       └── LetsWorkTogether.jsx
│   │
│   └── dashboard/
│       ├── Overview/
│       │   └── Overview.jsx
│       ├── ManageUsers/
│       │   ├── UsersList.jsx
│       │   └── UserDetails.jsx
│       ├── Analytics/
│       │   └── DashboardStats.jsx
│       └── Settings/
│           └── Settings.jsx
│
├── styles/                     # Global styles & Tailwind config
│   ├── globals.css
│   ├── tailwind.config.js
│   └── custom.css
│
├── utils/                      # Utility/helper functions
│   ├── api.js                  # API helper calls
│   ├── formatDate.js
│   ├── validations.js
│   └── constants.js
│
├── App.jsx                    # Main app component with routing
└── index.jsx                  # ReactDOM render entry point
