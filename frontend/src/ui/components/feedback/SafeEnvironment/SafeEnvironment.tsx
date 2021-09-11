import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@material-ui/core";

const SafeEnvironment = () => {
  return (
    <Container>
      <SafeEnvironmentContainer>
        Ambiente Serguro <i className={"twf-lock"} />
      </SafeEnvironmentContainer>
    </Container>
  );
};

export default SafeEnvironment;
