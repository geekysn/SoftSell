"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionTitle from "../SectionTitle";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "IT Manager",
    company: "TechPoint Solutions",
    content: "SoftSell helped our company recover significant value from unused enterprise licenses. The process was smooth, and the valuation was higher than we expected. Highly recommend their services!",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Software Director",
    company: "Innovate Inc.",
    content: "As someone who frequently deals with software asset management, finding SoftSell was a game-changer. Their secure platform and verified buyer network ensured we got the best value for our unused licenses.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="What Our Customers Say"
          description="Don't just take our word for it. See what our satisfied customers have to say about their experience with SoftSell."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-6xl leading-none text-blue-100 font-serif">
                &quot;
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Testimonial content */}
              <p className="text-gray-600 mb-6 relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              
              {/* Author */}
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 