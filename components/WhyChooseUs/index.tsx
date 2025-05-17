"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Headphones } from "lucide-react";
import SectionTitle from "../SectionTitle";

const features = [
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Fast & Secure Transactions",
    description: "Complete sales quickly with our streamlined process and secure payment methods."
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Highest Resale Value",
    description: "Get up to 70% of the original purchase price with our competitive market valuations."
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Verified Buyers Network",
    description: "Connect with our exclusive network of verified corporate and individual buyers."
  },
  {
    icon: <Headphones className="w-6 h-6 text-blue-500" />,
    title: "Dedicated Support",
    description: "Our experts are available to assist you throughout the entire selling process."
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Why Choose Us"
          description="We offer the most competitive rates and secure platform for selling your software licenses"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300"
            >
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 