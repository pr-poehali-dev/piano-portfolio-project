import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-semibold">Анна Петрова</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Биография', 'Репертуар', 'Концерты', 'Видео', 'Галерея', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => scrollToSection('контакты')}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Записаться на урок
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-full aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/44d1dd60-7750-44a9-9f98-4493748248ae/files/970aa6a8-358c-41ce-afc9-eb2239f6148d.jpg"
                  alt="Анна Петрова"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <p className="text-accent font-medium tracking-wide">КОНЦЕРТИРУЮЩАЯ ПИАНИСТКА</p>
                <h2 className="text-5xl md:text-6xl font-serif font-semibold leading-tight">
                  Анна Петрова
                </h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Лауреат международных конкурсов, выпускница Московской консерватории.
                Профессиональная исполнительница классической и современной музыки
                с более чем 15-летним опытом концертной деятельности.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('контакты')}
                  className="bg-primary hover:bg-primary/90"
                >
                  Записаться на урок
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('репертуар')}
                >
                  Мой репертуар
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="биография" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Биография</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="space-y-6 text-lg leading-relaxed animate-fade-in">
            <p>
              Анна Петрова родилась в музыкальной семье и начала обучение игре на фортепиано
              в возрасте пяти лет. Окончила Центральную музыкальную школу при Московской
              консерватории и Московскую государственную консерваторию имени П.И. Чайковского.
            </p>
            <p>
              Является лауреатом международных конкурсов в России, Италии, Франции и Германии.
              Выступала с ведущими симфоническими оркестрами в лучших концертных залах мира,
              включая Большой зал Московской консерватории, Берлинскую филармонию и Карнеги-холл.
            </p>
            <p>
              Помимо концертной деятельности, Анна активно занимается педагогической работой,
              воспитывая новое поколение музыкантов. Её ученики неоднократно становились
              победителями престижных конкурсов.
            </p>
          </div>
        </div>
      </section>

      <section id="репертуар" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Репертуар</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                composer: 'Й.С. Бах',
                works: ['Прелюдия и фуга до минор, BWV 847', 'Итальянский концерт, BWV 971', 'Гольдберг-вариации, BWV 988']
              },
              {
                composer: 'В.А. Моцарт',
                works: ['Соната № 11 ля мажор, K. 331', 'Концерт № 21 до мажор, K. 467', 'Фантазия ре минор, K. 397']
              },
              {
                composer: 'Л. ван Бетховен',
                works: ['Соната № 14 "Лунная"', 'Концерт № 5 "Император"', 'Соната № 23 "Аппассионата"']
              },
              {
                composer: 'Ф. Шопен',
                works: ['Баллада № 1 соль минор', 'Ноктюрн ми-бемоль мажор, Op. 9 № 2', 'Этюд "Революционный"']
              },
              {
                composer: 'Ф. Лист',
                works: ['Венгерская рапсодия № 2', 'Концерт № 1 ми-бемоль мажор', 'Сонеты Петрарки']
              },
              {
                composer: 'С.В. Рахманинов',
                works: ['Концерт № 2 до минор', 'Прелюдия до-диез минор', 'Этюды-картины']
              }
            ].map((item, index) => (
              <Card key={index} className="animate-scale-in border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{item.composer}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.works.map((work, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Music" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span>{work}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="концерты" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Концерты</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="space-y-6">
            {[
              {
                date: '15 ноября 2024',
                venue: 'Большой зал Московской консерватории',
                program: 'Сольный концерт: Бах, Моцарт, Шопен',
                time: '19:00'
              },
              {
                date: '3 декабря 2024',
                venue: 'Концертный зал имени Чайковского',
                program: 'С оркестром: Рахманинов - Концерт № 2',
                time: '19:30'
              },
              {
                date: '20 декабря 2024',
                venue: 'Дом музыки, Камерный зал',
                program: 'Камерный вечер: Шуберт, Брамс',
                time: '18:00'
              },
              {
                date: '14 января 2025',
                venue: 'Зарядье, Концертный зал',
                program: 'Новогодний концерт: Классика и джаз',
                time: '20:00'
              }
            ].map((concert, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-serif font-semibold text-accent">
                          {concert.date.split(' ')[0]}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {concert.date.split(' ')[1]} {concert.date.split(' ')[2]}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">{concert.venue}</h3>
                      <p className="text-muted-foreground mb-1">{concert.program}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        <span>{concert.time}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      Билеты
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="видео" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Видео</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Шопен - Баллада № 1', venue: 'Московская консерватория, 2023' },
              { title: 'Рахманинов - Концерт № 2', venue: 'Зарядье, 2024' },
              { title: 'Лист - Венгерская рапсодия № 2', venue: 'Концертный зал, 2023' },
              { title: 'Бах - Гольдберг-вариации (фрагмент)', venue: 'Камерный зал, 2024' }
            ].map((video, index) => (
              <Card key={index} className="animate-scale-in overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <Icon name="Play" size={48} className="text-accent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{video.title}</CardTitle>
                  <CardDescription>{video.venue}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Галерея</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://cdn.poehali.dev/projects/44d1dd60-7750-44a9-9f98-4493748248ae/files/970aa6a8-358c-41ce-afc9-eb2239f6148d.jpg',
              'https://cdn.poehali.dev/projects/44d1dd60-7750-44a9-9f98-4493748248ae/files/9e2c16eb-4fb6-47f9-9eca-350174098101.jpg',
              'https://cdn.poehali.dev/projects/44d1dd60-7750-44a9-9f98-4493748248ae/files/c3b0f3ee-ca07-4c3a-8dd5-4cc859eefefd.jpg',
              '/placeholder.svg',
              '/placeholder.svg',
              '/placeholder.svg'
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square bg-secondary rounded-lg overflow-hidden animate-scale-in hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4">Контакты</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Хотите записаться на уроки фортепиано или пригласить на концерт? Свяжитесь со мной!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon name="Mail" size={24} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-medium">anna.petrova@example.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon name="Phone" size={24} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Телефон</div>
                        <div className="font-medium">+7 (495) 123-45-67</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Адрес</div>
                        <div className="font-medium">Москва, ул. Пречистенка, 13</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="w-12 h-12 rounded-full">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12 rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="w-12 h-12 rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Записаться на урок</CardTitle>
                <CardDescription>Заполните форму, и я свяжусь с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем опыте игры на фортепиано и целях обучения"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-muted-foreground">
            <p className="font-serif text-xl mb-2">Анна Петрова</p>
            <p className="text-sm">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}