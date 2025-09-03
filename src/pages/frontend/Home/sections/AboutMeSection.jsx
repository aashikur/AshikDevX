"use client";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
</svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
</svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
    <path d="M9.352,6.913L14.72,0h-1.32L9.014,6.082L5.432,0H0l5.626,8.125L0,15.1h1.32l4.634-5.594L10.01,15.1h5.432L9.352,6.913z M7.91,8.455l-0.64-0.908L2.26,1.077h2.05l3.87,5.52l0.64,0.908l5.24,7.47h-2.05L7.91,8.455z" />
</svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.449 13.5h-13.449v-3h13.449l-4.449-4.449 2.121-2.121 7.879 7.879-7.879 7.879-2.121-2.121z" />
</svg>;
export default function AboutMeSection() {
    return <Section id='aboutMeSection' className="scroll-mt-navbar">
        <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
                {/* Status Indicator */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-green-700 dark:text-green-400">Available for work</span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-white mb-4">
                    I craft <span className="relative inline-block font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-all after:duration-300 hover:after:w-full">digital experiences</span> <br /> with purpose.
                </h1>

                {/* Main Content */}
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    Hi, I'm Ashik — a Full-Stack Web Developer who helps businesses and entrepreneurs turn complex ideas into seamless digital experiences.
                    <br/><br/>
                    I build scalable, user-friendly, and conversion-focused applications that don't just look good, but work hard for your business. Whether it's fixing slow, outdated websites, automating workflows that drain your time, or creating platforms that turn visitors into loyal customers — <span className="font-semibold">I focus on solving the problems that matter most.</span>
                    <br/><br/>
                    I also bring strong experience in CMS like WordPress theme development and customization, giving me the flexibility to deliver solutions for projects of every size — from startups to established brands.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-3 mb-10">
                   <a target="_blank" href="https://github.com/aashikur"> <Button className="px-5 py-2.5 text-sm">View Projects</Button></a>
                  {/* <a href="https://calendly.com/aashikur/30min"> */}
                  <a href="mailto:mdaashikur@gmail.com" title="mdaashikur@gmail.com">
                      <Button variant="outline" className="px-5 py-2.5 text-sm">
                        Book a Call <ArrowRightIcon />
                    </Button>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connect:</p>
                    <div className="flex gap-3">
                        {['github', 'linkedin'].map((platform) => (
                            <a 
                                key={platform}
                                href={platform === 'github' ? 'https://github.com/aashikur' : 
                                     platform === 'linkedin' ? 'https://www.linkedin.com/in/mdaashikur/' : 
                                     'https://x.com/'}
                                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:-translate-y-0.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-transform"
                            >
                                {platform === 'github' ? <GithubIcon /> : 
                                 platform === 'linkedin' ? <LinkedinIcon /> : 
                                 <TwitterIcon />}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Profile Image */}
            <div className="md:w-1/3 order-first sm:order-1 flex items-center justify-center">
                <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-full  aspect-square m-5 h-60 sm:h-auto overflow-hidden">
                    <img 
                        src="/assets/images/hero3.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                        onError={e => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/192x192/e2e8f0/475569?text=Image';
                        }} 
                    />
                </div>
            </div>
        </div>
    </Section>;
}