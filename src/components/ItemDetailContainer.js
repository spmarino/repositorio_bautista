import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
let productosIniciales = [
  {
    id: 1,
    name: "Miel de Eucaliptus",
    price: 1000,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
  {
    id: 2,
    name: "Miel de Naranja",
    price: 900,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
  {
    id: 3,
    name: "Miel de Limón",
    price: 800,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
  {
    id: 4,
    name: "Miel de Mistol",
    price: 1200,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
  {
    id: 5,
    name: "Jalea Real",
    price: 2500,
    img: "https://i.blogs.es/3c4173/jalea-real_bote/840_560.jpg",
    stock: 5,
  },
];

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState();
  const { id } = useParams();

  useState();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 3000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProducto(respuestaDeLaApi.find((product) => product.id === +id));
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return (
    <div>
      {loading ? (
        <p>"Cargando el producto elegido..."</p>
      ) : (
        <ItemDetail
          name={producto.name}
          img={producto.img}
          stock={producto.stock}
          price={producto.price}
          descripcion={producto.descripcion}
          temporada={producto.temporada}
          region={producto.region}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
