import React, { Component } from 'react';

import { createUser } from '../sources/users';


class Form extends Component {
    onSubmit(e) {
        e.preventDefault();

        createUser({ firstName: 'test name' }).then(res => console.log('res: ', res));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Имя
                    <input type="text" />
                </label>
                <label>
                    Фамилия
                    <input type="text" />
                </label>
                <label>
                    Телефон
                    <input type="tel" />
                </label>
                <label>
                    Email
                    <input type="email" />
                </label>
                <label>
                    Возраст
                    <input type="number" />
                </label>
                <button>Сохранить</button>
            </form>
        )
    }
}

export default Form;
