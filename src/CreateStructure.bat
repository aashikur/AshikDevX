@echo off
REM === CREATE FOLDERS ===

mkdir assets\images
mkdir assets\icons
mkdir assets\fonts

mkdir components\common
mkdir components\frontend
mkdir components\dashboard

mkdir context
mkdir hooks
mkdir layouts

mkdir pages\frontend\Home\sections
mkdir pages\frontend\About\sections
mkdir pages\frontend\Portfolio
mkdir pages\frontend\Services
mkdir pages\frontend\Blog
mkdir pages\frontend\Reviews

mkdir pages\dashboard\Overview
mkdir pages\dashboard\ManageUsers
mkdir pages\dashboard\Analytics
mkdir pages\dashboard\Settings

mkdir styles
mkdir utils

REM === CREATE EMPTY FILES ===

REM Components - common
type nul > components\common\Button.jsx
type nul > components\common\Card.jsx
type nul > components\common\CTA.jsx
type nul > components\common\Input.jsx
type nul > components\common\Modal.jsx
type nul > components\common\Navbar.jsx
type nul > components\common\Footer.jsx
type nul > components\common\Marquee.jsx

REM Components - dashboard
type nul > components\dashboard\Sidebar.jsx
type nul > components\dashboard\UserTable.jsx
type nul > components\dashboard\StatsCard.jsx
type nul > components\dashboard\Notification.jsx

REM Pages frontend Home sections
type nul > pages\frontend\Home\sections\HeroSection.jsx
type nul > pages\frontend\Home\sections\AboutMeSection.jsx
type nul > pages\frontend\Home\sections\HowIWorkSection.jsx
type nul > pages\frontend\Home\sections\FeaturedProjectsSection.jsx
type nul > pages\frontend\Home\sections\PricingSection.jsx
type nul > pages\frontend\Home\sections\TestimonialsSection.jsx
type nul > pages\frontend\Home\sections\BlogPreviewSection.jsx
type nul > pages\frontend\Home\sections\CTAGetInTouch.jsx
type nul > pages\frontend\Home\sections\WhatsAppCTA.jsx

REM Pages frontend main
type nul > pages\frontend\Home\Home.jsx

REM Pages frontend About sections
type nul > pages\frontend\About\sections\MyStory.jsx
type nul > pages\frontend\About\sections\SocialLinks.jsx
type nul > pages\frontend\About\sections\ExperienceTimeline.jsx
type nul > pages\frontend\About\sections\YouTubeShorts.jsx
type nul > pages\frontend\About\sections\TechStack.jsx
type nul > pages\frontend\About\sections\FeaturedProjects.jsx
type nul > pages\frontend\About\sections\LetsWorkTogether.jsx

REM Pages frontend About main
type nul > pages\frontend\About\About.jsx

REM Pages frontend Portfolio
type nul > pages\frontend\Portfolio\Portfolio.jsx
type nul > pages\frontend\Portfolio\PortfolioGrid.jsx

REM Pages frontend Services
type nul > pages\frontend\Services\Services.jsx
type nul > pages\frontend\Services\ServiceMegaMenu.jsx
type nul > pages\frontend\Services\ServiceBreakdowns.jsx

REM Pages frontend Blog
type nul > pages\frontend\Blog\Blog.jsx
type nul > pages\frontend\Blog\BlogCard.jsx

REM Pages frontend Reviews
type nul > pages\frontend\Reviews\Reviews.jsx
type nul > pages\frontend\Reviews\LetsWorkTogether.jsx

REM Pages dashboard
type nul > pages\dashboard\Overview\Overview.jsx
type nul > pages\dashboard\ManageUsers\UsersList.jsx
type nul > pages\dashboard\ManageUsers\UserDetails.jsx
type nul > pages\dashboard\Analytics\DashboardStats.jsx
type nul > pages\dashboard\Settings\Settings.jsx

REM Layouts
type nul > layouts\FrontendLayout.jsx
type nul > layouts\DashboardLayout.jsx

echo Folder and empty .jsx files created successfully!
pause
