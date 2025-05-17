"use client";

import { motion } from "framer-motion";
import { Upload, CircleDollarSign, BadgeCheck } from "lucide-react";
import SectionTitle from "../SectionTitle";

const steps = [
  {
    icon: <Upload className="w-8 h-8 text-blue-500" />,
    title: "Upload License",
    description: "Upload your software license details securely to our platform."
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-blue-500" />,
    title: "Get Valuation",
    description: "Our experts will provide a competitive market valuation for your license."
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-blue-500" />,
    title: "Get Paid",
    description: "Accept offers from verified buyers and get paid securely and quickly."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="How It Works"
          description="Our simple three-step process makes selling your unused software licenses easy and profitable"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="mb-6 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Connection lines between steps - visible only on wider screens */}
        {/* <div className="hidden md:block relative h-0">
          <div className="absolute top-[-120px] left-[33%] right-[33%] border-t-2 border-dashed border-blue-200"></div>
        </div> */}
      </div>
    </section>
  );
} 