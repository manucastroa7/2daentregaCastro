/* import React, {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [detalle, setDetalle] = useState({});

    useEffect (() => {
        fetch(`https://www.mockachino.com/1f7dc420-4592-4b/habHotel/${id}/`)
        .then((res) => res.json ())
        .then((detalleHab)=> setDetalle(detalleHab))
   }, []);

   

    
};

export default ItemDetailContainer; */