import React, { useState } from "react"
import { Button, Modal, Input } from "native-base"
import { connect } from "react-redux"
import { closeModal } from "../store/actions/modal"
const ModalFrind = props => {
    return (
        <Modal
            isOpen={props.showModal}
            onClose={props.closeModal}
        >
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Insira novos amigos!</Modal.Header>
                <Modal.Body>
                    Ah, lembre-se de colocar um email válido :)!
                    <Input
                        mt={4}
                        placeholder="Nome do amigo..."
                    />
                    <Input
                        mt={4}
                        placeholder="E-mail do amigo"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group variant="ghost" space={2}>
                        <Button
                            onPress={_ => props.closeModal()}
                            colorScheme="secondary"
                        >
                            Fechar
                        </Button>
                        <Button onPress={props.addFrind}>Cadastrar</Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

const mapStateToProps = ({ modal }) => {
    return {
        showModal: modal.showModal,
        updateMode: modal.updateMode
    }
}
const mapDispatchToProps = dispach => {
    return {
        closeModal: _ => dispach(closeModal())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFrind);