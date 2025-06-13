import { useEffect, useState } from 'react';

const StatsSection = () => {
  const stats = [
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 500, suffix: "+", label: "Healthcare Partners" },
    { number: 100, suffix: "+", label: "Medical Devices" },
    { number: "24/7", label: "Customer Support" }
  ];

  const [counts, setCounts] = useState(Array(stats.length).fill(0));

  // 🔧 Adjust these two to control speed:
  const SPEED = 30;          // ms between updates (lower = faster)
  const STEPS = 100;          // total steps (higher = smoother/slower)

  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      if (typeof stat.number === 'string') return null;

      let count = 0;
      const target = stat.number;
      const increment = Math.ceil(target / STEPS); // 🔧 Controls smoothness

      const interval = setInterval(() => {
        count += increment;
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = count >= target ? target : count;
          return updated;
        });

        if (count >= target) clearInterval(interval);
      }, SPEED); // 🔧 Controls animation interval

      return interval;
    });

    return () => intervals.forEach(id => id && clearInterval(id));
  }, []);

  return (
    <div className="bg-white py-4 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center border rounded rounded-xl bg-green-50 border-green-500 p-8 group">
              <div className="text-2xl sm:text-4xl font-bold text-slate-800 mb-2">
                {typeof stat.number === 'string'
                  ? stat.number
                  : `${counts[index]}${stat.suffix || ''}`}
              </div>
              <div className="text-lg sm:text-xl text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
