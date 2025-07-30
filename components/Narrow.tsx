"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: BadgeCheck,
    value: 18,
    label: "Happy Clients",
  },
  {
    icon: Users,
    value: 18,
    label: "Satisfied Families",
  },
  {
    icon: Clock,
    value: 18,
    label: "Projects On Time",
  },
];

const StatCard = ({ icon: Icon, label, value }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const step = Math.ceil(end / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="flex flex-col items-center justify-center text-white/90"
    >
      <Icon className="w-8 h-8 mb-2 text-white" />
      <div className="text-3xl font-bold">{count}+</div>
      <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{label}</div>
    </motion.div>
  );
};

const Narrow = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4 bg-[rgba(0,0,0,0.4)] backdrop-blur-md border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Narrow;
