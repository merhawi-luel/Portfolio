function SkillCard({ category, items }) {
  return (
    <div className="skill-card">
      <h4 className="skill-card__title">{category}</h4>
      <ul className="skill-card__list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;