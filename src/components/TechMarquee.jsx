import { getIcon } from "../iconMap";
import "../styles/TechMarquee.css";

function TechMarquee({ items }) {
  const track = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {track.map((item, index) => {
          const Icon = getIcon(item);
          return (
            <span className="marquee__pill" key={index}>
              <Icon className="marquee__icon" />
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TechMarquee;