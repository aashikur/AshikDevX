// src/components/JoinWhatsappCTA.jsx
import Card from '@/components/ui/Card';
import Section from '@/components/ui/Section';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const JoinWhatsappCTA = () => {
    // You can replace this with your actual WhatsApp group link
    // const whatsappGroupLink = "https://chat.whatsapp.com/your-group-invite-code";
    const whatsappGroupLink = "https://wa.me/8801580563883";

    return (
        <Section className="p-4 sm:p-8">
            <Card className="mx-auto max-w-6xl rounded-3xl  p-8 sm:p-12">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                    
                    {/* Text Content */}
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Join <span className="text-blue-500">WhatsApp Group</span>
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-gray-400">
                            Stay connected with the latest updates, tutorials, and project announcements by joining our official WhatsApp group.
                        </p>
                    </div>

                    {/* Button */}
                    <div>
                        <a
                            href={whatsappGroupLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#1C1C1E]"
                        >
                            Join WhatsApp Group
                            <ArrowRight 
                                size={16} 
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>

                </div>
            </Card>
        </Section>
    );
};

export default JoinWhatsappCTA;