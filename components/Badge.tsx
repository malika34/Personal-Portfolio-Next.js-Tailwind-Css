"use client";
import CountUp from "react-countup";

interface BadgeProps {
  containerStyles: string;
  icon: React.ReactNode;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary"> {icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp end={endCountNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="text-black leading-none max-w-[70px] text-[15px] font-semibold">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
