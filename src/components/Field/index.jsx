import { 
    StyledField, 
    Input, 
    SpanField
} from './styled'

const Field = ({ title, visible, type }) => {
    return (
        <StyledField>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <SpanField>{title}</SpanField>
                {visible && (
                    <SpanField>i</SpanField>
                )}
            </div>
            <Input type={type ? "password" : ""}/>
        </StyledField>
    )
}

export default Field;