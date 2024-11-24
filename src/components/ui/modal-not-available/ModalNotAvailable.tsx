"use client"
import { Property, PROPERTY_STATE } from "@/types";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface Props {
    property: Property;
}


const ModalNotAvailable = ({ property }: Props) => {
    const router = useRouter();

    const footerContent = (
        <div className="flex justify-center w-full">
            <Button
                className="p-button-text"
                onClick={() => router.push("/")}
                label="Aceptar"
                autoFocus
            />
        </div>
    )


    return (
        <Dialog
            visible={property.property_state !== PROPERTY_STATE.APPROVED}
            closable={false}
            header="Propiedad no disponible"
            onHide={() => { }}
            footer={footerContent}
            blockScroll={true}
        >
            Esta propiedad ya no se encuentra disponible
        </Dialog>
    )
}

export default ModalNotAvailable