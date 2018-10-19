import React, {Component} from "react";
import TodoItems from "./TodoItems";


class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                }
            });
        }

        this._inputElement.value = "";

        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key) {
        console.log("Key is: " + key);
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todolist">
                <h1 className="todolist__title">Welcome to your Task Board!</h1>
                <p>Don't forget anything and keep your tasks in order:</p>
                <div className="form">
                    <form onSubmit={this.addItem}>
                        <input className="form__input" ref={(a) => this._inputElement = a} placeholder="✏️  Write a task">
                        </input>
                        <button className="form__btn" type="submit">Add</button>
                    </form>
                </div>

                <TodoItems entries={this.state.items}
                            delete={this.deleteItem} />
            </div>
        );
    }
}

export default TodoList;