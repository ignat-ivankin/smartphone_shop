// Простой контроллер для оформления заказа
const createOrder = (req, res) => {
    const { name, phone, product } = req.body;
  
    // Проверка на обязательные поля
    if (!name || !phone || !product) {
      return res.status(400).json({ message: 'Все поля должны быть заполнены' });
    }
  
    // Просто возвращаем полученные данные как подтверждение
    res.status(200).json({
      message: `Заказ на товар ${product} оформлен для ${name}`,
    });
  };
  
  export { createOrder };
  