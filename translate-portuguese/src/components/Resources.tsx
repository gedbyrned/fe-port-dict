import React, { useEffect, useState } from 'react';
import '../styles/index.css';
import { getResources } from '../utils/api';

interface ResourceDict {
    resource_name: string,
    resource_type: string,
    resource_author: string,
    resource_description: string,
    resource_level: string,
    resource_language: string,
    resource_url: string,
    resource_image: string
}

const Resources = () => {
    const [resources, setResources] = useState<ResourceDict[]>([]);

    useEffect(() => {
        getResources()
            .then(resourceData => {
                setResources(resourceData);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <section className="resources">
            <h1>Recommended Learning Materials</h1>
            {resources.map((resource, index) => (
                <div className="resource" key={index}>
                    <img 
                        src={resource.resource_image} 
                        alt={resource.resource_name} 
                        className="resource-img"
                    />
                    <div className="resource-details">
                        <div>
                            <strong>Resource Name:</strong> {resource.resource_name}
                        </div>
                        <div>
                            <strong>Resource Type:</strong> {resource.resource_type}
                        </div>
                        <div>
                            <strong>Resource Author:</strong> {resource.resource_author}
                        </div>
                        <div>
                            <strong>Resource Description:</strong> {resource.resource_description}
                        </div>
                        <div>
                            <strong>Resource Level:</strong> {resource.resource_level}
                        </div>
                        <div>
                            <strong>Resource Language:</strong> {resource.resource_language}
                        </div>
                        <div>
                            <strong>Resource URL:</strong> 
                            <a 
                                href={resource.resource_url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="resource-url"
                            >
                                {resource.resource_url}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Resources;
