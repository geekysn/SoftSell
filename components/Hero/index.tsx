"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100 min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_40%)] pointer-events-none" />
      
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl filter opacity-60" />
      <div className="absolute left-20 top-40 w-72 h-72 bg-cyan-100 rounded-full blur-3xl filter opacity-60" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl filter opacity-60" />
      
      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left content with animations */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                Sell Unused Software Licenses <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                  with Confidence
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              SoftSell helps you get the best value for your unused software licenses. Our secure platform connects you with verified buyers, ensuring fast transactions and maximum returns.
            </motion.p>
            
            {/* CTA button with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-3"
            >
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              className="text-sm text-gray-500 mt-3 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <p>Verified buyers</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                <p>Secure transactions</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <p>Best market rates</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - Hero image/illustration */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 animate-float">
              {/* Window controls for style */}
              <div className="p-4 border-b border-gray-200 bg-gray-50 backdrop-blur-sm flex items-center">
                <div className="flex gap-1.5 mr-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="w-full h-5 bg-gray-200 rounded-full"></div>
              </div>
              
              {/* Software license mock UI */}
              <div className="p-6 bg-white">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden shadow-inner flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
                  </div>
                  <div className="w-36 h-6 bg-blue-200 rounded-md mb-2"></div>
                  <div className="w-48 h-4 bg-blue-100 rounded-md"></div>
                  <div className="mt-6 w-full flex justify-between items-center">
                    <div className="w-24 h-8 bg-gray-200 rounded-md"></div>
                    <div className="w-20 h-8 bg-blue-500 rounded-md"></div>
                  </div>
                </div>
              </div>
              
              {/* License value indicator */}
              <div className="p-4 flex justify-between items-center bg-gray-50 border-t border-gray-200">
                <div className="text-sm font-medium text-gray-500">License Value</div>
                <div className="font-bold text-blue-600">$499.99</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 