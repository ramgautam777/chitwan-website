import React from 'react';
import Layout from '../components/layout/Layout';
import { Box, Typography } from '@mui/material';
const About = () => {
    return (
        <Layout>
            <Box sx={{
                my: 15,
                textAlign: 'center',
                p: 2,
                " & h4": {
                    fontWeight: 'bold',
                    my: 2,
                    fontSize: '2rem',
                },
                "& p": {
                    textAlign: 'justify',
                },
                "@media (maxWidth: 600px)": {
                    mt: 0,
                    "& h4": {
                        fontSize: '1.5rem',
                    }
                }
            }}>
                <Typography variant='h4'>
                    At Hearing Clinic
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium, iste aspernatur alias numquam laboriosam obcaecati nemo quibusdam illo, minima rem accusantium ratione eum veritatis deserunt ad labore deleniti pariatur totam! Deserunt tenetur molestias illum similique sapiente ipsum ducimus placeat quia? Vel dolorum ipsa voluptatum deleniti sint a voluptatibus reprehenderit cum nam sunt eaque accusantium aspernatur ducimus harum velit delectus, accusamus expedita excepturi sequi magnam ratione dicta. Adipisci eaque id alias deserunt consequuntur quidem illo totam quod non rerum, excepturi nemo assumenda quos explicabo veniam deleniti consectetur ipsam. Possimus repudiandae animi nemo fugiat laudantium soluta sint quis inventore recusandae fugit.
                    
                    
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor rerum possimus nostrum atque optio unde dolore velit omnis, repellat nesciunt! Distinctio assumenda dignissimos vitae deserunt ipsa aut, facere obcaecati voluptatem nostrum? Sunt fugit, voluptates incidunt quibusdam autem beatae explicabo architecto tempore asperiores inventore nemo nihil, necessitatibus aliquam cum. Sit itaque cupiditate, ducimus doloribus delectus deserunt consectetur quas hic, mollitia, libero eligendi consequuntur porro? Rerum laudantium deserunt, aperiam reprehenderit perferendis nihil! Voluptas cum, velit et iusto eaque accusantium temporibus minus labore dicta quibusdam tempore fugit nobis omnis illum optio eius animi illo perspiciatis tenetur dolorem explicabo consequuntur impedit sunt repellendus. Assumenda.
                    </p>
                </p>
            </Box>
        </Layout>
    );
};

export default About;