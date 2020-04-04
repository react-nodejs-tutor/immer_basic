import React, { Component } from 'react';
import './App.css';

class App extends Component {
	id = 2;
	state = {
		input: '',
		todos: [
			{
				id: 1,
				text: '제목1',
			},
			{
				id: 2,
				text: '제목2',
			},
		],
	};
	handleChange = () => {};
	handleInsert = () => {};
	handleToggle = () => {};
	handleRemove = () => {};
	render() {
		return (
			<div>
				<div>
					<input />
					<button>추가</button>
				</div>
				<ul>
					{this.state.todos.map((todo) => (
						<li
							key={todo.id}
							style={{
								textDecoration: todo.done ? 'line-through' : 'none',
							}}
						>
							{todo.text}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
export default App;
