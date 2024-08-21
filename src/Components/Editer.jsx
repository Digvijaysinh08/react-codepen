import { Box, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import React, { useState } from "react";

import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "../App.css";
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const Container = styled(Box)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`;

const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
`;

const Editer = ({ heading, icon, color, value, onChange}) => {

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  const[open, setOpen] = useState(true);

  return (
    <Container style={open ? null : {flexGrow:0}} >
      <Header>
        <Heading>
          <Box
            component="spam"
            style={{
              background: color,
              borderRadius: 5,
              marginRight: 5,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreen
          fontSize="small"
          style={{ alignSelf: "center", cursor:"pointer" }}
            onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="controlled-editor"
        options={{
          lineWrapping: true,
          lint: true,
          lineNumbers: true,
          theme: "material"
        }}
      />
    </Container>
  );
};

export default Editer;
