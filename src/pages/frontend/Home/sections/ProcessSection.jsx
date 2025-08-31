import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { Search, Palette, Code2, Rocket } from 'lucide-react';

const ProcessSection = () => {
    const processes = [
        {
            number: "01",
            title: "Discover",
            description: "I dive deep into your goals, challenges, and vision to lay the foundation for success.",
            icon: Search,
            gradient: "from-blue-400 to-indigo-500"
        },
        {
            number: "02",
            title: "Design",
            description: "Wireframes, prototypes, and UI crafted to reflect your brand and delight users.",
            icon: Palette,
            gradient: "from-indigo-400 to-blue-500"
        },
        {
            number: "03",
            title: "Develop",
            description: "Clean, scalable, and optimized code for a seamless experience across devices.",
            icon: Code2,
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            number: "04",
            title: "Deliver & Support",
            description: "Launch with confidence, plus ongoing support to help you grow.",
            icon: Rocket,
            gradient: "from-indigo-500 to-blue-600"
        }
    ];

    return (
        <Section 
            id="processSection"
            title="How We'll Bring Your Idea to Life" 
            description="Clear process, no guesswork. You'll always know what's next"
            className="relative"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {processes.map((process, index) => {
                    const Icon = process.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="relative group rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            {/* Number Badge */}
                            <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${process.gradient} flex items-center justify-center`}>
                                <span className="text-white font-bold">{process.number}</span>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                            </div>

                            {/* Icon */}
                            <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-3">
                                <Icon className="w-6 h-6 text-blue-400" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400">
                                {process.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {process.description}
                            </p>

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                        </motion.div>
                    );
                })}
            </div>
        </Section>
    );
};

export default ProcessSection;