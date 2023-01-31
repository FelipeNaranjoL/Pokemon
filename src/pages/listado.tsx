import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";
import Figure from 'react-bootstrap/Figure';

const Listado = () =>{
    //sirve para obtener los datos del pokemon creado en models
    const [pokemons,setPokemons] = useState<Pokemon[]>([]);
    const [query,setQuery] = useState("");
    //llamas al controller para obtener los pokemon de la api
    useEffect(()=>{
        const obtenerTodos = async() => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        obtenerTodos();
    });

    const filtrarPokemon = pokemons?.slice(0,151).filter((pokemon) =>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })
    return (
        <>
        <h1>Pokemon apiRest</h1>
        <header>
            <input 
                value={query} 
                placeholder="Buscar Pokemon" 
                onChange={(event) => setQuery(event.target.value.trim())} 
                type="text" 
            />
        </header>
        <div className="content_wrapper">
            <div className="content">
                <div className="row gap-3">
                    {/* slice: lo que hace es colocar un limite, en este caso trae los pokemon del 0 hasta el 3  */}
                    {filtrarPokemon?.slice(0,151).map((pokemon) =>(
                        <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header><b>Tipo:</b> {pokemon.type} {pokemon.type2}</Card.Header>
                            <Card.Img width="80" height="100" className="d-block mx-auto w-50" variant="top" src={pokemon.imggif} />
                            <Card.Body>
                                <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Figure.Image
                                        width={16}
                                        height={1}
                                        src="https://cdn-icons-png.flaticon.com/128/9131/9131492.png"/>
                                        <b> hp:</b> {pokemon.hp}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Figure.Image
                                        width={16}
                                        height={1}
                                        src="https://cdn-icons-png.flaticon.com/128/842/842184.png"/>
                                        <b> attack:</b> {pokemon.attack}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Figure.Image
                                        width={16}
                                        height={1}
                                        src="https://cdn-icons-png.flaticon.com/128/786/786346.png"/>
                                        <b> defense:</b> {pokemon.defense}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Figure.Image
                                        width={16}
                                        height={1}
                                        src="https://cdn-icons-png.flaticon.com/128/1998/1998300.png"/>
                                        <b> sp_atk:</b> {pokemon.sp_atk}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Figure.Image
                                        width={16}
                                        height={1}
                                        src="https://cdn-icons-png.flaticon.com/128/2179/2179197.png"/>
                                        <b> sp_def:</b> {pokemon.sp_def}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Figure.Image
                                        width={16}
                                        height={1}
                                        src="https://cdn-icons-png.flaticon.com/128/4063/4063731.png"/>
                                        <b> speed:</b> {pokemon.speed}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                    <Figure.Image
                                        width={16}
                                        height={1}
                                        src="https://cdn-icons-png.flaticon.com/128/56/56751.png"/>
                                        <b> Total Stats:</b> {pokemon.total}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    ))};
                </div>
            </div>
        </div>
        </>
    );
};

export default Listado;
