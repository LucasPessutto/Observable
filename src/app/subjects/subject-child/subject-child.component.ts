import { Component, Input, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DataModel } from 'src/app/datamodel.model';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.css']
})
export class SubjectChildComponent implements OnInit {

  @Input() subject!: Subject<DataModel>
  @Input() name: string = ""

  public log: string[] = []
  public connected: boolean = false
  private subscription!: Subscription

  constructor() { }

  ngOnInit(): void {
  }

  logData(data: DataModel) {
    this.log.push("timeStamp: " + data.timeStamp + "Data: " + data.data)
  }

  connect() {
    this.log.push("connected!")
    this.connected = true
    this.subscription = this.subject.subscribe(
      (data: DataModel) => {
        this.logData(data)
      }, (error) => {this.connected = false},
      () => {this.connected = false, this.log.push("Finished!")}
    )
  }

  disconnect() {

  }

}
