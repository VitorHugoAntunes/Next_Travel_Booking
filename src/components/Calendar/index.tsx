import * as Popover from '@radix-ui/react-popover';
import { FiCalendar, FiX } from 'react-icons/fi'
import { CalendarContainer, CalendarDiv } from './styles';

import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendar() {
    return (
        <CalendarContainer className="calendar">
            <Popover.Root>
                <Popover.Trigger className='calendarMenuButton'>
                    <div className="calendarMenu">
                        <div className="calendarIcon">
                            <FiCalendar size={20} />
                        </div>
                        <span>Marque uma reserva</span>
                    </div>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className="PopoverContent" sideOffset={5} side="top">
                        <CalendarDiv>
                            <div className='calendarContent'>
                                <h2>Escolha uma data para a reserva:</h2>
                                <div>
                                    <div>
                                        <h3>Entrada e saída</h3>
                                        <ReactCalendar className="reactCalendar" selectRange={true} />
                                    </div>
                                </div>
                                <Popover.Close className="PopoverClose" aria-label="Close">
                                    <FiX size={28} />
                                </Popover.Close>
                            </div>
                        </CalendarDiv>
                        <Popover.Arrow className="PopoverArrow" fill='#E1E1E6' />
                    </Popover.Content>

                </Popover.Portal>
            </Popover.Root>
        </CalendarContainer>
    )
}