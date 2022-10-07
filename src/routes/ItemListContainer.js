import React, { useState, useEffect } from 'react';

const ItemListContainer = () => {

    const [habitacion, setHabitacion] = useState({});

    useEffect(() => {
        fetch('https://www.mockachino.com/1f7dc420-4592-4b/habHotel')
            .then((res) => res.json())
            .then((habitacionres) => setHabitacion(habitacionres))
    }, []);

    console.log(habitacion);

    return (

        <div>
            {Object.keys(habitacion).lenght === 0 ? (
                <div>cargando...</div>
            ) : (
                <div>
                    {habitacion.habitaciones.map((hab) => (<div>Soy una habitacion</div>)
                    )}
                </div>



            )};
        </div>);
}


    export default ItemListContainer;