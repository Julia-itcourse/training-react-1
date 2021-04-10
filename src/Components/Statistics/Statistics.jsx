const Statistics = ({ title, stats }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map((el) => (
          <li key = {el.id}>
            <span>{el.label}</span>
            <span>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
