import { Button } from "@/components/ui/button";
import Modal from "@/shared/modal";
import Form from "./Form";

// import React from "react";

const ShadcnComp = () => {
  return (
    <div>
      {/* <Button className="">Click me</Button> */}

      <Modal trigger={<Button>Click me</Button>}>
        <Form />
      </Modal>

      {/* <Modal /> */}

      <Modal trigger={<Button>See THis</Button>}>
        <h1>Hello this is second modal</h1>
        <p>This is a modal</p>
      </Modal>
    </div>
  );
};

export default ShadcnComp;
