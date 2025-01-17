import { CalendarProps, Components, Event, stringOrDate } from '../../index';
import * as React from 'react';

export interface withDragAndDropProps<TEvent extends object = Event, TResource extends object = object> {
  onEventDrop?: ((args: { event: TEvent, start: stringOrDate, end: stringOrDate, isAllDay: boolean }) => void) | undefined;
  onEventResize?: ((args: { event: TEvent, start: stringOrDate, end: stringOrDate, isAllDay: boolean }) => void) | undefined;
  onDragStart?: ((args: { event: TEvent, action: 'resize' | 'move', direction: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' }) => void) | undefined;
  onDragOver?: ((event: React.DragEvent) => void) | undefined;
  onDropFromOutside?: ((args: { start: stringOrDate, end: stringOrDate, allDay: boolean}) => void) | undefined;
  dragFromOutsideItem?: (() => keyof TEvent | ((event: TEvent) => Date)) | undefined;
  draggableAccessor?: keyof TEvent | ((event: TEvent) => boolean) | undefined;
  resizableAccessor?: keyof TEvent | ((event: TEvent) => boolean) | undefined;
  selectable?: true | false | 'ignoreEvents' | undefined;
  resizable?: boolean | undefined;
  components?: Components<TEvent, TResource> | undefined;
  elementProps?: React.HTMLAttributes<HTMLElement> | undefined;
  step?: number | undefined;
}

interface DragAndDropCalendarProps<TEvent extends object = Event, TResource extends object = object>
  extends CalendarProps<TEvent, TResource>, withDragAndDropProps<TEvent, TResource> {}

declare class DragAndDropCalendar<TEvent extends object = Event, TResource extends object = object>
  extends React.Component<DragAndDropCalendarProps<TEvent, TResource>> {}

declare function withDragAndDrop<TEvent extends object = Event, TResource extends object = object>(
    calendar: React.ComponentType<CalendarProps<TEvent, TResource>>
): React.ComponentType<DragAndDropCalendarProps<TEvent, TResource>>;
export default withDragAndDrop;

// Turn off automatic exports
export {};
