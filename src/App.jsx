import { useState } from 'react'
import './App.css'
import Testimonio from './Testimonio'

function App() {

  const persons = [
    { id: '001', 
      imageUrl: '/manDeveloper1.jpg', 
      title: 'Joel Miller', 
      subTitle: 'Senior software developer at Google', 
      text: 'Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante',
      description: "There's a working programmer in this picture doing some research"
    },
    { id: '002', 
      imageUrl: '/womanDeveloper.jpg', 
      title: 'Ashley Williams', 
      subTitle: 'Senior software developer at Google', 
      text: 'Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante',
      description: "There's a working programmer looking at her monitor while she's coding" 
    },
    { id: '003', 
      imageUrl: '/manDeveloper2.jpg', 
      title: 'Mike Smith', 
      subTitle: 'Junior software developer at Meta', 
      text: 'Lorem Ipsum dolor sit amet, consectetuer adipiscingelit. Duis tellus. Donec ante dolor, iaculis nec, gravidaac, cursus in, eros. Mauris vestibulum, felis et egestasullamcorper, purus nibh vehicula sem, eu egestas antenisl non justo. Fusce tincidunt, lorem nev dapibusconsectetuer, leo orci mollis ipsum, eget suscipit erospurus in ante',
      description: "There's a developer looking at camera, sitting in his working place" 
    },
]

  return (

    <>
      {persons.map((personItem) => (
        <Testimonio
          key={personItem.id}
          imageUrl={personItem.imageUrl}
          title={personItem.title}
          subTitle={personItem.subTitle}
          text={personItem.text}
          description={personItem.description}
        />
      ))}
    </>
  )
}

export default App
