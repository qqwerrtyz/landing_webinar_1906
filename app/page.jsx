// import Header from "./components/Header";
// import GetCourseWidget from "./components/GetCourseWidget";
// import CourseButton from "./components/CourseButton";

// const programCards = [
//   {
//     number: "01",
//     title: "Как выбрать ABA-специалиста",
//     text:
//       "Разберем, какие документы, опыт и подход стоит проверять до начала занятий, и какие обещания должны насторожить",
//   },
//   {
//     number: "02",
//     title: "Когда начинать реабилитацию",
//     text:
//       "Поговорим о раннем старте, первых признаках задержки развития и о том, почему время влияет на формирование навыков",
//   },
//   {
//     number: "03",
//     title: "Как получить помощь фондов",
//     text:
//       "Покажем понятный алгоритм обращения в благотворительные фонды и разберем, какие документы готовить заранее",
//   },
// ];

// const specialistChecklist = [
//   "сертификация и профильное образование",
//   "опыт работы с детьми с РАС и особенностями развития",
//   "индивидуальная программа после оценки навыков",
//   "участие родителей и регулярные отчеты",
//   "этичный подход без обещаний быстро все исправить",
// ];

// const earlyStartItems = [
//   "какие сигналы нельзя игнорировать",
//   "с какого возраста можно начинать занятия",
//   "почему игровой формат помогает вовлечь ребенка",
//   "как семье поддерживать результат дома",
// ];

// const bonuses = [
//   "Чек-лист по выбору ABA-специалиста",
//   "Чек-лист обращения в благотворительные фонды",
//   "Список фондов со ссылками и краткими подсказками",
//   "Секретный бонус только для участников вебинара",
// ];

// export default function Home() {
//   return (
//     <main id="top">
//       <Header />

//       <section style={{backgroundColor: "#C7D5D5"}} className="hero section-pad">
//         <div className="container hero__grid">
//           <div className="hero__content">
//             <div className="eyebrow">Бесплатный онлайн-вебинар для родителей</div>
//             <h1>
//               Как выбрать ABA-специалиста и не упустить время? Как привлечь помощь благотворительного фонда?
//             </h1>
//             <p className="hero__lead">
//               Практический вебинар о том, как оценить специалиста, когда начинать занятия
//               и где искать финансовую поддержку через благотворительные фонды
//             </p>

//             <div className="hero__actions">
//               <a className="btn btn--primary" href="#registration">
//                 Зарегистрироваться на вебинар
//               </a>
//               <a className="btn btn--ghost" href="#program">
//                 Смотреть программу
//               </a>
//             </div>

//             <div className="hero__stats" aria-label="Ключевые преимущества вебинара">
//               <div>
//                 <strong>3 блока</strong>
//                 <span>без воды и сложных терминов</span>
//               </div>
//               <div>
//                 <strong>2 чек-листа</strong>
//                 <span>для участников вебинара</span>
//               </div>
//               <div>
//                 <strong>10+ млн ₽</strong>
//                 <span>привлекли через фонды за 2025 год</span>
//               </div>
//             </div>
//           </div>

//           <div className="hero__visual">
//             <img src="/landing/speaker.jpg" alt="Родитель и ребенок на консультации" />
//             <div className="hero__note">
//               <span>Вебинар поможет понять первые шаги</span>
//               <b>Что делать и куда двигаться</b>
//             </div>
//           </div>
//         </div>
//       </section>

//             <section className="speaker section-pad">
//         <div className="container speaker__card">
//           <div className="speaker__avatar">
//             <img src="/landing/speakerName.png" alt="Спикер вебинара" />
//           </div>
//           <div>
//             <span className="section-kicker">Ведущий вебинара</span>
//             <h2>Светлана Рашитовна Закирова</h2>
//             <p>
//               исполнительный директор ABA-центра «Новая Планета»  магистр психологии, практикующий психолог и сертифицированный поведенческий аналитик
//             </p>
//           </div>
//         </div>
//       </section>


//       <section id="program" className="section-pad section-muted">
//         <div className="container">
//           <div className="section-heading">
//             <span>Программа вебинара</span>
//             <h2>Три темы, которые чаще всего волнуют родителей</h2>
//             <p>
//               Мы собрали вебинар вокруг практических вопросов: как не ошибиться со специалистом,
//               когда начинать занятия и как оформить помощь через фонды
//             </p>
//           </div>

//           <div className="program-grid">
//             {programCards.map((card) => (
//               <article className="program-card" key={card.number}>
//                 <div className="program-card__number">{card.number}</div>
//                 <h3>{card.title}</h3>
//                 <p>{card.text}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="for-whom" className="split-section section-pad">
//         <div className="container split-section__grid">
//           <div className="split-section__media">
//             <img src="/landing/raznica.jpg" alt="Карточка специалиста и отметки проверки" />
//           </div>
//           <div className="split-section__content">
//             <span className="section-kicker">Блок 1</span>
//             <h2>Научитесь видеть разницу между специалистом и красивыми обещаниями</h2>
//             <p>
//               На вебинаре разберем, что важно спросить до начала работы: образование,
//               опыт, супервизия, план занятий, участие родителей и прозрачность результатов
//             </p>
//             <ul className="clean-list">
//               {specialistChecklist.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>

//       <CourseButton />


//       <section style={{backgroundColor: "#C7D5D5"}} className="split-section split-section--reverse section-pad compact-top">
//         <div className="container split-section__grid">
//           <div className="split-section__content">
//             <span className="section-kicker">Блок 2</span>
//             <h2>Поймете, когда пора начинать занятия и почему не стоит ждать</h2>
//             <p>
//               Обсудим раннее вмешательство, роль семьи и то, как выстраивать первые шаги,
//               если ребенок не говорит, избегает общения или появляются сложности с поведением
//             </p>
//             <div className="pill-list">
//               {earlyStartItems.map((item) => (
//                 <span key={item}>{item}</span>
//               ))}
//             </div>
//           </div>
//           <div className="split-section__media">
//             <img src="/landing/kogda.jpg" alt="Схема раннего старта занятий" />
//           </div>
//         </div>
//       </section>

//       <section id="funds" className="funds section-pad">
//         <div className="container funds__grid">
//           <div className="funds__content">
//             <span className="section-kicker">Блок 3</span>
//             <h2>Как обратиться в благотворительный фонд и не потеряться в документах</h2>
//             <p>
//               За 2025 год мы помогли привлечь более 10 млн рублей через благотворительные фонды.
//               На вебинаре покажем, как выбирать фонд, как писать обращение и какие документы обычно готовят заранее
//             </p>
//             <div className="funds__steps">
//               <div>
//                 <b>1</b>
//                 <span>Найти фонд, который работает с вашим запросом</span>
//               </div>
//               <div>
//                 <b>2</b>
//                 <span>Подготовить понятное описание ситуации и счет на услуги</span>
//               </div>
//               <div>
//                 <b>3</b>
//                 <span>Собрать актуальные документы и отправить заявку</span>
//               </div>
//             </div>
//           </div>
//           <div className="funds__media">
//             <img src="/landing/fonds.jpg" alt="Помощь через благотворительные фонды" />
//           </div>
//         </div>
//       </section>
//       <CourseButton />

//       <section id="bonuses" style={{backgroundColor: "#C7D5D5"}} className="bonuses section-pad section-muted">
//         <div className="container bonuses__grid">
//           <div>
//             <span className="section-kicker">Подарки участникам</span>
//             <h2>После регистрации вы получите материалы, которые можно применять сразу</h2>
//             <p>
//               Чек-листы помогут не держать все в голове: вопросы специалисту, признаки надежного подхода,
//               порядок обращения в фонды и ссылки на организации
//             </p>
//           </div>
//           <div className="bonus-card">
//             <img src="/landing/cheklists.jpg" alt="Чек-листы для участников вебинара" />
//             <ul>
//               {bonuses.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </section>


//       <section id="registration" className="registration section-pad">
//         <div className="container registration__grid">
//           <div className="registration__content">
//             <span className="section-kicker">Регистрация</span>
//             <h2>Запишитесь на вебинар и заберите чек-листы</h2>
//             <h2>Если форма не загружается, отключите VPN и обновите страницу</h2>
//             <p>
//               Оставьте контакты, чтобы получить ссылку на вебинар, напоминание и материалы
//               для родителей: чеклист выбор ABA-специалиста и чеклист с пошаговой инструкцией благотворительные фонды
//             </p>
//             <div className="registration__highlight">
//               <b>Секретный бонус</b>
//               <span>будет открыт только тем, кто придет в прямой эфир</span>
//             </div>
//           </div>
//           <GetCourseWidget />
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="container footer__inner">
//           <p>© Новая Планета. Посадочная страница вебинара</p>
//           <a href="https://novaya-planeta.ru/privacy-policy/">Политика конфиденциальности</a>
//           <a href="#top">Вернуться наверх</a>
//         </div>
//       </footer>
//     </main>
//   );
// }



import Script from "next/script";
import Header from "./components/Header";
import GetCourseWidget from "./components/GetCourseWidget";
import CourseButton from "./components/CourseButton";

const programCards = [
  {
    number: "01",
    title: "Как выбрать ABA-специалиста",
    text:
      "Разберем, какие документы, опыт и подход стоит проверять до начала занятий, и какие обещания должны насторожить",
  },
  {
    number: "02",
    title: "Когда начинать реабилитацию",
    text:
      "Поговорим о раннем старте, первых признаках задержки развития и о том, почему время влияет на формирование навыков",
  },
  {
    number: "03",
    title: "Как получить помощь фондов",
    text:
      "Покажем понятный алгоритм обращения в благотворительные фонды и разберем, какие документы готовить заранее",
  },
];

const specialistChecklist = [
  "сертификация и профильное образование",
  "опыт работы с детьми с РАС и особенностями развития",
  "индивидуальная программа после оценки навыков",
  "участие родителей и регулярные отчеты",
  "этичный подход без обещаний быстро все исправить",
];

const earlyStartItems = [
  "какие сигналы нельзя игнорировать",
  "с какого возраста можно начинать занятия",
  "почему игровой формат помогает вовлечь ребенка",
  "как семье поддерживать результат дома",
];

const bonuses = [
  "Чек-лист по выбору ABA-специалиста",
  "Чек-лист обращения в благотворительные фонды",
  "Список фондов со ссылками и краткими подсказками",
  "Секретный бонус только для участников вебинара",
];

export default function Home() {
  return (
    <main id="top">
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110088888', 'ym');

            ym(110088888, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/110088888"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      <Header />

      <section style={{backgroundColor: "#C7D5D5"}} className="hero section-pad">
        <div className="container hero__grid">
          <div className="hero__content">
            <div className="eyebrow">Бесплатный онлайн-вебинар для родителей</div>
            <div className="anonseDateWrapper">
              <span className="anonseDate">25 июня в  по МСК</span>
            </div>
            <h1>
              Как выбрать ABA-специалиста и не упустить время? Как привлечь помощь благотворительного фонда?
            </h1>
            <p className="hero__lead">
              Практический вебинар о том, как оценить специалиста, когда начинать занятия
              и где искать финансовую поддержку через благотворительные фонды
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="#registration">
                Зарегистрироваться на вебинар
              </a>
              <a className="btn btn--ghost" href="#program">
                Смотреть программу
              </a>
            </div>

            <div className="hero__stats" aria-label="Ключевые преимущества вебинара">
              <div>
                <strong>3 блока</strong>
                <span>без воды и сложных терминов</span>
              </div>
              <div>
                <strong>2 чек-листа</strong>
                <span>для участников вебинара</span>
              </div>
              <div>
                <strong>10+ млн ₽</strong>
                <span>привлекли через фонды за 2025 год</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <img src="/landing/speaker.jpg" alt="Родитель и ребенок на консультации" />
            <div className="hero__note">
              <span>Вебинар поможет понять первые шаги</span>
              <b>Что делать и куда двигаться</b>
            </div>
          </div>
        </div>
      </section>

            <section className="speaker section-pad">
        <div className="container speaker__card speaker__card-top">
          <div className="speaker__avatar">
            <img src="/landing/speakerName.png" alt="Спикер вебинара" />
          </div>
          <div>
            <span className="section-kicker">Ведущий вебинара</span>
            <h2>Светлана Рашитовна Закирова</h2>
            <p>
              Исполнительный директор ABA-центра «Новая Планета»  магистр психологии, практикующий психолог и сертифицированный поведенческий аналитик
            </p>
          </div>
        </div>

        <div className="container speaker__card">
          <div className="speaker__avatar">
            <img src="/landing/speakerName2.png" alt="Спикер вебинара" />
          </div>
          <div>
            <span className="section-kicker">Ведущий вебинара</span>
            <h2>Эрнест Игоревич Бронников</h2>
            <p>
              Помощник исполнительного директора ABA‑центра «Новая Планета», специалист по работе с благотворительными фондами
            </p>
          </div>
        </div>
      </section>


      <section id="program" className="section-pad section-muted">
        <div className="container">
          <div className="section-heading">
            <span>Программа вебинара на 25 июня в 18:00 по МСК</span>
            <h2>Три темы, которые чаще всего волнуют родителей</h2>
            <p>
              Мы собрали вебинар вокруг практических вопросов: как не ошибиться со специалистом,
              когда начинать занятия и как оформить помощь через фонды
            </p>
          </div>

          <div className="program-grid">
            {programCards.map((card) => (
              <article className="program-card" key={card.number}>
                <div className="program-card__number">{card.number}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="for-whom" className="split-section section-pad">
        <div className="container split-section__grid">
          <div className="split-section__media">
            <img src="/landing/raznica.jpg" alt="Карточка специалиста и отметки проверки" />
          </div>
          <div className="split-section__content">
            <span className="section-kicker">Блок 1</span>
            <h2>Научитесь видеть разницу между специалистом и красивыми обещаниями</h2>
            <p>
              На вебинаре разберем, что важно спросить до начала работы: образование,
              опыт, супервизия, план занятий, участие родителей и прозрачность результатов
            </p>
            <ul className="clean-list">
              {specialistChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CourseButton />


      <section style={{backgroundColor: "#C7D5D5"}} className="split-section split-section--reverse section-pad compact-top">
        <div className="container split-section__grid">
          <div className="split-section__content">
            <span className="section-kicker">Блок 2</span>
            <h2>Поймете, когда пора начинать занятия и почему не стоит ждать</h2>
            <p>
              Обсудим раннее вмешательство, роль семьи и то, как выстраивать первые шаги,
              если ребенок не говорит, избегает общения или появляются сложности с поведением
            </p>
            <div className="pill-list">
              {earlyStartItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="split-section__media">
            <img src="/landing/kogda.jpg" alt="Схема раннего старта занятий" />
          </div>
        </div>
      </section>

      <section id="funds" className="funds section-pad">
        <div className="container funds__grid">
          <div className="funds__content">
            <span className="section-kicker">Блок 3</span>
            <h2>Как обратиться в благотворительный фонд и не потеряться в документах</h2>
            <p>
              За 2025 год мы помогли привлечь более 10 млн рублей через благотворительные фонды.
              На вебинаре покажем, как выбирать фонд, как писать обращение и какие документы обычно готовят заранее
            </p>
            <div className="funds__steps">
              <div>
                <b>1</b>
                <span>Найти фонд, который работает с вашим запросом</span>
              </div>
              <div>
                <b>2</b>
                <span>Подготовить понятное описание ситуации и счет на услуги</span>
              </div>
              <div>
                <b>3</b>
                <span>Собрать актуальные документы и отправить заявку</span>
              </div>
            </div>
          </div>
          <div className="funds__media">
            <img src="/landing/fonds.jpg" alt="Помощь через благотворительные фонды" />
          </div>
        </div>
      </section>
      <CourseButton />

      <section id="bonuses" style={{backgroundColor: "#C7D5D5"}} className="bonuses section-pad section-muted">
        <div className="container bonuses__grid">
          <div>
            <span className="section-kicker">Подарки участникам</span>
            <h2>После регистрации вы получите материалы, которые можно применять сразу</h2>
            <p>
              Чек-листы помогут не держать все в голове: вопросы специалисту, признаки надежного подхода,
              порядок обращения в фонды и ссылки на организации
            </p>
          </div>
          <div className="bonus-card">
            <img src="/landing/cheklists.jpg" alt="Чек-листы для участников вебинара" />
            <ul>
              {bonuses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>


      <section id="registration" className="registration section-pad">
        <div className="container registration__grid">
          <div className="registration__content">
            <span className="section-kicker">Регистрация</span>
            <h2>Запишитесь на вебинар и заберите чек-листы</h2>
            <h2>Если форма не загружается, отключите VPN и обновите страницу</h2>
            <p>
              Оставьте контакты, чтобы получить ссылку на вебинар, напоминание и материалы
              для родителей: чеклист выбор ABA-специалиста и чеклист с пошаговой инструкцией благотворительные фонды
            </p>
            <div className="registration__highlight">
              <b>Секретный бонус</b>
              <span>будет открыт только тем, кто придет на вебинар</span>
            </div>
          </div>
          <GetCourseWidget />
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <p>© Новая Планета. Посадочная страница вебинара</p>
          <a href="https://novaya-planeta.ru/privacy-policy/">Политика конфиденциальности</a>
          <a href="#top">Вернуться наверх</a>
        </div>
      </footer>
    </main>
  );
}
