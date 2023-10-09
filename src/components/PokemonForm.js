import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {

  const [formData,setFormData] = useState({
    name:"",
    hp:"",
    sprites:{
      front:"",
      back:""
    }
  })

  const handleFormChange = (e) =>{
    const {name,value} = e.target
    setFormData(current =>({
      ...current,
      [name] : value
    }))
  }

  const handleFormSpriteChange = (e) =>{
    const {name,value} = e.target
    setFormData(current =>({
      ...current,
      sprites:{
        ...current.sprites,
        [name] : value
      }
    }))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          addPokemon(formData)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleFormChange} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" type="number" name="hp" onChange={handleFormChange} value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={handleFormSpriteChange}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={handleFormSpriteChange}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
