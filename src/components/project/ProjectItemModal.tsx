import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Carousel } from 'antd';
import Technologies from './Technologies';
import { Project } from './Project';

interface ProjectItemProps {
    filteredProject: Project;
}

export default function ProjectItemModal({ filteredProject }: ProjectItemProps) {
    const [imageLayouts, setImageLayouts] = useState<{ twoImagesLayout: boolean; imageChunks: string[][] } | null>(null);

    const chunkImages = (array: string[], size: number) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const getImageLayout = async (image: string) => {
        return new Promise<boolean>((resolve) => {
            const img = new Image();
            img.src = `/project/${filteredProject.imageFolder}/image${image}.jpg`;
            img.onload = () => {
                console.log('가로의 값은/?', img.width);
                resolve(img.width >= 1100);
            };
        });
    };

    useEffect(() => {
        const loadImageLayouts = async () => {
            const layoutPromises = filteredProject.images.map(image => getImageLayout(image));
            const layouts = await Promise.all(layoutPromises);
            console.log('가로의 값은/? layouts', filteredProject.title, layouts);
            const twoImagesLayout = layouts.every(layout => layout);
            console.log('가로의 값은/? twoImagesLayout', filteredProject.title, twoImagesLayout);
            const imageChunks = chunkImages(filteredProject.images, twoImagesLayout ? 4 : 3);

            setImageLayouts({ twoImagesLayout, imageChunks });
        };

        loadImageLayouts();
    }, [filteredProject.images, filteredProject.imageFolder]);

    if (!imageLayouts) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="project-card-info">
                <p>{filteredProject.date}</p>
                <p>({filteredProject.member}명)</p>
            </div>
            <p className="project-description">
                {filteredProject.description}
            </p>
            <ul className="project-information">
                {filteredProject.information.map((information, index) => (
                    <li key={index}>{information}</li>
                ))}
            </ul>
            <Carousel className="project-images-container" arrows>
                {imageLayouts.imageChunks.map((chunk, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="carousel-slide-inner" style={{
                            display: 'grid',
                            gridTemplateColumns: imageLayouts.twoImagesLayout ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                            gap: '10px',
                            gridAutoRows: 'auto'
                        }}>
                            {chunk.map((image, idx) => (
                                <img
                                    key={idx}
                                    src={`/project/${filteredProject.imageFolder}/image${image}.jpg`}
                                    alt={`Slide${index * (imageLayouts.twoImagesLayout ? 4 : 2) + idx + 1}`}
                                    className="carousel-image"
                                    style={{
                                      ...(imageLayouts.twoImagesLayout ? {} : {
                                          height: '450px',
                                          width: 'auto',
                                      }),
                                      maxHeight: '450px'
                                  }}
    
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>
            <div className="technologies-container">
                {filteredProject.technologies.map((technology, index) => (
                    <Technologies
                        key={index}
                        technology={technology}
                    />
                ))}
            </div>
            <Card.Link
                href={filteredProject.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                보러가기
            </Card.Link>
        </>
    );
}
