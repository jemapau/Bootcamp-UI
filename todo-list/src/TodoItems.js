import React, {Component} from "react";

class TodoItems extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)} className="list__item" 
                    key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }


    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="list">
                {listItems}
            </ul>
        );
    }
}

export default TodoItems;