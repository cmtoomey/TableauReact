// Import React
import React from "react";
import Vacation from "./Vacation.js";
import Tableau from "tableau-react";
import YouTube from 'react-youtube'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  CodePane,
  Appear,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="quartenary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Using React and Tableau Together
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            with a little D3 at the end
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="quartenary">
          <Text caps textColor="secondary">
            Let's look at the setup - import into your component
          </Text>
          <CodePane
            lang="javascript"
            margin="20px auto"
            source={require("raw-loader!../assets/reactbegin.example")}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="quartenary">
          <Text caps textColor="secondary">
            Let's look at the this slide
          </Text>
          <CodePane
            lang="jsx"
            margin="20px auto"
            source={require("raw-loader!../assets/slide.example")}
          />
        </Slide>
        <Slide transition={["fade"]} bgImage={images.city} bgDarken={0.50}>
          <Heading size={6} textColor="primary" caps>
            Let's set our template
          </Heading>
          <Text size={6} textColor="tertiary">Don't repeat yourself</Text>
          <CodePane
            lang="jsx"
            margin="20px auto"
            source={require("raw-loader!../assets/deck.example")}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={images.city}
          bgDarken={0.50}
          textColor="tertiary"
        >
          <Heading size={2} textColor="primary" caps>
            Presentation Stuff
          </Heading>
          <Heading size={6} textColor="tertiary" caps>Appear on Next</Heading>
          <List>
            <Appear>
              <ListItem margin="0 -200px 0" textColor="primary">
                Important Item 1
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 -200px 0" textcolor="tertiary">
                Important Item 2
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 -200px 0" textColor="quartenary">
                Important Item 3
              </ListItem>
            </Appear>
            <Appear>
              <CodePane
                lang="jsx"
                margin="-150px 300px 0"
                source={require("raw-loader!../assets/list.example")}
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={4} caps textColor="primary">Adding Tableau</Heading>
          <CodePane lang="bash" source="npm install -s react-tableau" />
          <CodePane lang="jsx" source={require("raw-loader!../assets/tableau1.example")}/>
        </Slide>
        <Slide bgColor="quartenary">
          <Tableau url="https://public.tableau.com/views/Marvel_0/WheelswithinWheels?:embed=y&:display_count=yes" />
        </Slide>
        <Slide bgColor="quartenary">
          <Text>
            That's great, but it's off-center and what if I want to do other things like event listeners or something?
          </Text>
          <Heading caps size={4}>Let's re-write the Tableau Component</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="quartenary">
          <CodePane
            margin="-50px 0 0"
            lang="jsx"
            source={require("raw-loader!../assets/tableau.example")}
          />
        </Slide>
        <Slide bgColor="quartenary">
          <Vacation />
        </Slide>
        <Slide bgColor="quartenary">
          <CodePane margin="-100px 0 0" lang="jsx" source={require("raw-loader!../assets/tableau2.example")}/>
        </Slide>
        <Slide bgColor="quartenary">
          <CodePane margin="-100px 0 0" lang="jsx" source={require("raw-loader!../assets/victory.example")}/>
        </Slide>
        <Slide bgColor="quartenary">
          <Heading size={2} caps fit>
            Victory is D3 - just easier to understand
          </Heading>
          <YouTube videoId="yuAdvxnK4IY" opts={{
            height:400,
            width: 600,
            playerVars: {
              autoplay: 1
            }
          }}/>
          <Text>All your favorite features are there - minus a few chart types (for now)</Text>
        </Slide>
        <Slide>
          <Heading caps fit>That's it!</Heading>
        </Slide>
        <Slide>
          <Heading size={3} caps>Go build more things!</Heading>
          <Text>christ@zillowgroup.com</Text>
          <Text>@Sock1tToomey</Text>
        </Slide>
      </Deck>
    );
  }
}
