import { useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const items = [
    "Overview",
    "Integrations",
    "Activity",
    "Domains",
    "Usage",
    "Monitoring",
    "Storage",
    "Settings",
  ];

  const [activeItem, setActiveItem] = useState(items[0]);
  const [hoverItem, setHoverItem] = useState("");

  const handleHover = (item: string) => {
    setHoverItem(item);
  };

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div
      className="flex"
      onMouseLeave={() => {
        setHoverItem("");
      }}
    >
      {items.map((item) => (
        <motion.div
          className="relative px-3 py-2.5 leading-none cursor-pointer text-[#999999]"
          key={item}
          onMouseEnter={() => {
            handleHover(item);
          }}
          onClick={() => {
            handleClick(item);
          }}
          whileHover={{
            color: "#ffffff",
          }}
        >
          {hoverItem === item && (
            <motion.div
              layoutId="active"
              className="absolute inset-0 bg-[#333333] rounded"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span
            className={`relative z-20  ${
              activeItem === item ? "text-[#ffffff]" : ""
            }`}
          >
            {item}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Menu;
