import Section from '@/components/ui/Section';
import { motion } from 'framer-motion';
import { 
  FiCode,        // Web development
  FiLayout,      // UI/UX
  FiSettings,    // CMS
  FiLayers       // Full-stack
} from "react-icons/fi";
import { FaWordpress } from "react-icons/fa"; // More recognizable for WordPress

const ServicesSection = () => {
    const services = [
        {
            title: "Custom Web Development",
            description: "Transform your vision into reality with custom-built web solutions that stand out from the crowd.",
            icon: FiCode,
            gradient: "from-violet-500 to-fuchsia-500"
        },
        {
            title: "UI/UX Design",
            description: "Create memorable user experiences with intuitive interfaces that users love to interact with.",
            icon: FiLayout,
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            title: "WordPress & CMS",
            description: "Power your content with flexible, easy-to-manage solutions built for growth.",
            icon: FaWordpress, // more recognizable than settings
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            title: "Full-Stack Applications",
            description: "End-to-end development solutions from concept to deployment, built for scale.",
            icon: FiLayers,
            gradient: "from-rose-500 to-pink-500"
        }
    ];

    return (
        <Section 
            className='scroll-mt-navbar'
            id="servicesSection" 
            title="Services" 
            subtitle="What I Do Best" 
            description="Transforming ideas into exceptional digital experiences"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm"
                    >
                        <div className="p-8">
                            <div className={`mb-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r ${service.gradient} w-14 h-14 text-white`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:animate-text-shimmer">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                            
                            <div className="mt-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center text-sm font-medium text-white/60 hover:text-white transition-colors"
                                >
                                    Learn More
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                        
                        {/* Gradient Border Effect */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${service.gradient} transition-opacity duration-300`} />
                    </motion.div>
                ))}
            </div>
{/*             
            <motion.div 
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-700 hover:to-violet-700 transition-all duration-300">
                    Start a Project
                </button>
            </motion.div> */}
        </Section>
    );
};

export default ServicesSection;
