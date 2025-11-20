import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Rocket" className="text-primary" size={32} />
            <span className="text-2xl font-bold">Celent Project</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Продукты
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Добро пожаловать в Celent Project
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Здесь вы найдёте много чего интересного и полезного. Celent Project представляет собой полуапи в сфере стандофф 2.
            </p>
            <p className="text-lg text-muted-foreground">
              Наш проект старается выйти в топы, и быть быстрее остальных.
            </p>
            <Link to="/products">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
                Смотреть продукты
              </button>
            </Link>
          </div>
          <div className="relative">
            <img 
              src="https://cdn.poehali.dev/projects/8f202b38-4bda-4f26-b117-9a2030461fbd/files/59d647d9-a4c0-4079-8ea6-dc210bbc8cbd.jpg" 
              alt="Celent Project" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Что ты найдёшь на канале</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Icon name="ShoppingCart" className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Продажа Celent Project</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Ловля наклеек</li>
              <li>• Ловля Лоупрайсов</li>
              <li>• и др.</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Icon name="Play" className="text-accent mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">Показы работы полу-API</h3>
            <p className="text-muted-foreground">
              Реальные тесты, примеры и сравнения работы системы
            </p>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <Icon name="Code" className="text-primary mb-4" size={40} />
            <h3 className="text-xl font-bold mb-3">DevBlog & Гайды</h3>
            <p className="text-muted-foreground">
              Этапы разработки, логи изменений, инсайды и технические советы по настройке
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Подписывайся на канал
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Следи за развитием проекта, смотри всё своими глазами и получай доступ к актуальной версии Celent Project
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
            Перейти в канал
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
