import * as Popover from '@radix-ui/react-popover';
import { FiCalendar, FiX } from 'react-icons/fi'
import { CalendarContainer, CalendarDiv } from './styles';

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
                                Calendario
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