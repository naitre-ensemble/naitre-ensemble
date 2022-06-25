import React, { useContext } from "react";
import ThemeContext from "../../contexts/Theme";
import feather from "feather-icons";

const Icon = ({
  type,
  width,
  color,
  fill,
  strokeWidth = "2",
  height,
  className,
  style,
  active,
}) => {
  const { theme } = useContext(ThemeContext);

  const colors = {
    light: {
      stroke: active ? "#29408e" : "#30363d",
      fill: "transparent",
    },
    dark: {
      stroke: `rgba(255,255,255,0.8)`,
      fill: "transparent",
    },
  };

  const buildIconSource = () => {
    return `data:image/svg+xml;utf8,${feather.icons[type].toSvg({
      color: encodeURIComponent(color ? color : colors[theme].stroke),
      width,
      height,
      "stroke-width": strokeWidth,
      fill: encodeURIComponent(fill ? fill : colors[theme].fill),
    })}`;
  };

  return (
    <img
      alt="icon"
      className={className}
      src={buildIconSource()}
      style={style}
    />
  );
};

export default Icon;
