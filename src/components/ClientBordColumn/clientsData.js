const clients = [
    {
        id: 1,
        fullName: "Иванов Иван Иванович",
        phone: "+7 (123) 456-78-90",
        createdAt: "2024-05-21T10:00:00Z",
        source: "Реклама в Instagram",
        price: 5000,
        comment: "Первый заказ"
    },
    {
        id: 2,
        fullName: "Петров Петр Петрович",
        phone: "+7 (234) 567-89-01",
        createdAt: "2024-05-22T11:30:00Z",
        source: "Поиск в Google",
        price: 7500,
        comment: "Интересовался скидками"
    },
    {
        id: 3,
        fullName: "Сидорова Анна Сергеевна",
        phone: "+7 (345) 678-90-12",
        createdAt: "2024-05-23T09:15:00Z",
        source: "Рекомендация друга",
        price: 10000,
        comment: "Постоянный клиент"
    },
    {
        id: 4,
        fullName: "Кузнецов Дмитрий Алексеевич",
        phone: "+7 (456) 789-01-23",
        createdAt: "2024-05-24T14:45:00Z",
        source: "Реклама в ВКонтакте",
        price: 3000,
        comment: "Нужна консультация"
    },
    {
        id: 5,
        fullName: "Смирнова Екатерина Викторовна",
        phone: "+7 (567) 890-12-34",
        createdAt: "2024-05-25T16:20:00Z",
        source: "Email-рассылка",
        price: 6000,
        comment: "Заказ на подарок"
    },
    {
        id: 6,
        fullName: "Федоров Артем Игоревич",
        phone: "+7 (678) 901-23-45",
        createdAt: "2024-05-26T12:10:00Z",
        source: "Яндекс.Директ",
        price: 8500,
        comment: "Срочный заказ"
    },
    {
        id: 7,
        fullName: "Морозова Ольга Дмитриевна",
        phone: "+7 (789) 012-34-56",
        createdAt: "2024-05-27T13:50:00Z",
        source: "Facebook",
        price: 4500,
        comment: "Хочет узнать о новинках"
    },
    {
        id: 8,
        fullName: "Николаев Сергей Владимирович",
        phone: "+7 (890) 123-45-67",
        createdAt: "2024-05-28T17:30:00Z",
        source: "Оффлайн-реклама",
        price: 12000,
        comment: "Корпоративный заказ"
    },
    {
        id: 9,
        fullName: "Волкова Мария Андреевна",
        phone: "+7 (901) 234-56-78",
        createdAt: "2024-05-29T10:45:00Z",
        source: "ТикТок",
        price: 5500,
        comment: "Молодой клиент"
    },
    {
        id: 10,
        fullName: "Белов Алексей Николаевич",
        phone: "+7 (012) 345-67-89",
        createdAt: "2024-05-30T15:00:00Z",
        source: "Телеграм-канал",
        price: 7000,
        comment: "Планирует повторный заказ"
    }
];

const clientsStatus ={
    application: [ 5, 8],  // ID клиентов в статусе "Заявка"
    processing: [1, 2, 3],
    in_progress: [4, 6],
    completed: [7]    
    }



export default {clients, clientsStatus}