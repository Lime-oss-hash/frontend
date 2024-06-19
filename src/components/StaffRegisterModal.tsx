import { useForm } from "react-hook-form";
import { Staff } from "../models/staff";
import {StaffLoginCredentials, staffRegister} from "../network/websites_api";
import * as WebsitesApi from "../network/websites_api";
import { Modal, Form, Button } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styleUtils from "../styles/utils.module.css";
import styles from "../styles/navbar.module.css"

interface StaffRegisterModalProps {
    onDismiss: () => void,
}

const StaffRegisterModal = ({onDismiss}: StaffRegisterModalProps) => {

    const { register, handleSubmit, formState: { errors, isSubmitting }} = useForm<StaffLoginCredentials>();

    async function onSubmit(credentials: StaffLoginCredentials) {
        try {
            const staffLoggedIn = await WebsitesApi.staffRegister(credentials);
            // onStaffLoginSuccessful(staffLoggedIn);
            // window.location.reload();
            alert("Staff Registered")
            onDismiss();
            // window.location.reload();
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    return (
        <Modal centered show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title className={styles.title}>
                    Staff Register
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className={styles.modalContents}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextInputField
                        name="email"
                        label="Email"
                        type="email"
                        className="inputBootstrap"
                        placeholder="Email"
                        register={register}
                        registerOptions={{ required: "Required" }}
                        error={errors.email}
                    />
                    <TextInputField
                        name="password"
                        label="Password"
                        type="password"
                        className="inputBootstrap"
                        placeholder="Password"
                        register={register}
                        registerOptions={{ required: "Required" }}
                        error={errors.password}
                    />
                    <Button
                        variant="success"
                        type="submit"
                        disabled={isSubmitting}
                        className={styleUtils.width100}>
                        Staff Register
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default StaffRegisterModal;
