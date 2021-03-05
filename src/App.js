import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Card } from "./components/card/card";
import { SearchBox } from "./components/search-box/search-box";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((users) => this.setState({ monsters: users }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filterMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    handleChange={(a) => {
                        this.setState(
                            { searchField: a.target.value },
                            (re) => {}
                        );
                    }}
                />
                <CardList name="Kox">
                    {filterMonsters.map((monster) => (
                        <Card key={monster.id} monster={monster} />
                    ))}
                </CardList>
            </div>
        );
    }
}

export default App;
