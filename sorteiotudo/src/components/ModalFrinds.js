import React, { useRef, useState } from "react"
import { Button, Modal, Input, useToast } from "native-base"
import { connect } from "react-redux"
import { closeModal } from "../store/actions/modal"
import { addFriend } from '../store/actions/amigoSecreto'
import { VAZIO } from '../util/constantes'
const ModalFrind = props => {
    const inputName = useRef(null)
    const [nome, setName] = useState('')
    const [email, setEmail] = useState('')
    const toast = useToast();

    const updateOrAdd = _ => {
        if (props.updateMode) {
            console.log('Atualiza!')
        } else {
            props.addFriend({ nome, email })
            setName('');
            setEmail('');
            inputName.current.focus();
            toast.show({ title: 'Amigo adicionado 😀!', placement: 'top' })
        }
    }

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
                        value={nome}
                        onChangeText={nome => setName(nome)}
                        autoFocus
                        ref={inputName}
                        
                    />
                    <Input
                        mt={4}
                        placeholder="E-mail do amigo"
                        value={email}
                        onChangeText={email => setEmail(email)}

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
                        <Button
                            onPress={updateOrAdd}
                            disabled={nome.length === VAZIO || email.length === VAZIO}
                        >
                            {props.updateMode ? 'Atualizar' : 'Cadastrar'}
                        </Button>
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
        closeModal: _ => dispach(closeModal()),
        addFriend: frind => dispach(addFriend(frind))


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFrind);