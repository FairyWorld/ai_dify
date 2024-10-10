const translation = {
  steps: {
    header: {
      creation: 'Створити Знання',
      update: 'Додати дані',
    },
    one: 'Виберіть джерело даних',
    two: 'Попередня обробка та очищення тексту',
    three: 'Виконати та завершити',
  },
  error: {
    unavailable: 'Ці Знання недоступні',
  },
  stepOne: {
    filePreview: 'Попередній перегляд файлу',
    pagePreview: 'Попередній перегляд сторінки',
    dataSourceType: {
      file: 'Імпортувати з текстового файла',
      notion: 'Синхронізувати з Notion',
      web: 'Синхронізувати з веб-сайту',
    },
    uploader: {
      title: 'Завантажити текстовий файл',
      button: 'Перетягніть файл або',
      browse: 'Оберіть',
      tip: 'Підтримуються {{supportTypes}}. Максимум {{size}} МБ кожен.',
      validation: {
        typeError: 'Тип файлу не підтримується',
        size: 'Файл занадто великий. Максимум – {{size}} МБ',
        count: 'Не підтримується завантаження кількох файлів',
        filesNumber: 'Ліміт масового завантаження {{filesNumber}}.',
      },
      cancel: 'Скасувати',
      change: 'Змінити',
      failed: 'Завантаження не вдалося',
    },
    notionSyncTitle: 'Notion не підключено',
    notionSyncTip: 'Для синхронізації з Notion спочатку потрібно встановити зв’язок із Notion.',
    connect: 'Перейти до підключення',
    button: 'далі',
    emptyDatasetCreation: 'Я хочу створити порожні Знання',
    modal: {
      title: 'Створити порожні Знання',
      tip: 'Порожні Знання не будуть містити документів, ви зможете завантажити документи в будь-який час.',
      input: 'Назва Знань',
      placeholder: 'Введіть, будь ласка',
      nameNotEmpty: 'Ім’я не може бути порожнім',
      nameLengthInvalid: 'Ім’я має бути від 1 до 40 символів',
      cancelButton: 'Скасувати',
      confirmButton: 'Створити',
      failed: 'Створення не вдалося',
    },
    website: {
      totalPageScraped: 'Всього вискоблених сторінок:',
      run: 'Бігти',
      configure: 'Настроїти',
      limit: 'Межа',
      selectAll: 'Вибрати все',
      unknownError: 'Невідома помилка',
      maxDepth: 'Максимальна глибина',
      crawlSubPage: 'Сканування підсторінок',
      firecrawlDocLink: 'https://docs.dify.ai/guides/knowledge-base/sync-from-website',
      preview: 'Попередній перегляд',
      fireCrawlNotConfigured: 'Firecrawl не налаштовано',
      includeOnlyPaths: 'Включати лише контури',
      options: 'Параметри',
      resetAll: 'Скинути все',
      excludePaths: 'Виключення контурів',
      firecrawlDoc: 'Документація Firecrawl',
      exceptionErrorTitle: 'Виняток стався під час виконання завдання Firecrawl:',
      firecrawlTitle: 'Видобування веб-вмісту за допомогою 🔥Firecrawl',
      scrapTimeInfo: 'Викрадено {{total}} сторінок загалом протягом {{time}}s',
      fireCrawlNotConfiguredDescription: 'Налаштуйте Firecrawl за допомогою ключа API, щоб використовувати його.',
      extractOnlyMainContent: 'Витягуйте лише основний контент (без заголовків, навігаторів, нижніх колонтитулів тощо)',
      maxDepthTooltip: 'Максимальна глибина для сканування щодо введеної URL-адреси. Глибина 0 просто зішкрібає сторінку введеного url, глибина 1 шкребе url і все після введеногоURL + один /, і так далі.',
      jinaReaderDocLink: 'https://jina.ai/reader',
      chooseProvider: 'Оберіть провайдера',
      jinaReaderNotConfiguredDescription: 'Налаштуйте Jina Reader, ввівши безкоштовний API-ключ для доступу.',
      jinaReaderDoc: 'Дізнайтеся більше про Jina Reader',
      useSitemapTooltip: 'Дотримуйтесь карти сайту, щоб просканувати сайт. Якщо ні, Jina Reader скануватиметься ітеративно залежно від релевантності сторінки, отримуючи менше, але якісніших сторінок.',
      jinaReaderNotConfigured: 'Jina Reader не налаштована',
      jinaReaderTitle: 'Перетворіть весь сайт на Markdown',
      useSitemap: 'Використовуйте карту сайту',
    },
  },
  stepTwo: {
    segmentation: 'Налаштування фрагментації',
    auto: 'Автоматично',
    autoDescription: 'Автоматично встановлює правила  фрагментації та попередньої обробки. Незнайомим користувачам рекомендується обрати цей пункт.',
    custom: 'Вручну',
    customDescription: 'Налаштуйте власні правила фрагментації, довжину фрагментів, правила попередньої обробки тощо.',
    separator: 'Ідентифікатор фрагмента',
    separatorPlaceholder: 'Наприклад, новий рядок (\\\\n) або спеціальний роздільник (наприклад, "***")',
    maxLength: 'Максимальна довжина фрагмента',
    overlap: 'Перекриття фрагмента',
    overlapTip: 'Налаштування перекриття фрагментів може підтримувати семантичний зв’язок між ними, покращуючи ефект отримання даних. Рекомендується встановити 10%-25% від максимального розміру фрагмента.',
    overlapCheck: 'перекриття фрагмента не повинно бути більшим за максимальну довжину фрагмента',
    rules: 'Правила попередньої обробки тексту',
    removeExtraSpaces: 'Замінити послідовні пробіли, нові рядки й табуляції',
    removeUrlEmails: 'Видалити всі URL-адреси та адреси електронної пошти',
    removeStopwords: 'Видалити стоп-слова, наприклад, такі як "a", "an", "the"',
    preview: 'Підтвердити та попередньо переглянути',
    reset: 'Скинути',
    indexMode: 'Режим індексації',
    qualified: 'Високоякісний',
    recommend: 'Рекомендовано',
    qualifiedTip: 'Виклик стандартного інтерфейсу системного вбудовування для обробки, щоб забезпечити більш високу точність, коли користувачі подають запит.',
    warning: 'Будь ласка, спочатку налаштуйте ключ API постачальника моделі.',
    click: 'Перейти до налаштувань',
    economical: 'Економний',
    economicalTip: 'Використовуйте автономні векторизатори, індекси ключових слів тощо, щоб знизити точність без використання токенів',
    QATitle: 'Сегментація у форматі "питання та відповідь"',
    QATip: 'Увімкнення цієї опції споживатиме більше токенів',
    QALanguage: 'Сегментація з використанням',
    estimateCost: 'Оцінка',
    estimateSegment: 'Орієнтовні фрагменти',
    segmentCount: 'фрагментів',
    calculating: 'Розраховується...',
    fileSource: 'Попередня обробка документа',
    notionSource: 'Попередня обробка сторінок',
    other: ' та інші ',
    fileUnit: ' файли',
    notionUnit: ' сторінки',
    previousStep: 'Попередній крок',
    nextStep: 'Зберегти та обробити',
    save: 'Зберегти та обробити',
    cancel: 'Скасувати',
    sideTipTitle: 'Навіщо розбивати на фрагменти та попередньо обробляти?',
    sideTipP1: 'При роботі з текстовими даними фрагментація та очищення є двома важливими етапами попередньої обробки.',
    sideTipP2: 'Сегментація розбиває довгий текст на абзаци для кращого сприйняття моделями. Це підвищує якість і релевантність результатів роботи моделей.',
    sideTipP3: 'Очищення видаляє непотрібні символи та форматування, роблячи Знання чистішими та легшими для аналізу.',
    sideTipP4: 'Правильна фрагментація та очищення покращують продуктивність моделі, забезпечуючи більш точні та цінні результати.',
    previewTitle: 'Попередній перегляд',
    previewTitleButton: 'Попередній перегляд',
    previewButton: 'Зміна вмісту на формат Q&A',
    previewSwitchTipStart: 'Поточний попередній перегляд має текстовий формат, зміна способу подання на формат запитань та відповідей ',
    previewSwitchTipEnd: ' потребує додаткових токенів',
    characters: 'символів',
    indexSettingTip: 'Щоб змінити метод індексування, будь ласка, перейдіть до ',
    retrievalSettingTip: 'Щоб змінити метод індексування, будь ласка, перейдіть до ',
    datasetSettingLink: 'Налаштування знань.',
    webpageUnit: 'Сторінок',
    websiteSource: 'Веб-сайт попередньої обробки',
    separatorTip: 'Роздільник – це символ, який використовується для поділу тексту. \\n\\n та \\n є часто використовуваними роздільниками для відокремлення абзаців та рядків. У поєднанні з комами (\\n\\n,\\n) абзаци будуть розділені лініями, якщо вони перевищують максимальну довжину фрагмента. Ви також можете використовувати спеціальні роздільники, визначені вами (наприклад, ***).',
  },
  stepThree: {
    creationTitle: '🎉 Знання створено',
    creationContent: 'Ми автоматично назвали Знання, ви можете змінити його в будь-який час',
    label: 'Назва знань',
    additionTitle: '🎉 Документ завантажено',
    additionP1: 'Документ було завантажено до Знання',
    additionP2: ', ви можете знайти його в списку документів Знання.',
    stop: 'Зупинити обробку',
    resume: 'Відновити обробку',
    navTo: 'Перейти до документа',
    sideTipTitle: 'Що далі',
    sideTipContent: 'Після завершення індексування документа Знання можна інтегрувати в додаток як контекст. Налаштування контексту можна знайти на сторінці оркестрації підказок. Ви також можете створити його як незалежний плагін індексування ChatGPT для релізу.',
    modelTitle: 'Ви впевнені, що хочете зупинити вбудовування?',
    modelContent: 'Якщо вам потрібно буде відновити обробку пізніше, ви продовжите з того місця, де зупинилися.',
    modelButtonConfirm: 'Підтвердити',
    modelButtonCancel: 'Скасувати',
  },
  firecrawl: {
    getApiKeyLinkText: 'Отримайте свій API-ключ від firecrawl.dev',
    configFirecrawl: 'Налаштування 🔥Firecrawl',
    apiKeyPlaceholder: 'Ключ API від firecrawl.dev',
  },
  jinaReader: {
    apiKeyPlaceholder: 'Ключ API від jina.ai',
    configJinaReader: 'Налаштування Jina Reader',
    getApiKeyLinkText: 'Отримайте безкоштовний API-ключ за адресою jina.ai',
  },
}

export default translation
