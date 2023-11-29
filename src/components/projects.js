import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Code } from '@chakra-ui/react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import agecalc from '../images/age calc.png';
import tictactoe from '../images/tictactoe.jpg';
import todo from '../images/todo.png';
import vms from '../images/vms.jpg';
import Rms from '../images/Rms.jpg';
import Crm from '../images/Crm.jpg';
import { Text } from '@chakra-ui/react'
export default function Projects() {
  const basicData = [{
    "id": 1, "img": agecalc, "title": "Age Calculator",
    "desc": "Age calculator allows users to know their age by entering their Date of birth.Tech used in this project is HTML,CSS,JAVASCRIPT"
  },
  {
    "id": 2, "img": tictactoe, "title": "Tic Tac Toe",
    "desc": 'Tic Tac Toe is a popular game that uses a 3×3 grid, typically using X and O symbols.Tech used in this project is HTML,CSS,JAVASCRIPT'
  },
  {
    "id": 3, "img": todo, "title": 'Todo App',
    "desc": 'Todo App is a project where user can create,delete,update,read their tasks.Tech used in this project is HTML,CSS,JAVASCRIPT'
  }];

  const InterData = [{
    "id": 1, "img": vms, "title": 'Vehicle Management',
    "desc": 'The project is to assist in the tracking of vehicles operation and the planning of maintenance to avoid damages/problems'
  },
  {
    "id": 2, "img": Rms, "title": 'Restraunt Management',
    "desc": 'The project is about managing restraunt orders and generating bills for orders.'
  },
  {
    "id": 3, "img": Crm, "title": 'Car Rental Management',
    "desc": 'This enables user can rent a vehicle. This software car Rental System has a very user friendly interface. '
  }];
  return (

    <Tabs position="relative" variant="unstyled" className='text-white'>
      <TabList className='text-xl'>
        <Tab>Intermediate</Tab>
        <Tab>Basic</Tab>

      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="blue.500"
        borderRadius="1px"
      />
      <TabPanels className='mt-4'>
        <TabPanel>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4' >
            {InterData.map((item) => {
              return (
                <div className='' key={item.id}>
                  <Card className=' mb-4 sm:w-auto'>
                    <Card.Img variant="top" src={item.img} style={{ height: '14rem' }} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Text >
                        {item.desc}
                      </Text>
                      <div className='flex justify-between'>
                        <Button type="submit" className='btn btn-block'>Code info</Button>
                        <Button type="submit" variant='outline-info'>Preview</Button>
                      </div>
                      
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4' >
            {basicData.map((item) => {
              return (
                <div className='' key={item.id}>
                  <Card className=' mb-4 sm:w-auto'>
                    <Card.Img variant="top" src={item.img} style={{ height: '14rem' }} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        {item.desc}
                      </Card.Text>
                      <div className='flex justify-between'>
                        <Button type="submit" className='btn btn-block'>Code info</Button>
                        <Button type="submit" variant='outline-info'>Preview</Button>
                      </div>

                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </TabPanel>

      </TabPanels>
    </Tabs>

  )
}
