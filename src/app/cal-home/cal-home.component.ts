import { Component, OnInit, ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, Inject } from '@angular/core';
  import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
  } from 'date-fns';
  import { Subject } from 'rxjs';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView
  } from 'angular-calendar';

  import { colors } from './colors';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

  interface dayEvent{
    id: number;
    title: string;
  }
@Component({
  selector: 'app-cal-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cal-home.component.html',
  styleUrls: ['./cal-home.component.css']
})
export class CalHomeComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  activeDayIsOpen: boolean = true;
  viewDate: Date = new Date();
  eventData: string;
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  constructor(
    public dialog: MatDialog,
    private modal: NgbModal
  ) { }

  ngOnInit() {
  }
  events: CalendarEvent[] = [
    {
      title: this.eventData,
      color: colors.yellow,
      start: new Date()
    }
  ];
  handleEvent(action: string, event: CalendarEvent): void {
    this.eventModel;
  }
  eventModel(){
    const dialogRef = this.dialog.open(DialogOverview, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.eventData = result
      this.events = [
        ...this.events,
        {
          title: this.eventData,
          start: startOfDay(new Date()),
          end: endOfDay(new Date()),
          color: colors.red,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          }
        }
      ];
      console.log(result)
    });
  }
  dayClicked({date,events}: {
    date: Date;
    events: Array<CalendarEvent<{ event: dayEvent }>>;
  }): void {
    if (isSameMonth(date, this.viewDate)) {
    this.eventModel();
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }
  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
  }
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: this.eventData,
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

}
@Component({
  selector: 'dialog-overview',
  templateUrl: 'dialog-overview.html',
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
