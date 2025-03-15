import React, { useState, useEffect } from "react";
import dealsImg from "../../assets/deals.png"; // Ensure this path is correct

const DealsSection = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15); // Set target date to 15 days from now
    targetDate.setHours(12, 0, 0, 0); // Set the time to 12:00 PM (noon)

    const difference = targetDate - new Date(); // Calculate the difference from now

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section__container deals__container">
      <div className="deals__image">
        <img src={dealsImg} alt="Deals" />
      </div>

      <div className="deals__content">
        <h5>Get Up To 20% Discount</h5>
        <h4>Deals Of This Month</h4>
        <p>
          Our Fashion Deals of the Month are here to make your style dreams a reality without breaking the bank.
          Discover a curated collection of exquisite clothing, accessories, and footwear, all handpicked to elevate your wardrobe.
        </p>

        {/* Countdown Timer */}
        <div className="deals__countdown flex-wrap">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="deals__countdown__card">
              <h4>{value}</h4>
              <p>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;

