import React, { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  //extracted actionBar  prop to make more legible again.
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  // making modal a variable and then declaring it below to make it more legible since we have a lot of props.
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {/* This means, if showModal true, show component, if false, show nothing */}
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel finibus risus. In non est a orci dignissim tincidunt. Ut non sem
        lectus. Curabitur pretium nisi nec nibh semper pellentesque. Sed maximus
        urna quis neque placerat, vel laoreet sem fermentum. Praesent lacus
        ipsum, porttitor non eros id, ultrices vestibulum eros. Vivamus vel
        feugiat magna, a mattis lectus. Quisque in quam vel nulla condimentum
        imperdiet. Integer vel metus dolor.
      </p>
    </div>
  );
}

export default ModalPage;
