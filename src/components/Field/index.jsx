import { StyledField, Input} from './styled'


const Field = ({placeholder, title, visible}) => {
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