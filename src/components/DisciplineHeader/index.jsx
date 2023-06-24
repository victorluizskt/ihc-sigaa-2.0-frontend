import React from "react";
import { Card, TitlePage, Fields } from './styled'
import Calendar from '../../assets/Calendar.png';
import Clock from '../../assets/clock.png';

const DisciplineHeader = () => (
    <Card height="148px" marginTop="20px">
        <TitlePage> IHC </TitlePage>
        <div style={{ display: 'grid', gridTemplateRows: '65% 65%', marginLeft: '30px', marginTop: '10px'}}>
            <div>
                <img src={Calendar} style={{ marginBottom: '-4px'}}  width='20px' height='20px' alt='calendar-discipline'/>
                <Fields>Quarta-feira</Fields>
            </div>
            <div>
                <img src={Clock} style={{ marginBottom: '-4px'}} width='20px' height='20px' alt='calendar-discipline'/>
                <Fields>08.40 - 10.20 AM</Fields>
            </div>
        </div>
    </Card>
);

export default DisciplineHeader;