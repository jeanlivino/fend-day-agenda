import { ProfileCardProps } from "../ProfileCard/types"

export interface SpeakerCardProps extends ProfileCardProps {
    label: string
    tags: string[]
    onChangeMode: (mode: boolean) => void
}