import React from "react";
import { 
    Card, 
    TitlePage, 
    Fields, 
    DisciplineContainer,
    Image
} from './styled'
import Calendar from '../../assets/Calendar.png';
import Clock from '../../assets/clock.png';
import { useContext } from "react";
import { DisciplineContext } from "../../context/disciplineContext";

const DisciplineHeader = () =>  {
    const { value } = useContext(DisciplineContext);

    return (
        <Card height="148px" marginTop="20px">
        <TitlePage> {value.nomeDiciplina} </TitlePage>
        <DisciplineContainer>
            <div>
                <Image src={Calendar} alt='calendar-discipline'/>
                <Fields>Quarta-feira</Fields>
            </div>
            <div>
                <Image src={Clock} alt='calendar-clock'/>
                <Fields>08.40 - 10.20 AM</Fields>
            </div>
        </DisciplineContainer>
    </Card>
    )
};

export default DisciplineHeader;