import React from "react";
import { Grid, Header } from "semantic-ui-react";

import { PosMeMuero } from "@components/SVGIcons";

const Modal = () => {
  return (
    <div className="container">
      <Grid columns={2}>
        <Grid.Row verticalAlign={"middle"}>
          <Grid.Column width="5">
            <PosMeMuero />
          </Grid.Column>
          <Grid.Column width="11">
            <Header as="h2">Mataste al caballo</Header>
            <p>Lo tocaste tanto que lo mataste.</p>
            <p>
              Por otro lado, eres una persona muy curiosa y has descubierto
              esto. :)
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Modal;
