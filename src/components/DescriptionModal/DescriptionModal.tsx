import { FC } from "react"
import './DescriptionModal.scss'

interface DescriptionModalProps {
    description: String,
    setOpenModal: Function
}

const DescriptionModal: FC<DescriptionModalProps> = ({ setOpenModal, description }) => {
    const closeModal = () => {
        setOpenModal(false)
    }
    return (
        <div className="mod" onClick={closeModal} >
            <div className="mod__container">
                <p className="text-11 light">{description}</p>
            </div>
        </div>
    )
}
 export default DescriptionModal