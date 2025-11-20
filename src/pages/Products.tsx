import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Celent Project - Ловля наклеек",
      description: "Автоматизированная система для быстрой ловли наклеек в Standoff 2. Быстрее конкурентов, стабильная работа.",
      price: "По запросу",
      features: [
        "Высокая скорость работы",
        "Автоматическое обновление",
        "Техподдержка 24/7",
        "Регулярные обновления"
      ],
      icon: "https://cdn.poehali.dev/projects/8f202b38-4bda-4f26-b117-9a2030461fbd/files/5ab77737-b371-4383-9089-a472a5be26d6.jpg"
    },
    {
      id: 2,
      name: "Celent Project - Ловля Лоупрайсов",
      description: "Профессиональный инструмент для отслеживания и покупки низких цен на торговой площадке.",
      price: "По запросу",
      features: [
        "Мгновенное реагирование",
        "Фильтры по цене",
        "История операций",
        "Уведомления о сделках"
      ],
      icon: ""
    },
    {
      id: 3,
      name: "Celent Project - Универсальный",
      description: "Полный набор инструментов для работы с торговой площадкой Standoff 2. Все функции в одном пакете.",
      price: "По запросу",
      features: [
        "Все модули включены",
        "Приоритетная поддержка",
        "Эксклюзивные функции",
        "Пожизненные обновления"
      ],
      icon: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Rocket" className="text-primary" size={32} />
            <span className="text-2xl font-bold">Celent Project</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/products" className="text-primary font-semibold">
              Продукты
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Наши продукты</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональные решения для работы с торговой площадкой Standoff 2
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden">
              {product.icon ? (
                <img 
                  src={product.icon} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Package" className="text-white" size={64} />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Узнать подробнее
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Icon name="Info" className="text-primary flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold mb-3">Как приобрести</h3>
              <p className="text-muted-foreground mb-4">
                Для получения информации о ценах, условиях покупки и демо-доступе свяжитесь с нами через канал или напишите напрямую.
              </p>
              <p className="text-muted-foreground">
                Все продукты регулярно обновляются, включают техническую поддержку и гарантию работы.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
