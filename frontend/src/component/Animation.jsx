import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    initials: 'JD',
    message: '"Amour changed my life. I met my fiancé here after just two weeks!"',
    author: '— Jessica D., New York'
  },
  {
    initials: 'MT',
    message: '"The quality of matches is unparalleled. Worth every penny."',
    author: '— Michael T., London'
  }
];

const AnimatedTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 hidden md:block">
      {testimonials.map((t, index) => (
        <div
          key={index}
          className="testimonial bg-black/15 backdrop-blur-sm p-4 rounded-lg"
          style={{
            display: index === currentIndex ? 'block' : 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-300 flex-shrink-0 flex items-center justify-center text-brand-900 font-semibold">
              {t.initials}
            </div>
            <div>
              <p className="text-sm">{t.message}</p>
              <p className="text-xs text-brand-200 mt-1">{t.author}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTestimonials;
