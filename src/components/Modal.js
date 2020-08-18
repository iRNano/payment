import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

function ModalExampleModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<a>Terms and Conditions</a>}
    >
      <Modal.Header>Terms and Conditions</Modal.Header>
      <Modal.Content image>
        <p>
          Consequat exercitation pariatur minim culpa. Ullamco Lorem in elit non
          proident enim esse anim proident. In sunt incididunt in eiusmod esse
          elit aliqua. Reprehenderit eu culpa proident proident. Magna velit et
          exercitation ipsum tempor laboris incididunt quis nulla labore qui
          consectetur elit. Irure officia id ullamco ex incididunt. Proident
          sunt ipsum non nisi nisi eu. Deserunt in elit sit qui Lorem est
          labore. Incididunt eu fugiat consequat amet consequat qui esse
          consequat ipsum. Cupidatat Lorem deserunt laboris tempor elit. Veniam
          veniam commodo laboris mollit voluptate ipsum. Aliquip sit aliquip
          quis cupidatat elit proident ipsum eiusmod. Anim anim excepteur
          occaecat laboris culpa nulla exercitation commodo ullamco do. Commodo
          sint ut amet adipisicing. Eiusmod reprehenderit magna irure sit
          aliquip nulla quis do. Fugiat magna sint deserunt culpa cupidatat.
          Laborum nulla do fugiat dolor deserunt ut. Magna incididunt nisi est
          ea fugiat ea est culpa ipsum anim ipsum ea ullamco aute. Non
          incididunt id elit voluptate. Mollit veniam culpa velit proident nisi.
          Cupidatat fugiat ea reprehenderit do officia laborum reprehenderit.
        </p>
      </Modal.Content>
    </Modal>
  );
}

export default ModalExampleModal;
