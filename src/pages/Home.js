import React, {Fragment} from 'react'
import {Form} from "../components/Form";
import {Notes} from "../components/Notes";

export const Home = () => {

    const notes = new Array(3) /*создаем 3 элемента у массива*/
        .fill('')  /*каждый элемент заполняем пустой строкой*/
        .map((_, i) => ({id: i, title: `Note ${i + 1}`})) /*мапим каждый элемент - первым параметром ничего не получаем,
                    вторым - индекс и как результат возвращаем обьект для каждого элемента с id и title*/
    return (
        <Fragment>
            <Form />

            <hr/>

            <Notes notes={notes}/>  {/*передаем данный массив notes как параметр*/}
        </Fragment>
    )
}