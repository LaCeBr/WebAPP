import React, { createContext, useContext, useState } from 'react';

// Crear contexto para el carrito
const CartContext = createContext();

// Componente de proveedor de contexto para el carrito
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);


  const addToCart = (item) => {
    console.log('dentro añadir');
    const itemIndex = cart.findIndex((cartItem) => cartItem.nombre === item.nombre);
    if (itemIndex === -1) {
      console.log('nuevo');
      // Si no está en el carrito, agregarlo
      setCart([...cart, item]);
      console.log('carro: ', cart);
    } else {
      console.log('mas');
      // Si ya está en el carrito, incrementar la cantidad
      const updatedCart = [...cart];
      updatedCart[itemIndex].cantidad += 1;
      setCart(updatedCart);
      console.log('actualizado: ',cart);
    }
  };

  const subtractFromCart = (itemName) => {
    console.log('dentro quitar');
    const itemIndex = cart.findIndex((cartItem) => cartItem.nombre === itemName);
    if (itemIndex !== -1) {
      console.log('quitando');
      // Si no está en el carrito, disminuye la cantidad
      const updatedCart = [...cart];
      updatedCart[itemIndex].cantidad -= 1;
      if (updatedCart[itemIndex].cantidad <= 0) {
        // Si la cantidad es menor o igual a cero, eliminar el artículo del carrito
        removeFromCart(cart[itemIndex]);
        console.log('nada: ', cart);
      } else {
        setCart(updatedCart);
        console.log('menos: ',cart);
      }
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  const getFromCart = (itemName) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.nombre === itemName);
    if (itemIndex === -1) {
      return(0);
    } else {
      return(cart[itemIndex].cantidad);
    }
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const extractProductList = () => {
    // Devuelve una copia de los elementos en el carrito
    const productList = cart.map(item => {
      // Modifica los campos cantidad y precio de cada elemento
      return {
        ...item,
        cantidad: item.cantidad/10, // Cambia aquí la cantidad según tu necesidad
        precio: item.precio*item.cantidad/10 // Cambia aquí el precio según tu necesidad
      };
    });
    return (productList);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, subtractFromCart, removeFromCart, getFromCart, isCartOpen, toggleCart, extractProductList }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acceder al contexto del carrito
export function useCart() {
  return useContext(CartContext);
}
