import { useEffect, useState, useRef } from "react";

const Counter = ({ targetNumber, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let currentNumber = 0;
    const increment = Math.ceil(targetNumber / 100);
    const intervalTime = targetNumber === 25 ? 70 : 20;

    const interval = setInterval(() => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        setCount(targetNumber);
        clearInterval(interval);
      } else {
        setCount(currentNumber);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [hasStarted, targetNumber]);

  return (
    <h1
      ref={counterRef}
      className="text-[37px] font-bold sm:text-[57px] min-w-[10rem] text-white text-center "
    >
      {count}
      {suffix}
      {targetNumber === 25 && (
        <span className="text-[14px] sm:text-[16px] font-semibold mb-1">
          Countries
        </span>
      )}
    </h1>
  );
};

export default Counter;
