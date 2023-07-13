
import project1 from "../assets/homepage.jpg"
import project2 from "../assets/aboutuspage.jpg"
import project3 from "../assets/project.jpg"
import project4 from "../assets/project2.jpg"
import project5 from "../assets/project3.jpg"
import project6 from "../assets/project4.jpg"
import project7 from "../assets/project5.jpg"
import project8 from "../assets/1photo.jpg"


import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import React, { useState } from 'react';

const Gallery = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      image: project1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      client: 'Client 1',
    },
    {
      id: 2,
      name: 'Project 2',
      image: project2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit finibus sapien non elementum.',
      client: 'Client 2',
    },
    {
      id: 3,
      name: 'Project 3',
      image: project3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit finibus sapien non elementum.',
      client: 'Client 3',
    },
    {
      id: 4,
      name: 'Project 4',
      image: project4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit finibus sapien non elementum.',
      client: 'Client 4',
    },
    {
      id: 5,
      name: 'Project 5',
      image: project5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      client: 'Client 5',
    },
    {
      id: 6,
      name: 'Project 6',
      image: project6,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit finibus sapien non elementum.',
      client: 'Client 6',
    },
    {
      id: 7,
      name: 'Project 7',
      image: project7,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit finibus sapien non elementum.',
      client: 'Client 7',
    },
    {
      id: 8,
      name: 'Project 8',
      image: project8,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit finibus sapien non elementum.',
      client: 'Client 8',
    },
    // Add more projects as needed
  ];

  const [modalImage, setModalImage] = useState('');
  const [modalProject, setModalProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setModalImage(project.image);
    setModalProject(project);
    setIsModalOpen(true);
    // Disable outer functionality when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage('');
    setModalProject(null);
    setIsModalOpen(false);
    // Enable outer functionality when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-lg w-[80vw] mx-[10%] my-[10%] py-4 px-4" id="gallery" data-aos="fade-up"
    data-aos-duration={2000}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative cursor-pointer shadow-md"
            onClick={() => openModal(project)}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover transition-opacity duration-300 hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-blue-900 bg-opacity-70">
                <div className="text-white text-center px-4 py-2">
                  <p className="text-lg font-bold">{project.name}</p>
                  <p className="text-sm h-16 overflow-hidden">{project.description}</p>
                  <div className="mt-2">
                    <p className="text-xs font-semibold">Client: {project.client}</p>
                    <p className="text-xs font-semibold">Consultant: UDC LTD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-500 p-2 text-white flex justify-between">
              <p>{project.name}</p>
            </div>
          </div>
        ))}
      </div>

      {modalImage && modalProject && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="max-w-3xl p-4">
            <img
              src={modalImage}
              alt={modalProject.name}
              className="w-full h-auto"
            />
            <div className="bg-blue-900 text-white p-4 mt-4">
              <p className="text-lg font-bold">{modalProject.name}</p>
              <p className="text-base">{modalProject.description}</p>
              <div className="mt-2">
                <p className="text-sm font-semibold">Client: {modalProject.client}</p>
                <p className="text-sm font-semibold">Consultant: UDC LTD</p>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-white font-bold text-2xl hover:text-blue-500"
              onClick={closeModal}
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
