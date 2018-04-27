import React from 'react';
import { Container, Header, List } from 'semantic-ui-react';

const Skills = () => {
    return(
        <Container id='skills'>
            <br /><br />

            <Header size="medium">
                Skills
            </Header>

            <Header size="small">
                Proficient
            </Header>

            <List>
                <List.Item as='li' value='*'>
                    Python -- Flask, Django<br />
                    Ruby -- Rails<br />
                </List.Item>
            </List>

            <Header size="small">
                Intermediate
            </Header>

            <Header size="small">
                Learning
            </Header>
        </Container>
    )
}

export default Skills;