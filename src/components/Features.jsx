const features = [
  { id: 1, title: 'Быстро', text: 'Мгновенный запуск благодаря Vite.' },
  { id: 2, title: 'Удобно', text: 'Компонентный подход упрощает поддержку.' },
  { id: 3, title: 'Современно', text: 'Актуальный стек технологий.' },
];

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Наши возможности</h2>
        <div className="features__list">
          {features.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
