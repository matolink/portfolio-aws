import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  View,
  Card,
} from "@aws-amplify/ui-react";

function Login({signOut}) {
    return(
        <><View>
            <Card>
                <Heading level={1}>We now have Auth!</Heading>
                <a
                    className="App-link"
                    href="https://www.instagram.com/goarte.estampados"
                >
                    visita nuestro Instagram!
                </a>
            </Card>

        </View><Button onClick={signOut}>Sign Out</Button></>
    )
}

export default withAuthenticator(Login);