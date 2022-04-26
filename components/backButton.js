import GlowingButton from "./glowingButton";
import { ArrowLeft } from "iconoir-react";

const BackButton = ({ link }) => {
    return <GlowingButton link={link}><ArrowLeft /><span className="hidden lg:inline">Retour</span></GlowingButton>
}

export default BackButton;