import { StyledField, Input} from './styled'

interface FieldProps {
    placeholder: string,
    title: string,
    visible?: boolean,
}

const Field: React.FC<FieldProps> = ({placeholder, title, visible}) => {
    return (
        <StyledField>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <span>{title}</span>
                {visible && (
                    <span>i</span>
                )}
            </div>
            <Input />
        </StyledField>
    )
}

export default Field;