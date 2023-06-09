import { StyledField, Input} from './styled'

interface FieldProps {
    placeholder: string,
    title: string,
}

const Field: React.FC<FieldProps> = ({placeholder, title}) => {
    return (
        <StyledField>
            <span>{title}</span>
            <Input />
        </StyledField>
    )
}

export default Field;