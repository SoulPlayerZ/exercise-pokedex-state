import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';


class Pokedex extends React.Component {
    constructor(){
      super();
      this.state = {
        position: 0
      };
      this.nextPokemon = this.nextPokemon.bind(this);
    } 
   
    render() {
        return (
            // se for fazer a questão 2 nenem. Volta com o botão
            <div className="pokedex">
              <div className='poke'>
                 {<Pokemon key={pokemons[this.state.position].id} pokemon={pokemons[this.state.position]} />}
                 {/* {pokemons.map((poke) => <Pokemon key={poke.id} pokemon={poke}/>)} */} 
                 <button className='poke-btn' onClick={this.nextPokemon}>Next</button>
              </div>
                
            </div>
        );
        }
}

export default Pokedex;