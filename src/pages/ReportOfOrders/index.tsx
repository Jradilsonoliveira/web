import React, { FormEvent, useState, useEffect } from 'react';

import Input2 from '../../components/Input2';
import api from '../../services/apiClient';

interface Order {
  order_products: {
    name: string;
    quantity: string;
    id: string;
  };
}

const ReportOfOrders: React.FC = () => {
  const [date, setDate] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);

  console.log('minha data', date);
  console.log('objeto - ', orders);

  async function searchOrder(e: FormEvent): Promise<void> {
    e.preventDefault();
  }

  useEffect(() => {
    async function loadOrders(): Promise<void> {
      const response = await api.get('orders', {
        params: {
          date,
        },
      });
      setOrders(response.data);
    }
    loadOrders();
  }, [date]);

  return (
    <>
      <form onSubmit={searchOrder}>
        <Input2
          type="Date"
          name="date"
          label="Data"
          value={date}
          onChange={e => {
            setDate(e.target.value);
          }}
        />
        <button type="submit">Buscar</button>
      </form>

      <table cellSpacing={0}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Vendeu</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order.order_products.id}>
              <td>{order.order_products.name}</td>
              <td>{order.order_products.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ReportOfOrders;
