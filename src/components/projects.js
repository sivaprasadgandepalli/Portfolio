import React from 'react';
import { Link } from 'react-router-dom';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Code,
  Button,
  Badge,
  Text
} from '@chakra-ui/react';
import Card from 'react-bootstrap/Card';
import '../styles/project.css';
import { basicData, InterData } from '../data';

const ProjectCard = ({ item }) => (
  <div className='' key={item.id + "project"}>
    <Card className=' mb-4 sm:w-auto card-img'>
      <Card.Img variant="top" src={item.img} style={{ height: '18rem' }} alt='item.title'/>
      <Card.Body className='card-content'>
        <Card.Title className='text-red-500 text-3xl'>{item.title}</Card.Title>
        <Text className='line-clamp-6 text-sm'>
          {item.desc}
        </Text>
        <div className='flex gap-1 items-baseline mb-3'>
          <div className='flex gap-1 flex-wrap items-center '>
            {item?.tech.map((tech) => (
              <Badge colorScheme='purple' className='text-center' key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className='flex gap-2'>
          {
            item.SourceCode && <Button colorScheme='teal' variant='solid' size='sm'>
              <a herf={item.SourceCode}>Source Code</a>
            </Button>
          }
          {
            item.Demo && <Button colorScheme='teal' variant='outline' size='sm'>
              <a href={item.Demo}>Preview</a>
            </Button>
          }
        </div>
      </Card.Body>
    </Card>
  </div>
);

const Projects = () => {
  const allData = [...basicData, ...InterData];

  const renderCards = (data) => (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4'>
      {data.map(item => <ProjectCard item={item} key={item.id} />)}
    </div>
  );

  return (
    <Tabs position="relative" variant="unstyled" className='text-white'>
      <TabList className='text-xl'>
        <Tab>All</Tab>
        <Tab>Intermediate</Tab>
        <Tab>Basic</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="#01a3a4" borderRadius="1px" />
      <TabPanels className='mt-4'>
        <TabPanel>{renderCards(allData)}</TabPanel>
        <TabPanel>{renderCards(InterData)}</TabPanel>
        <TabPanel>{renderCards(basicData)}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Projects;
