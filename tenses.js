window.IJ_TENSES = {
  rows: [
    {id:'present', label:'Present', ru:'настоящее'},
    {id:'past', label:'Past', ru:'прошедшее'},
    {id:'future', label:'Future', ru:'будущее'}
  ],
  cols: [
    {id:'simple', label:'Simple', ru:'факт · регулярно · один раз', hint:'Что происходит вообще: привычка, факт, одно законченное действие.'},
    {id:'cont', label:'Continuous', ru:'процесс в момент', hint:'Что происходит прямо в этот момент: сейчас, в 8 вечера вчера, в 2 часа завтра.'},
    {id:'perf', label:'Perfect', ru:'результат к моменту', hint:'Что уже сделано к какому-то моменту: by / before. Важен результат, а не когда.'},
    {id:'perfcont', label:'Perfect Continuous', ru:'длительность до момента', hint:'Как долго что-то длится или длилось к моменту: for 2 hours, since Monday.'}
  ],
  cells: {
    'present-simple': {
      name:'Present Simple', week:1, status:'done',
      formula:['I / you / we / they + work', 'he / she / it + works', 'отрицание: don\'t / doesn\'t + work', 'вопрос: Do / Does … work?'],
      use:['Привычки и регулярные действия: I work from home on Fridays.', 'Факты, которые всегда верны: Water boils at 100 degrees.', 'Расписание: The meeting starts at ten.', 'Чувства и мнения: I like my job. I think it\'s a good idea.'],
      signals:['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'on Mondays', 'once a week'],
      examples:[['I usually get up at seven.', 'Я обычно встаю в семь.'], ['She doesn\'t work on Sundays.', 'Она не работает по воскресеньям.'], ['Do you live in Batumi?', 'Ты живёшь в Батуми?']],
      traps:['-s только для he / she / it: We has → We have.', 'Есть обычный глагол — нет am / is / are: I am work → I work.', 'В вопросе нужен do / does: Why I need? → Why do I need?']
    },
    'present-cont': {
      name:'Present Continuous', week:2, status:'now',
      formula:['am / is / are + глагол-ing', 'отрицание: am not / isn\'t / aren\'t + -ing', 'вопрос: Am / Is / Are … -ing?'],
      use:['Прямо сейчас, в момент речи: I\'m writing to you now.', 'Временная ситуация, не навсегда: I\'m living in Batumi this year.', 'Запланированное на ближайшее будущее: We\'re meeting at six tomorrow.', 'Изменения и тренды: My English is getting better.'],
      signals:['now', 'right now', 'at the moment', 'today', 'this week', 'Look!', 'Listen!'],
      examples:[['I\'m working on a new project at the moment.', 'Сейчас я работаю над новым проектом.'], ['She isn\'t sleeping, she\'s reading.', 'Она не спит, она читает.'], ['What are you doing?', 'Что ты делаешь?']],
      traps:['Глаголы состояния не берут -ing: I\'m knowing → I know, I\'m liking → I like, I\'m wanting → I want.', 'Не путай с Present Simple: I work in IT (вообще) ≠ I\'m working now (сейчас).', 'Не забывай am / is / are: I working → I\'m working.']
    },
    'present-perf': {
      name:'Present Perfect', week:6, status:'later',
      formula:['have / has + 3-я форма (V3)', 'отрицание: haven\'t / hasn\'t + V3', 'вопрос: Have / Has … V3?'],
      use:['Результат есть сейчас, когда — не важно: I have finished the report.', 'Опыт за всю жизнь: I have been to Italy.', 'Началось в прошлом и продолжается: I have worked in IT for 10 years.', 'Только что: She has just left.'],
      signals:['just', 'already', 'yet', 'ever', 'never', 'since', 'for', 'recently', 'so far'],
      examples:[['I have worked in IT for ten years.', 'Я работаю в IT десять лет.'], ['Have you ever been to London?', 'Ты когда-нибудь был в Лондоне?'], ['She hasn\'t finished the task yet.', 'Она ещё не закончила задачу.']],
      traps:['Нет точного времени: I have seen him yesterday → I saw him yesterday.', 'for + срок, since + точка: for 10 years, since 2016.', 'Твоя фраза: I work for IT 10 years → I have worked in IT for 10 years.']
    },
    'present-perfcont': {
      name:'Present Perfect Continuous', week:15, status:'later',
      formula:['have / has been + глагол-ing', 'отрицание: haven\'t / hasn\'t been + -ing', 'вопрос: Have / Has … been -ing?'],
      use:['Как долго что-то длится до сейчас: I have been learning English for a year.', 'Действие только что закончилось, и виден след: It has been raining — the street is wet.'],
      signals:['for', 'since', 'how long', 'all day', 'lately'],
      examples:[['I have been working on this for two hours.', 'Я работаю над этим уже два часа.'], ['How long have you been living in Georgia?', 'Как давно ты живёшь в Грузии?'], ['She has been studying all morning.', 'Она занимается всё утро.']],
      traps:['Вопрос How long? почти всегда сюда.', 'Глаголы состояния остаются в Present Perfect: I have been knowing → I have known.']
    },
    'past-simple': {
      name:'Past Simple', week:3, status:'later',
      formula:['глагол + -ed или 2-я форма (V2): worked, went, built', 'отрицание: didn\'t + глагол', 'вопрос: Did … глагол?'],
      use:['Законченное действие в прошлом, время известно: I proposed to her last Sunday.', 'Цепочка событий в рассказе: They built a website, but it was awful.', 'Привычка в прошлом: I played football at school.'],
      signals:['yesterday', 'last week', 'in 2016', 'ago', 'when I was…', 'then'],
      examples:[['I listened to the podcast twice today.', 'Сегодня я послушал подкаст дважды.'], ['They didn\'t work much on the app.', 'Они мало работали над приложением.'], ['Did you read the chapter?', 'Ты прочитал главу?']],
      traps:['После didn\'t глагол без -ed: didn\'t worked → didn\'t work.', 'Отрицание не через not: Reggie not work → Reggie didn\'t work.', 'Неправильные глаголы учатся наизусть: build → built, write → wrote, take → took.']
    },
    'past-cont': {
      name:'Past Continuous', week:4, status:'later',
      formula:['was / were + глагол-ing', 'отрицание: wasn\'t / weren\'t + -ing', 'вопрос: Was / Were … -ing?'],
      use:['Процесс в конкретный момент прошлого: At 8 o\'clock yesterday I was reading.', 'Фон, на котором что-то случилось: She was playing basketball when I proposed.', 'Два процесса одновременно: I was cooking while she was working.'],
      signals:['at 8 o\'clock yesterday', 'while', 'when (+ Past Simple)', 'all evening'],
      examples:[['She was playing basketball when I did it.', 'Она играла в баскетбол, когда я это сделал.'], ['What were you doing at 9 p.m.?', 'Что ты делал в 9 вечера?'], ['I wasn\'t sleeping, I was working.', 'Я не спал, я работал.']],
      traps:['Твоя фраза: She plays basketball when I did it → She was playing basketball when I did it.', 'Длинное действие — Continuous, короткое — Simple: I was reading (фон) when the phone rang (событие).']
    },
    'past-perf': {
      name:'Past Perfect', week:27, status:'later',
      formula:['had + 3-я форма (V3)', 'отрицание: hadn\'t + V3', 'вопрос: Had … V3?'],
      use:['Действие случилось раньше другого действия в прошлом: When I arrived, the meeting had already started.', '«Прошлое в прошлом» в рассказах.'],
      signals:['by the time', 'before', 'after', 'already', 'when … had'],
      examples:[['By 2012 they had built the first version.', 'К 2012 году они уже сделали первую версию.'], ['I had never used an iPhone before that.', 'До этого я никогда не пользовался iPhone.'], ['Had she left before you came?', 'Она ушла до того, как ты пришёл?']],
      traps:['Нужен, только когда есть два действия в прошлом и важно, какое раньше. Одно действие — Past Simple.']
    },
    'past-perfcont': {
      name:'Past Perfect Continuous', week:27, status:'later',
      formula:['had been + глагол-ing', 'отрицание: hadn\'t been + -ing', 'вопрос: Had … been -ing?'],
      use:['Как долго что-то длилось до момента в прошлом: I had been working for 10 hours when the bug appeared.'],
      signals:['for', 'since', 'how long', 'before'],
      examples:[['They had been working on the app for a year before it became popular.', 'Они работали над приложением год, прежде чем оно стало популярным.'], ['I was tired because I had been coding all night.', 'Я устал, потому что писал код всю ночь.']],
      traps:['Редкое время. В IELTS Writing почти не нужно, в Speaking — иногда в рассказах.']
    },
    'future-simple': {
      name:'Future Simple', week:5, status:'later',
      formula:['will + глагол', 'отрицание: won\'t + глагол', 'вопрос: Will … глагол?'],
      use:['Решение в момент речи: OK, I\'ll call you back.', 'Предсказание, мнение о будущем: I think it will rain.', 'Обещание, предложение: I will help you.'],
      signals:['tomorrow', 'next week', 'I think', 'probably', 'soon'],
      examples:[['I\'ll send the report tomorrow.', 'Я отправлю отчёт завтра.'], ['It won\'t be easy.', 'Это будет непросто.'], ['Will you be at the office?', 'Ты будешь в офисе?']],
      traps:['Для решённых планов лучше going to: we will go to a café (решил сейчас) vs we\'re going to a café (уже решено).', 'После when / if будущего нет: when I will finish → when I finish.']
    },
    'future-cont': {
      name:'Future Continuous', week:23, status:'later',
      formula:['will be + глагол-ing', 'отрицание: won\'t be + -ing', 'вопрос: Will … be -ing?'],
      use:['Процесс в конкретный момент будущего: At 2 o\'clock tomorrow I\'ll be flying to Italy.', 'Вежливый вопрос о планах: Will you be using the car tonight?'],
      signals:['at 2 o\'clock tomorrow', 'this time next week', 'all day tomorrow'],
      examples:[['This time next year I\'ll be studying in Bologna.', 'В это время через год я буду учиться в Болонье.'], ['Don\'t call at nine, I\'ll be having a stand-up.', 'Не звони в девять, у меня будет созвон.']],
      traps:['Нужен редко. Если сомневаешься — Future Simple или going to.']
    },
    'future-perf': {
      name:'Future Perfect', week:23, status:'later',
      formula:['will have + 3-я форма (V3)', 'отрицание: won\'t have + V3', 'вопрос: Will … have V3?'],
      use:['Будет сделано к моменту в будущем: By December I will have finished phase 1.'],
      signals:['by', 'by the time', 'by then', 'before'],
      examples:[['By next October I will have passed IELTS.', 'К следующему октябрю я уже сдам IELTS.'], ['She will have left by the time you arrive.', 'Она уже уйдёт к тому времени, как ты придёшь.']],
      traps:['Ключевое слово — by. Увидел by + будущая дата — это оно.']
    },
    'future-perfcont': {
      name:'Future Perfect Continuous', week:23, status:'later',
      formula:['will have been + глагол-ing'],
      use:['Как долго что-то будет длиться к моменту в будущем: By June I will have been learning English for a year.'],
      signals:['by … for', 'by the time'],
      examples:[['By 2027 I will have been working in IT for 11 years.', 'К 2027 году я буду работать в IT уже 11 лет.']],
      traps:['Самое редкое время. Для IELTS 6.5 достаточно узнавать его в тексте.']
    }
  }
};

window.IJ_LESSONS = {
 'present-simple': {date:'2026-10-28', blocks:[
  {h:'1. Зачем оно нужно', p:['Present Simple — для того, что происходит вообще: привычки, факты, расписание. Это фотография твоей жизни, а не момент.','I work from home. — Я работаю из дома (вообще).','She reads a lot. — Она много читает (привычка).']},
  {h:'2. to be (am / is / are) — отдельный глагол', p:['«Быть», «являться», «находиться». В русском его пропускают («я инженер»), в английском — никогда.','I am an engineer. · My office is in Batumi. · We are busy.','Отрицание — добавь not: I\'m not tired. She isn\'t at home.','Вопрос — переставь вперёд: Are you busy? Is it late?']},
  {h:'3. Обычные глаголы: формы', table:{head:['Кто','Форма','Пример'],rows:[['I / you / we / they','work','I work from home.'],['he / she / it','works','She works in an office.'],['отрицание','don\'t / doesn\'t + work','He doesn\'t work on Sundays.'],['вопрос','Do / Does … work?','Do you live in Batumi? Does she speak English?']]}},
  {h:'4. Окончание для he / she / it', table:{head:['Глагол кончается на','Добавляем','Пример'],rows:[['почти всё','-s','work → works, live → lives'],['-ch, -sh, -s, -x, -o','-es','watch → watches, go → goes, do → does'],['согласная + y','y → -ies','study → studies'],['гласная + y','-s','play → plays'],['have','особая форма','have → has']]}},
  {h:'5. Слова-сигналы', p:['always, usually, often, sometimes, never, every day, on Mondays, once a week.','Дни недели для привычки — во множественном числе: on Saturdays (по субботам), on Saturday (в эту субботу).']},
  {h:'6. Главное правило', p:['В одном предложении либо am / is / are, либо обычный глагол — не оба сразу. Есть действие (work, live, need) — нужен do / does, а не am / is / are.','❌ I am work in IT. → ✅ I work in IT.','❌ Why I need IELTS? → ✅ Why do I need IELTS?','❌ Are you work from home? → ✅ Do you work from home?']},
  {h:'7. Твои ловушки', p:['-s и has — только для he / she / it: We has → We have, I plays → I play.','Смотри на существительное после your / my: Is your flat near the sea? (flat = it).','live /lɪv/ — жить, leave /liːv/ — уезжать.']}
 ]},
 'present-cont': {date:'2026-11-04', blocks:[
  {h:'1. Зачем оно нужно', p:['В русском одна форма на всё: «я работаю». Она значит и «вообще работаю» (у меня есть работа), и «работаю прямо сейчас» (не мешай). Английский эти два смысла разводит.','I work in IT. — Я работаю в IT. Вообще, факт обо мне. Present Simple.','I\'m working now. — Я сейчас работаю. Прямо в эту минуту. Present Continuous.','Картинка: Present Simple — фотография твоей жизни вообще. Present Continuous — видео, которое снимают прямо сейчас.']},
  {h:'2. Как строится: am / is / are + глагол с -ing', table:{head:['Кто','Форма','Пример'],rows:[['I','am working','I am working. → I\'m working.'],['he / she / it','is working','She is working. → She\'s working.'],['you / we / they','are working','They are working. → They\'re working.']]}, p:['Обе части обязательны. Ты уже знаешь am / is / are с недели 1 — здесь то же самое, просто после них глагол с -ing.']},
  {h:'3. Как добавлять -ing', table:{head:['Глагол','Правило','Пример'],rows:[['обычный','+ ing','work → working, read → reading'],['на -e','убираем e','write → writing, make → making'],['короткий: согласная + гласная + согласная','удваиваем последнюю','sit → sitting, run → running, get → getting'],['на -ie','ie → y','lie → lying']]}},
  {h:'4. Отрицание и вопрос', p:['Всё через am / is / are, никакого do / does.','Отрицание: I\'m not working. She isn\'t sleeping. They aren\'t listening.','Вопрос: Are you working? Is she sleeping? What are you doing?']},
  {h:'5. Когда используем', p:['Прямо сейчас: I\'m writing to you. The cat is sleeping on the sofa.','Временно, в этот период (не обязательно в эту секунду): I\'m reading a book about Snapchat. — в эти дни.','Уже договорились на ближайшее будущее: We\'re meeting at six tomorrow.']},
  {h:'6. Слова-сигналы', p:['Continuous: now, right now, at the moment, today, this week, Look!, Listen!','Simple: always, usually, often, sometimes, never, every day, on Mondays.']},
  {h:'7. Главная ловушка — глаголы состояния', p:['Некоторые глаголы не берут -ing, даже если речь о «сейчас». Это не действия, а состояния: чувства, мысли, обладание.','know, like, love, hate, want, need, understand, believe, have (= иметь), see, hear','❌ I\'m knowing the answer. → ✅ I know the answer.','❌ I\'m wanting coffee. → ✅ I want coffee.','❌ She\'s having a car. → ✅ She has a car.','Но: I\'m having breakfast — можно, потому что здесь have = «есть», это действие.']},
  {h:'8. Сравнение, которое нужно запомнить', table:{head:['Present Simple','Present Continuous'],rows:[['I work from home. (вообще)','I\'m working from home today. (сегодня)'],['She reads a lot. (привычка)','She\'s reading now. (сейчас)'],['We have a stand-up every morning.','We\'re having a stand-up right now.'],['I don\'t work on Sundays.','I\'m not working now.'],['Do you work in IT?','Are you working now?']]}}
 ]}
};
