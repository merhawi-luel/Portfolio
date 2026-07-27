import { getIcon } from "../iconMap";

function SkillCard({ category, items }) {
  return (
    <div className="skill-card">
      <h4 className="skill-card__title">{category}</h4>
      <ul className="skill-card__list">
        {items.map((item, index) => {
          const Icon = getIcon(item);
          return (
            <li key={index} className="skill-card__item">
              <Icon className="skill-card__icon" />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillCard;