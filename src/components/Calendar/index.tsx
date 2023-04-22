import * as Popover from '@radix-ui/react-popover';
import { FiCalendar, FiX } from 'react-icons/fi'
import { CalendarContainer, CalendarDiv } from './styles';

import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarReservationProps {
    price: number;
}

export default function Calendar({ price }: CalendarReservationProps) {
    return (
        <CalendarContainer className="calendar">
            <Popover.Root>
                <Popover.Trigger className='calendarMenuButton'>
                    <div className="calendarMenu">
                        <div className="calendarIcon">
                            <FiCalendar size={20} />
                            <span>Reserve</span>
                        </div>
                        <span><strong>${price}</strong> per night</span>
                    </div>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className="PopoverContent" sideOffset={5} side="top">
                        <CalendarDiv>
                            <div className='calendarContent'>
                                <h2>Choose a date for booking:</h2>
                                <div>
                                    <div>
                                        <h3>Entry and exit</h3>
                                        <ReactCalendar className="reactCalendar" selectRange={true} locale="En" />
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