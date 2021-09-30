import React, { component, useState } from 'react'

const Button = () => {

    const [color, setColor] = useState('')

    const changeTextColor = () => {
        const randomIntOne = Math.floor(Math.random() * 255)
        const randomIntTwo = Math.floor(Math.random() * 255)
        const randomIntThree = Math.floor(Math.random() * 255)

        const randomColor = `rgb(${randomIntOne}, ${randomIntTwo}, ${randomIntThree})`
        console.log(randomColor)
        setColor(randomColor)
    }
    return (
        <div>
            <h2>Press this button to change paragraph color.</h2>
            <button onClick={() => changeTextColor()}>Click me!</button>
            <p className="change-color" style={{ color: color }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid totam quae, obcaecati praesentium pariatur, perferendis consequuntur deserunt incidunt magni ex quibusdam quia consectetur autem iusto maiores deleniti quod. Error, iure.
                Veniam pariatur aperiam incidunt itaque modi, exercitationem laborum harum facere deserunt enim rem sit sequi. Aut placeat quod quaerat vero earum iure tempore ratione commodi illum laboriosam. Laudantium, culpa tenetur.
            </p>
        </div>
    )
}

export default Button